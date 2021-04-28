import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModifyCardDto } from './dto/modify-card.dto';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModifyCardService } from '../modify-card.service';
import { MagicCardsListService } from '../magic-card-list/magic-cards-list.service';
import { ModifyQtyEnum } from '../../model/modify-qty.enum';
import { Card, CardLayout } from '../../model/card.model';
import { CardWithFoil } from './dto/foil.dto';

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
    cardNumbersStr!: string;
    cardSetsArray!: string[];
    cardSet!: string;
    modifyQty: ModifyQtyEnum = ModifyQtyEnum.ADD;
    inProgress = false;
    isFinished = false;
    isError = false;
    reducedArr!: ModifyCardDto;
    pageStep = PageStep;
    actualPageStep = PageStep.FORM;
    wrongNums!: number[];
    notNumbers!: string[];
    rawCardNumbers!: CardWithFoil[];
    newCards: Card[] | null = null;
    isNewCardsLoading = false;
    isNewCardsFinished = false;
    lastCardPreview?: Card;

    param$!: Subscription;

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

    onCardTyping() {
        if (!this.isSpaceLastBtnPress(this.cardNumbersStr)) {
            return;
        }

        const { lastNum, lastNumStr } = this.getLastNum(this.cardNumbersStr);

        if (Number.isNaN(lastNum)) {
            console.warn(`${lastNum} nem egy szám!`);
            return;
        }

        this.lastCardPreview = this.createLastCard(lastNum, lastNumStr);
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
        this.newCards = null;
        this.lastCardPreview = undefined;
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
            err => {
                console.log(err);
                this.inProgress = false;
                this.isError = true;
            },
        );
    }

    onShowNewCards() {
        // Get all cards
        this.isNewCardsLoading = true;
        this.magicCardsListService.getCardsForExpansion(this.cardSet).subscribe(cards => {
            this.isNewCardsFinished = true;
            this.isNewCardsLoading = false;
            // Compare to the uploaded cards
            if (this.reducedArr && this.reducedArr.cardQuantitys) {
                const filteredNewCards = this.reducedArr.cardQuantitys.filter(x => {
                    const foundCard = cards.find(
                        card => card.cardNumber && +card.cardNumber === x.cardNumber,
                    );
                    return foundCard && foundCard.cardAmount === x.cardQuantity;
                });

                // Creating an array from the new cards
                this.newCards = filteredNewCards.map(x => {
                    const card = new Card();
                    card.cardAmount = x.cardQuantity;
                    card.cardExpansion = this.cardSet;
                    card.cardNumber = this.pad(x.cardNumber, 3);
                    card.layout = CardLayout.NORMAL;
                    return card;
                });
            }
        });
    }

    ngOnDestroy() {
        this.modifyCardService.saveModifyCard(this.modifyQty, this.cardNumbersStr);
        if (this.param$) {
            this.param$.unsubscribe();
        }
    }

    private createLastCard(lastNum: number, lastNumStr: string): Card {
        const isFoil = lastNumStr.includes('*');
        const lastCard = new Card();
        lastCard.cardExpansion = this.cardSet;
        lastCard.cardNumber = this.pad(lastNum, 3);
        lastCard.cardAmount = isFoil ? 0 : 1;
        lastCard.cardAmountFoil = isFoil ? 1 : 0;
        return lastCard;
    }

    private getLastNum(cardNumbersStr: string) {
        const tmpArr = cardNumbersStr.split(' ');
        const lastNumStr = tmpArr[tmpArr.length - 2];
        return { lastNum: parseInt(lastNumStr, 10), lastNumStr };
    }

    private isSpaceLastBtnPress(cardNumbersStr: string) {
        return cardNumbersStr.substr(cardNumbersStr.length - 1) === ' ';
    }

    private prepareAndValidate(cardNumbersStr: string, cardSet: string): CardWithFoil[] {
        // Remove multiple spaces
        const cardNumbersStrTrim = cardNumbersStr.trim().replace(/  +/g, ' ');
        const cardNumbersStrArr: string[] = cardNumbersStrTrim.split(' ');
        const cardsAndFoil: CardWithFoil[] = cardNumbersStrArr.map(cardNum => {
            const foil: CardWithFoil = {
                cardNum: parseInt(cardNum, 10),
                isFoil: cardNum.includes('*'),
            };
            return foil;
        });

        const findedNum = cardsAndFoil.findIndex(
            cardAndFoil => !cardAndFoil || !cardAndFoil.cardNum || isNaN(cardAndFoil.cardNum),
        );
        if (findedNum >= 0) {
            this.notNumbers = cardNumbersStrArr.filter(num => isNaN(parseInt(num, 10)));
            console.log('Founded NaN');
            this.isError = true;
        }

        const maxNumber: number = this.magicCardsListService.getMagicSetMaxNumber(cardSet);
        cardsAndFoil
            .filter(
                cardAndFoil =>
                    !(cardAndFoil && cardAndFoil.cardNum) ||
                    cardAndFoil.cardNum > maxNumber ||
                    cardAndFoil.cardNum <= 0,
            )
            .map(cardAndFoil => cardAndFoil.cardNum);
        if (this.wrongNums.length > 0) {
            console.log('High number');
            this.isError = true;
        }
        return cardsAndFoil;
    }

    private convertToModifyCardDto(cardNumbers: CardWithFoil[]) {
        const addCardDto = new ModifyCardDto(this.cardSet, []);
        return cardNumbers.reduce((addCard, cardWithFoil) => {
            const cardNumInd = addCard.cardQuantitys.findIndex(
                c => c.cardNumber === cardWithFoil.cardNum,
            );
            if (cardNumInd >= 0) {
                if (!cardWithFoil.isFoil) {
                    addCard.cardQuantitys[cardNumInd].cardQuantity += this.modifyQty;
                } else {
                    addCard.cardQuantitys[cardNumInd].cardQuantityFoil += this.modifyQty;
                }
            } else {
                addCard.cardQuantitys.push({
                    cardNumber: cardWithFoil.cardNum,
                    cardQuantity: cardWithFoil.isFoil ? 0 : this.modifyQty,
                    cardQuantityFoil: cardWithFoil.isFoil ? this.modifyQty : 0,
                });
            }
            return addCard;
        }, addCardDto);
    }

    private pad(text: string | number, width: number, z?: string) {
        z = z || '0';
        text = text + '';
        return text.length >= width ? text : new Array(width - text.length + 1).join(z) + text;
    }
}
