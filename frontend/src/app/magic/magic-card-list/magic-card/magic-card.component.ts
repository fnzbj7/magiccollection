import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Card } from '../../../model/card.model';
import { MagicCardModalComponent } from '../magic-card-modal/magic-card-modal.component';
import { environment } from '../../../../environments/environment';
import { ModalService } from '../../../shared/modal.service';
import { AuthenticationService } from '../../../auth/authentication.service';
import { Subscription } from 'rxjs';
import { MagicCardAmount } from './model/magic-card-amount.model';

@Component({
    selector: 'app-magic-card',
    templateUrl: './magic-card.component.html',
    styleUrls: ['./magic-card.component.css'],
})
export class MagicCardComponent implements OnInit {
    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('magicCard') set _magicCard(value: Card) {
        this.magicCard = value;
        const isLoggedIn = this.authenticationService.currentUserValue !== null;
        this.magicCardAmount = {
            isLoggedIn,
            cardAmount: this.magicCard.cardAmount,
            cardAmountFoil: this.magicCard.cardAmountFoil,
        };
    }
    magicCard!: Card;

    imageSrcPng!: string;
    imageSrcWebp!: string;
    magicCardAmount!: MagicCardAmount;

    constructor(
        private modalService: ModalService,
        private authenticationService: AuthenticationService,
    ) {}

    ngOnInit() {
        this.imageSrcPng =
            environment.cardImgUrlBase +
            `${this.magicCard.cardExpansion}/png/${this.magicCard.cardExpansion}_${this.magicCard.cardNumber}.png`;

        this.imageSrcWebp =
            environment.cardImgUrlBase +
            `${this.magicCard.cardExpansion}/webp/${this.magicCard.cardExpansion}_${this.magicCard.cardNumber}.webp`;
    }

    openCardModal() {
        this.modalService.init(
            MagicCardModalComponent,
            {
                magicCard: this.magicCard,
            },
            {},
        );
    }
}
