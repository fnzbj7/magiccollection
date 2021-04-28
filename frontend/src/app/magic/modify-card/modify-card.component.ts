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
import { SharedService } from 'src/app/shared/shared.service';

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
        private sharedService: SharedService,
    ) {}

    ngOnInit() {
        this.param$ = this.route.params.subscribe(() => {
            this.modifyQty = +this.route.snapshot.data.modifyQty;
            this.resetPage();
        });
    }

    onFormFinish(event: AfterFinishForm) {
        console.log(event);
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
                    card.cardNumber = this.sharedService.pad(x.cardNumber, 3);
                    card.layout = CardLayout.NORMAL;
                    return card;
                });
            }
        });
    }

    resetPage() {
        // this.inProgress = false;
        // this.isError = false;
        this.isFinished = false;
        this.actualPageStep = PageStep.FORM;
        // this.wrongNums = [];
        // this.notNumbers = [];
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
