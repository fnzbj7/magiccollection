import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faSortAlphaDown, faSortAlphaDownAlt } from '@fortawesome/free-solid-svg-icons';
import { Card, CardLayout } from '../../../model/card.model';
import { ModifyCardDto } from '../dto/modify-card.dto';

@Component({
    selector: 'app-modify-preview',
    templateUrl: './modify-preview.component.html',
    styleUrls: ['./modify-preview.component.css'],
})
export class ModifyPreviewComponent implements OnChanges {
    @Input() modifyCard: ModifyCardDto;
    cards: Card[];

    faSortAlphaDownAlt = faSortAlphaDownAlt;
    faSortAlphaDown = faSortAlphaDown;
    isNormalOrder = true;

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        this.isNormalOrder = true;
        const modify: ModifyCardDto = changes.modifyCard.currentValue;
        this.cards = modify.cardQuantitys.map((x) => {
            return {
                cardExpansion: modify.setShortName,
                cardNumber: this.pad(x.cardNumber, 3),
                cardAmount: x.cardQuantity > 0 ? x.cardQuantity : x.cardQuantity * -1,
                layout: CardLayout.NORMAL,
                rarity: 'C',
                name: 'Not relevant',
            };
        });
    }

    onChangeOrder() {
        this.isNormalOrder = !this.isNormalOrder;
        this.cards = this.cards.reverse();
    }

    private pad(text: string | number, width: number, z?: string) {
        z = z || '0';
        text = text + '';
        return text.length >= width ? text : new Array(width - text.length + 1).join(z) + text;
    }
}
