import { MigrationInterface, QueryRunner } from 'typeorm';
import { CardSet } from '../card/entity/card-set.entity';
import { CardVariantType } from '../card/entity/card-variant-type.enum';
import { Card } from '../card/entity/card.entity';
import { PossibleCardVariation } from '../card/entity/possible-card-variation.entity';

export class addingNormalSnc1651003866790 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const cards = await queryRunner.manager
            .createQueryBuilder<Card>('Card', 'c')
            .select('c.id')
            .leftJoin(CardSet, 'cs', 'c.card_set_1 = cs.id')
            .where('cs.short_name = :shortName', { shortName: 'SNC' })
            .getMany();

        const insertDefaultPossibleCards: PossibleCardVariation[] = [];
        cards.forEach(card => {
            const defaultPossibleCard = queryRunner.manager
                .getRepository<PossibleCardVariation>(PossibleCardVariation)
                .create();
            defaultPossibleCard.card = card;
            defaultPossibleCard.cardVariantType = CardVariantType.NORMAL;
            defaultPossibleCard.hasNormal = true;
            defaultPossibleCard.hasFoil = true;
            insertDefaultPossibleCards.push(defaultPossibleCard);
        });

        await queryRunner.manager
            .getRepository<PossibleCardVariation>(PossibleCardVariation)
            .insert(insertDefaultPossibleCards);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Nem láttam értelmét lefejleszteni
    }
}
