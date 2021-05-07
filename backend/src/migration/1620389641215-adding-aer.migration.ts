import { CardSet } from "../card/entity/card-set.entity";
import { InsertResult, MigrationInterface, QueryRunner } from "typeorm";

export class addingAer1620389641215 implements MigrationInterface {
    name = 'addingAer1620389641215';

    public async up(queryRunner: QueryRunner): Promise<void> {

        const insertResult: InsertResult = await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card_set')
            .values({ name: 'Aether Revolt', shortName: 'AER' })
            .execute();
        const cardSetId: number = insertResult.identifiers[0].id;

        await queryRunner.manager.createQueryBuilder().insert().into('card').values([
            { cardNumber: 1, cardSet: cardSetId, name: 'Aerial Modification', rarity: 'U', layout: 'normal' },
            { cardNumber: 2, cardSet: cardSetId, name: 'Aeronaut Admiral', rarity: 'U', layout: 'normal' },
            { cardNumber: 3, cardSet: cardSetId, name: 'Aether Inspector', rarity: 'C', layout: 'normal' },
            { cardNumber: 4, cardSet: cardSetId, name: 'Aethergeode Miner', rarity: 'R', layout: 'normal' },
            { cardNumber: 5, cardSet: cardSetId, name: 'Airdrop Aeronauts', rarity: 'U', layout: 'normal' },
            { cardNumber: 6, cardSet: cardSetId, name: 'Alley Evasion', rarity: 'C', layout: 'normal' },
            { cardNumber: 7, cardSet: cardSetId, name: 'Audacious Infiltrator', rarity: 'C', layout: 'normal' },
            { cardNumber: 8, cardSet: cardSetId, name: 'Bastion Enforcer', rarity: 'C', layout: 'normal' },
            { cardNumber: 9, cardSet: cardSetId, name: 'Call for Unity', rarity: 'R', layout: 'normal' },
            { cardNumber: 10, cardSet: cardSetId, name: 'Caught in the Brights', rarity: 'C', layout: 'normal' },
            { cardNumber: 11, cardSet: cardSetId, name: 'Consulate Crackdown', rarity: 'R', layout: 'normal' },
            { cardNumber: 12, cardSet: cardSetId, name: 'Conviction', rarity: 'C', layout: 'normal' },
            { cardNumber: 13, cardSet: cardSetId, name: 'Countless Gears Renegade', rarity: 'C', layout: 'normal' },
            { cardNumber: 14, cardSet: cardSetId, name: 'Dawnfeather Eagle', rarity: 'C', layout: 'normal' },
            { cardNumber: 15, cardSet: cardSetId, name: 'Deadeye Harpooner', rarity: 'U', layout: 'normal' },
            { cardNumber: 16, cardSet: cardSetId, name: 'Decommission', rarity: 'C', layout: 'normal' },
            { cardNumber: 17, cardSet: cardSetId, name: 'Deft Dismissal', rarity: 'U', layout: 'normal' },
            { cardNumber: 18, cardSet: cardSetId, name: 'Exquisite Archangel', rarity: 'M', layout: 'normal' },
            { cardNumber: 19, cardSet: cardSetId, name: 'Felidar Guardian', rarity: 'U', layout: 'normal' },
            { cardNumber: 20, cardSet: cardSetId, name: 'Ghirapur Osprey', rarity: 'C', layout: 'normal' },
            { cardNumber: 21, cardSet: cardSetId, name: 'Restoration Specialist', rarity: 'U', layout: 'normal' },
            { cardNumber: 22, cardSet: cardSetId, name: 'Solemn Recruit', rarity: 'R', layout: 'normal' },
            { cardNumber: 23, cardSet: cardSetId, name: 'Sram, Senior Edificer', rarity: 'R', layout: 'normal' },
            { cardNumber: 24, cardSet: cardSetId, name: 'Sram\'s Expertise', rarity: 'R', layout: 'normal' },
            { cardNumber: 25, cardSet: cardSetId, name: 'Thopter Arrest', rarity: 'U', layout: 'normal' },
            { cardNumber: 26, cardSet: cardSetId, name: 'Aether Swooper', rarity: 'C', layout: 'normal' },
            { cardNumber: 27, cardSet: cardSetId, name: 'Aethertide Whale', rarity: 'R', layout: 'normal' },
            { cardNumber: 28, cardSet: cardSetId, name: 'Baral, Chief of Compliance', rarity: 'R', layout: 'normal' },
            { cardNumber: 29, cardSet: cardSetId, name: 'Baral\'s Expertise', rarity: 'R', layout: 'normal' },
            { cardNumber: 30, cardSet: cardSetId, name: 'Bastion Inventor', rarity: 'C', layout: 'normal' },
            { cardNumber: 31, cardSet: cardSetId, name: 'Disallow', rarity: 'R', layout: 'normal' },
            { cardNumber: 32, cardSet: cardSetId, name: 'Dispersal Technician', rarity: 'C', layout: 'normal' },
            { cardNumber: 33, cardSet: cardSetId, name: 'Efficient Construction', rarity: 'U', layout: 'normal' },
            { cardNumber: 34, cardSet: cardSetId, name: 'Hinterland Drake', rarity: 'C', layout: 'normal' },
            { cardNumber: 35, cardSet: cardSetId, name: 'Ice Over', rarity: 'C', layout: 'normal' },
            { cardNumber: 36, cardSet: cardSetId, name: 'Illusionist\'s Stratagem', rarity: 'U', layout: 'normal' },
            { cardNumber: 37, cardSet: cardSetId, name: 'Leave in the Dust', rarity: 'C', layout: 'normal' },
            { cardNumber: 38, cardSet: cardSetId, name: 'Mechanized Production', rarity: 'M', layout: 'normal' },
            { cardNumber: 39, cardSet: cardSetId, name: 'Metallic Rebuke', rarity: 'C', layout: 'normal' },
            { cardNumber: 40, cardSet: cardSetId, name: 'Negate', rarity: 'C', layout: 'normal' },
            { cardNumber: 41, cardSet: cardSetId, name: 'Quicksmith Spy', rarity: 'R', layout: 'normal' },
            { cardNumber: 42, cardSet: cardSetId, name: 'Reverse Engineer', rarity: 'U', layout: 'normal' },
            { cardNumber: 43, cardSet: cardSetId, name: 'Salvage Scuttler', rarity: 'U', layout: 'normal' },
            { cardNumber: 44, cardSet: cardSetId, name: 'Shielded Aether Thief', rarity: 'U', layout: 'normal' },
            { cardNumber: 45, cardSet: cardSetId, name: 'Shipwreck Moray', rarity: 'C', layout: 'normal' },
            { cardNumber: 46, cardSet: cardSetId, name: 'Skyship Plunderer', rarity: 'U', layout: 'normal' },
            { cardNumber: 47, cardSet: cardSetId, name: 'Take into Custody', rarity: 'C', layout: 'normal' },
            { cardNumber: 48, cardSet: cardSetId, name: 'Trophy Mage', rarity: 'U', layout: 'normal' },
            { cardNumber: 49, cardSet: cardSetId, name: 'Whir of Invention', rarity: 'R', layout: 'normal' },
            { cardNumber: 50, cardSet: cardSetId, name: 'Wind-Kin Raiders', rarity: 'U', layout: 'normal' },
            { cardNumber: 51, cardSet: cardSetId, name: 'Aether Poisoner', rarity: 'C', layout: 'normal' },
            { cardNumber: 52, cardSet: cardSetId, name: 'Alley Strangler', rarity: 'C', layout: 'normal' },
            { cardNumber: 53, cardSet: cardSetId, name: 'Battle at the Bridge', rarity: 'R', layout: 'normal' },
            { cardNumber: 54, cardSet: cardSetId, name: 'Cruel Finality', rarity: 'C', layout: 'normal' },
            { cardNumber: 55, cardSet: cardSetId, name: 'Daring Demolition', rarity: 'C', layout: 'normal' },
            { cardNumber: 56, cardSet: cardSetId, name: 'Defiant Salvager', rarity: 'C', layout: 'normal' },
            { cardNumber: 57, cardSet: cardSetId, name: 'Fatal Push', rarity: 'U', layout: 'normal' },
            { cardNumber: 58, cardSet: cardSetId, name: 'Fen Hauler', rarity: 'C', layout: 'normal' },
            { cardNumber: 59, cardSet: cardSetId, name: 'Foundry Hornet', rarity: 'U', layout: 'normal' },
            { cardNumber: 60, cardSet: cardSetId, name: 'Fourth Bridge Prowler', rarity: 'C', layout: 'normal' },
            { cardNumber: 61, cardSet: cardSetId, name: 'Gifted Aetherborn', rarity: 'U', layout: 'normal' },
            { cardNumber: 62, cardSet: cardSetId, name: 'Glint-Sleeve Siphoner', rarity: 'R', layout: 'normal' },
            { cardNumber: 63, cardSet: cardSetId, name: 'Gonti\'s Machinations', rarity: 'U', layout: 'normal' },
            { cardNumber: 64, cardSet: cardSetId, name: 'Herald of Anguish', rarity: 'M', layout: 'normal' },
            { cardNumber: 65, cardSet: cardSetId, name: 'Ironclad Revolutionary', rarity: 'U', layout: 'normal' },
            { cardNumber: 66, cardSet: cardSetId, name: 'Midnight Entourage', rarity: 'R', layout: 'normal' },
            { cardNumber: 67, cardSet: cardSetId, name: 'Night Market Aeronaut', rarity: 'C', layout: 'normal' },
            { cardNumber: 68, cardSet: cardSetId, name: 'Perilous Predicament', rarity: 'U', layout: 'normal' },
            { cardNumber: 69, cardSet: cardSetId, name: 'Renegade\'s Getaway', rarity: 'C', layout: 'normal' },
            { cardNumber: 70, cardSet: cardSetId, name: 'Resourceful Return', rarity: 'C', layout: 'normal' },
            { cardNumber: 71, cardSet: cardSetId, name: 'Secret Salvage', rarity: 'R', layout: 'normal' },
            { cardNumber: 72, cardSet: cardSetId, name: 'Sly Requisitioner', rarity: 'U', layout: 'normal' },
            { cardNumber: 73, cardSet: cardSetId, name: 'Vengeful Rebel', rarity: 'U', layout: 'normal' },
            { cardNumber: 74, cardSet: cardSetId, name: 'Yahenni, Undying Partisan', rarity: 'R', layout: 'normal' },
            { cardNumber: 75, cardSet: cardSetId, name: 'Yahenni\'s Expertise', rarity: 'R', layout: 'normal' },
            { cardNumber: 76, cardSet: cardSetId, name: 'Aether Chaser', rarity: 'C', layout: 'normal' },
            { cardNumber: 77, cardSet: cardSetId, name: 'Chandra\'s Revolution', rarity: 'C', layout: 'normal' },
            { cardNumber: 78, cardSet: cardSetId, name: 'Destructive Tampering', rarity: 'C', layout: 'normal' },
            { cardNumber: 79, cardSet: cardSetId, name: 'Embraal Gear-Smasher', rarity: 'C', layout: 'normal' },
            { cardNumber: 80, cardSet: cardSetId, name: 'Enraged Giant', rarity: 'U', layout: 'normal' },
            { cardNumber: 81, cardSet: cardSetId, name: 'Freejam Regent', rarity: 'R', layout: 'normal' },
            { cardNumber: 82, cardSet: cardSetId, name: 'Frontline Rebel', rarity: 'C', layout: 'normal' },
            { cardNumber: 83, cardSet: cardSetId, name: 'Gremlin Infestation', rarity: 'U', layout: 'normal' },
            { cardNumber: 84, cardSet: cardSetId, name: 'Hungry Flames', rarity: 'U', layout: 'normal' },
            { cardNumber: 85, cardSet: cardSetId, name: 'Indomitable Creativity', rarity: 'M', layout: 'normal' },
            { cardNumber: 86, cardSet: cardSetId, name: 'Invigorated Rampage', rarity: 'U', layout: 'normal' },
            { cardNumber: 87, cardSet: cardSetId, name: 'Kari Zev, Skyship Raider', rarity: 'R', layout: 'normal' },
            { cardNumber: 88, cardSet: cardSetId, name: 'Kari Zev\'s Expertise', rarity: 'R', layout: 'normal' },
            { cardNumber: 89, cardSet: cardSetId, name: 'Lathnu Sailback', rarity: 'C', layout: 'normal' },
            { cardNumber: 90, cardSet: cardSetId, name: 'Lightning Runner', rarity: 'M', layout: 'normal' },
            { cardNumber: 91, cardSet: cardSetId, name: 'Pia\'s Revolution', rarity: 'R', layout: 'normal' },
            { cardNumber: 92, cardSet: cardSetId, name: 'Precise Strike', rarity: 'C', layout: 'normal' },
            { cardNumber: 93, cardSet: cardSetId, name: 'Quicksmith Rebel', rarity: 'R', layout: 'normal' },
            { cardNumber: 94, cardSet: cardSetId, name: 'Ravenous Intruder', rarity: 'U', layout: 'normal' },
            { cardNumber: 95, cardSet: cardSetId, name: 'Reckless Racer', rarity: 'U', layout: 'normal' },
            { cardNumber: 96, cardSet: cardSetId, name: 'Release the Gremlins', rarity: 'R', layout: 'normal' },
            { cardNumber: 97, cardSet: cardSetId, name: 'Scrapper Champion', rarity: 'U', layout: 'normal' },
            { cardNumber: 98, cardSet: cardSetId, name: 'Shock', rarity: 'C', layout: 'normal' },
            { cardNumber: 99, cardSet: cardSetId, name: 'Siege Modification', rarity: 'U', layout: 'normal' },
            { cardNumber: 100, cardSet: cardSetId, name: 'Sweatworks Brawler', rarity: 'C', layout: 'normal' },
            { cardNumber: 101, cardSet: cardSetId, name: 'Wrangle', rarity: 'C', layout: 'normal' },
            { cardNumber: 102, cardSet: cardSetId, name: 'Aether Herder', rarity: 'C', layout: 'normal' },
            { cardNumber: 103, cardSet: cardSetId, name: 'Aetherstream Leopard', rarity: 'C', layout: 'normal' },
            { cardNumber: 104, cardSet: cardSetId, name: 'Aetherwind Basker', rarity: 'M', layout: 'normal' },
            { cardNumber: 105, cardSet: cardSetId, name: 'Aid from the Cowl', rarity: 'R', layout: 'normal' },
            { cardNumber: 106, cardSet: cardSetId, name: 'Druid of the Cowl', rarity: 'C', layout: 'normal' },
            { cardNumber: 107, cardSet: cardSetId, name: 'Greenbelt Rampager', rarity: 'R', layout: 'normal' },
            { cardNumber: 108, cardSet: cardSetId, name: 'Greenwheel Liberator', rarity: 'R', layout: 'normal' },
            { cardNumber: 109, cardSet: cardSetId, name: 'Heroic Intervention', rarity: 'R', layout: 'normal' },
            { cardNumber: 110, cardSet: cardSetId, name: 'Hidden Herbalists', rarity: 'U', layout: 'normal' },
            { cardNumber: 111, cardSet: cardSetId, name: 'Highspire Infusion', rarity: 'C', layout: 'normal' },
            { cardNumber: 112, cardSet: cardSetId, name: 'Lifecraft Awakening', rarity: 'U', layout: 'normal' },
            { cardNumber: 113, cardSet: cardSetId, name: 'Lifecraft Cavalry', rarity: 'C', layout: 'normal' },
            { cardNumber: 114, cardSet: cardSetId, name: 'Lifecrafter\'s Gift', rarity: 'U', layout: 'normal' },
            { cardNumber: 115, cardSet: cardSetId, name: 'Maulfist Revolutionary', rarity: 'U', layout: 'normal' },
            { cardNumber: 116, cardSet: cardSetId, name: 'Monstrous Onslaught', rarity: 'U', layout: 'normal' },
            { cardNumber: 117, cardSet: cardSetId, name: 'Narnam Renegade', rarity: 'U', layout: 'normal' },
            { cardNumber: 118, cardSet: cardSetId, name: 'Natural Obsolescence', rarity: 'C', layout: 'normal' },
            { cardNumber: 119, cardSet: cardSetId, name: 'Peema Aether-Seer', rarity: 'U', layout: 'normal' },
            { cardNumber: 120, cardSet: cardSetId, name: 'Prey Upon', rarity: 'C', layout: 'normal' },
            { cardNumber: 121, cardSet: cardSetId, name: 'Ridgescale Tusker', rarity: 'U', layout: 'normal' },
            { cardNumber: 122, cardSet: cardSetId, name: 'Rishkar, Peema Renegade', rarity: 'R', layout: 'normal' },
            { cardNumber: 123, cardSet: cardSetId, name: 'Rishkar\'s Expertise', rarity: 'R', layout: 'normal' },
            { cardNumber: 124, cardSet: cardSetId, name: 'Scrounging Bandar', rarity: 'C', layout: 'normal' },
            { cardNumber: 125, cardSet: cardSetId, name: 'Silkweaver Elite', rarity: 'C', layout: 'normal' },
            { cardNumber: 126, cardSet: cardSetId, name: 'Unbridled Growth', rarity: 'C', layout: 'normal' },
            { cardNumber: 127, cardSet: cardSetId, name: 'Ajani Unyielding', rarity: 'M', layout: 'normal' },
            { cardNumber: 128, cardSet: cardSetId, name: 'Dark Intimations', rarity: 'R', layout: 'normal' },
            { cardNumber: 129, cardSet: cardSetId, name: 'Hidden Stockpile', rarity: 'U', layout: 'normal' },
            { cardNumber: 130, cardSet: cardSetId, name: 'Maverick Thopterist', rarity: 'U', layout: 'normal' },
            { cardNumber: 131, cardSet: cardSetId, name: 'Oath of Ajani', rarity: 'R', layout: 'normal' },
            { cardNumber: 132, cardSet: cardSetId, name: 'Outland Boar', rarity: 'U', layout: 'normal' },
            { cardNumber: 133, cardSet: cardSetId, name: 'Renegade Rallier', rarity: 'U', layout: 'normal' },
            { cardNumber: 134, cardSet: cardSetId, name: 'Renegade Wheelsmith', rarity: 'U', layout: 'normal' },
            { cardNumber: 135, cardSet: cardSetId, name: 'Rogue Refiner', rarity: 'U', layout: 'normal' },
            { cardNumber: 136, cardSet: cardSetId, name: 'Spire Patrol', rarity: 'U', layout: 'normal' },
            { cardNumber: 137, cardSet: cardSetId, name: 'Tezzeret the Schemer', rarity: 'M', layout: 'normal' },
            { cardNumber: 138, cardSet: cardSetId, name: 'Tezzeret\'s Touch', rarity: 'U', layout: 'normal' },
            { cardNumber: 139, cardSet: cardSetId, name: 'Weldfast Engineer', rarity: 'U', layout: 'normal' },
            { cardNumber: 140, cardSet: cardSetId, name: 'Winding Constrictor', rarity: 'U', layout: 'normal' },
            { cardNumber: 141, cardSet: cardSetId, name: 'Aegis Automaton', rarity: 'C', layout: 'normal' },
            { cardNumber: 142, cardSet: cardSetId, name: 'Aethersphere Harvester', rarity: 'R', layout: 'normal' },
            { cardNumber: 143, cardSet: cardSetId, name: 'Augmenting Automaton', rarity: 'C', layout: 'normal' },
            { cardNumber: 144, cardSet: cardSetId, name: 'Barricade Breaker', rarity: 'U', layout: 'normal' },
            { cardNumber: 145, cardSet: cardSetId, name: 'Cogwork Assembler', rarity: 'U', layout: 'normal' },
            { cardNumber: 146, cardSet: cardSetId, name: 'Consulate Dreadnought', rarity: 'U', layout: 'normal' },
            { cardNumber: 147, cardSet: cardSetId, name: 'Consulate Turret', rarity: 'C', layout: 'normal' },
            { cardNumber: 148, cardSet: cardSetId, name: 'Crackdown Construct', rarity: 'U', layout: 'normal' },
            { cardNumber: 149, cardSet: cardSetId, name: 'Daredevil Dragster', rarity: 'U', layout: 'normal' },
            { cardNumber: 150, cardSet: cardSetId, name: 'Filigree Crawler', rarity: 'C', layout: 'normal' },
            { cardNumber: 151, cardSet: cardSetId, name: 'Foundry Assembler', rarity: 'C', layout: 'normal' },
            { cardNumber: 152, cardSet: cardSetId, name: 'Gonti\'s Aether Heart', rarity: 'M', layout: 'normal' },
            { cardNumber: 153, cardSet: cardSetId, name: 'Heart of Kiran', rarity: 'M', layout: 'normal' },
            { cardNumber: 154, cardSet: cardSetId, name: 'Hope of Ghirapur', rarity: 'R', layout: 'normal' },
            { cardNumber: 155, cardSet: cardSetId, name: 'Implement of Combustion', rarity: 'C', layout: 'normal' },
            { cardNumber: 156, cardSet: cardSetId, name: 'Implement of Examination', rarity: 'C', layout: 'normal' },
            { cardNumber: 157, cardSet: cardSetId, name: 'Implement of Ferocity', rarity: 'C', layout: 'normal' },
            { cardNumber: 158, cardSet: cardSetId, name: 'Implement of Improvement', rarity: 'C', layout: 'normal' },
            { cardNumber: 159, cardSet: cardSetId, name: 'Implement of Malice', rarity: 'C', layout: 'normal' },
            { cardNumber: 160, cardSet: cardSetId, name: 'Inspiring Statuary', rarity: 'R', layout: 'normal' },
            { cardNumber: 161, cardSet: cardSetId, name: 'Irontread Crusher', rarity: 'C', layout: 'normal' },
            { cardNumber: 162, cardSet: cardSetId, name: 'Lifecrafter\'s Bestiary', rarity: 'R', layout: 'normal' },
            { cardNumber: 163, cardSet: cardSetId, name: 'Merchant\'s Dockhand', rarity: 'R', layout: 'normal' },
            { cardNumber: 164, cardSet: cardSetId, name: 'Metallic Mimic', rarity: 'R', layout: 'normal' },
            { cardNumber: 165, cardSet: cardSetId, name: 'Mobile Garrison', rarity: 'C', layout: 'normal' },
            { cardNumber: 166, cardSet: cardSetId, name: 'Night Market Guard', rarity: 'C', layout: 'normal' },
            { cardNumber: 167, cardSet: cardSetId, name: 'Ornithopter', rarity: 'U', layout: 'normal' },
            { cardNumber: 168, cardSet: cardSetId, name: 'Pacification Array', rarity: 'U', layout: 'normal' },
            { cardNumber: 169, cardSet: cardSetId, name: 'Paradox Engine', rarity: 'M', layout: 'normal' },
            { cardNumber: 170, cardSet: cardSetId, name: 'Peacewalker Colossus', rarity: 'R', layout: 'normal' },
            { cardNumber: 171, cardSet: cardSetId, name: 'Planar Bridge', rarity: 'M', layout: 'normal' },
            { cardNumber: 172, cardSet: cardSetId, name: 'Prizefighter Construct', rarity: 'C', layout: 'normal' },
            { cardNumber: 173, cardSet: cardSetId, name: 'Renegade Map', rarity: 'C', layout: 'normal' },
            { cardNumber: 174, cardSet: cardSetId, name: 'Reservoir Walker', rarity: 'C', layout: 'normal' },
            { cardNumber: 175, cardSet: cardSetId, name: 'Scrap Trawler', rarity: 'R', layout: 'normal' },
            { cardNumber: 176, cardSet: cardSetId, name: 'Servo Schematic', rarity: 'U', layout: 'normal' },
            { cardNumber: 177, cardSet: cardSetId, name: 'Treasure Keeper', rarity: 'U', layout: 'normal' },
            { cardNumber: 178, cardSet: cardSetId, name: 'Universal Solvent', rarity: 'C', layout: 'normal' },
            { cardNumber: 179, cardSet: cardSetId, name: 'Untethered Express', rarity: 'U', layout: 'normal' },
            { cardNumber: 180, cardSet: cardSetId, name: 'Verdant Automaton', rarity: 'C', layout: 'normal' },
            { cardNumber: 181, cardSet: cardSetId, name: 'Walking Ballista', rarity: 'R', layout: 'normal' },
            { cardNumber: 182, cardSet: cardSetId, name: 'Watchful Automaton', rarity: 'C', layout: 'normal' },
            { cardNumber: 183, cardSet: cardSetId, name: 'Welder Automaton', rarity: 'C', layout: 'normal' },
            { cardNumber: 184, cardSet: cardSetId, name: 'Spire of Industry', rarity: 'R', layout: 'normal' },
            { cardNumber: 185, cardSet: cardSetId, name: 'Ajani, Valiant Protector', rarity: 'M', layout: 'normal' },
            { cardNumber: 186, cardSet: cardSetId, name: 'Inspiring Roar', rarity: 'C', layout: 'normal' },
            { cardNumber: 187, cardSet: cardSetId, name: 'Ajani\'s Comrade', rarity: 'U', layout: 'normal' },
            { cardNumber: 188, cardSet: cardSetId, name: 'Ajani\'s Aid', rarity: 'R', layout: 'normal' },
            { cardNumber: 189, cardSet: cardSetId, name: 'Tranquil Expanse', rarity: 'C', layout: 'normal' },
            { cardNumber: 190, cardSet: cardSetId, name: 'Tezzeret, Master of Metal', rarity: 'M', layout: 'normal' },
            { cardNumber: 191, cardSet: cardSetId, name: 'Tezzeret\'s Betrayal', rarity: 'R', layout: 'normal' },
            { cardNumber: 192, cardSet: cardSetId, name: 'Pendulum of Patterns', rarity: 'C', layout: 'normal' },
            { cardNumber: 193, cardSet: cardSetId, name: 'Tezzeret\'s Simulacrum', rarity: 'U', layout: 'normal' },
            { cardNumber: 194, cardSet: cardSetId, name: 'Submerged Boneyard', rarity: 'C', layout: 'normal' },
        ]).execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Get the card set id
        const shortname = 'AER';
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
