import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModifyCardDto } from './modify-card/dto/modify-card.dto';
import { ModifyQtyEnum } from '../model/modify-qty.enum';

@Injectable({ providedIn: 'root' })
export class ModifyCardService {
    addingCard = '';
    removingCard = '';

    constructor(private http: HttpClient) {}

    addCard(addCardDto: ModifyCardDto): Observable<void> {
        return this.http.post<void>('/api/card/addcard', addCardDto);
    }

    removeCard(addCardDto: ModifyCardDto): Observable<void> {
        return this.http.post<void>('/api/card/removecard', addCardDto);
    }

    getSavedModifyCard(modify: ModifyQtyEnum): string {
        switch (modify) {
            case ModifyQtyEnum.ADD:
                return this.addingCard != null ? this.addingCard : '';
            case ModifyQtyEnum.REMOVE:
                return this.removingCard != null ? this.removingCard : '';
            default:
                return '';
        }
    }

    saveModifyCard(modify: ModifyQtyEnum, cardNumbersStr: string): void {
        switch (modify) {
            case ModifyQtyEnum.ADD:
                this.addingCard = cardNumbersStr;
                break;
            case ModifyQtyEnum.REMOVE:
                this.removingCard = cardNumbersStr;
                break;
            default:
                break;
        }
    }

    clearModifyCard(modify: ModifyQtyEnum): void {
        switch (modify) {
            case ModifyQtyEnum.ADD:
                this.addingCard = '';
                break;
            case ModifyQtyEnum.REMOVE:
                this.removingCard = '';
                break;
            default:
                break;
        }
    }
}
