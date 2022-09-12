import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card.model';
import { MagicCardsListService } from '../magic-card-list/magic-cards-list.service';
import { MagicSet } from '../magic-card-list/model/magic-set.model';

@Component({
    selector: 'app-card-variation',
    templateUrl: './card-variation.component.html',
    styleUrls: ['./card-variation.component.scss'],
})
export class CardCariationComponent implements OnInit {
    magicSets!: MagicSet[];
    cardSet?: string;
    maxCardNum?: number;
    selectedCardNum?: string;
    cardPreview?: Card;

    Arr = Array;

    constructor(private magicCardsListService: MagicCardsListService) {}

    ngOnInit(): void {
        this.magicSets = this.magicCardsListService.magicSetArray;
        this.cardSet = ''; // this.magicSets[0].name
    }

    onCardSetChange(newValue: string) {
        console.log(newValue);
        this.cardSet = newValue;

        const magicSet = this.magicSets.find(s => s.name === this.cardSet);
        this.maxCardNum = magicSet?.maxNum;
    }

    onCardNumChange(newValue: string) {
        // TODO akáűr megjeleníteni a normál kártáy
        this.selectedCardNum = newValue;
        if (this.selectedCardNum && this.cardSet) {
            this.cardPreview = this.createCardPrev(this.selectedCardNum, this.cardSet);
        }
    }

    private createCardPrev(cardNum: string, cardSet: string): Card {
        const lastCard = new Card();
        lastCard.cardExpansion = cardSet;
        lastCard.cardNumber = cardNum.padStart(3, '0');
        lastCard.cardAmount = 1;
        lastCard.cardAmountFoil = 0;
        return lastCard;
    }
}
