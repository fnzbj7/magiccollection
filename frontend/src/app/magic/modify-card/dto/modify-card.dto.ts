export class ModifyCardDto {
    setShortName: string;
    cardQuantitys: CardQuantity[];
}

export class CardQuantity {
    cardNumber: number;
    cardQuantity: number;
    cardQuantityFoil: number;
}
