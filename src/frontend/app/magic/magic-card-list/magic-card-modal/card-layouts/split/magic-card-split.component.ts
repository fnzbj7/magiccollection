import { Component, Input } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../../../../../model/card.model';

@Component({
    selector: 'app-magic-card-split',
    templateUrl: './magic-card-split.component.html',
    styleUrls: ['./magic-card-split.component.css'],
})
export class MagicCardSplitComponent {
    @Input() magicCard: Card;
    @Input() cardImgUrlBase: string;
    flipClass = false;

    faSyncAlt = faSyncAlt;
}
