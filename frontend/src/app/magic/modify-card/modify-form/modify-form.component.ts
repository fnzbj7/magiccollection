import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/model/card.model';
import { ModifyQtyEnum } from 'src/app/model/modify-qty.enum';
import { MagicCardsListService } from '../../magic-card-list/magic-cards-list.service';
import { ModifyCardService } from '../../modify-card.service';
import { CardWithFoil } from '../dto/foil.dto';
import { ModifyCardDto } from '../dto/modify-card.dto';
import { AfterFinishForm } from './model/after-finish-form.model';

@Component({
    selector: 'app-modify-form',
    templateUrl: './modify-form.component.html',
})
export class ModifyFormComponent implements OnInit, OnDestroy {
    @Output() afterFinish = new EventEmitter<AfterFinishForm>();

    modifyQty: ModifyQtyEnum = ModifyQtyEnum.ADD;
    wrongNums: number[] = [];
    cardNumbersStr!: string;
    cardSet!: string;
    notNumbers!: string[];
    isError = false;
    reducedArr!: ModifyCardDto;
    rawCardNumbers!: CardWithFoil[];
    lastCardPreview?: Card;
    param$!: Subscription;
    cardSetsArray!: string[];

    constructor(
        private modifyCardService: ModifyCardService,
        private magicCardsListService: MagicCardsListService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.cardSetsArray = this.magicCardsListService.cardSetsArray;
        this.cardSet = this.cardSetsArray[0];

        this.param$ = this.route.params.subscribe(() => {
            this.modifyQty = +this.route.snapshot.data.modifyQty;
            this.cardNumbersStr = this.modifyCardService.getSavedModifyCard(this.modifyQty);
        });
    }

    addCard() {
        this.isError = false;
        this.rawCardNumbers = this.prepareAndValidate(this.cardNumbersStr, this.cardSet);

        if (!this.isError) {
            this.modifyCardService.cacheModifyCard(this.modifyQty, this.cardNumbersStr);
            this.reducedArr = this.convertToModifyCardDto(this.rawCardNumbers);
            this.afterFinish.emit(
                new AfterFinishForm(this.reducedArr, this.rawCardNumbers, this.cardSet),
            );
        }
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

    ngOnDestroy() {
        this.modifyCardService.cacheModifyCard(this.modifyQty, this.cardNumbersStr);
        if (this.param$) {
            this.param$.unsubscribe();
        }
    }

    private prepareAndValidate(cardNumbersStr: string, cardSet: string): CardWithFoil[] {
        const cardNumbersStrTrim = cardNumbersStr.trim().replace(/  +/g, ' '); // Remove multiple spaces
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
            console.error('Founded NaN', this.notNumbers);
            this.isError = true;
        }

        const maxNumber: number = this.magicCardsListService.getMagicSetMaxNumber(cardSet);
        this.wrongNums = cardsAndFoil
            .filter(cardAndFoil => {
                if (!cardAndFoil || !cardAndFoil.cardNum || isNaN(cardAndFoil.cardNum)) {
                    return false;
                }

                return cardAndFoil.cardNum > maxNumber || cardAndFoil.cardNum <= 0;
            })
            .map(cardAndFoil => cardAndFoil.cardNum);
        if (this.wrongNums.length > 0) {
            console.error('High numbers', this.wrongNums);
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

    private createLastCard(lastNum: number, lastNumStr: string): Card {
        const isFoil = lastNumStr.includes('*');
        const lastCard = new Card();
        lastCard.cardExpansion = this.cardSet;
        lastCard.cardNumber = ('' + lastNum).padStart(3, '0');
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
}
