import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserCalendarEventMigration implements MigrationInterface {
    name = 'UserCalendarEvent1599574111043';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE `user_calendar_event` (`calendar_event_1` int NOT NULL, `user_1` int NOT NULL, INDEX `IDX_c20f72188e935f0d6bd55562cf` (`calendar_event_1`), INDEX `IDX_ed7295fdfa122f1424a76a667f` (`user_1`), PRIMARY KEY (`calendar_event_1`, `user_1`)) ENGINE=InnoDB',
        );
        await queryRunner.query(
            'ALTER TABLE `user_calendar_event` ADD CONSTRAINT `FK_c20f72188e935f0d6bd55562cf9` FOREIGN KEY (`calendar_event_1`) REFERENCES `calendar_event`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
        );
        await queryRunner.query(
            'ALTER TABLE `user_calendar_event` ADD CONSTRAINT `FK_ed7295fdfa122f1424a76a667f3` FOREIGN KEY (`user_1`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE `user_calendar_event` DROP FOREIGN KEY `FK_ed7295fdfa122f1424a76a667f3`',
        );
        await queryRunner.query(
            'ALTER TABLE `user_calendar_event` DROP FOREIGN KEY `FK_c20f72188e935f0d6bd55562cf9`',
        );
        await queryRunner.query(
            'DROP INDEX `IDX_ed7295fdfa122f1424a76a667f` ON `user_calendar_event`',
        );
        await queryRunner.query(
            'DROP INDEX `IDX_c20f72188e935f0d6bd55562cf` ON `user_calendar_event`',
        );
        await queryRunner.query('DROP TABLE `user_calendar_event`');
    }
}
