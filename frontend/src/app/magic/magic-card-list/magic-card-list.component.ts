import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MagicCardsListService } from './magic-cards-list.service';
import { Card } from '../../model/card.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { QuantityFilterEnum } from '../../model/quantity-filter.enum';
import { AuthenticationService } from '../../auth/authentication.service';

@Component({
    selector: 'app-magic-card-list',
    templateUrl: './magic-card-list.component.html',
    styleUrls: ['./magic-card-list.component.css'],
})
export class MagicCardListComponent implements OnInit, OnDestroy {
    p = 1;
    cardsArray: Card[];
    filteredCardsArray: Card[];
    expansion: string;
    currentPage = 1;
    itemsPerPage = 35;
    @ViewChild('page', { static: true })
    amountInputRef: any;
    currentUserSub: Subscription;
    routerChangeSub: Subscription;
    quantityFilterSub: Subscription;
    rarityFilterSub: Subscription;

    constructor(
        private magicCardsListService: MagicCardsListService,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
    ) {}

    ngOnInit() {
        this.expansion = this.route.snapshot.params.expansion;
        this.currentUserSub = this.authenticationService.currentUserSubject.subscribe((user) => {
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

        this.rarityFilterSub = this.magicCardsListService.filterChange.subscribe((rarityFilter) => {
            this.filterCards();
        });

        this.quantityFilterSub = this.magicCardsListService.quantityFilterSub.subscribe((x) => {
            this.filterCards();
        });

        this.route.queryParams.subscribe((data) => {
            if (data.page === undefined) {
                // this.currentPage = 1;
            } else if (this.currentPage !== +data.page) {
                this.amountInputRef.pageChange.emit(data.page);
            }
        });
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

    onPageChange(event: number) {
        this.currentPage = event;
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { page: this.currentPage },
            queryParamsHandling: 'merge', // remove to replace all query params by provided
        });
    }

    private filterCards() {
        if (!this.cardsArray) {
            return;
        }

        this.filteredCardsArray = this.cardsArray.filter((card) => {
            return this.magicCardsListService.getfilterArray().includes(card.rarity);
        });

        switch (this.magicCardsListService.quantityFilterSub.value) {
            case QuantityFilterEnum.HAVE:
                this.filteredCardsArray = this.filteredCardsArray.filter(
                    (card) => card.cardAmount > 0,
                );
                break;
            case QuantityFilterEnum.NOTHAVE:
                this.filteredCardsArray = this.filteredCardsArray.filter(
                    (card) => card.cardAmount === 0,
                );
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
}
