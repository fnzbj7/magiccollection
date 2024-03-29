import { Card, CardColor, CardType } from '../../model/card.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { FilterChange } from '../../model/filter-change.model';
import { CardRarity } from '../../model/card-rarity.enum';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../auth/authentication.service';
import { QuantityFilterEnum } from '../../model/quantity-filter.enum';
import { CardUrls } from '../../model/card-urls.model';
import { MagicSet } from './model/magic-set.model';
import { MagicSetYearBlock } from './model/magic-set-year-block.model';

@Injectable({ providedIn: 'root' })
export class MagicCardsListService {
    // RARITY
    rarityFilterArr: string[] = [
        CardRarity.Common,
        CardRarity.Uncommon,
        CardRarity.Rare,
        CardRarity.Mythic,
    ];
    rarityFilterChange = new Subject<FilterChange>();

    // COLOR
    colorFilterArr: string[] = [
        CardColor.WHITE,
        CardColor.BLUE,
        CardColor.BLACK,
        CardColor.RED,
        CardColor.GREEN,
        CardColor.COLORLESS,
    ];
    colorFilterChange = new Subject<FilterChange>();

    // TYPE
    typeFilterArr: string[] = [
        CardType.ARTIFACT,
        CardType.CREATURE,
        CardType.ENCHANTMENT,
        CardType.INSTANT,
        CardType.LAND,
        CardType.PLANESWALKER,
        CardType.SORCERY,
    ];
    typeFilterChange = new Subject<FilterChange>();

    quantityFilterSub = new BehaviorSubject<QuantityFilterEnum>(QuantityFilterEnum.ALL);
    cardImgUrlBase: string;

    magicSetArray: MagicSet[] = [
        new MagicSet('DMU', 434, 2022),
        new MagicSet('SNC', 467, 2022),
        new MagicSet('NEO', 512, 2022),
        new MagicSet('VOW', 407, 2021),
        new MagicSet('MID', 391, 2021),
        new MagicSet('AFR', 403, 2021),
        new MagicSet('STX', 382, 2021),
        new MagicSet('STA', 126, 2021),
        new MagicSet('KHM', 405, 2021),
        new MagicSet('ZNR', 391, 2020),
        new MagicSet('M21', 397, 2020),
        new MagicSet('IKO', 387, 2020),
        new MagicSet('THB', 357, 2020),
        new MagicSet('ELD', 392, 2019),
        new MagicSet('M20', 344, 2019),
        new MagicSet('WAR', 275, 2019),
        new MagicSet('RNA', 273, 2019),
        new MagicSet('GRN', 273, 2018),
        new MagicSet('M19', 314, 2018),
        new MagicSet('DOM', 280, 2018),
        new MagicSet('RIX', 205, 2018),
        new MagicSet('XLN', 289, 2017),
        new MagicSet('HOU', 209, 2017),
        new MagicSet('AKH', 287, 2017),
        new MagicSet('AER', 194, 2017),
        new MagicSet('KLD', 274, 2016),
        new MagicSet('EMN', 205, 2016),
        new MagicSet('SOI', 297, 2016),
        new MagicSet('OGW', 184, 2016),
        new MagicSet('BFZ', 274, 2015),
    ];

    cardSetsArray: string[] = this.magicSetArray.map(magicSet => magicSet.name);

    cardVariantTypes = ['normal', 'etched', 'prerelease', 'stamped', 'list'];

    cardLanguages: string[] = [
        'En',
        'Jp',
        // TODO kiegészíteni a listát
    ];

    yearBlocks: MagicSetYearBlock[] = this.getMagicSetYearBlocks(this.magicSetArray);

    constructor(private http: HttpClient, private authService: AuthenticationService) {
        this.cardImgUrlBase = environment.cardImgUrlBase;
    }

    getMagicSetMaxNumber(magicSetName: string): number {
        const foundedMagicSet = this.magicSetArray.find(magicSet => magicSet.name === magicSetName);
        if (foundedMagicSet === undefined) {
            throw new Error('Magic Set not found!');
        }

        return foundedMagicSet.maxNum;
    }

    getCardsForExpansion(userId: string | number | undefined, cardSet: string): Observable<Card[]> {
        let url: string;
        if (userId) {
            url = `/api/card/user/${userId}/${cardSet}`;
        } else {
            url = `/api/card/cardset/${cardSet}`;
        }
        return this.http.get<Card[]>(url);
    }

    // RARITY
    getRarityFilterArray(): string[] {
        return [...this.rarityFilterArr];
    }

    // COLOR
    getColorFilterArray(): string[] {
        return [...this.colorFilterArr];
    }

    // TYPE
    getTypeFilterArray(): string[] {
        return [...this.typeFilterArr];
    }

    changeRarityFilter(filterChangeName: string, filterChangeTo: boolean) {
        const isInFilterArray = this.rarityFilterArr.includes(filterChangeName);
        if (isInFilterArray !== filterChangeTo) {
            if (isInFilterArray) {
                this.rarityFilterArr.splice(this.rarityFilterArr.indexOf(filterChangeName), 1);
            } else {
                this.rarityFilterArr.push(filterChangeName);
            }
        }
        this.rarityFilterChange.next({
            changedTo: filterChangeTo,
            changeName: filterChangeName,
        });
    }

    changeColorFilter(filterChangeName: string, filterChangeTo: boolean) {
        const isInFilterArray = this.colorFilterArr.includes(filterChangeName);
        if (isInFilterArray !== filterChangeTo) {
            if (isInFilterArray) {
                this.colorFilterArr.splice(this.colorFilterArr.indexOf(filterChangeName), 1);
            } else {
                this.colorFilterArr.push(filterChangeName);
            }
        }
        this.colorFilterChange.next({
            changedTo: filterChangeTo,
            changeName: filterChangeName,
        });
    }

    changeTypeFilter(filterChangeName: string, filterChangeTo: boolean) {
        const isInFilterArray = this.typeFilterArr.includes(filterChangeName);
        if (isInFilterArray !== filterChangeTo) {
            if (isInFilterArray) {
                this.typeFilterArr.splice(this.typeFilterArr.indexOf(filterChangeName), 1);
            } else {
                this.typeFilterArr.push(filterChangeName);
            }
        }
        this.typeFilterChange.next({
            changedTo: filterChangeTo,
            changeName: filterChangeName,
        });
    }

    changeQuantityFilter(qualityFilter: QuantityFilterEnum) {
        this.quantityFilterSub.next(qualityFilter);
    }

    creatingCardUrls(card: Card, isFlip: boolean = false): CardUrls {
        const { cardExpansion, cardNumber } = card;
        const cardUrls = new CardUrls(
            `${this.cardImgUrlBase}${cardExpansion}/webp/${cardExpansion}_${cardNumber}.webp`,
            `${this.cardImgUrlBase}${cardExpansion}/png/${cardExpansion}_${cardNumber}.png`,
        );

        if (isFlip) {
            cardUrls.flipCardWebpUrl = `${this.cardImgUrlBase}${cardExpansion}/webp/${cardExpansion}_${cardNumber}_F.webp`;
            cardUrls.flipCardPngUrl = `${this.cardImgUrlBase}${cardExpansion}/png/${cardExpansion}_${cardNumber}_F.png`;
        }

        return cardUrls;
    }

    getAllVersionForCard(cardSet: string, cardNum: number) {
        return this.http.get<{ id: number; possibleCardVariation: PossibleCardVariationDto[] }>(
            '/api/card/all-version',
            { params: { cardNum, cardSet } },
        );
    }

    addPosibleCardVariationDto(addPosibleCardVariationDto: AddPosibleCardVariationDto) {
        return this.http.post<void>(
            '/api/card/add-posible-card-variation',
            addPosibleCardVariationDto,
        );
    }

    private getMagicSetYearBlocks(magicSetArray: MagicSet[]): MagicSetYearBlock[] {
        return magicSetArray.reduce(this.callbackMagicSetYearBlock, [] as MagicSetYearBlock[]);
    }

    private callbackMagicSetYearBlock(
        previouseMagicSetYearBlock: MagicSetYearBlock[],
        magicSet: MagicSet,
    ): MagicSetYearBlock[] {
        const foundMagicSetYearBlock = previouseMagicSetYearBlock.find(
            magicSetYearBlock => magicSetYearBlock.year === magicSet.releaseYear,
        );
        if (foundMagicSetYearBlock) {
            foundMagicSetYearBlock.magicSetArr.push(magicSet.name);
        } else {
            previouseMagicSetYearBlock.push(
                new MagicSetYearBlock(magicSet.releaseYear, magicSet.name),
            );
        }
        return previouseMagicSetYearBlock;
    }
}

export interface PossibleCardVariationDto {
    id: number;
    cardVariantType: CardVariantType;
    hasNormal: boolean;
    hasFoil: boolean;
}

export enum CardVariantType {
    NORMAL = 'normal',
    ETCHED = 'etched',
    PRERELEASE = 'prerelease',
    STAMPED = 'stamped',
    LIST = 'list',
}

export interface AddPosibleCardVariationDto {
    cardVariantType: CardVariantType;
    cardId: number;
    hasNormal: boolean;
    hasFoil: boolean;
}
