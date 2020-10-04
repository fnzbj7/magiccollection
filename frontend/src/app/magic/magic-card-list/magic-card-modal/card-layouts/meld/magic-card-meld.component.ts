import { Component, Input } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../../../../../model/card.model';

@Component({
    selector: 'app-magic-card-meld',
    templateUrl: './magic-card-meld.component.html',
    styleUrls: ['./magic-card-meld.component.css'],
})
export class MagicCardMeldComponent {
    @Input() magicCard: Card;
    @Input() cardImgUrlBase: string;
    flipClass = false;

    faSyncAlt = faSyncAlt;
}
