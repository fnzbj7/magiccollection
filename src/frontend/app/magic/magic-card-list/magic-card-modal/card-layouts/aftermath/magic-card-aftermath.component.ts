import { Component, Input } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../../../../../model/card.model';

@Component({
    selector: 'app-magic-card-aftermath',
    templateUrl: './magic-card-aftermath.component.html',
    styleUrls: ['./magic-card-aftermath.component.css'],
})
export class MagicCardAftermathComponent {
    @Input() magicCard: Card;
    @Input() cardImgUrlBase: string;
    flipClass = false;

    faSyncAlt = faSyncAlt;
}
