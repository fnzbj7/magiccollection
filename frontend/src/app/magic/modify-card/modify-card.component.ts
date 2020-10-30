import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModifyCardDto } from './dto/modify-card.dto';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModifyCardService } from '../modify-card.service';
import { MagicCardsListService } from '../magic-card-list/magic-cards-list.service';
import { ModifyQtyEnum } from '../../model/modify-qty.enum';
import { Card, CardLayout } from 'src/app/model/card.model';

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
    modifyQty: ModifyQtyEnum = ModifyQtyEnum.ADD;
    inProgress = false;
    isFinished = false;
    isError = false;
    reducedArr: ModifyCardDto;
    pageStep = PageStep;
    actualPageStep = PageStep.FORM;
    wrongNums: number[];
    notNumbers: string[];
    rawCardNumbers: number[];
    newCards: Card[];
    isNewCardsLoading = false;
    isNewCardsFinished = false;

    param$: Subscription;

    constructor(
        private modifyCardService: ModifyCardService,
        private magicCardsListService: MagicCardsListService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.cardSetsArray = this.magicCardsListService.cardSetsArray;
        this.cardSet = this.cardSetsArray[0];
        this.param$ = this.route.params.subscribe(() => {
            this.modifyQty = +this.route.snapshot.data.modifyQty;
            this.resetPage();
            this.cardNumbersStr = this.modifyCardService.getSavedModifyCard(this.modifyQty);
        });
    }

    addCard() {
        this.resetPage();
        this.inProgress = true;

        this.rawCardNumbers = this.prepareAndValidate(this.cardNumbersStr, this.cardSet);

        if (!this.isError) {
            this.modifyCardService.saveModifyCard(this.modifyQty, this.cardNumbersStr);
            this.reducedArr = this.convertToModifyCardDto(this.rawCardNumbers);

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
        this.isNewCardsLoading = false;
        this.isNewCardsFinished = false;
        this.newCards = undefined;
    }

    startUploading() {
        this.actualPageStep = PageStep.UPLOADED;
        this.modifyCardService.addCard(this.reducedArr).subscribe(
            () => {
                console.log('Finished adding card');
                this.inProgress = false;
                this.isFinished = true;
                this.cardNumbersStr = '';
                this.modifyCardService.clearModifyCard(this.modifyQty);
            },
            (err) => {
                console.log(err);
                this.inProgress = false;
                this.isError = true;
            },
        );
    }

    private prepareAndValidate(cardNumbersStr: string, cardSet: string): number[] {
        // Remove multiple spaces
        const cardNumbersStrTrim = cardNumbersStr.trim().replace(/  +/g, ' ');
        const cardNumbersStrArr: string[] = cardNumbersStrTrim.split(' ');
        const cardNumbers = cardNumbersStrArr.map((cardNum) => parseInt(cardNum, 0));

        const findedNum = cardNumbers.findIndex((num) => isNaN(num));
        if (findedNum >= 0) {
            this.notNumbers = cardNumbersStrArr.filter((num) => isNaN(parseInt(num, 0)));
            console.log('Founded NaN');
            this.isError = true;
        }

        const maxNumber: number = this.magicCardsListService.maxCardNumber[cardSet];
        this.wrongNums = cardNumbers.filter((num) => num > maxNumber || num <= 0);
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
            const cardNumInd = addCard.cardQuantitys.findIndex((c) => c.cardNumber === cardNum);
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

    onShowNewCards() {
        // Get all cards
        this.isNewCardsLoading = true; // TODO lehet egy betöltés flaget
        this.magicCardsListService.getCardsForExpansion(this.cardSet).subscribe((cards) => {
            this.isNewCardsFinished = true; // TODO átállítani / resetelni
            this.isNewCardsLoading = false;
            // Compare to the uploaded cards
            const filteredNewCards = this.reducedArr.cardQuantitys.filter((x) => {
                const foundCard = cards.find((card) => +card.cardNumber === x.cardNumber);
                return foundCard.cardAmount === x.cardQuantity;
            });

            // Creating an array from the new cards
            this.newCards = filteredNewCards.map((x) => {
                const card = new Card();
                card.cardAmount = x.cardQuantity;
                card.cardExpansion = this.cardSet;
                card.cardNumber = this.pad(x.cardNumber, 3);
                card.layout = CardLayout.NORMAL;
                return card;
            });
        });
    }

    private pad(text: string | number, width: number, z?: string) {
        z = z || '0';
        text = text + '';
        return text.length >= width ? text : new Array(width - text.length + 1).join(z) + text;
    }

    ngOnDestroy() {
        this.modifyCardService.saveModifyCard(this.modifyQty, this.cardNumbersStr);
        if (this.param$) {
            this.param$.unsubscribe();
        }
    }
}
