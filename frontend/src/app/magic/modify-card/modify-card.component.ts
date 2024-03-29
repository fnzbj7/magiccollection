import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModifyCardDto } from './dto/modify-card.dto';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModifyCardService } from '../modify-card.service';
import { MagicCardsListService } from '../magic-card-list/magic-cards-list.service';
import { ModifyQtyEnum } from '../../model/modify-qty.enum';
import { Card, CardLayout } from '../../model/card.model';
import { CardWithFoil } from './dto/foil.dto';
import { AfterFinishForm } from './modify-form/model/after-finish-form.model';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { CardQuantity } from './dto/card-quantity.model';

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
    modifyQty: ModifyQtyEnum = ModifyQtyEnum.ADD;
    inProgress = false;
    isFinished = false;
    pageStep = PageStep;
    actualPageStep = PageStep.FORM;
    newCards: Card[] | null = null;
    isNewCardsLoading = false;
    isNewCardsFinished = false;
    isError = false;
    cardSet!: string;

    param$!: Subscription;

    reducedArr!: ModifyCardDto;
    rawCardNumbers!: CardWithFoil[];

    constructor(
        private modifyCardService: ModifyCardService,
        private magicCardsListService: MagicCardsListService,
        private route: ActivatedRoute,
        private auth: AuthenticationService,
    ) {}

    ngOnInit() {
        this.param$ = this.route.params.subscribe(() => {
            this.modifyQty = +this.route.snapshot.data.modifyQty;
            this.resetPage();
        });
    }

    onFormFinish(event: AfterFinishForm) {
        this.reducedArr = event.reducedArr;
        this.rawCardNumbers = event.rawCardNumbers;
        this.actualPageStep = PageStep.PREVIEW;
        this.cardSet = event.cardSet;
    }

    startUploading() {
        this.actualPageStep = PageStep.UPLOADED;
        this.modifyCardService.addCard(this.reducedArr).subscribe(
            () => {
                console.log('Finished adding card');
                this.inProgress = false;
                this.isFinished = true;
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
        this.magicCardsListService
            .getCardsForExpansion(this.auth.currentUserValue?.id, this.cardSet)
            .subscribe(cards => {
                this.isNewCardsFinished = true;
                this.isNewCardsLoading = false;
                // Compare to the uploaded cards
                const cardQuantitys = this.reducedArr.cardQuantitys;
                const filteredNewCards = cardQuantitys.filter(x => {
                    const foundCard = cards.find(
                        card => card.cardNumber && +card.cardNumber === x.cardNumber,
                    );

                    if (!foundCard) {
                        return !false;
                    }

                    const priorityList = [
                        { upload: x.cardQuantityFoil, have: foundCard.cardAmountFoil },
                        { upload: x.cardQuantity, have: foundCard.cardAmount },
                    ];

                    for (const priority of priorityList) {
                        // if upload and have both 0, then skip
                        if (priority.upload < priority.have) {
                            return false;
                        }
                        if (priority.upload > 0 && priority.upload === priority.have) {
                            return true;
                        }
                    }
                    return false;
                });

                const reducedCards = this.rawCardNumbers.reduce(
                    (reduceValue: CardQuantity[], currValue: CardWithFoil) => {
                        const isProcessed = reduceValue.find(
                            f => f.cardNumber === currValue.cardNum,
                        );
                        const found = filteredNewCards.find(
                            f => f.cardNumber === currValue.cardNum,
                        );
                        if (isProcessed || !found) {
                            return reduceValue;
                        } else {
                            if (currValue.isFoil) {
                                reduceValue.push(found);
                            } else if (!currValue.isFoil && found.cardQuantityFoil === 0) {
                                reduceValue.push(found);
                            }
                        }

                        return reduceValue;
                    },
                    [],
                );

                // Creating an array from the new cards
                this.newCards = reducedCards.map(x => {
                    const card = new Card();
                    card.cardAmount = x.cardQuantity;
                    card.cardAmountFoil = x.cardQuantityFoil;
                    card.cardExpansion = this.cardSet;
                    card.cardNumber = ('' + x.cardNumber).padStart(3, '0');
                    card.layout = CardLayout.NORMAL;
                    return card;
                });
            });
    }

    resetPage() {
        this.isFinished = false;
        this.actualPageStep = PageStep.FORM;
        this.isNewCardsLoading = false;
        this.isNewCardsFinished = false;
        this.newCards = null;
    }

    ngOnDestroy() {
        if (this.param$) {
            this.param$.unsubscribe();
        }
    }
}
