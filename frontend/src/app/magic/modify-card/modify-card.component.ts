import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModifyCardDto } from './dto/modify-card.dto';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModifyCardService } from '../modify-card.service';
import { MagicCardsListService } from '../magic-cards-list.service';

enum PageStep {
    FORM = 'from',
    PREVIEW = 'preview',
    UPLOADED = 'uploaded',
}

@Component({
    selector: 'app-modify-card',
    templateUrl: './modify-card.component.html',
    styleUrls: ['./modify-card.component.css'],
})
export class ModifyCardComponent implements OnInit, OnDestroy {
    cardNumbersStr: string;
    cardSetsArray: string[];
    cardSet: string;
    modifyQty = 1;
    inProgress = false;
    isFinished = false;
    isError = false;
    reducedArr: ModifyCardDto;
    pageStep = PageStep;
    actualPageStep = PageStep.FORM;
    wrongNums: number[];
    notNumbers: string[];

    param$: Subscription;

    constructor(
        private modifyCardService: ModifyCardService,
        private magicCardsListService: MagicCardsListService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.cardSetsArray = this.magicCardsListService.cardSetsArray;
        this.cardSet = this.cardSetsArray[0];
        this.param$ = this.route.params.subscribe(param => {
            this.modifyQty = +this.route.snapshot.data['modifyQty'];
            this.resetPage();
            this.cardNumbersStr = '';
        });
    }

    addCard() {
        this.resetPage();
        this.inProgress = true;

        const cardNumbers = this.prepareAndValidate(this.cardNumbersStr, this.cardSet);

        if (!this.isError) {
            this.reducedArr = this.convertToModifyCardDto(cardNumbers);

            this.actualPageStep = PageStep.PREVIEW;
        }
    }

    resetPage() {
        this.inProgress = false;
        this.isError = false;
        this.isFinished = false;
        this.actualPageStep = PageStep.FORM;
        this.wrongNums = [];
        this.notNumbers = [];
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

    private prepareAndValidate(cardNumbersStr: string, cardSet: string) {
        // Remove multiple spaces
        const cardNumbersStrTrim = cardNumbersStr.trim().replace(/  +/g, ' ');
        const cardNumbersStrArr: string[] = cardNumbersStrTrim.split(' ');
        const cardNumbers = cardNumbersStrArr.map(cardNum => parseInt(cardNum, 0));

        const findedNum = cardNumbers.findIndex(num => isNaN(num));
        if (findedNum >= 0) {
            this.notNumbers = cardNumbersStrArr.filter(num => isNaN(parseInt(num, 0)));
            console.log('Founded NaN');
            this.isError = true;
        }

        const maxNumber = this.magicCardsListService.maxCardNumber[cardSet];
        this.wrongNums = cardNumbers.filter(num => num > maxNumber);
        if (this.wrongNums.length > 0) {
            console.log('High number');
            this.isError = true;
        }
        return cardNumbers;
    }

    private convertToModifyCardDto(cardNumbers: number[]) {
        const addCardDto = new ModifyCardDto();
        addCardDto.setShortName = this.cardSet;
        addCardDto.cardQuantitys = [];
        return cardNumbers.reduce((addCard, cardNum) => {
            const cardNumInd = addCard.cardQuantitys.findIndex(c => c.cardNumber === cardNum);
            if (cardNumInd >= 0) {
                addCard.cardQuantitys[cardNumInd].cardQuantity += this.modifyQty;
            } else {
                addCard.cardQuantitys.push({
                    cardNumber: cardNum,
                    cardQuantity: this.modifyQty,
                });
            }
            return addCard;
        }, addCardDto);
    }

    ngOnDestroy() {
        if (this.param$) {
            this.param$.unsubscribe();
        }
    }
}
