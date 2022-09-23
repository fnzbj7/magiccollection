import { MigrationInterface, QueryRunner } from 'typeorm';

export class typeAndColor1663941595622 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // TODO create columns
        await queryRunner.query("ALTER TABLE `card` ADD `types` varchar(100) NOT NULL default ''");
        await queryRunner.query("ALTER TABLE `card` ADD `colors` varchar(20) NOT NULL default ''");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // TODO drop columns
        await queryRunner.query('ALTER TABLE `card` DROP COLUMN `types`');
        await queryRunner.query('ALTER TABLE `card` DROP COLUMN `colors`');
    }
}
