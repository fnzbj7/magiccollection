import { IsNull, MigrationInterface, QueryRunner } from 'typeorm';
import { Card } from '../card/entity/card.entity';
import { UniqueCard } from '../card/entity/unique-card.entity';

export class CreatingUniqueCardTable implements MigrationInterface {
    name = 'creatingUniqueCardTable1627043317584';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `unique_card` (`id` int NOT NULL AUTO_INCREMENT, `card_name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_772fa05b735d117a358ee9c664` (`card_name`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
        await queryRunner.query('ALTER TABLE `card` ADD `unique_card_1` int NULL');
        await queryRunner.query(
            'ALTER TABLE `card` ADD CONSTRAINT `FK_6232b46a19131360c7a7d235e9e` FOREIGN KEY (`unique_card_1`) REFERENCES `unique_card`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
        );

        const cardName = await queryRunner.manager
            .createQueryBuilder<Card>('Card', 'a')
            .select()
            .leftJoin('unique_card', 'b', 'a.name = b.card_name')
            .where({ uniqueCard: IsNull() })
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

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `card` DROP FOREIGN KEY `FK_6232b46a19131360c7a7d235e9e`',
        );
        await queryRunner.query('ALTER TABLE `card` DROP COLUMN `unique_card_1`');
        await queryRunner.query('DROP INDEX `IDX_772fa05b735d117a358ee9c664` ON `unique_card`');
        await queryRunner.query('DROP TABLE `unique_card`');
    }
}
