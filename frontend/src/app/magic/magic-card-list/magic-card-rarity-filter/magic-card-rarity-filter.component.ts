import { Component, OnInit } from '@angular/core';
import { MagicCardsListService } from '../magic-cards-list.service';
import { QuantityFilterEnum } from '../../../model/quantity-filter.enum';
import { CardRarity } from '../../../model/card-rarity.enum';
import { FilterChange } from '../../../model/filter-change.model';
import { AuthenticationService } from '../../../auth/authentication.service';

@Component({
    selector: 'app-magic-card-rarity-filter',
    templateUrl: './magic-card-rarity-filter.component.html',
    styleUrls: ['./magic-card-rarity-filter.component.css'],
})
export class MagicCardRarityFilterComponent implements OnInit {
    isCommon = true;
    isUncommon = true;
    isRare = true;
    isMythic = true;
    quantityFilter: QuantityFilterEnum;
    quantityEnum = QuantityFilterEnum;
    isAuth = false;

    constructor(
        private magicCardsListService: MagicCardsListService,
        private authenticationService: AuthenticationService,
    ) {}

    ngOnInit() {
        this.quantityFilter = this.magicCardsListService.quantityFilterSub.value;
        this.initFilterValues(this.magicCardsListService.getfilterArray());

        this.magicCardsListService.filterChange.subscribe(change => {
            this.setRarityFilter(change);
        });

        this.authenticationService.currentUserSubject.subscribe(newStatus => {
            this.isAuth = newStatus !== null;
            if (!this.isAuth && QuantityFilterEnum.ALL !== this.quantityFilter) {
                this.quantityFilter = QuantityFilterEnum.ALL;
                this.magicCardsListService.changeQuantityFilter(QuantityFilterEnum.ALL);
            }
        });
    }

    onChangeRarityFilter(filterChangeName: string, filterChangeTo: boolean) {
        this.magicCardsListService.changeRarityFilter(filterChangeName, filterChangeTo);
    }

    initFilterValues(filterArray: string[]) {
        let differenceArray: string[] = [
            CardRarity.Common,
            CardRarity.Uncommon,
            CardRarity.Rare,
            CardRarity.Mythic,
        ];

        filterArray.forEach(rarity => {
            this.setRarityFilter(new FilterChange(rarity, true));
        });

        differenceArray = differenceArray.filter(rarity => filterArray.indexOf(rarity) < 0);
        differenceArray.forEach(rarity => {
            this.setRarityFilter(new FilterChange(rarity, false));
        });
    }

    setRarityFilter(filterChange: FilterChange) {
        switch (filterChange.changeName) {
            case CardRarity.Common:
                this.isCommon = filterChange.changedTo;
                break;
            case CardRarity.Uncommon:
                this.isUncommon = filterChange.changedTo;
                break;
            case CardRarity.Rare:
                this.isRare = filterChange.changedTo;
                break;
            case CardRarity.Mythic:
                this.isMythic = filterChange.changedTo;
                break;
            default:
                break;
        }
    }

    onChangeRadio(newQuantity: QuantityFilterEnum) {
        this.quantityFilter = newQuantity;
        this.magicCardsListService.changeQuantityFilter(this.quantityFilter);
    }
}
