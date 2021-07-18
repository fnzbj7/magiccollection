import { Component, Input } from '@angular/core';
import { Card } from '../../../model/card.model';
import { MagicCardModalComponent } from '../magic-card-modal/magic-card-modal.component';
import { environment } from '../../../../environments/environment';
import { ModalService } from '../../../shared/modal.service';
import { AuthenticationService } from '../../../auth/authentication.service';
import { MagicCardAmount } from './model/magic-card-amount.model';
import { MagicCardModalService } from 'src/app/shared/magic-card-modal.service';

@Component({
    selector: 'app-magic-card',
    templateUrl: './magic-card.component.html',
    styleUrls: ['./magic-card.component.scss'],
})
export class MagicCardComponent {
    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('magicCard') set _magicCard(value: Card) {
        this.magicCard = value;
        const isLoggedIn = this.authenticationService.currentUserValue !== null;
        this.magicCardAmount = {
            isLoggedIn,
            cardAmount: this.magicCard.cardAmount,
            cardAmountFoil: this.magicCard.cardAmountFoil,
        };
        this.setImgUrls(this.magicCard.cardExpansion, this.magicCard.cardNumber);
    }
    @Input() onlyShow = false;
    magicCard!: Card;

    imageSrcPng!: string;
    imageSrcWebp!: string;
    magicCardAmount!: MagicCardAmount;

    constructor(
        private modalService: ModalService,
        private magicCardModalService: MagicCardModalService,
        private authenticationService: AuthenticationService,
    ) {}

    openCardModal() {
        this.magicCardModalService.createMagicCardModal(MagicCardModalComponent, this.magicCard);
    }

    private setImgUrls(cardExpansion: string, cardNumber: string) {
        this.imageSrcPng = this.createImgUrl(cardExpansion, cardNumber, 'png');

        this.imageSrcWebp = this.createImgUrl(cardExpansion, cardNumber, 'webp');
    }

    private createImgUrl(cardExpansion: string, cardNumber: string, imgType: string): string {
        return (
            environment.cardImgUrlBase +
            `${cardExpansion}/${imgType}/${cardExpansion}_${cardNumber}.${imgType}`
        );
    }
}
