export class Card {
    cardExpansion!: string;
    cardNumber!: string;
    cardAmount!: number;
    cardAmountFoil!: number;
    layout!: CardLayout;
    types!: string;
    colors!: string;
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

export enum CardType {
    CREATURE = 'Creature',
    ENCHANTMENT = 'Enchantment',
    PLANESWALKER = 'Planeswalker',
    INSTANT = 'Instant',
    SORCERY = 'Sorcery',
    ARTIFACT = 'Artifact',
    LAND = 'Land',
}

export enum CardColor {
    WHITE = 'W',
    BLUE = 'U',
    BLACK = 'B',
    RED = 'R',
    GREEN = 'G',
    COLORLESS = 'C',
}
