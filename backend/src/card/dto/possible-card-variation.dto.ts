import { CardVariantType } from '../entity/card-variant-type.enum';

export class PossibleCardVariationDto {
    id: number;
    cardVariantType: CardVariantType;
    hasNormal: boolean;
    hasFoil: boolean;
}
