import { MigrationInterface, QueryRunner } from 'typeorm';
import { Card } from '../card/entity/card.entity';
import { UniqueCard } from '../card/entity/unique-card.entity';

export class uniqueCardFixAddingAfr1627731429267 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const cardName = await queryRunner.manager
            .createQueryBuilder<Card>('Card', 'a')
            .select()
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

    public async down(_queryRunner: QueryRunner): Promise<void> {
        //
    }
}
