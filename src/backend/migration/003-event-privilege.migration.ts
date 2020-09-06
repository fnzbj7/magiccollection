import { MigrationInterface, QueryRunner } from 'typeorm';

export class EventPrivilegeMigration implements MigrationInterface {
    name = 'eventPrivilege1599433606361';

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('privilege')
            .values({ name: 'EVENT_MODIFY', desc: 'Alakítani az eventek dolgait.' })
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.manager
            .createQueryBuilder()
            .delete()
            .from('privilege')
            .where('name = :name', { name: 'EVENT_MODIFY' })
            .execute();
    }
}
