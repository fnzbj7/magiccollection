import { CardWithFoil } from '../../dto/foil.dto';
import { ModifyCardDto } from '../../dto/modify-card.dto';

export class AfterFinishForm {
    constructor(
        public reducedArr: ModifyCardDto,
        public rawCardNumbers: CardWithFoil[],
        public cardSet: string,
    ) {}
}
