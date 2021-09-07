export class Card {
    cardExpansion!: string;
    cardNumber!: string;
    cardAmount!: number;
    cardAmountFoil!: number;
    layout!: CardLayout;
    name!: string;
    rarity!: string;
    uniqueCardId?: number;
}

export enum CardLayout {
    NORMAL = 'normal',
    TRANSFORM = 'transform',
    MELD = 'meld',
    ADVENTURE = 'adventure',
    AFTERMATH = 'aftermath',
    SAGA = 'saga',
    SPLIT = 'split',

    NONE = 'none',
}
