import { Card } from '../../model/card.model';
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

@Injectable({ providedIn: 'root' })
export class MagicCardsListService {
    filterArray: string[] = [
        CardRarity.Common,
        CardRarity.Uncommon,
        CardRarity.Rare,
        CardRarity.Mythic,
    ];
    filterChange = new Subject<FilterChange>();
    quantityFilterSub = new BehaviorSubject<QuantityFilterEnum>(QuantityFilterEnum.ALL);
    cardImgUrlBase: string;

    magicSetArray: MagicSet[] = [
        new MagicSet('KHM', 405),
        new MagicSet('ZNR', 391),
        new MagicSet('M21', 397),
        new MagicSet('IKO', 387),
        new MagicSet('AER', 194),
        new MagicSet('AKH', 287),
        new MagicSet('BFZ', 274),
        new MagicSet('DOM', 280),
        new MagicSet('ELD', 392),
        new MagicSet('EMN', 205),
        new MagicSet('GRN', 273),
        new MagicSet('HOU', 209),
        new MagicSet('KLD', 274),
        new MagicSet('M19', 314),
        new MagicSet('M20', 344),
        new MagicSet('OGW', 184),
        new MagicSet('RIX', 205),
        new MagicSet('RNA', 273),
        new MagicSet('SOI', 297),
        new MagicSet('THB', 357),
        new MagicSet('WAR', 275),
        new MagicSet('XLN', 289),
    ];

    cardSetsArray: string[] = this.magicSetArray.map(magicSet => magicSet.name);

    constructor(private http: HttpClient, private authService: AuthenticationService) {
        this.cardImgUrlBase = environment.cardImgUrlBase;
    }

    getMagicSetMaxNumber(magicSetName: string): number {
        const foundedMagicSet = this.magicSetArray.find(magicSet => magicSet.name === magicSetName);
        if (foundedMagicSet === undefined) {
            throw Error();
        }

        return foundedMagicSet.maxNum;
    }

    getCardsForExpansion(cardSet: string): Observable<Card[]> {
        let url: string;
        if (this.authService.isLoggedIn()) {
            url = `/api/card/cardsetuser/${cardSet}`;
        } else {
            url = `/api/card/cardset/${cardSet}`;
        }
        return this.http.get<Card[]>(url);
    }

    getfilterArray(): string[] {
        return [...this.filterArray];
    }

    changeRarityFilter(filterChangeName: string, filterChangeTo: boolean) {
        const isInFilterArray = this.filterArray.includes(filterChangeName);
        if (isInFilterArray !== filterChangeTo) {
            if (isInFilterArray) {
                this.filterArray.splice(this.filterArray.indexOf(filterChangeName), 1);
            } else {
                this.filterArray.push(filterChangeName);
            }
        }
        this.filterChange.next({
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
}
