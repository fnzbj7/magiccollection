import { InsertResult, MigrationInterface, ObjectLiteral, QueryRunner } from 'typeorm';
import { CardSet } from '../card/entity/card-set.entity';

// tslint:disable: max-line-length
export class AddingZnrMigration implements MigrationInterface {
    name = 'AddingZnrMigration1600810686673';

    async up(queryRunner: QueryRunner): Promise<any> {
        /* Insert cardSet */
        const insertResult: InsertResult = await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card_set')
            .values({ name: 'Zendikar Rising', short_name: 'ZNR' })
            .execute();
        const cardSetId: number = insertResult.identifiers[0].id;

        /* Insert Cards */
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 1,
                card_set_1: cardSetId,
                name: 'Allied Assault',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 2,
                card_set_1: cardSetId,
                name: 'Angel of Destiny',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 3,
                card_set_1: cardSetId,
                name: 'Angelheart Protector',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 4,
                card_set_1: cardSetId,
                name: 'Archon of Emeria',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 5,
                card_set_1: cardSetId,
                name: 'Archpriest of Iona',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 6,
                card_set_1: cardSetId,
                name: 'Attended Healer',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 7,
                card_set_1: cardSetId,
                name: 'Canyon Jerboa',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 8,
                card_set_1: cardSetId,
                name: 'Cliffhaven Sell-Sword',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 9,
                card_set_1: cardSetId,
                name: 'Dauntless Unity',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 10,
                card_set_1: cardSetId,
                name: 'Disenchant',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 11,
                card_set_1: cardSetId,
                name: 'Emeria Captain',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 12,
                card_set_1: cardSetId,
                name: "Emeria's Call // Emeria, Shattered Skyclave",
                rarity: 'MYTHIC',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 13,
                card_set_1: cardSetId,
                name: 'Expedition Healer',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 14,
                card_set_1: cardSetId,
                name: 'Farsight Adept',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 15,
                card_set_1: cardSetId,
                name: 'Fearless Fledgling',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 16,
                card_set_1: cardSetId,
                name: 'Felidar Retreat',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 17,
                card_set_1: cardSetId,
                name: 'Journey to Oblivion',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 18,
                card_set_1: cardSetId,
                name: 'Kabira Outrider',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 19,
                card_set_1: cardSetId,
                name: 'Kabira Takedown // Kabira Plateau',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 20,
                card_set_1: cardSetId,
                name: 'Kitesail Cleric',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 21,
                card_set_1: cardSetId,
                name: 'Kor Blademaster',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 22,
                card_set_1: cardSetId,
                name: 'Kor Celebrant',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 23,
                card_set_1: cardSetId,
                name: 'Legion Angel',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 24,
                card_set_1: cardSetId,
                name: 'Luminarch Aspirant',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 25,
                card_set_1: cardSetId,
                name: 'Makindi Ox',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 26,
                card_set_1: cardSetId,
                name: 'Makindi Stampede // Makindi Mesas',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 27,
                card_set_1: cardSetId,
                name: 'Maul of the Skyclaves',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 28,
                card_set_1: cardSetId,
                name: 'Mesa Lynx',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 29,
                card_set_1: cardSetId,
                name: "Nahiri's Binding",
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 30,
                card_set_1: cardSetId,
                name: 'Ondu Inversion // Ondu Skyruins',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 31,
                card_set_1: cardSetId,
                name: 'Paired Tactician',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 32,
                card_set_1: cardSetId,
                name: 'Practiced Tactics',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 33,
                card_set_1: cardSetId,
                name: 'Pressure Point',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 34,
                card_set_1: cardSetId,
                name: 'Prowling Felidar',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 35,
                card_set_1: cardSetId,
                name: 'Resolute Strike',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 36,
                card_set_1: cardSetId,
                name: 'Sea Gate Banneret',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 37,
                card_set_1: cardSetId,
                name: 'Sejiri Shelter // Sejiri Glacier',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 38,
                card_set_1: cardSetId,
                name: 'Shepherd of Heroes',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 39,
                card_set_1: cardSetId,
                name: 'Skyclave Apparition',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 40,
                card_set_1: cardSetId,
                name: 'Skyclave Cleric // Skyclave Basilica',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 41,
                card_set_1: cardSetId,
                name: 'Squad Commander',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 42,
                card_set_1: cardSetId,
                name: 'Smite the Monstrous',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 43,
                card_set_1: cardSetId,
                name: 'Tazeem Raptor',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 44,
                card_set_1: cardSetId,
                name: 'Tazri, Beacon of Unity',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 45,
                card_set_1: cardSetId,
                name: 'Anticognition',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 46,
                card_set_1: cardSetId,
                name: 'Beyeen Veil // Beyeen Coast',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 47,
                card_set_1: cardSetId,
                name: 'Bubble Snare',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 48,
                card_set_1: cardSetId,
                name: 'Cascade Seer',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 49,
                card_set_1: cardSetId,
                name: 'Charix, the Raging Isle',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 50,
                card_set_1: cardSetId,
                name: 'Chilling Trap',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 51,
                card_set_1: cardSetId,
                name: 'Cleric of Chill Depths',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 52,
                card_set_1: cardSetId,
                name: 'Concerted Defense',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 53,
                card_set_1: cardSetId,
                name: 'Confounding Conundrum',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 54,
                card_set_1: cardSetId,
                name: 'Coralhelm Chronicler',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 55,
                card_set_1: cardSetId,
                name: 'Cunning Geysermage',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 56,
                card_set_1: cardSetId,
                name: 'Deliberate',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 57,
                card_set_1: cardSetId,
                name: 'Expedition Diviner',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 58,
                card_set_1: cardSetId,
                name: 'Field Research',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 59,
                card_set_1: cardSetId,
                name: 'Glacial Grasp',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 60,
                card_set_1: cardSetId,
                name: 'Glasspool Mimic // Glasspool Shore',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 61,
                card_set_1: cardSetId,
                name: 'Inscription of Insight',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 62,
                card_set_1: cardSetId,
                name: 'Into the Roil',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 63,
                card_set_1: cardSetId,
                name: 'Jace, Mirror Mage',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 64,
                card_set_1: cardSetId,
                name: 'Jwari Disruption // Jwari Ruins',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 65,
                card_set_1: cardSetId,
                name: 'Living Tempest',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 66,
                card_set_1: cardSetId,
                name: "Lullmage's Domination",
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 67,
                card_set_1: cardSetId,
                name: 'Maddening Cacophony',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 68,
                card_set_1: cardSetId,
                name: 'Master of Winds',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 69,
                card_set_1: cardSetId,
                name: 'Merfolk Falconer',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 70,
                card_set_1: cardSetId,
                name: 'Merfolk Windrobber',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 71,
                card_set_1: cardSetId,
                name: 'Negate',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 72,
                card_set_1: cardSetId,
                name: 'Nimble Trapfinder',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 73,
                card_set_1: cardSetId,
                name: 'Risen Riptide',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 74,
                card_set_1: cardSetId,
                name: 'Roost of Drakes',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 75,
                card_set_1: cardSetId,
                name: 'Ruin Crab',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 76,
                card_set_1: cardSetId,
                name: 'Sea Gate Restoration // Sea Gate, Reborn',
                rarity: 'MYTHIC',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 77,
                card_set_1: cardSetId,
                name: 'Sea Gate Stormcaller',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 78,
                card_set_1: cardSetId,
                name: 'Seafloor Stalker',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 79,
                card_set_1: cardSetId,
                name: 'Shell Shield',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 80,
                card_set_1: cardSetId,
                name: 'Silundi Vision // Silundi Isle',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 81,
                card_set_1: cardSetId,
                name: 'Skyclave Plunder',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 82,
                card_set_1: cardSetId,
                name: 'Skyclave Squid',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 83,
                card_set_1: cardSetId,
                name: 'Sure-Footed Infiltrator',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 84,
                card_set_1: cardSetId,
                name: 'Tazeem Roilmage',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 85,
                card_set_1: cardSetId,
                name: 'Thieving Skydiver',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 86,
                card_set_1: cardSetId,
                name: 'Umara Wizard // Umara Skyfalls',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 87,
                card_set_1: cardSetId,
                name: 'Windrider Wizard',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 88,
                card_set_1: cardSetId,
                name: 'Zulaport Duelist',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 89,
                card_set_1: cardSetId,
                name: 'Acquisitions Expert',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 90,
                card_set_1: cardSetId,
                name: "Agadeem's Awakening // Agadeem, the Undercrypt",
                rarity: 'MYTHIC',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 91,
                card_set_1: cardSetId,
                name: 'Blackbloom Rogue // Blackbloom Bog',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 92,
                card_set_1: cardSetId,
                name: 'Blood Beckoning',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 93,
                card_set_1: cardSetId,
                name: 'Blood Price',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 94,
                card_set_1: cardSetId,
                name: "Bloodchief's Thirst",
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 95,
                card_set_1: cardSetId,
                name: 'Coveted Prize',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 96,
                card_set_1: cardSetId,
                name: 'Deadly Alliance',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 97,
                card_set_1: cardSetId,
                name: "Demon's Disciple",
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 98,
                card_set_1: cardSetId,
                name: 'Drana, the Last Bloodchief',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 99,
                card_set_1: cardSetId,
                name: "Drana's Silencer",
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 100,
                card_set_1: cardSetId,
                name: 'Dreadwurm',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 101,
                card_set_1: cardSetId,
                name: 'Expedition Skulker',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 102,
                card_set_1: cardSetId,
                name: 'Feed the Swarm',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 103,
                card_set_1: cardSetId,
                name: 'Ghastly Gloomhunter',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 104,
                card_set_1: cardSetId,
                name: 'Guul Draz Mucklord',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 105,
                card_set_1: cardSetId,
                name: 'Hagra Constrictor',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 106,
                card_set_1: cardSetId,
                name: 'Hagra Mauling // Hagra Broodpit',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 107,
                card_set_1: cardSetId,
                name: 'Highborn Vampire',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 108,
                card_set_1: cardSetId,
                name: 'Inscription of Ruin',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 109,
                card_set_1: cardSetId,
                name: 'Lithoform Blight',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 110,
                card_set_1: cardSetId,
                name: 'Malakir Blood-Priest',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 111,
                card_set_1: cardSetId,
                name: 'Malakir Rebirth // Malakir Mire',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 112,
                card_set_1: cardSetId,
                name: 'Marauding Blight-Priest',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 113,
                card_set_1: cardSetId,
                name: 'Mind Carver',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 114,
                card_set_1: cardSetId,
                name: 'Mind Drain',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 115,
                card_set_1: cardSetId,
                name: 'Nighthawk Scavenger',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 116,
                card_set_1: cardSetId,
                name: 'Nimana Skitter-Sneak',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 117,
                card_set_1: cardSetId,
                name: 'Nimana Skydancer',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 118,
                card_set_1: cardSetId,
                name: 'Nullpriest of Oblivion',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 119,
                card_set_1: cardSetId,
                name: "Oblivion's Hunger",
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 120,
                card_set_1: cardSetId,
                name: 'Pelakka Predation // Pelakka Caverns',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 121,
                card_set_1: cardSetId,
                name: 'Scion of the Swarm',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 122,
                card_set_1: cardSetId,
                name: 'Scourge of the Skyclaves',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 123,
                card_set_1: cardSetId,
                name: 'Shadow Stinger',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 124,
                card_set_1: cardSetId,
                name: "Shadows' Verdict",
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 125,
                card_set_1: cardSetId,
                name: 'Skyclave Shade',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 126,
                card_set_1: cardSetId,
                name: 'Skyclave Shadowcat',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 127,
                card_set_1: cardSetId,
                name: 'Soul Shatter',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 128,
                card_set_1: cardSetId,
                name: 'Subtle Strike',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 129,
                card_set_1: cardSetId,
                name: "Taborax, Hope's Demise",
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 130,
                card_set_1: cardSetId,
                name: 'Thwart the Grave',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 131,
                card_set_1: cardSetId,
                name: 'Vanquish the Weak',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 132,
                card_set_1: cardSetId,
                name: 'Zof Consumption // Zof Bloodbog',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 133,
                card_set_1: cardSetId,
                name: 'Akoum Hellhound',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 134,
                card_set_1: cardSetId,
                name: 'Akoum Warrior // Akoum Teeth',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 135,
                card_set_1: cardSetId,
                name: 'Ardent Electromancer',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 136,
                card_set_1: cardSetId,
                name: 'Cinderclasm',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 137,
                card_set_1: cardSetId,
                name: 'Cleansing Wildfire',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 138,
                card_set_1: cardSetId,
                name: 'Expedition Champion',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 139,
                card_set_1: cardSetId,
                name: 'Fireblade Charger',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 140,
                card_set_1: cardSetId,
                name: 'Fissure Wizard',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 141,
                card_set_1: cardSetId,
                name: 'Goma Fada Vanguard',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 142,
                card_set_1: cardSetId,
                name: 'Grotag Bug-Catcher',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 143,
                card_set_1: cardSetId,
                name: 'Grotag Night-Runner',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 144,
                card_set_1: cardSetId,
                name: 'Inordinate Rage',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 145,
                card_set_1: cardSetId,
                name: 'Kargan Intimidator',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 146,
                card_set_1: cardSetId,
                name: "Kazuul's Fury // Kazuul's Cliffs",
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 147,
                card_set_1: cardSetId,
                name: 'Leyline Tyrant',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 148,
                card_set_1: cardSetId,
                name: 'Magmatic Channeler',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 149,
                card_set_1: cardSetId,
                name: 'Molten Blast',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 150,
                card_set_1: cardSetId,
                name: 'Moraug, Fury of Akoum',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 151,
                card_set_1: cardSetId,
                name: "Nahiri's Lithoforming",
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 152,
                card_set_1: cardSetId,
                name: 'Pyroclastic Hellion',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 153,
                card_set_1: cardSetId,
                name: 'Relic Robber',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 154,
                card_set_1: cardSetId,
                name: 'Rockslide Sorcerer',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 155,
                card_set_1: cardSetId,
                name: 'Roil Eruption',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 156,
                card_set_1: cardSetId,
                name: 'Roiling Vortex',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 157,
                card_set_1: cardSetId,
                name: 'Scavenged Blade',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 158,
                card_set_1: cardSetId,
                name: 'Scorch Rider',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 159,
                card_set_1: cardSetId,
                name: 'Shatterskull Charger',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 160,
                card_set_1: cardSetId,
                name: 'Shatterskull Minotaur',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 161,
                card_set_1: cardSetId,
                name: 'Shatterskull Smashing // Shatterskull, the Hammer Pass',
                rarity: 'MYTHIC',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 162,
                card_set_1: cardSetId,
                name: 'Sizzling Barrage',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 163,
                card_set_1: cardSetId,
                name: 'Skyclave Geopede',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 164,
                card_set_1: cardSetId,
                name: 'Sneaking Guide',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 165,
                card_set_1: cardSetId,
                name: 'Song-Mad Treachery // Song-Mad Ruins',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 166,
                card_set_1: cardSetId,
                name: 'Spikefield Hazard // Spikefield Cave',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 167,
                card_set_1: cardSetId,
                name: 'Spitfire Lagac',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 168,
                card_set_1: cardSetId,
                name: 'Synchronized Spellcraft',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 169,
                card_set_1: cardSetId,
                name: 'Teeterpeak Ambusher',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 170,
                card_set_1: cardSetId,
                name: 'Thundering Rebuke',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 171,
                card_set_1: cardSetId,
                name: 'Thundering Sparkmage',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 172,
                card_set_1: cardSetId,
                name: 'Tormenting Voice',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 173,
                card_set_1: cardSetId,
                name: 'Tuktuk Rubblefort',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 174,
                card_set_1: cardSetId,
                name: 'Valakut Awakening // Valakut Stoneforge',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 175,
                card_set_1: cardSetId,
                name: 'Valakut Exploration',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 176,
                card_set_1: cardSetId,
                name: 'Wayward Guide-Beast',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 177,
                card_set_1: cardSetId,
                name: 'Adventure Awaits',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 178,
                card_set_1: cardSetId,
                name: 'Ancient Greenwarden',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 179,
                card_set_1: cardSetId,
                name: 'Ashaya, Soul of the Wild',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 180,
                card_set_1: cardSetId,
                name: 'Bala Ged Recovery // Bala Ged Sanctuary',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 181,
                card_set_1: cardSetId,
                name: 'Broken Wings',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 182,
                card_set_1: cardSetId,
                name: 'Canopy Baloth',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 183,
                card_set_1: cardSetId,
                name: 'Cragplate Baloth',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 184,
                card_set_1: cardSetId,
                name: 'Dauntless Survivor',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 185,
                card_set_1: cardSetId,
                name: 'Gnarlid Colony',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 186,
                card_set_1: cardSetId,
                name: 'Inscription of Abundance',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 187,
                card_set_1: cardSetId,
                name: 'Iridescent Hornbeetle',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 188,
                card_set_1: cardSetId,
                name: 'Joraga Visionary',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 189,
                card_set_1: cardSetId,
                name: 'Kazandu Mammoth // Kazandu Valley',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 190,
                card_set_1: cardSetId,
                name: 'Kazandu Nectarpot',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 191,
                card_set_1: cardSetId,
                name: 'Kazandu Stomper',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 192,
                card_set_1: cardSetId,
                name: 'Khalni Ambush // Khalni Territory',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 193,
                card_set_1: cardSetId,
                name: 'Lotus Cobra',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 194,
                card_set_1: cardSetId,
                name: 'Might of Murasa',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 195,
                card_set_1: cardSetId,
                name: 'Murasa Brute',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 196,
                card_set_1: cardSetId,
                name: 'Murasa Sproutling',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 197,
                card_set_1: cardSetId,
                name: "Nissa's Zendikon",
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 198,
                card_set_1: cardSetId,
                name: 'Oran-Rief Ooze',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 199,
                card_set_1: cardSetId,
                name: 'Rabid Bite',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 200,
                card_set_1: cardSetId,
                name: 'Reclaim the Wastes',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 201,
                card_set_1: cardSetId,
                name: 'Roiling Regrowth',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 202,
                card_set_1: cardSetId,
                name: 'Scale the Heights',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 203,
                card_set_1: cardSetId,
                name: 'Scute Swarm',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 204,
                card_set_1: cardSetId,
                name: 'Skyclave Pick-Axe',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 205,
                card_set_1: cardSetId,
                name: 'Springmantle Cleric',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 206,
                card_set_1: cardSetId,
                name: 'Strength of Solidarity',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 207,
                card_set_1: cardSetId,
                name: 'Swarm Shambler',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 208,
                card_set_1: cardSetId,
                name: 'Tajuru Blightblade',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 209,
                card_set_1: cardSetId,
                name: 'Tajuru Paragon',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 210,
                card_set_1: cardSetId,
                name: 'Tajuru Snarecaster',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 211,
                card_set_1: cardSetId,
                name: 'Tangled Florahedron // Tangled Vale',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 212,
                card_set_1: cardSetId,
                name: 'Taunting Arbormage',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 213,
                card_set_1: cardSetId,
                name: 'Territorial Scythecat',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 214,
                card_set_1: cardSetId,
                name: 'Turntimber Ascetic',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 215,
                card_set_1: cardSetId,
                name: 'Turntimber Symbiosis // Turntimber, Serpentine Wood',
                rarity: 'MYTHIC',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 216,
                card_set_1: cardSetId,
                name: 'Vastwood Fortification // Vastwood Thicket',
                rarity: 'UNCOMMON',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 217,
                card_set_1: cardSetId,
                name: 'Vastwood Surge',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 218,
                card_set_1: cardSetId,
                name: 'Veteran Adventurer',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 219,
                card_set_1: cardSetId,
                name: 'Vine Gecko',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 220,
                card_set_1: cardSetId,
                name: 'Akiri, Fearless Voyager',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 221,
                card_set_1: cardSetId,
                name: 'Brushfire Elemental',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 222,
                card_set_1: cardSetId,
                name: "Cleric of Life's Bond",
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 223,
                card_set_1: cardSetId,
                name: 'Grakmaw, Skyclave Ravager',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 224,
                card_set_1: cardSetId,
                name: 'Kargan Warleader',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 225,
                card_set_1: cardSetId,
                name: 'Kaza, Roil Chaser',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 226,
                card_set_1: cardSetId,
                name: 'Linvala, Shield of Sea Gate',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 227,
                card_set_1: cardSetId,
                name: "Lullmage's Familiar",
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 228,
                card_set_1: cardSetId,
                name: 'Moss-Pit Skeleton',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 229,
                card_set_1: cardSetId,
                name: 'Murasa Rootgrazer',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 230,
                card_set_1: cardSetId,
                name: 'Nahiri, Heir of the Ancients',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 231,
                card_set_1: cardSetId,
                name: 'Nissa of Shadowed Boughs',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 232,
                card_set_1: cardSetId,
                name: 'Omnath, Locus of Creation',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 233,
                card_set_1: cardSetId,
                name: 'Orah, Skyclave Hierophant',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 234,
                card_set_1: cardSetId,
                name: 'Phylath, World Sculptor',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 235,
                card_set_1: cardSetId,
                name: "Ravager's Mace",
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 236,
                card_set_1: cardSetId,
                name: 'Soaring Thought-Thief',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 237,
                card_set_1: cardSetId,
                name: 'Spoils of Adventure',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 238,
                card_set_1: cardSetId,
                name: 'Umara Mystic',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 239,
                card_set_1: cardSetId,
                name: 'Verazol, the Split Current',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 240,
                card_set_1: cardSetId,
                name: 'Yasharn, Implacable Earth',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 241,
                card_set_1: cardSetId,
                name: 'Zagras, Thief of Heartbeats',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 242,
                card_set_1: cardSetId,
                name: 'Zareth San, the Trickster',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 243,
                card_set_1: cardSetId,
                name: 'Cliffhaven Kitesail',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 244,
                card_set_1: cardSetId,
                name: 'Forsaken Monument',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 245,
                card_set_1: cardSetId,
                name: 'Lithoform Engine',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 246,
                card_set_1: cardSetId,
                name: 'Myriad Construct',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 247,
                card_set_1: cardSetId,
                name: 'Relic Amulet',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 248,
                card_set_1: cardSetId,
                name: 'Relic Axe',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 249,
                card_set_1: cardSetId,
                name: 'Relic Golem',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 250,
                card_set_1: cardSetId,
                name: 'Relic Vial',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 251,
                card_set_1: cardSetId,
                name: 'Sea Gate Colossus',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 252,
                card_set_1: cardSetId,
                name: 'Skyclave Relic',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 253,
                card_set_1: cardSetId,
                name: 'Skyclave Sentinel',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 254,
                card_set_1: cardSetId,
                name: 'Spare Supplies',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 255,
                card_set_1: cardSetId,
                name: 'Stonework Packbeast',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 256,
                card_set_1: cardSetId,
                name: 'Utility Knife',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 257,
                card_set_1: cardSetId,
                name: 'Base Camp',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 258,
                card_set_1: cardSetId,
                name: 'Branchloft Pathway // Boulderloft Pathway',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 259,
                card_set_1: cardSetId,
                name: 'Brightclimb Pathway // Grimclimb Pathway',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 260,
                card_set_1: cardSetId,
                name: 'Clearwater Pathway // Murkwater Pathway',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 261,
                card_set_1: cardSetId,
                name: 'Cragcrown Pathway // Timbercrown Pathway',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 262,
                card_set_1: cardSetId,
                name: 'Crawling Barrens',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 263,
                card_set_1: cardSetId,
                name: 'Needleverge Pathway // Pillarverge Pathway',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 264,
                card_set_1: cardSetId,
                name: 'Riverglide Pathway // Lavaglide Pathway',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 265,
                card_set_1: cardSetId,
                name: 'Throne of Makindi',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 266,
                card_set_1: cardSetId,
                name: 'Plains',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 267,
                card_set_1: cardSetId,
                name: 'Plains',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 268,
                card_set_1: cardSetId,
                name: 'Plains',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 269,
                card_set_1: cardSetId,
                name: 'Island',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 270,
                card_set_1: cardSetId,
                name: 'Island',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 271,
                card_set_1: cardSetId,
                name: 'Island',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 272,
                card_set_1: cardSetId,
                name: 'Swamp',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 273,
                card_set_1: cardSetId,
                name: 'Swamp',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 274,
                card_set_1: cardSetId,
                name: 'Swamp',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 275,
                card_set_1: cardSetId,
                name: 'Mountain',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 276,
                card_set_1: cardSetId,
                name: 'Mountain',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 277,
                card_set_1: cardSetId,
                name: 'Mountain',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 278,
                card_set_1: cardSetId,
                name: 'Forest',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 279,
                card_set_1: cardSetId,
                name: 'Forest',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 280,
                card_set_1: cardSetId,
                name: 'Forest',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 281,
                card_set_1: cardSetId,
                name: 'Jace, Mirror Mage',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 282,
                card_set_1: cardSetId,
                name: 'Nahiri, Heir of the Ancients',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 283,
                card_set_1: cardSetId,
                name: 'Nissa of Shadowed Boughs',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 284,
                card_set_1: cardSetId,
                name: 'Branchloft Pathway // Boulderloft Pathway',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 285,
                card_set_1: cardSetId,
                name: 'Brightclimb Pathway // Grimclimb Pathway',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 286,
                card_set_1: cardSetId,
                name: 'Clearwater Pathway // Murkwater Pathway',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 287,
                card_set_1: cardSetId,
                name: 'Cragcrown Pathway // Timbercrown Pathway',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 288,
                card_set_1: cardSetId,
                name: 'Needleverge Pathway // Pillarverge Pathway',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 289,
                card_set_1: cardSetId,
                name: 'Riverglide Pathway // Lavaglide Pathway',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 290,
                card_set_1: cardSetId,
                name: 'Canyon Jerboa',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 291,
                card_set_1: cardSetId,
                name: 'Fearless Fledgling',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 292,
                card_set_1: cardSetId,
                name: 'Felidar Retreat',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 293,
                card_set_1: cardSetId,
                name: 'Makindi Ox',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 294,
                card_set_1: cardSetId,
                name: 'Prowling Felidar',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 295,
                card_set_1: cardSetId,
                name: 'Ruin Crab',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 296,
                card_set_1: cardSetId,
                name: 'Skyclave Squid',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 297,
                card_set_1: cardSetId,
                name: 'Dreadwurm',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 298,
                card_set_1: cardSetId,
                name: 'Skyclave Shade',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 299,
                card_set_1: cardSetId,
                name: 'Akoum Hellhound',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 300,
                card_set_1: cardSetId,
                name: 'Moraug, Fury of Akoum',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 301,
                card_set_1: cardSetId,
                name: 'Skyclave Geopede',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 302,
                card_set_1: cardSetId,
                name: 'Spitfire Lagac',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 303,
                card_set_1: cardSetId,
                name: 'Valakut Exploration',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 304,
                card_set_1: cardSetId,
                name: 'Canopy Baloth',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 305,
                card_set_1: cardSetId,
                name: 'Kazandu Mammoth // Kazandu Valley',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 306,
                card_set_1: cardSetId,
                name: 'Kazandu Nectarpot',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 307,
                card_set_1: cardSetId,
                name: 'Lotus Cobra',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 308,
                card_set_1: cardSetId,
                name: 'Scute Swarm',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 309,
                card_set_1: cardSetId,
                name: 'Skyclave Pick-Axe',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 310,
                card_set_1: cardSetId,
                name: 'Territorial Scythecat',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 311,
                card_set_1: cardSetId,
                name: 'Brushfire Elemental',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 312,
                card_set_1: cardSetId,
                name: 'Omnath, Locus of Creation',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 313,
                card_set_1: cardSetId,
                name: 'Phylath, World Sculptor',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 314,
                card_set_1: cardSetId,
                name: 'Angel of Destiny',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 315,
                card_set_1: cardSetId,
                name: 'Archon of Emeria',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 316,
                card_set_1: cardSetId,
                name: 'Archpriest of Iona',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 317,
                card_set_1: cardSetId,
                name: "Emeria's Call // Emeria, Shattered Skyclave",
                rarity: 'MYTHIC',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 318,
                card_set_1: cardSetId,
                name: 'Legion Angel',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 319,
                card_set_1: cardSetId,
                name: 'Luminarch Aspirant',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 320,
                card_set_1: cardSetId,
                name: 'Maul of the Skyclaves',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 321,
                card_set_1: cardSetId,
                name: 'Ondu Inversion // Ondu Skyruins',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 322,
                card_set_1: cardSetId,
                name: 'Skyclave Apparition',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 323,
                card_set_1: cardSetId,
                name: 'Squad Commander',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 324,
                card_set_1: cardSetId,
                name: 'Tazri, Beacon of Unity',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 325,
                card_set_1: cardSetId,
                name: 'Charix, the Raging Isle',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 326,
                card_set_1: cardSetId,
                name: 'Confounding Conundrum',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 327,
                card_set_1: cardSetId,
                name: 'Coralhelm Chronicler',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 328,
                card_set_1: cardSetId,
                name: 'Glasspool Mimic // Glasspool Shore',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 329,
                card_set_1: cardSetId,
                name: 'Inscription of Insight',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 330,
                card_set_1: cardSetId,
                name: 'Maddening Cacophony',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 331,
                card_set_1: cardSetId,
                name: 'Master of Winds',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 332,
                card_set_1: cardSetId,
                name: 'Nimble Trapfinder',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 333,
                card_set_1: cardSetId,
                name: 'Sea Gate Restoration // Sea Gate, Reborn',
                rarity: 'MYTHIC',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 334,
                card_set_1: cardSetId,
                name: 'Sea Gate Stormcaller',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 335,
                card_set_1: cardSetId,
                name: 'Thieving Skydiver',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 336,
                card_set_1: cardSetId,
                name: "Agadeem's Awakening // Agadeem, the Undercrypt",
                rarity: 'MYTHIC',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 337,
                card_set_1: cardSetId,
                name: 'Coveted Prize',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 338,
                card_set_1: cardSetId,
                name: 'Drana, the Last Bloodchief',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 339,
                card_set_1: cardSetId,
                name: 'Hagra Mauling // Hagra Broodpit',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 340,
                card_set_1: cardSetId,
                name: 'Inscription of Ruin',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 341,
                card_set_1: cardSetId,
                name: 'Nighthawk Scavenger',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 342,
                card_set_1: cardSetId,
                name: 'Nullpriest of Oblivion',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 343,
                card_set_1: cardSetId,
                name: 'Scourge of the Skyclaves',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 344,
                card_set_1: cardSetId,
                name: "Shadows' Verdict",
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 345,
                card_set_1: cardSetId,
                name: 'Soul Shatter',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 346,
                card_set_1: cardSetId,
                name: "Taborax, Hope's Demise",
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 347,
                card_set_1: cardSetId,
                name: 'Kargan Intimidator',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 348,
                card_set_1: cardSetId,
                name: 'Leyline Tyrant',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 349,
                card_set_1: cardSetId,
                name: 'Magmatic Channeler',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 350,
                card_set_1: cardSetId,
                name: "Nahiri's Lithoforming",
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 351,
                card_set_1: cardSetId,
                name: 'Relic Robber',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 352,
                card_set_1: cardSetId,
                name: 'Roiling Vortex',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 353,
                card_set_1: cardSetId,
                name: 'Shatterskull Charger',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 354,
                card_set_1: cardSetId,
                name: 'Shatterskull Smashing // Shatterskull, the Hammer Pass',
                rarity: 'MYTHIC',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 355,
                card_set_1: cardSetId,
                name: 'Valakut Awakening // Valakut Stoneforge',
                rarity: 'RARE',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 356,
                card_set_1: cardSetId,
                name: 'Wayward Guide-Beast',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 357,
                card_set_1: cardSetId,
                name: 'Ancient Greenwarden',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 358,
                card_set_1: cardSetId,
                name: 'Ashaya, Soul of the Wild',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 359,
                card_set_1: cardSetId,
                name: 'Cragplate Baloth',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 360,
                card_set_1: cardSetId,
                name: 'Inscription of Abundance',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 361,
                card_set_1: cardSetId,
                name: 'Oran-Rief Ooze',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 362,
                card_set_1: cardSetId,
                name: 'Swarm Shambler',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 363,
                card_set_1: cardSetId,
                name: 'Tajuru Paragon',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 364,
                card_set_1: cardSetId,
                name: 'Turntimber Symbiosis // Turntimber, Serpentine Wood',
                rarity: 'MYTHIC',
                layout: 'modal_dfc',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 365,
                card_set_1: cardSetId,
                name: 'Akiri, Fearless Voyager',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 366,
                card_set_1: cardSetId,
                name: 'Grakmaw, Skyclave Ravager',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 367,
                card_set_1: cardSetId,
                name: 'Kaza, Roil Chaser',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 368,
                card_set_1: cardSetId,
                name: 'Linvala, Shield of Sea Gate',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 369,
                card_set_1: cardSetId,
                name: 'Orah, Skyclave Hierophant',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 370,
                card_set_1: cardSetId,
                name: 'Verazol, the Split Current',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 371,
                card_set_1: cardSetId,
                name: 'Yasharn, Implacable Earth',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 372,
                card_set_1: cardSetId,
                name: 'Zagras, Thief of Heartbeats',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 373,
                card_set_1: cardSetId,
                name: 'Zareth San, the Trickster',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 374,
                card_set_1: cardSetId,
                name: 'Forsaken Monument',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 375,
                card_set_1: cardSetId,
                name: 'Lithoform Engine',
                rarity: 'MYTHIC',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 376,
                card_set_1: cardSetId,
                name: 'Myriad Construct',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 377,
                card_set_1: cardSetId,
                name: 'Skyclave Relic',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 378,
                card_set_1: cardSetId,
                name: 'Crawling Barrens',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 379,
                card_set_1: cardSetId,
                name: 'Throne of Makindi',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 380,
                card_set_1: cardSetId,
                name: 'Plains',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 381,
                card_set_1: cardSetId,
                name: 'Island',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 382,
                card_set_1: cardSetId,
                name: 'Swamp',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 383,
                card_set_1: cardSetId,
                name: 'Mountain',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 384,
                card_set_1: cardSetId,
                name: 'Forest',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 385,
                card_set_1: cardSetId,
                name: 'Orah, Skyclave Hierophant',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 386,
                card_set_1: cardSetId,
                name: 'Charix, the Raging Isle',
                rarity: 'RARE',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 387,
                card_set_1: cardSetId,
                name: 'Into the Roil',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 388,
                card_set_1: cardSetId,
                name: 'Bloodchiefs Thirst',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 389,
                card_set_1: cardSetId,
                name: 'Roil Eruption',
                rarity: 'COMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 390,
                card_set_1: cardSetId,
                name: 'Roiling Regrowth',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values({
                card_number: 391,
                card_set_1: cardSetId,
                name: 'Kargan Warleader',
                rarity: 'UNCOMMON',
                layout: 'normal',
            })
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<any> {
        // Get the card set id
        const cardSet = await queryRunner.manager
            .getRepository(CardSet)
            .createQueryBuilder('cardset')
            .where('cardset.short_name = :shortname', { shortname: 'ZNR' })
            .getOne();

        await queryRunner.manager
            .createQueryBuilder()
            .delete()
            .from('card')
            .where('card_set_1 = :cardsetid', { cardsetid: cardSet.id })
            .execute();

        await queryRunner.manager
            .createQueryBuilder()
            .delete()
            .from('card_set')
            .where('short_name = :shortname', { shortname: 'ZNR' })
            .execute();
    }
}
