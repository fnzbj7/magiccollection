import { Component, Input, OnInit } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { CardUrls } from 'src/app/model/card-urls.model';
import { Card } from '../../../../../model/card.model';
import { MagicCardsListService } from '../../../magic-cards-list.service';

@Component({
    selector: 'app-magic-card-aftermath',
    templateUrl: './magic-card-aftermath.component.html',
    styleUrls: ['./magic-card-aftermath.component.css'],
})
export class MagicCardAftermathComponent implements OnInit {
    @Input() magicCard: Card;
    flipClass = false;
    cardUrls: CardUrls;

    faSyncAlt = faSyncAlt;

    constructor(private magicCardsListService: MagicCardsListService) {}

    ngOnInit() {
        this.cardUrls = this.magicCardsListService.creatingCardUrls(this.magicCard);
    }
}
