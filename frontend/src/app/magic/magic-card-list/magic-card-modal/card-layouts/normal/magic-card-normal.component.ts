import { Component, Input, OnInit } from '@angular/core';
import { CardUrls } from 'src/app/model/card-urls.model';
import { Card } from 'src/app/model/card.model';
import { MagicCardsListService } from '../../../magic-cards-list.service';

@Component({
    selector: 'app-magic-card-normal',
    templateUrl: './magic-card-normal.component.html',
    styleUrls: ['./magic-card-normal.component.css'],
})
export class MagicCardNormalComponent implements OnInit {
    @Input() magicCard: Card;
    cardUrls: CardUrls;

    constructor(private magicCardsListService: MagicCardsListService) {}

    ngOnInit() {
        this.cardUrls = this.magicCardsListService.creatingCardUrls(this.magicCard);
    }
}
