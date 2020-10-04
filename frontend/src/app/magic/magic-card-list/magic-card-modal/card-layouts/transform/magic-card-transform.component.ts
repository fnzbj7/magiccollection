import { Component, Input } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../../../../../model/card.model';

@Component({
    selector: 'app-magic-card-transform',
    templateUrl: './magic-card-transform.component.html',
    styleUrls: ['./magic-card-transform.component.css'],
})
export class MagicCardTransformComponent {
    @Input() magicCard: Card;
    @Input() cardImgUrlBase: string;
    flipClass = false;

    faSyncAlt = faSyncAlt;
}
