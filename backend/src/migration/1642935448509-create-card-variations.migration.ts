import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrationNameSe1642935448509 implements MigrationInterface {
    name = 'migrationNameSe1642935448509';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE \`possible_card_variation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`cardVariantType\` enum ('normal', 'etched', 'prerelease', 'stamped', 'list') NOT NULL DEFAULT 'normal', \`has_normal\` tinyint NOT NULL, \`has_foil\` tinyint NOT NULL, \`possible_card_variation_1\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `CREATE TABLE \`card_variation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nEn\` int NOT NULL DEFAULT '0', \`fEn\` int NOT NULL DEFAULT '0', \`nJp\` int NOT NULL DEFAULT '0', \`fJp\` int NOT NULL DEFAULT '0', \`nSp\` int NOT NULL DEFAULT '0', \`fSp\` int NOT NULL DEFAULT '0', \`nFr\` int NOT NULL DEFAULT '0', \`fFr\` int NOT NULL DEFAULT '0', \`nDe\` int NOT NULL DEFAULT '0', \`fDe\` int NOT NULL DEFAULT '0', \`nIt\` int NOT NULL DEFAULT '0', \`fIt\` int NOT NULL DEFAULT '0', \`nPt\` int NOT NULL DEFAULT '0', \`fPt\` int NOT NULL DEFAULT '0', \`nKr\` int NOT NULL DEFAULT '0', \`fKr\` int NOT NULL DEFAULT '0', \`nRu\` int NOT NULL DEFAULT '0', \`fRu\` int NOT NULL DEFAULT '0', \`nCs\` int NOT NULL DEFAULT '0', \`fCs\` int NOT NULL DEFAULT '0', \`nCt\` int NOT NULL DEFAULT '0', \`fCt\` int NOT NULL DEFAULT '0', \`card_amount_1\` int NULL, \`possible_card_variation_1\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
        );
        await queryRunner.query(
            `ALTER TABLE \`possible_card_variation\` ADD CONSTRAINT \`FK_06f586beff3c441656b0edace94\` FOREIGN KEY (\`possible_card_variation_1\`) REFERENCES \`card\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`card_variation\` ADD CONSTRAINT \`FK_173bfd618e4459fbaad267ed821\` FOREIGN KEY (\`card_amount_1\`) REFERENCES \`card_amount\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE \`card_variation\` ADD CONSTRAINT \`FK_d6f845a5e46e030fb1bde024ed1\` FOREIGN KEY (\`possible_card_variation_1\`) REFERENCES \`possible_card_variation\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE \`card_variation\` DROP FOREIGN KEY \`FK_d6f845a5e46e030fb1bde024ed1\``,
        );
        await queryRunner.query(
            `ALTER TABLE \`card_variation\` DROP FOREIGN KEY \`FK_173bfd618e4459fbaad267ed821\``,
        );
        await queryRunner.query(
            `ALTER TABLE \`possible_card_variation\` DROP FOREIGN KEY \`FK_06f586beff3c441656b0edace94\``,
        );
        await queryRunner.query(`DROP TABLE \`card_variation\``);
        await queryRunner.query(`DROP TABLE \`possible_card_variation\``);
    }
}
