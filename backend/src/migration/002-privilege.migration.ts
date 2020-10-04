import { MigrationInterface, QueryRunner } from 'typeorm';

export class PrivilegeMigration implements MigrationInterface {
    name = 'privilege1599256555469';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `privilege` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `desc` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
        );
        await queryRunner.query(
            'CREATE TABLE `user_privilege` (`user_1` int NOT NULL, `privilege_1` int NOT NULL, INDEX `IDX_033a23dad0d57aefc65929daf2` (`user_1`), INDEX `IDX_0d3ea1362d49e3c41a96f542fb` (`privilege_1`), PRIMARY KEY (`user_1`, `privilege_1`)) ENGINE=InnoDB',
        );
        await queryRunner.query(
            'ALTER TABLE `user_privilege` ADD CONSTRAINT `FK_033a23dad0d57aefc65929daf23` FOREIGN KEY (`user_1`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
        );
        await queryRunner.query(
            'ALTER TABLE `user_privilege` ADD CONSTRAINT `FK_0d3ea1362d49e3c41a96f542fbd` FOREIGN KEY (`privilege_1`) REFERENCES `privilege`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `user_privilege` DROP FOREIGN KEY `FK_0d3ea1362d49e3c41a96f542fbd`',
        );
        await queryRunner.query(
            'ALTER TABLE `user_privilege` DROP FOREIGN KEY `FK_033a23dad0d57aefc65929daf23`',
        );
        await queryRunner.query('DROP INDEX `IDX_0d3ea1362d49e3c41a96f542fb` ON `user_privilege`');
        await queryRunner.query('DROP INDEX `IDX_033a23dad0d57aefc65929daf2` ON `user_privilege`');
        await queryRunner.query('DROP TABLE `user_privilege`');
        await queryRunner.query('DROP TABLE `privilege`');
    }
}
