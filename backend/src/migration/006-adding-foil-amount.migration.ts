import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class migrationNameSe1610886179094 implements MigrationInterface {
    name = 'addingFoilAmount1610886179094';

    public async up(queryRunner: QueryRunner): Promise<void> {
        const column: TableColumn = new TableColumn({
            name: 'foil_amount',
            type: 'int',
            isNullable: false,
            default: 0,
        });
        await queryRunner.addColumn('card_amount', column);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `card_amount` DROP COLUMN `foil_amount`');
    }
}
