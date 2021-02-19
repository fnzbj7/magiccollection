import { CardQuantity } from './card-quantity.model';

export class ModifyCardDto {
    constructor(public setShortName: string, public cardQuantitys: CardQuantity[]) {}
}
