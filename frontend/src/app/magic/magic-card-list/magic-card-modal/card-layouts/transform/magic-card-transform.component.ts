import { Component, Input, OnInit } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { CardUrls } from 'src/app/model/card-urls.model';
import { Card } from '../../../../../model/card.model';
import { MagicCardsListService } from '../../../magic-cards-list.service';

@Component({
    selector: 'app-magic-card-transform',
    templateUrl: './magic-card-transform.component.html',
    styleUrls: ['./magic-card-transform.component.css'],
})
export class MagicCardTransformComponent implements OnInit {
    @Input() magicCard: Card;
    flipClass = false;
    cardUrls: CardUrls;

    faSyncAlt = faSyncAlt;

    constructor(private magicCardsListService: MagicCardsListService) {}

    ngOnInit() {
        this.cardUrls = this.magicCardsListService.creatingCardUrls(this.magicCard, true);
    }
}
