import { Component, OnInit } from '@angular/core';
import { MagicCardsListService } from '../magic-cards-list.service';
import { QuantityFilterEnum } from '../../../model/quantity-filter.enum';
import { CardRarity } from '../../../model/card-rarity.enum';
import { FilterChange } from '../../../model/filter-change.model';
import { AuthenticationService } from '../../../auth/authentication.service';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { CardColor } from 'src/app/model/card.model';

@Component({
    selector: 'app-magic-card-rarity-filter',
    templateUrl: './magic-card-rarity-filter.component.html',
    styleUrls: ['./magic-card-rarity-filter.component.css'],
})
export class MagicCardRarityFilterComponent implements OnInit {
    // Rarity
    isCommon = true;
    isUncommon = true;
    isRare = true;
    isMythic = true;
    quantityFilter!: QuantityFilterEnum;
    quantityEnum = QuantityFilterEnum;
    isAuth = false;
    // Color
    isWhite = true;
    isBlue = true;
    isBlack = true;
    isRed = true;
    isGreen = true;
    isColorless = true;

    // Font-Aesome
    faInfoCircle = faInfoCircle;

    constructor(
        private magicCardsListService: MagicCardsListService,
        private authenticationService: AuthenticationService,
    ) {}

    ngOnInit() {
        this.quantityFilter = this.magicCardsListService.quantityFilterSub.value;
        this.initFilterValues(this.magicCardsListService.getRarityFilterArray());
        this.initColorFilterValues(this.magicCardsListService.getColorFilterArray());

        this.magicCardsListService.rarityFilterChange.subscribe(change => {
            this.setRarityFilter(change);
        });

        this.magicCardsListService.colorFilterChange.subscribe(change => {
            this.setColorFilter(change);
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

    onChangeColorFilter(filterChangeName: string, filterChangeTo: boolean) {
        this.magicCardsListService.changeColorFilter(filterChangeName, filterChangeTo);
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

    initColorFilterValues(filterArray: string[]) {
        let differenceArray: string[] = [
            CardColor.WHITE,
            CardColor.BLUE,
            CardColor.BLACK,
            CardColor.RED,
            CardColor.GREEN,
            CardColor.COLORLESS,
        ];

        filterArray.forEach(rarity => {
            this.setColorFilter(new FilterChange(rarity, true));
        });

        differenceArray = differenceArray.filter(rarity => filterArray.indexOf(rarity) < 0);
        differenceArray.forEach(rarity => {
            this.setColorFilter(new FilterChange(rarity, false));
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

    setColorFilter(filterChange: FilterChange) {
        switch (filterChange.changeName) {
            case CardColor.WHITE:
                this.isWhite = filterChange.changedTo;
                break;
            case CardColor.BLUE:
                this.isBlue = filterChange.changedTo;
                break;
            case CardColor.BLACK:
                this.isBlack = filterChange.changedTo;
                break;
            case CardColor.RED:
                this.isRed = filterChange.changedTo;
                break;
            case CardColor.GREEN:
                this.isGreen = filterChange.changedTo;
                break;
            case CardColor.COLORLESS:
                this.isColorless = filterChange.changedTo;
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
