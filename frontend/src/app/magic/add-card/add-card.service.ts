import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddCardDto } from './dto/add-card.dto';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AddCardService {

    constructor(private http: HttpClient) {}

    addCard(addCardDto: AddCardDto): Observable<any> {
        return this.http.post<any>(environment.mainUrl + '/card/addcard', addCardDto);
    }
}
