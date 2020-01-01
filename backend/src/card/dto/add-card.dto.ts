import { CardQuantity } from './card-quantity.model';

export class AddCardDto {
    setShortName: string;
    cardQuantitys: CardQuantity[];
}
