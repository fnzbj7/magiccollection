import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MagicCardsListService } from './magic-cards-list.service';
import { Card } from '../../model/card.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { QuantityFilterEnum } from '../../model/quantity-filter.enum';
import { AuthenticationService } from '../../auth/authentication.service';

@Component({
    selector: 'app-magic-card-list',
    templateUrl: './magic-card-list.component.html',
    styleUrls: ['./magic-card-list.component.scss'],
})
export class MagicCardListComponent implements OnInit, OnDestroy {
    @ViewChild('page', { static: true })
    amountInputRef!: unknown;

    p = 1;
    cardsArray!: Card[];
    filteredCardsArray!: Card[];
    expansion!: string;
    itemsPerPage = 35;
    currentUserSub!: Subscription;
    routerChangeSub!: Subscription;
    quantityFilterSub!: Subscription;
    rarityFilterSub!: Subscription;
    lastPageNum!: number;
    Arr = Array;

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
    ) {}

    ngOnInit() {
        this.expansion = this.route.snapshot.params.expansion;
        this.currentUserSub = this.authenticationService.currentUserSubject.subscribe(user => {
            if (this.expansion) {
                this.getCardsFromExpansion(this.expansion);
            }
        });

        this.routerChangeSub = this.route.params.subscribe((params: Params) => {
            this.expansion = params.expansion;
            if (this.expansion) {
                this.getCardsFromExpansion(this.expansion);
            }
        });

        this.rarityFilterSub = this.magicCardsListService.filterChange.subscribe(rarityFilter => {
            this.filterCards();
        });

        this.quantityFilterSub = this.magicCardsListService.quantityFilterSub.subscribe(x => {
            this.filterCards();
        });
    }

    currentPageNeedChangeDetection(): boolean {
        let needChange = false;
        if (this._currentPage > this.lastPageNum || this._currentPage === 0) {
            needChange = true;
        }
        return needChange;
    }

    getCardsFromExpansion(expansionArg: string) {
        this.magicCardsListService.getCardsForExpansion(expansionArg).subscribe((cards: Card[]) => {
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

    trackCard(index: number, card: Card) {
        return card.cardExpansion + card.cardNumber;
    }

    ngOnDestroy() {
        if (this.currentUserSub) {
            this.currentUserSub.unsubscribe();
        }
        if (this.routerChangeSub) {
            this.routerChangeSub.unsubscribe();
        }
        if (this.rarityFilterSub) {
            this.rarityFilterSub.unsubscribe();
        }
        if (this.quantityFilterSub) {
            this.quantityFilterSub.unsubscribe();
        }
    }

    private filterCards() {
        if (!this.cardsArray) {
            return;
        }

        this.filteredCardsArray = this.cardsArray.filter(card =>
            this.magicCardsListService.getfilterArray().includes(card.rarity),
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

        this.lastPageNum = Math.ceil(this.filteredCardsArray.length / this.itemsPerPage);
    }
}
