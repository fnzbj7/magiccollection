import { Component, OnInit } from '@angular/core';
import { ModifyCardDto } from '../add-card/dto/add-card.dto';
import { ModifyCardService } from '../../modify-card.service';
import { MagicCardsListService } from '../../magic-cards-list.service';

@Component({
    selector: 'app-remove-card',
    templateUrl: './remove-card.component.html',
    styleUrls: ['./remove-card.component.css'],
})
export class RemoveCardComponent implements OnInit {
    cardNumbersStr: string;
    cardSetsArray: string[];
    cardSet: string;

    inProgress = false;
    isFinished = false;
    isError = false;

    reducedArr: ModifyCardDto;

    constructor(
        private modifyCardService: ModifyCardService,
        private magicCardsListService: MagicCardsListService,
    ) {}

    ngOnInit() {
        this.cardSetsArray = this.magicCardsListService.cardSetsArray;
        this.cardSet = this.cardSetsArray[0];
    }

    removeCard() {
        this.inProgress = true;
        this.isError = false;
        this.isFinished = false;
        console.log(this.cardSet);
        // Remove multiple spaces
        this.cardNumbersStr = this.cardNumbersStr.trim().replace(/  +/g, ' ');
        const cardNumbers = this.cardNumbersStr
            .split(' ')
            .map(cardNum => parseInt(cardNum, 0));

        const foundedNum = cardNumbers.findIndex(num => isNaN(num));
        if (foundedNum >= 0) {
            console.log('Founded NaN');
            this.isError = true;
            return;
        }
        const removeCardDto = new ModifyCardDto();
        removeCardDto.setShortName = this.cardSet;
        removeCardDto.cardQuantitys = [];
        this.reducedArr = cardNumbers.reduce((addCard, cardNum) => {
            const cardNumInd = addCard.cardQuantitys.findIndex(
                c => c.cardNumber === cardNum,
            );
            if (cardNumInd >= 0) {
                addCard.cardQuantitys[cardNumInd].cardQuantity--;
            } else {
                addCard.cardQuantitys.push({
                    cardNumber: cardNum,
                    cardQuantity: -1,
                });
            }
            return addCard;
        }, removeCardDto);

        this.modifyCardService.removeCard(this.reducedArr).subscribe(
            () => {
                console.log('Finished removing card');
                this.inProgress = false;
                this.isFinished = true;
                this.cardNumbersStr = '';
            },
            err => {
                console.log(err);
                this.inProgress = false;
                this.isError = true;
            },
        );
    }
}
