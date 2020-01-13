import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../model/card.model';
import { MagicCardModalComponent } from '../magic-card-modal/magic-card-modal.component';
import { ModalService } from 'src/app/shared/modal.service';

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
            `https://magiccollection.s3.eu-central-1.amazonaws.com/` +
            `${this.magicCard.cardExpansion}/png/${this.magicCard.cardExpansion}_${this.magicCard.cardNumber}.png`;

        this.imageSrcWebp =
            `https://magiccollection.s3.eu-central-1.amazonaws.com/` +
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
