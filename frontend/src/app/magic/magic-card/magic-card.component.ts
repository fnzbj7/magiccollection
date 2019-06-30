import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../model/card.model';
import { MagicCardModalComponent } from '../magic-card-modal/magic-card-modal.component';
import { ModalService } from 'src/app/shared/modal.service';

@Component({
  selector: 'app-magic-card',
  templateUrl: './magic-card.component.html',
  styleUrls: ['./magic-card.component.css']
})
export class MagicCardComponent implements OnInit {
  @Input() magicCard: Card;
  flipClass = false;

  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  openCardModal() {
    console.log('click happend');

    this.modalService.init(
      MagicCardModalComponent,
      {
        title: 'Prameter',
        cardImgPng: `assets/img/cards/${this.magicCard.cardExpansion}/png/${
          this.magicCard.cardExpansion
        }_${this.magicCard.cardNumber}.png`,
        cardImgWebp: `assets/img/cards/${this.magicCard.cardExpansion}/webp/${
          this.magicCard.cardExpansion
        }_${this.magicCard.cardNumber}.webp`,
      },
      {}
    );
  }
}
