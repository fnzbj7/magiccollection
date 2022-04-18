import { CardVariantType } from '../entity/card-variant-type.enum';
import { CardLangEnum } from './card-lang.enum';

export class CardQuantity {
    cardNumber: number;
    cardQuantity: number;
    cardQuantityFoil: number;
    language: CardLangEnum;
    type: CardVariantType;
}
