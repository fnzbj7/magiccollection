/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Component, Input, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { MagicCardModalService } from 'src/app/shared/magic-card-modal.service';
import { SwipeModel } from 'src/app/shared/swipe/swipe.model';
import { Card } from '../../../model/card.model';

@Component({
    selector: 'app-magic-card-modal',
    templateUrl: './magic-card-modal.component.html',
    styleUrls: ['./magic-card-modal.component.css'],
})
export class MagicCardModalComponent implements OnInit, AfterViewInit {
    @Input() magicCard!: Card;
    @ViewChild('swipable') swipable!: ElementRef<HTMLDivElement>;
    @ViewChild('cardContainer') cardContainer!: ElementRef<HTMLDivElement>;

    isLoggedIn!: boolean;
    otherVersionCards?: Card[];
    allVerions?: Card[];

    constructor(
        private authenticationService: AuthenticationService,
        private magicCardModalService: MagicCardModalService,
    ) {}

    ngOnInit(): void {
        this.isLoggedIn = this.authenticationService.isLoggedIn();
    }

    ngAfterViewInit() {
        setTimeout(() => {
            const modalContainer = document.getElementById('modal-container');
            if (modalContainer) {
                modalContainer.classList.add('show-after');
            }
            const overlay = document.getElementById('overlay');
            if (overlay) {
                overlay.classList.add('show-after');
            }
        }, 10);

        const c: HTMLDivElement | null = this.swipable.nativeElement;
        if (c) {
            new SwipeModel(c, {
                callbackLeft: this.onNextCard.bind(this),
                callbackRight: this.getPreviousCard.bind(this),
                dragEvent: this.dragEvent.bind(this),
                dragStop: this.dragStop.bind(this),
            });
        }
    }

    onNextCard() {
        const nextMagicCard = this.magicCardModalService.getNextCard();
        if (nextMagicCard) {
            this.magicCard = nextMagicCard;
            this.allVerions = undefined;
            this.otherVersionCards = undefined;
        }
    }

    getPreviousCard() {
        const nextMagicCard = this.magicCardModalService.getPreviousCard();
        if (nextMagicCard) {
            this.magicCard = nextMagicCard;
            this.allVerions = undefined;
            this.otherVersionCards = undefined;
        }
    }

    dragEvent(x0: number | null, clientX: number) {
        if (x0 === null) {
            return;
        }
        const minLimit = 30;
        const maxLimit = 150;
        const actual = clientX - x0;
        if (actual > minLimit || actual < -minLimit) {
            const num = Math.min(Math.max(actual, -maxLimit), maxLimit); // Math.min(Math.max(actual / 1, -maxLimit), maxLimit);
            this.cardContainer.nativeElement.style.position = 'relative';
            this.cardContainer.nativeElement.style.left = `${num}px`;
        }
    }

    dragStop() {
        this.cardContainer.nativeElement.style.position = '';
        this.cardContainer.nativeElement.style.left = '';
    }

    onShowAllVersion() {
        if (this.magicCard.uniqueCardId) {
            this.magicCardModalService
                .getAllVersionForCard(
                    this.magicCard.uniqueCardId,
                    this.authenticationService.currentUserValue?.id,
                )
                .subscribe(cards => {
                    this.allVerions = cards;

                    this.otherVersionCards = cards.filter(
                        card =>
                            !(
                                card.cardExpansion === this.magicCard.cardExpansion &&
                                card.cardNumber === this.magicCard.cardNumber
                            ),
                    );
                });
        }
    }

    onChangeVersion(changeVersion: Card) {
        this.magicCard = changeVersion;
        // this.otherVersionCards = this.allVerions.filter(
        //     card =>
        //         !(
        //             card.cardExpansion === this.magicCard.cardExpansion &&
        //             card.cardNumber === this.magicCard.cardNumber
        //         ),
        // );
    }
}
