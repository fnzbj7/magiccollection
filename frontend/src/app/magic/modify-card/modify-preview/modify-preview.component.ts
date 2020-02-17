import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Card, CardLayout } from '../../../model/card.model';
import { ModifyCardDto } from '../dto/modify-card.dto';

@Component({
    selector: 'app-modify-preview',
    templateUrl: './modify-preview.component.html',
})
export class ModifyPreviewComponent implements OnChanges {
    @Input() modifyCard: ModifyCardDto;
    cards: Card[];

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        const modify: ModifyCardDto = changes.modifyCard.currentValue;
        this.cards = modify.cardQuantitys.map(x => {
            return {
                cardExpansion: modify.setShortName,
                cardNumber: this.pad(x.cardNumber, 3),
                cardAmount:
                    x.cardQuantity > 0 ? x.cardQuantity : x.cardQuantity * -1,
                layout: CardLayout.NORMAL,
                rarity: 'C',
            };
        });
    }

    private pad(text: string | number, width: number, z?: string) {
        z = z || '0';
        text = text + '';
        return text.length >= width
            ? text
            : new Array(width - text.length + 1).join(z) + text;
    }
}
