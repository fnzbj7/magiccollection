import { CardSet } from '../card/entity/card-set.entity';
import { InsertResult, MigrationInterface, QueryRunner } from 'typeorm';

export class AddingStaMigration implements MigrationInterface {
    name = 'AddingStaMigration1617922479523';

    public async up(queryRunner: QueryRunner): Promise<void> {
        const insertResult: InsertResult = await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card_set')
            .values({ name: 'Mystical Archive', shortName: 'STA' })
            .execute();
        const cardSetId: number = insertResult.identifiers[0].id;

        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card')
            .values([
                {
                    cardNumber: 1,
                    cardSet: cardSetId,
                    name: 'Approach of the Second Sun',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 2,
                    cardSet: cardSetId,
                    name: 'Day of Judgment',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 3,
                    cardSet: cardSetId,
                    name: 'Defiant Strike',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 4,
                    cardSet: cardSetId,
                    name: 'Divine Gambit',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 5,
                    cardSet: cardSetId,
                    name: 'Ephemerate',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 6,
                    cardSet: cardSetId,
                    name: 'Gift of Estates',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 7,
                    cardSet: cardSetId,
                    name: 'Gods Willing',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 8,
                    cardSet: cardSetId,
                    name: 'Mana Tithe',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 9,
                    cardSet: cardSetId,
                    name: 'Revitalize',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 10,
                    cardSet: cardSetId,
                    name: 'Swords to Plowshares',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 11,
                    cardSet: cardSetId,
                    name: "Teferi's Protection",
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 12,
                    cardSet: cardSetId,
                    name: "Blue Sun's Zenith",
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 13,
                    cardSet: cardSetId,
                    name: 'Brainstorm',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 14,
                    cardSet: cardSetId,
                    name: 'Compulsive Research',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 15,
                    cardSet: cardSetId,
                    name: 'Counterspell',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 16,
                    cardSet: cardSetId,
                    name: 'Memory Lapse',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 17,
                    cardSet: cardSetId,
                    name: "Mind's Desire",
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 18,
                    cardSet: cardSetId,
                    name: 'Negate',
                    rarity: 'U',
                    layout: 'normal',
                },
                { cardNumber: 19, cardSet: cardSetId, name: 'Opt', rarity: 'U', layout: 'normal' },
                {
                    cardNumber: 20,
                    cardSet: cardSetId,
                    name: 'Strategic Planning',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 21,
                    cardSet: cardSetId,
                    name: "Tezzeret's Gambit",
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 22,
                    cardSet: cardSetId,
                    name: 'Time Warp',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 23,
                    cardSet: cardSetId,
                    name: 'Whirlwind Denial',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 24,
                    cardSet: cardSetId,
                    name: 'Agonizing Remorse',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 25,
                    cardSet: cardSetId,
                    name: 'Crux of Fate',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 26,
                    cardSet: cardSetId,
                    name: 'Dark Ritual',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 27,
                    cardSet: cardSetId,
                    name: 'Demonic Tutor',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 28,
                    cardSet: cardSetId,
                    name: 'Doom Blade',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 29,
                    cardSet: cardSetId,
                    name: 'Duress',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 30,
                    cardSet: cardSetId,
                    name: 'Eliminate',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 31,
                    cardSet: cardSetId,
                    name: 'Inquisition of Kozilek',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 32,
                    cardSet: cardSetId,
                    name: 'Sign in Blood',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 33,
                    cardSet: cardSetId,
                    name: 'Tainted Pact',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 34,
                    cardSet: cardSetId,
                    name: 'Tendrils of Agony',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 35,
                    cardSet: cardSetId,
                    name: 'Village Rites',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 36,
                    cardSet: cardSetId,
                    name: 'Chaos Warp',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 37,
                    cardSet: cardSetId,
                    name: 'Claim the Firstborn',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 38,
                    cardSet: cardSetId,
                    name: 'Faithless Looting',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 39,
                    cardSet: cardSetId,
                    name: 'Grapeshot',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 40,
                    cardSet: cardSetId,
                    name: 'Increasing Vengeance',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 41,
                    cardSet: cardSetId,
                    name: 'Infuriate',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 42,
                    cardSet: cardSetId,
                    name: 'Lightning Bolt',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 43,
                    cardSet: cardSetId,
                    name: "Mizzix's Mastery",
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 44,
                    cardSet: cardSetId,
                    name: 'Shock',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 45,
                    cardSet: cardSetId,
                    name: 'Stone Rain',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 46,
                    cardSet: cardSetId,
                    name: 'Thrill of Possibility',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 47,
                    cardSet: cardSetId,
                    name: "Urza's Rage",
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 48,
                    cardSet: cardSetId,
                    name: 'Abundant Harvest',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 49,
                    cardSet: cardSetId,
                    name: 'Adventurous Impulse',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 50,
                    cardSet: cardSetId,
                    name: 'Channel',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 51,
                    cardSet: cardSetId,
                    name: 'Cultivate',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 52,
                    cardSet: cardSetId,
                    name: 'Harmonize',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 53,
                    cardSet: cardSetId,
                    name: 'Krosan Grip',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 54,
                    cardSet: cardSetId,
                    name: 'Natural Order',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 55,
                    cardSet: cardSetId,
                    name: 'Primal Command',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 56,
                    cardSet: cardSetId,
                    name: 'Regrowth',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 57,
                    cardSet: cardSetId,
                    name: 'Snakeskin Veil',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 58,
                    cardSet: cardSetId,
                    name: 'Weather the Storm',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 59,
                    cardSet: cardSetId,
                    name: 'Despark',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 60,
                    cardSet: cardSetId,
                    name: 'Electrolyze',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 61,
                    cardSet: cardSetId,
                    name: 'Growth Spiral',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 62,
                    cardSet: cardSetId,
                    name: 'Lightning Helix',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 63,
                    cardSet: cardSetId,
                    name: 'Putrefy',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 64,
                    cardSet: cardSetId,
                    name: 'Approach of the Second Sun',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 65,
                    cardSet: cardSetId,
                    name: 'Day of Judgment',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 66,
                    cardSet: cardSetId,
                    name: 'Defiant Strike',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 67,
                    cardSet: cardSetId,
                    name: 'Divine Gambit',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 68,
                    cardSet: cardSetId,
                    name: 'Ephemerate',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 69,
                    cardSet: cardSetId,
                    name: 'Gift of Estates',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 70,
                    cardSet: cardSetId,
                    name: 'Gods Willing',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 71,
                    cardSet: cardSetId,
                    name: 'Mana Tithe',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 72,
                    cardSet: cardSetId,
                    name: 'Revitalize',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 73,
                    cardSet: cardSetId,
                    name: 'Swords to Plowshares',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 74,
                    cardSet: cardSetId,
                    name: "Teferi's Protection",
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 75,
                    cardSet: cardSetId,
                    name: "Blue Sun's Zenith",
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 76,
                    cardSet: cardSetId,
                    name: 'Brainstorm',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 77,
                    cardSet: cardSetId,
                    name: 'Compulsive Research',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 78,
                    cardSet: cardSetId,
                    name: 'Counterspell',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 79,
                    cardSet: cardSetId,
                    name: 'Memory Lapse',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 80,
                    cardSet: cardSetId,
                    name: "Mind's Desire",
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 81,
                    cardSet: cardSetId,
                    name: 'Negate',
                    rarity: 'U',
                    layout: 'normal',
                },
                { cardNumber: 82, cardSet: cardSetId, name: 'Opt', rarity: 'U', layout: 'normal' },
                {
                    cardNumber: 83,
                    cardSet: cardSetId,
                    name: 'Strategic Planning',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 84,
                    cardSet: cardSetId,
                    name: "Tezzeret's Gambit",
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 85,
                    cardSet: cardSetId,
                    name: 'Time Warp',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 86,
                    cardSet: cardSetId,
                    name: 'Whirlwind Denial',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 87,
                    cardSet: cardSetId,
                    name: 'Agonizing Remorse',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 88,
                    cardSet: cardSetId,
                    name: 'Crux of Fate',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 89,
                    cardSet: cardSetId,
                    name: 'Dark Ritual',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 90,
                    cardSet: cardSetId,
                    name: 'Demonic Tutor',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 91,
                    cardSet: cardSetId,
                    name: 'Doom Blade',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 92,
                    cardSet: cardSetId,
                    name: 'Duress',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 93,
                    cardSet: cardSetId,
                    name: 'Eliminate',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 94,
                    cardSet: cardSetId,
                    name: 'Inquisition of Kozilek',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 95,
                    cardSet: cardSetId,
                    name: 'Sign in Blood',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 96,
                    cardSet: cardSetId,
                    name: 'Tainted Pact',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 97,
                    cardSet: cardSetId,
                    name: 'Tendrils of Agony',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 98,
                    cardSet: cardSetId,
                    name: 'Village Rites',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 99,
                    cardSet: cardSetId,
                    name: 'Chaos Warp',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 100,
                    cardSet: cardSetId,
                    name: 'Claim the Firstborn',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 101,
                    cardSet: cardSetId,
                    name: 'Faithless Looting',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 102,
                    cardSet: cardSetId,
                    name: 'Grapeshot',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 103,
                    cardSet: cardSetId,
                    name: 'Increasing Vengeance',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 104,
                    cardSet: cardSetId,
                    name: 'Infuriate',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 105,
                    cardSet: cardSetId,
                    name: 'Lightning Bolt',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 106,
                    cardSet: cardSetId,
                    name: "Mizzix's Mastery",
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 107,
                    cardSet: cardSetId,
                    name: 'Shock',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 108,
                    cardSet: cardSetId,
                    name: 'Stone Rain',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 109,
                    cardSet: cardSetId,
                    name: 'Thrill of Possibility',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 110,
                    cardSet: cardSetId,
                    name: "Urza's Rage",
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 111,
                    cardSet: cardSetId,
                    name: 'Abundant Harvest',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 112,
                    cardSet: cardSetId,
                    name: 'Adventurous Impulse',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 113,
                    cardSet: cardSetId,
                    name: 'Channel',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 114,
                    cardSet: cardSetId,
                    name: 'Cultivate',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 115,
                    cardSet: cardSetId,
                    name: 'Harmonize',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 116,
                    cardSet: cardSetId,
                    name: 'Krosan Grip',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 117,
                    cardSet: cardSetId,
                    name: 'Natural Order',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 118,
                    cardSet: cardSetId,
                    name: 'Primal Command',
                    rarity: 'M',
                    layout: 'normal',
                },
                {
                    cardNumber: 119,
                    cardSet: cardSetId,
                    name: 'Regrowth',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 120,
                    cardSet: cardSetId,
                    name: 'Snakeskin Veil',
                    rarity: 'U',
                    layout: 'normal',
                },
                {
                    cardNumber: 121,
                    cardSet: cardSetId,
                    name: 'Weather the Storm',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 122,
                    cardSet: cardSetId,
                    name: 'Despark',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 123,
                    cardSet: cardSetId,
                    name: 'Electrolyze',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 124,
                    cardSet: cardSetId,
                    name: 'Growth Spiral',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 125,
                    cardSet: cardSetId,
                    name: 'Lightning Helix',
                    rarity: 'R',
                    layout: 'normal',
                },
                {
                    cardNumber: 126,
                    cardSet: cardSetId,
                    name: 'Putrefy',
                    rarity: 'R',
                    layout: 'normal',
                },
            ])
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Get the card set id
        const shortname = 'STA';
        const cardSet = await queryRunner.manager
            .getRepository(CardSet)
            .createQueryBuilder('cardset')
            .where('cardset.short_name = :shortname', { shortname })
            .getOne();

        await queryRunner.manager
            .createQueryBuilder()
            .delete()
            .from('card_amount')
            .where('card_set_1 = :cardsetid', { cardsetid: cardSet.id })
            .execute();

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
            .where('short_name = :shortname', { shortname })
            .execute();
    }
}
