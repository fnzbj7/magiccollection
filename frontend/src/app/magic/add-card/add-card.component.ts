import { Component, OnInit } from '@angular/core';
import { AddCardDto } from './dto/add-card.dto';
import { AddCardService } from './add-card.service';
import { MagicCardsListService } from '../magic-cards-list.service';

@Component({
    selector: 'app-add-card',
    templateUrl: './add-card.component.html',
    styleUrls: ['./add-card.component.css'],
})
export class AddCardComponent implements OnInit {
    cardNumbersStr: string;
    cardSetsArray: string[];
    cardSet: string;

    constructor(
        private addCardService: AddCardService,
        private magicCardsListService: MagicCardsListService,
    ) {}

    ngOnInit() {
        this.cardSetsArray = this.magicCardsListService.cardSetsArray;
        this.cardSet = this.cardSetsArray[0];
    }

    addCard() {
        console.log(this.cardSet);
        // Remove multiple spaces
        this.cardNumbersStr = this.cardNumbersStr.trim().replace(/  +/g, ' ');
        const cardNumbers = this.cardNumbersStr
            .split(' ')
            .map(cardNum => parseInt(cardNum, 0));

        const findedNum = cardNumbers.findIndex(num => isNaN(num));
        if (findedNum >= 0) {
            console.log('Founded NaN');
        } else {
            const addCardDto = new AddCardDto();
            addCardDto.setShortName = this.cardSet;
            addCardDto.cardQuantitys = [];
            const reducedArr = cardNumbers.reduce((addCard, cardNum) => {
                const cardNumInd = addCard.cardQuantitys.findIndex(
                    c => c.cardNumber === cardNum,
                );
                if (cardNumInd >= 0) {
                    addCard.cardQuantitys[cardNumInd].cardQuantity++;
                } else {
                    addCard.cardQuantitys.push({
                        cardNumber: cardNum,
                        cardQuantity: 1,
                    });
                }
                return addCard;
            }, addCardDto);

            console.log(reducedArr);
            this.addCardService.addCard(reducedArr).subscribe(
                () => {
                    console.log('Finished adding card');
                },
                err => {
                    console.log(err);
                },
            );
        }
    }
}
