import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../model/card.model';
import { MagicCardModalComponent } from '../magic-card-modal/magic-card-modal.component';
import { environment } from '../../../../environments/environment';
import { ModalService } from '../../../shared/modal.service';

@Component({
    selector: 'app-magic-card',
    templateUrl: './magic-card.component.html',
    styleUrls: ['./magic-card.component.css'],
})
export class MagicCardComponent implements OnInit {
    @Input() magicCard: Card;

    imageSrcPng: string;
    imageSrcWebp: string;

    constructor(private modalService: ModalService) {}

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
