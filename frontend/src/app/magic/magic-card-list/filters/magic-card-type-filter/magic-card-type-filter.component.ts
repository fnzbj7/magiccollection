import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardType } from 'src/app/model/card.model';
import { FilterChange } from 'src/app/model/filter-change.model';
import { MagicCardsListService } from '../../magic-cards-list.service';

@Component({
    selector: 'app-magic-card-type-filter',
    templateUrl: './magic-card-type-filter.component.html',
    styleUrls: [
        './magic-card-type-filter.component.scss',
        '../../magic-card-rarity-filter/magic-card-rarity-filter.component.scss',
    ],
})
export class MagicCardTypeFilterComponent implements OnInit, OnDestroy {
    isCreature = true;
    isSorcery = true;
    isInstant = true;
    isEnchantment = true;
    isArtifact = true;
    isPlaneswalker = true;
    isLand = true;
    typeFilterChangeSub!: Subscription;

    constructor(public magicCardsListService: MagicCardsListService) {}

    ngOnInit(): void {
        this.initTypeFilterValues(this.magicCardsListService.getTypeFilterArray());

        this.typeFilterChangeSub = this.magicCardsListService.typeFilterChange.subscribe(change => {
            this.setTypeFilter(change);
        });
    }

    onChangeTypeFilter(filterChangeName: string, filterChangeTo: boolean) {
        this.magicCardsListService.changeTypeFilter(filterChangeName, filterChangeTo);
    }

    ngOnDestroy(): void {
        if (this.typeFilterChangeSub) {
            this.typeFilterChangeSub.unsubscribe();
        }
    }

    private initTypeFilterValues(filterArray: string[]) {
        let differenceArray: string[] = [
            CardType.CREATURE,
            CardType.ENCHANTMENT,
            CardType.PLANESWALKER,
            CardType.INSTANT,
            CardType.SORCERY,
            CardType.ARTIFACT,
            CardType.LAND,
        ];

        filterArray.forEach(type => {
            this.setTypeFilter(new FilterChange(type, true));
        });

        differenceArray = differenceArray.filter(rarity => filterArray.indexOf(rarity) < 0);
        differenceArray.forEach(rarity => {
            this.setTypeFilter(new FilterChange(rarity, false));
        });
    }

    private setTypeFilter(filterChange: FilterChange) {
        switch (filterChange.changeName) {
            case CardType.ARTIFACT:
                this.isArtifact = filterChange.changedTo;
                break;
            case CardType.CREATURE:
                this.isCreature = filterChange.changedTo;
                break;
            case CardType.ENCHANTMENT:
                this.isEnchantment = filterChange.changedTo;
                break;
            case CardType.INSTANT:
                this.isInstant = filterChange.changedTo;
                break;
            case CardType.LAND:
                this.isLand = filterChange.changedTo;
                break;
            case CardType.PLANESWALKER:
                this.isPlaneswalker = filterChange.changedTo;
                break;
            case CardType.SORCERY:
                this.isSorcery = filterChange.changedTo;
                break;
            default:
                break;
        }
    }
}
