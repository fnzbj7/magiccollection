import { InsertResult, QueryRunner } from 'typeorm';
import { CardAmount } from '../../card/entity/card-amount.entity';
import { CardSet } from '../../card/entity/card-set.entity';
import { Card } from '../../card/entity/card.entity';
import { UniqueCard } from '../../card/entity/unique-card.entity';

export class MigrationHelper {
    static async cardSetUp(
        queryRunner: QueryRunner,
        name: string,
        shortName: string,
        values: any[],
    ) {
        const insertResult: InsertResult = await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card_set')
            .values({ name, shortName })
            .execute();
        const cardSetId: number = insertResult.identifiers[0].id;

        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into<Card>('card', [`id`, `cardNumber`, `name`, `rarity`, `layout`, `cardSet`])
            .values(
                values.map(card => {
                    card.cardSet = { id: cardSetId };
                    return card;
                }),
            )
            .execute();

        const cardName = await queryRunner.manager
            .createQueryBuilder<Card>('Card', 'a')
            .select(['name'])
            .leftJoin(UniqueCard, 'b', 'a.name = b.card_name')
            .where('b.id is null')
            .groupBy('a.name')
            .getMany();

        const uniqueCardName = cardName.map(c => {
            return { cardName: c.name };
        });
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into(UniqueCard)
            .values(uniqueCardName)
            .execute();

        await queryRunner.query(
            'Update card a inner join unique_card b on a.name= b.card_name set a.unique_card_1 = b.id where a.unique_card_1 is null',
        );
    }

    static async cardSetDown(queryRunner: QueryRunner, shortName: string) {
        // Get the card set id
        const cardSet = await queryRunner.manager.getRepository<CardSet>(CardSet).findOne({
            where: { shortName },
        });

        const deletableCardAmounts: CardAmount[] = await queryRunner.manager
            .createQueryBuilder<CardAmount>(CardAmount, 'ca')
            .innerJoin(Card, 'card', 'card.id = ca.card_1')
            .where('card.card_set_1 = :cardsetid', { cardsetid: cardSet.id })
            .getMany();

        if (deletableCardAmounts.length > 0) {
            await queryRunner.manager.delete<CardAmount>(CardAmount, deletableCardAmounts);
        }

        await queryRunner.manager
            .createQueryBuilder()
            .delete()
            .from('card')
            .where('card_set_1 = :cardsetid', { cardsetid: cardSet.id })
            .execute();

        await queryRunner.manager
            .createQueryBuilder()
            .delete()
            .from('card_set')
            .where('short_name = :shortName', { shortName })
            .execute();
    }

    static async colorAndTypeUp(queryRunner: QueryRunner, shortName: string, cardValues: any[]) {
        // Select all the card,
        const cards = await queryRunner.manager
            .createQueryBuilder<Card>(Card, 'c')
            .innerJoin(CardSet, 'cs', 'cs.id = c.card_set_1')
            .where('cs.short_name = :shortName', { shortName })
            .getMany();

        const newList = cardValues.map(s => {
            const card = cards.find(c => c.cardNumber === s.cardNumber);
            return { ...card, ...s };
        });

        await queryRunner.manager.upsert<Card>(Card, newList, ['id']);
    }

    static async colorAndTypeDown(queryRunner: QueryRunner, shortName: string) {
        const cardSet = await queryRunner.manager
            .createQueryBuilder<CardSet>(CardSet, 'cs')
            .where('cs.short_name = :shortName', { shortName })
            .getOneOrFail();

        await queryRunner.manager
            .createQueryBuilder<Card>(Card, 'c')
            .update()
            .set({
                colors: '',
                types: '',
            })
            .where('card_set_1 = :id', { id: cardSet.id })
            .execute();
    }
}
