import { MigrationInterface, QueryRunner } from 'typeorm';

export class EventPrivilegeMigration implements MigrationInterface {
    name = 'eventPrivilege1599433606361';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "INSERT INTO `privilege` (`name`, `desc`) VALUES ('EVENT_MODIFY', 'Alakítani az eventek dolgait.')",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("Delete from `privilege` where name = 'EVENT_MODIFY'");
    }
}
