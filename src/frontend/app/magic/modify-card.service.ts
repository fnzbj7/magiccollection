import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ModifyCardDto } from './modify-card/dto/modify-card.dto';

@Injectable({ providedIn: 'root' })
export class ModifyCardService {
    constructor(private http: HttpClient) {}

    addCard(addCardDto: ModifyCardDto): Observable<any> {
        return this.http.post<any>(environment.mainUrl + '/card/addcard', addCardDto);
    }

    removeCard(addCardDto: ModifyCardDto): Observable<any> {
        return this.http.post<any>(environment.mainUrl + '/card/removecard', addCardDto);
    }
}