import { Component, OnInit } from '@angular/core';
import { ModifyCardDto } from './dto/add-card.dto';
import { ModifyCardService } from '../../modify-card.service';
import { MagicCardsListService } from '../../magic-cards-list.service';

enum PageStep {
    FORM = 'from',
    PREVIEW = 'preview',
    UPLOADED = 'uploaded',
}

@Component({
    selector: 'app-add-card',
    templateUrl: './add-card.component.html',
    styleUrls: ['./add-card.component.css'],
})
export class AddCardComponent implements OnInit {
    cardNumbersStr: string;
    cardSetsArray: string[];
    cardSet: string;
    inProgress = false;
    isFinished = false;
    isError = false;
    reducedArr: ModifyCardDto;
    pageStep = PageStep;
    actualPageStep = PageStep.FORM;

    constructor(
        private modifyCardService: ModifyCardService,
        private magicCardsListService: MagicCardsListService,
    ) {}

    ngOnInit() {
        this.cardSetsArray = this.magicCardsListService.cardSetsArray;
        this.cardSet = this.cardSetsArray[0];
    }

    addCard() {
        this.inProgress = true;
        this.isError = false;
        this.isFinished = false;

        const cardNumbers = this.prepareAndValidate(this.cardNumbersStr);

        if (!this.isError) {
            this.reducedArr = this.convertToModifyCardDto(cardNumbers);

            this.actualPageStep = PageStep.PREVIEW;
        }
    }

    resetPage() {
        this.inProgress = true;
        this.isError = false;
        this.isFinished = false;
        this.actualPageStep = PageStep.FORM;
        this.cardNumbersStr = '';
    }

    startUploading() {
        this.actualPageStep = PageStep.UPLOADED;
        this.modifyCardService.addCard(this.reducedArr).subscribe(
            () => {
                console.log('Finished adding card');
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

    private prepareAndValidate(cardNumbersStr: string) {
        // Remove multiple spaces
        this.cardNumbersStr = cardNumbersStr.trim().replace(/  +/g, ' ');
        const cardNumbers = this.cardNumbersStr
            .split(' ')
            .map(cardNum => parseInt(cardNum, 0));

        const findedNum = cardNumbers.findIndex(num => isNaN(num));
        if (findedNum >= 0) {
            console.log('Founded NaN');
            this.isError = true;
            return;
        }
        return cardNumbers;
    }

    private convertToModifyCardDto(cardNumbers: number[]) {
        const addCardDto = new ModifyCardDto();
        addCardDto.setShortName = this.cardSet;
        addCardDto.cardQuantitys = [];
        return cardNumbers.reduce((addCard, cardNum) => {
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
    }
}
