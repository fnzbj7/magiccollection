import { Card } from '../model/card.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { FilterChange } from '../model/filter-change.model';
import { CardRarity } from '../model/card-rarity.enum';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable()
export class MagicCardsListService {
    private filterArray: string[] = [
        CardRarity.Common,
        CardRarity.Uncommon,
        CardRarity.Rare,
        CardRarity.Mythic,
    ];
    private filterChange = new Subject<FilterChange>();
    private filterChangeSub = this.filterChange.asObservable();

    cardSetsArray: string[] = [
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

    maxCardNumber = {
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

    constructor(
        private http: HttpClient,
        private authService: AuthenticationService,
    ) {}

    getCardsForExpansion(expansion: string): Observable<Card[]> {
        let url: string;
        if (this.authService.isLoggedIn()) {
            url = environment.mainUrl + `/card/cardsetuser/${expansion}`;
        } else {
            url = environment.mainUrl + `/card/cardset/${expansion}`;
        }
        return this.http.get<Card[]>(url);
    }

    getFilterChangeSub(): Observable<FilterChange> {
        return this.filterChangeSub;
    }

    getfilterArray(): string[] {
        return [...this.filterArray];
    }

    changeFilter(filterChangeName: string, filterChangeTo: boolean) {
        const isInFilterArray = this.filterArray.includes(filterChangeName);
        if (isInFilterArray !== filterChangeTo) {
            isInFilterArray
                ? this.filterArray.splice(
                      this.filterArray.indexOf(filterChangeName),
                      1,
                  )
                : this.filterArray.push(filterChangeName);
        }
        this.filterChange.next({
            changedTo: filterChangeTo,
            changeName: filterChangeName,
        });
    }
}
