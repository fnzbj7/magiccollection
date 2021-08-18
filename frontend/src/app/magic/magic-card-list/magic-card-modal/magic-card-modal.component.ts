/* eslint-disable @typescript-eslint/no-explicit-any */
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
                callbackLeft: this.getPreviousCard.bind(this),
                callbackRight: this.onNextCard.bind(this),
                dragEvent: this.dragEvent.bind(this),
                dragStop: this.dragStop.bind(this),
            });
        }
    }

    onNextCard() {
        const nextMagicCard = this.magicCardModalService.getNextCard();
        if (nextMagicCard) {
            this.magicCard = nextMagicCard;
        }
    }

    getPreviousCard() {
        const nextMagicCard = this.magicCardModalService.getPreviousCard();
        if (nextMagicCard) {
            this.magicCard = nextMagicCard;
        }
    }

    dragEvent(x0: number | null, clientX: number) {
        if (x0 || x0 === 0) {
            const num = Math.min(Math.max((clientX - x0) / 1, -100), 100);
            this.cardContainer.nativeElement.style.position = 'relative';
            this.cardContainer.nativeElement.style.left = `${num}px`;
        }
    }

    dragStop() {
        this.cardContainer.nativeElement.style.position = '';
        this.cardContainer.nativeElement.style.left = '';
    }
}
