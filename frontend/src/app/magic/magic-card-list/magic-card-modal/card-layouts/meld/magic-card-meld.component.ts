import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { CardUrls } from 'src/app/model/card-urls.model';
import { Card } from '../../../../../model/card.model';
import { MagicCardsListService } from '../../../magic-cards-list.service';

@Component({
    selector: 'app-magic-card-meld',
    templateUrl: './magic-card-meld.component.html',
    styleUrls: ['./magic-card-meld.component.css'],
})
export class MagicCardMeldComponent implements OnChanges {
    @Input() magicCard!: Card;
    flipClass = false;
    cardUrls!: CardUrls;

    faSyncAlt = faSyncAlt;

    constructor(private magicCardsListService: MagicCardsListService) {}

    ngOnChanges(changes: SimpleChanges): void {
        this.cardUrls = this.magicCardsListService.creatingCardUrls(this.magicCard, true);
    }
}
