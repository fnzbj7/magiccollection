import { Card } from "../model/card.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { MainUrlService } from "../shared/main-url.services";

@Injectable()
export class MagicCardsListService {

    constructor(private http: HttpClient, private urlService: MainUrlService) { }

    getCardsForExpansion (expansion: string): Observable<Card[]> {
        return this.http.get<Card[]>( this.urlService.mainUrl + '/allcardsfromset', {params: {'search': expansion}});
    }

}