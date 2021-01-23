import { Card } from '../../model/card.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { FilterChange } from '../../model/filter-change.model';
import { CardRarity } from '../../model/card-rarity.enum';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from '../../auth/authentication.service';
import { QuantityFilterEnum } from '../../model/quantity-filter.enum';
import { CardUrls } from 'src/app/model/card-urls.model';

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

    cardSetsArray: string[] = [
        'KHM',
        'ZNR',
        'M21',
        'IKO',
        'THB',
        'ELD',
        'M20',
        'WAR',
        'RNA',
        'GRN',
        'M19',
        'DOM',
        'RIX',
        'XLN',
        'HOU',
        'AKH',
        'AER',
        'KLD',
        'EMN',
        'SOI',
        'OGW',
        'BFZ',
    ];

    maxCardNumber: any = {
        KHM: 405,
        ZNR: 391,
        M21: 397,
        IKO: 387,
        AER: 194,
        AKH: 287,
        BFZ: 274,
        DOM: 280,
        ELD: 392,
        EMN: 205,
        GRN: 273,
        HOU: 209,
        KLD: 274,
        M19: 314,
        M20: 344,
        OGW: 184,
        RIX: 205,
        RNA: 273,
        SOI: 297,
        THB: 357,
        WAR: 275,
        XLN: 289,
    };

    constructor(private http: HttpClient, private authService: AuthenticationService) {
        this.cardImgUrlBase = environment.cardImgUrlBase;
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
            isInFilterArray
                ? this.filterArray.splice(this.filterArray.indexOf(filterChangeName), 1)
                : this.filterArray.push(filterChangeName);
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
        const cardUrls = new CardUrls();

        const { cardExpansion, cardNumber } = card;
        cardUrls.mainCardWebpUrl = `${this.cardImgUrlBase}${cardExpansion}/webp/${cardExpansion}_${cardNumber}.webp`;
        cardUrls.mainCardPngUrl = `${this.cardImgUrlBase}${cardExpansion}/png/${cardExpansion}_${cardNumber}.png`;

        if (isFlip) {
            cardUrls.flipCardWebpUrl = `${this.cardImgUrlBase}${cardExpansion}/webp/${cardExpansion}_${cardNumber}_F.webp`;
            cardUrls.flipCardPngUrl = `${this.cardImgUrlBase}${cardExpansion}/png/${cardExpansion}_${cardNumber}_F.png`;
        }

        return cardUrls;
    }
}
