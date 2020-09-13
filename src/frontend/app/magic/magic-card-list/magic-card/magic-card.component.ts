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
    // @Input() magicCard: Card;
    @Input() set magicCard(value: Card) {
        this._magicCard = value;
        const isLoggedIn = this.authenticationService.currentUserValue !== null;
        this.magicCardAmount = { isLoggedIn, cardAmount: this._magicCard.cardAmount };
    }
    _magicCard: Card;

    imageSrcPng: string;
    imageSrcWebp: string;
    magicCardAmount: MagicCardAmount;

    constructor(
        private modalService: ModalService,
        private authenticationService: AuthenticationService,
    ) {}

    ngOnInit() {
        this.imageSrcPng =
            environment.cardImgUrlBase +
            `${this._magicCard.cardExpansion}/png/${this._magicCard.cardExpansion}_${this._magicCard.cardNumber}.png`;

        this.imageSrcWebp =
            environment.cardImgUrlBase +
            `${this._magicCard.cardExpansion}/webp/${this._magicCard.cardExpansion}_${this._magicCard.cardNumber}.webp`;
    }

    openCardModal() {
        this.modalService.init(
            MagicCardModalComponent,
            {
                magicCard: this._magicCard,
            },
            {},
        );
    }
}
