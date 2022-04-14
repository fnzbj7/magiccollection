import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class MagicCardComponent implements OnChanges {
    @Input() userId: string | undefined = undefined;
    @Input() forceShowAmount = false;
    @Input() magicCard!: Card;
    @Input() onlyShow = false;
    card!: Card;

    imageSrcPng!: string;
    imageSrcWebp!: string;
    magicCardAmount!: MagicCardAmount;

    constructor(private magicCardModalService: MagicCardModalService) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.magicCard) {
            this.card = changes.magicCard.currentValue;
            this.magicCardAmount = {
                isLoggedIn: this.userId ? true : false,
                cardAmount: this.card.cardAmount,
                cardAmountFoil: this.card.cardAmountFoil,
                forceShowAmount: this.forceShowAmount,
            };
            this.setImgUrls(this.card.cardExpansion, this.card.cardNumber);
        }
    }

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
