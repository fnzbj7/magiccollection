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
    CardRarity.Mythic
  ];
  private filterChange = new Subject<FilterChange>();
  private filterChangeSub = this.filterChange.asObservable();

  constructor(private http: HttpClient,
    private authService: AuthenticationService) {}

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
        ? this.filterArray.splice(this.filterArray.indexOf(filterChangeName), 1)
        : this.filterArray.push(filterChangeName);
    }
    this.filterChange.next({
      changedTo: filterChangeTo,
      changeName: filterChangeName
    });
  }
}
