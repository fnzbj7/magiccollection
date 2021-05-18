/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, AfterViewInit, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { MagicCardModalService } from 'src/app/shared/magic-card-modal.service';
import { SwipeModel } from 'src/app/shared/swipe.model';
import { Card } from '../../../model/card.model';

@Component({
    selector: 'app-magic-card-modal',
    templateUrl: './magic-card-modal.component.html',
    styleUrls: ['./magic-card-modal.component.css'],
})
export class MagicCardModalComponent implements OnInit, AfterViewInit {
    @Input() magicCard!: Card;

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

        const c: HTMLDivElement | null = document.querySelector('.swipable');
        if (c) {
            new SwipeModel(c, this.onNextCard.bind(this), this.getPreviousCard.bind(this));
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
}
