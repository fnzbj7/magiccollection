export class Card {
    cardExpansion: string;
    cardNumber: string;
    cardAmount: number;
    layout: CardLayout;
    name: string;
    rarity: string;
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
