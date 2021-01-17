import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitTableMigration implements MigrationInterface {
    name = 'initTable1599256555400';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NULL, `email` varchar(255) NULL, `password` varchar(255) NULL, `salt` varchar(255) NULL, `dci` varchar(10) NULL, `activated` tinyint NULL DEFAULT 0, `source` enum ('site', 'fb') NOT NULL DEFAULT 'site', UNIQUE INDEX `IDX_bc989f4315b237c89c463c07e9` (`email`, `source`), PRIMARY KEY (`id`)) ENGINE=InnoDB",
        );

        await queryRunner.query(
            'CREATE TABLE `card_set` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `short_name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
        await queryRunner.query(
            'CREATE TABLE `card` (`id` int NOT NULL AUTO_INCREMENT, `card_number` int NOT NULL, `name` varchar(255) NOT NULL, `rarity` varchar(255) NOT NULL, `layout` varchar(255) NOT NULL, `card_set_1` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
        await queryRunner.query(
            'CREATE TABLE `card_amount` (`id` int NOT NULL AUTO_INCREMENT, `amount` int NOT NULL, `user_1` int NOT NULL, `card_1` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
        await queryRunner.query(
            'CREATE TABLE `calendar_event` (`id` int NOT NULL AUTO_INCREMENT, `eventStart` datetime NOT NULL, `hour` int NOT NULL, `minute` int NOT NULL, `title` varchar(255) NOT NULL, `location` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
        await queryRunner.query(
            'ALTER TABLE `card` ADD CONSTRAINT `FK_b7e0fbc73a13223a3c03e7dc2c9` FOREIGN KEY (`card_set_1`) REFERENCES `card_set`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
        );
        await queryRunner.query(
            'ALTER TABLE `card_amount` ADD CONSTRAINT `FK_0d44ec4a683c6d1bfc9ecacbe0c` FOREIGN KEY (`user_1`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
        );
        await queryRunner.query(
            'ALTER TABLE `card_amount` ADD CONSTRAINT `FK_82083388ce3d2ffcbb8bfae06d4` FOREIGN KEY (`card_1`) REFERENCES `card`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `card_amount` DROP FOREIGN KEY `FK_82083388ce3d2ffcbb8bfae06d4`',
        );
        await queryRunner.query(
            'ALTER TABLE `card_amount` DROP FOREIGN KEY `FK_0d44ec4a683c6d1bfc9ecacbe0c`',
        );
        await queryRunner.query(
            'ALTER TABLE `card` DROP FOREIGN KEY `FK_b7e0fbc73a13223a3c03e7dc2c9`',
        );
        await queryRunner.query('DROP TABLE `calendar_event`');
        await queryRunner.query('DROP TABLE `card_amount`');
        await queryRunner.query('DROP TABLE `card`');
        await queryRunner.query('DROP TABLE `card_set`');
        await queryRunner.query('DROP INDEX `IDX_bc989f4315b237c89c463c07e9` ON `user`');
        await queryRunner.query('DROP TABLE `user`');
    }
}
