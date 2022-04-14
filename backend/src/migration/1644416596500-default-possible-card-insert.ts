import { InsertResult, MigrationInterface, QueryRunner } from 'typeorm';
import { CardAmount } from '../card/entity/card-amount.entity';
import { CardVariantType } from '../card/entity/card-variant-type.enum';
import { CardVariation } from '../card/entity/card-variation.entity';
import { Card } from '../card/entity/card.entity';
import { PossibleCardVariation } from '../card/entity/possible-card-variation.entity';

export class defaultPossibleCardInsert1643458833698 implements MigrationInterface {
    name = 'DefaultPossibleCardInsert1644416596500';

    public async up(queryRunner: QueryRunner): Promise<void> {
        // TODO megkapni az összes card-ot és hozzárendelni egy possible card-ot
        const cards: Card[] = await queryRunner.manager
            .getRepository<Card>(Card)
            .createQueryBuilder('card')
            .select()
            .leftJoinAndSelect('card.cardAmount', 'cardAmount')
            .getMany();

        // const cards: Card[] = await queryRunner.manager
        //     .createQueryBuilder<Card>('Card', 'a')
        //     .select()
        //     .leftJoin('CardAmount', 'ca', 'a.in = ca.card_1')
        //     .relation('cardAmount')
        //     .loadMany()

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

        // console.log(cards);

        // TODO for loop
        await queryRunner.manager
            .getRepository<PossibleCardVariation>(PossibleCardVariation)
            .insert(insertDefaultPossibleCards);

        const cardVarioations: CardVariation[] = [];
        insertDefaultPossibleCards.forEach(possCard => {
            possCard.card.cardAmount.forEach(cardAmount => {
                const cardVariation = queryRunner.manager
                    .getRepository<CardVariation>(CardVariation)
                    .create();
                cardVariation.possibleCardVariation = possCard;
                cardVariation.cardAmount = cardAmount;
                cardVariation.nEn = cardAmount.amount;
                cardVariation.fEn = cardAmount.foilAmount;
                cardVarioations.push(cardVariation);
            });
        });

        await queryRunner.manager
            .getRepository<CardVariation>(CardVariation)
            .insert(cardVarioations);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.delete(CardVariation, {});
        await queryRunner.manager.delete(PossibleCardVariation, {});
    }
}
