import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faSortAlphaDown, faSortAlphaDownAlt } from '@fortawesome/free-solid-svg-icons';
import { Card, CardLayout } from '../../../model/card.model';
import { CardWithFoil } from '../dto/foil.dto';
import { ModifyCardDto } from '../dto/modify-card.dto';

@Component({
    selector: 'app-modify-preview',
    templateUrl: './modify-preview.component.html',
    styleUrls: ['./modify-preview.component.css'],
})
export class ModifyPreviewComponent implements OnChanges {
    @Input() modifyCard!: ModifyCardDto;
    @Input() rawModifyCard!: CardWithFoil[];
    cards!: Card[];
    rawCards!: Card[];
    isRaw = false;

    faSortAlphaDownAlt = faSortAlphaDownAlt;
    faSortAlphaDown = faSortAlphaDown;
    isNormalOrder = true;

    ngOnChanges(changes: SimpleChanges): void {
        this.isNormalOrder = true;
        const modify: ModifyCardDto = changes.modifyCard.currentValue;
        this.cards = modify.cardQuantitys.map(x => ({
            cardExpansion: modify.setShortName,
            cardNumber: ('' + x.cardNumber).padStart(3, '0'),
            cardAmount: x.cardQuantity >= 0 ? x.cardQuantity : x.cardQuantity * -1,
            cardAmountFoil: x.cardQuantityFoil >= 0 ? x.cardQuantityFoil : x.cardQuantityFoil * -1,
            layout: CardLayout.NORMAL,
            rarity: 'C',
            name: 'Not relevant',
        }));

        this.rawCards = changes.rawModifyCard.currentValue.map(
            (x: CardWithFoil): Card => ({
                cardExpansion: modify.setShortName,
                cardNumber: ('' + x.cardNum).padStart(3, '0'),
                cardAmount: x.isFoil ? 0 : 1,
                cardAmountFoil: x.isFoil ? 1 : 0,
                layout: CardLayout.NORMAL,
                rarity: 'C',
                name: 'Not relevant',
            }),
        );
    }

    onChangeOrder() {
        this.isNormalOrder = !this.isNormalOrder;
        this.cards = this.cards.reverse();
        this.rawCards = this.rawCards.reverse();
    }

    onGrouping() {
        this.isRaw = !this.isRaw;
    }
}
