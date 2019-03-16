import { Card } from '../model/card.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainUrlService } from '../shared/main-url.services';
import { Observable } from 'rxjs';

@Injectable()
export class MagicCardsListService {

    constructor(private http: HttpClient, private urlService: MainUrlService) { }

    getCardsForExpansion (expansion: string): Observable<Card[]> {
        return this.http.get<Card[]>( this.urlService.mainUrl + '/api/card/allsetcard', {params: {'search': expansion}});
    }

}
