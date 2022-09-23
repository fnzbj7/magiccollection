import {
    Component,
    OnInit,
    ViewChild,
    OnDestroy,
    ChangeDetectorRef,
    AfterViewInit,
    TemplateRef,
    ElementRef,
} from '@angular/core';
import { MagicCardsListService } from './magic-cards-list.service';
import { Card } from '../../model/card.model';
import { ActivatedRoute, Router } from '@angular/router';

import { combineLatestWith, Subscription } from 'rxjs';
import { QuantityFilterEnum } from '../../model/quantity-filter.enum';
import { AuthenticationService } from '../../auth/authentication.service';
import { MagicCardModalService } from 'src/app/shared/magic-card-modal.service';
import { SwipeModel } from 'src/app/shared/swipe/swipe.model';
import { User } from 'src/app/model/user.model';

@Component({
    selector: 'app-magic-card-list',
    templateUrl: './magic-card-list.component.html',
    styleUrls: ['./magic-card-list.component.scss'],
})
export class MagicCardListComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('page', { static: true })
    amountInputRef!: unknown;

    @ViewChild('fullThings') fullThing!: ElementRef<HTMLDivElement>;

    p = 1;
    cardsArray!: Card[];
    filteredCardsArray!: Card[];
    expansion!: string;
    itemsPerPage = 35;
    routerChangeSub!: Subscription;
    quantityFilterSub!: Subscription;
    rarityFilterSub!: Subscription;
    colorFilterSub!: Subscription;
    lastPageNum!: number;
    userId: string | undefined;
    user: User | null | undefined = undefined;
    Arr = Array;
    swipeModel!: SwipeModel;

    _currentPage = 1;

    get currentPage() {
        return this._currentPage;
    }

    set currentPage(curr: number) {
        const needChange = this.currentPageNeedChangeDetection();

        this._currentPage = curr;

        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { page: this.currentPage > 0 ? this.currentPage : null },
            queryParamsHandling: 'merge', // remove to replace all query params by provided
        });

        if (needChange) {
            this.ref.detectChanges();
        }
    }

    constructor(
        private magicCardsListService: MagicCardsListService,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private ref: ChangeDetectorRef,
        private magicCardModalService: MagicCardModalService,
    ) {}

    ngOnInit() {
        this.userId = this.route.snapshot.params.userId;
        if (!this.userId) {
            const tmpUserId = this.authenticationService.currentUserValue?.id;
            if (tmpUserId) {
                this.userId = '' + tmpUserId;
            }
        }

        this.routerChangeSub = this.route.params
            .pipe(combineLatestWith(this.authenticationService.currentUserSubject))
            .subscribe(res => {
                if (
                    this.user !== undefined &&
                    this.expansion === res[0].expansion &&
                    ((this.user == null && res[1] == null) || this.user?.id === res[1]?.id)
                ) {
                    this.user = res[1];
                    console.log('Cards skipped refreshing');
                    return;
                }

                this.user = res[1];
                this.expansion = res[0].expansion;
                if (this.expansion) {
                    this.getCardsFromExpansion(this.userId, this.expansion);
                }
            });

        this.rarityFilterSub = this.magicCardsListService.rarityFilterChange.subscribe(
            _rarityFilter => {
                this.filterCards();
            },
        );

        this.quantityFilterSub = this.magicCardsListService.quantityFilterSub.subscribe(_x => {
            this.filterCards();
        });

        this.colorFilterSub = this.magicCardsListService.colorFilterChange.subscribe(
            _colorFilter => {
                this.filterCards();
            },
        );
    }

    ngAfterViewInit(): void {
        if (this.fullThing.nativeElement) {
            this.swipeModel = new SwipeModel(this.fullThing.nativeElement, {
                callbackLeft: this.onSwipeLeft.bind(this),
                callbackRight: this.onSwipeRight.bind(this),
            });
        } else {
            console.warn('nem volt található a #fullThings');
        }
    }

    currentPageNeedChangeDetection(): boolean {
        let needChange = false;
        if (this._currentPage > this.lastPageNum || this._currentPage === 0) {
            needChange = true;
        }
        return needChange;
    }

    getCardsFromExpansion(userId: string | undefined, expansionArg: string) {
        this.magicCardsListService
            .getCardsForExpansion(userId, expansionArg)
            .subscribe((cards: Card[]) => {
                this.cardsArray = cards;
                this.filterCards();
                if (this.route.snapshot.queryParams.page) {
                    this.currentPage = +this.route.snapshot.queryParams.page;
                } else {
                    this.currentPage = 1;
                }
            });
    }

    onSwipeRight() {
        if (this.currentPage - 1 >= 1) {
            this.currentPage--;
        }
    }

    onSwipeLeft() {
        if (this.currentPage + 1 <= this.lastPageNum) {
            this.currentPage++;
        }
    }

    trackCard(_index: number, card: Card) {
        return card.cardExpansion + card.cardNumber;
    }

    ngOnDestroy() {
        if (this.routerChangeSub) {
            this.routerChangeSub.unsubscribe();
        }
        if (this.rarityFilterSub) {
            this.rarityFilterSub.unsubscribe();
        }
        if (this.quantityFilterSub) {
            this.quantityFilterSub.unsubscribe();
        }
        this.magicCardModalService.magicCardList = undefined;
        this.swipeModel.removeEvent();
    }

    private filterCards() {
        if (!this.cardsArray) {
            return;
        }

        this.filteredCardsArray = this.cardsArray.filter(card =>
            this.magicCardsListService.getRarityFilterArray().includes(card.rarity),
        );

        this.filteredCardsArray = this.cardsArray.filter(card =>
            // TODO
            this.magicCardsListService.getColorFilterArray().includes(card.colors),
        );

        switch (this.magicCardsListService.quantityFilterSub.value) {
            case QuantityFilterEnum.ALL:
                break;
            case QuantityFilterEnum.HAVE:
                this.filteredCardsArray = this.filteredCardsArray.filter(
                    card => card.cardAmount + card.cardAmountFoil > 0,
                );
                break;
            case QuantityFilterEnum.NOTHAVE:
                this.filteredCardsArray = this.filteredCardsArray.filter(
                    card => card.cardAmount + card.cardAmountFoil === 0,
                );
                break;
            default:
                throw new Error('QuantityFilterEnum has a wrong value');
        }

        this.magicCardModalService.magicCardList = this.filteredCardsArray;

        this.lastPageNum = Math.ceil(this.filteredCardsArray.length / this.itemsPerPage);
    }
}
