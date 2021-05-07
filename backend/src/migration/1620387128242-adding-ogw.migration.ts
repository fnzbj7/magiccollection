import { CardSet } from "../card/entity/card-set.entity";
import { InsertResult, MigrationInterface, QueryRunner } from "typeorm";

export class addingOgw1620387128242 implements MigrationInterface {
    name = 'addingOgw1620387128242';

    public async up(queryRunner: QueryRunner): Promise<void> {

        const insertResult: InsertResult = await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card_set')
            .values({ name: 'Oath of the Gatewatch', shortName: 'OGW' })
            .execute();
        const cardSetId: number = insertResult.identifiers[0].id;

        await queryRunner.manager.createQueryBuilder().insert().into('card').values([
            { cardNumber: 1, cardSet: cardSetId, name: 'Deceiver of Form', rarity: 'R', layout: 'normal' },
            { cardNumber: 2, cardSet: cardSetId, name: 'Eldrazi Mimic', rarity: 'R', layout: 'normal' },
            { cardNumber: 3, cardSet: cardSetId, name: 'Endbringer', rarity: 'R', layout: 'normal' },
            { cardNumber: 4, cardSet: cardSetId, name: 'Kozilek, the Great Distortion', rarity: 'M', layout: 'normal' },
            { cardNumber: 5, cardSet: cardSetId, name: 'Kozilek\'s Pathfinder', rarity: 'C', layout: 'normal' },
            { cardNumber: 6, cardSet: cardSetId, name: 'Matter Reshaper', rarity: 'R', layout: 'normal' },
            { cardNumber: 7, cardSet: cardSetId, name: 'Reality Smasher', rarity: 'R', layout: 'normal' },
            { cardNumber: 8, cardSet: cardSetId, name: 'Spatial Contortion', rarity: 'U', layout: 'normal' },
            { cardNumber: 9, cardSet: cardSetId, name: 'Thought-Knot Seer', rarity: 'R', layout: 'normal' },
            { cardNumber: 10, cardSet: cardSetId, name: 'Walker of the Wastes', rarity: 'U', layout: 'normal' },
            { cardNumber: 11, cardSet: cardSetId, name: 'Warden of Geometries', rarity: 'C', layout: 'normal' },
            { cardNumber: 12, cardSet: cardSetId, name: 'Warping Wail', rarity: 'U', layout: 'normal' },
            { cardNumber: 13, cardSet: cardSetId, name: 'Eldrazi Displacer', rarity: 'R', layout: 'normal' },
            { cardNumber: 14, cardSet: cardSetId, name: 'Affa Protector', rarity: 'C', layout: 'normal' },
            { cardNumber: 15, cardSet: cardSetId, name: 'Allied Reinforcements', rarity: 'U', layout: 'normal' },
            { cardNumber: 16, cardSet: cardSetId, name: 'Call the Gatewatch', rarity: 'R', layout: 'normal' },
            { cardNumber: 17, cardSet: cardSetId, name: 'Dazzling Reflection', rarity: 'C', layout: 'normal' },
            { cardNumber: 18, cardSet: cardSetId, name: 'Expedition Raptor', rarity: 'C', layout: 'normal' },
            { cardNumber: 19, cardSet: cardSetId, name: 'General Tazri', rarity: 'M', layout: 'normal' },
            { cardNumber: 20, cardSet: cardSetId, name: 'Immolating Glare', rarity: 'U', layout: 'normal' },
            { cardNumber: 21, cardSet: cardSetId, name: 'Iona\'s Blessing', rarity: 'U', layout: 'normal' },
            { cardNumber: 22, cardSet: cardSetId, name: 'Isolation Zone', rarity: 'C', layout: 'normal' },
            { cardNumber: 23, cardSet: cardSetId, name: 'Kor Scythemaster', rarity: 'C', layout: 'normal' },
            { cardNumber: 24, cardSet: cardSetId, name: 'Kor Sky Climber', rarity: 'C', layout: 'normal' },
            { cardNumber: 25, cardSet: cardSetId, name: 'Linvala, the Preserver', rarity: 'M', layout: 'normal' },
            { cardNumber: 26, cardSet: cardSetId, name: 'Make a Stand', rarity: 'U', layout: 'normal' },
            { cardNumber: 27, cardSet: cardSetId, name: 'Makindi Aeronaut', rarity: 'C', layout: 'normal' },
            { cardNumber: 28, cardSet: cardSetId, name: 'Mighty Leap', rarity: 'C', layout: 'normal' },
            { cardNumber: 29, cardSet: cardSetId, name: 'Munda\'s Vanguard', rarity: 'R', layout: 'normal' },
            { cardNumber: 30, cardSet: cardSetId, name: 'Oath of Gideon', rarity: 'R', layout: 'normal' },
            { cardNumber: 31, cardSet: cardSetId, name: 'Ondu War Cleric', rarity: 'C', layout: 'normal' },
            { cardNumber: 32, cardSet: cardSetId, name: 'Relief Captain', rarity: 'U', layout: 'normal' },
            { cardNumber: 33, cardSet: cardSetId, name: 'Searing Light', rarity: 'C', layout: 'normal' },
            { cardNumber: 34, cardSet: cardSetId, name: 'Shoulder to Shoulder', rarity: 'C', layout: 'normal' },
            { cardNumber: 35, cardSet: cardSetId, name: 'Spawnbinder Mage', rarity: 'C', layout: 'normal' },
            { cardNumber: 36, cardSet: cardSetId, name: 'Steppe Glider', rarity: 'U', layout: 'normal' },
            { cardNumber: 37, cardSet: cardSetId, name: 'Stone Haven Outfitter', rarity: 'R', layout: 'normal' },
            { cardNumber: 38, cardSet: cardSetId, name: 'Stoneforge Acolyte', rarity: 'U', layout: 'normal' },
            { cardNumber: 39, cardSet: cardSetId, name: 'Wall of Resurgence', rarity: 'U', layout: 'normal' },
            { cardNumber: 40, cardSet: cardSetId, name: 'Abstruse Interference', rarity: 'C', layout: 'normal' },
            { cardNumber: 41, cardSet: cardSetId, name: 'Blinding Drone', rarity: 'C', layout: 'normal' },
            { cardNumber: 42, cardSet: cardSetId, name: 'Cultivator Drone', rarity: 'C', layout: 'normal' },
            { cardNumber: 43, cardSet: cardSetId, name: 'Deepfathom Skulker', rarity: 'R', layout: 'normal' },
            { cardNumber: 44, cardSet: cardSetId, name: 'Dimensional Infiltrator', rarity: 'R', layout: 'normal' },
            { cardNumber: 45, cardSet: cardSetId, name: 'Gravity Negator', rarity: 'C', layout: 'normal' },
            { cardNumber: 46, cardSet: cardSetId, name: 'Prophet of Distortion', rarity: 'U', layout: 'normal' },
            { cardNumber: 47, cardSet: cardSetId, name: 'Slip Through Space', rarity: 'C', layout: 'normal' },
            { cardNumber: 48, cardSet: cardSetId, name: 'Thought Harvester', rarity: 'U', layout: 'normal' },
            { cardNumber: 49, cardSet: cardSetId, name: 'Void Shatter', rarity: 'U', layout: 'normal' },
            { cardNumber: 50, cardSet: cardSetId, name: 'Ancient Crab', rarity: 'C', layout: 'normal' },
            { cardNumber: 51, cardSet: cardSetId, name: 'Comparative Analysis', rarity: 'C', layout: 'normal' },
            { cardNumber: 52, cardSet: cardSetId, name: 'Containment Membrane', rarity: 'C', layout: 'normal' },
            { cardNumber: 53, cardSet: cardSetId, name: 'Crush of Tentacles', rarity: 'M', layout: 'normal' },
            { cardNumber: 54, cardSet: cardSetId, name: 'Cyclone Sire', rarity: 'U', layout: 'normal' },
            { cardNumber: 55, cardSet: cardSetId, name: 'Gift of Tusks', rarity: 'U', layout: 'normal' },
            { cardNumber: 56, cardSet: cardSetId, name: 'Grip of the Roil', rarity: 'U', layout: 'normal' },
            { cardNumber: 57, cardSet: cardSetId, name: 'Hedron Alignment', rarity: 'R', layout: 'normal' },
            { cardNumber: 58, cardSet: cardSetId, name: 'Jwar Isle Avenger', rarity: 'C', layout: 'normal' },
            { cardNumber: 59, cardSet: cardSetId, name: 'Negate', rarity: 'C', layout: 'normal' },
            { cardNumber: 60, cardSet: cardSetId, name: 'Oath of Jace', rarity: 'R', layout: 'normal' },
            { cardNumber: 61, cardSet: cardSetId, name: 'Overwhelming Denial', rarity: 'R', layout: 'normal' },
            { cardNumber: 62, cardSet: cardSetId, name: 'Roiling Waters', rarity: 'U', layout: 'normal' },
            { cardNumber: 63, cardSet: cardSetId, name: 'Sphinx of the Final Word', rarity: 'M', layout: 'normal' },
            { cardNumber: 64, cardSet: cardSetId, name: 'Sweep Away', rarity: 'C', layout: 'normal' },
            { cardNumber: 65, cardSet: cardSetId, name: 'Umara Entangler', rarity: 'C', layout: 'normal' },
            { cardNumber: 66, cardSet: cardSetId, name: 'Unity of Purpose', rarity: 'U', layout: 'normal' },
            { cardNumber: 67, cardSet: cardSetId, name: 'Bearer of Silence', rarity: 'R', layout: 'normal' },
            { cardNumber: 68, cardSet: cardSetId, name: 'Dread Defiler', rarity: 'R', layout: 'normal' },
            { cardNumber: 69, cardSet: cardSetId, name: 'Essence Depleter', rarity: 'U', layout: 'normal' },
            { cardNumber: 70, cardSet: cardSetId, name: 'Flaying Tendrils', rarity: 'U', layout: 'normal' },
            { cardNumber: 71, cardSet: cardSetId, name: 'Havoc Sower', rarity: 'U', layout: 'normal' },
            { cardNumber: 72, cardSet: cardSetId, name: 'Inverter of Truth', rarity: 'M', layout: 'normal' },
            { cardNumber: 73, cardSet: cardSetId, name: 'Kozilek\'s Shrieker', rarity: 'C', layout: 'normal' },
            { cardNumber: 74, cardSet: cardSetId, name: 'Kozilek\'s Translator', rarity: 'C', layout: 'normal' },
            { cardNumber: 75, cardSet: cardSetId, name: 'Oblivion Strike', rarity: 'C', layout: 'normal' },
            { cardNumber: 76, cardSet: cardSetId, name: 'Reaver Drone', rarity: 'U', layout: 'normal' },
            { cardNumber: 77, cardSet: cardSetId, name: 'Sifter of Skulls', rarity: 'R', layout: 'normal' },
            { cardNumber: 78, cardSet: cardSetId, name: 'Sky Scourer', rarity: 'C', layout: 'normal' },
            { cardNumber: 79, cardSet: cardSetId, name: 'Slaughter Drone', rarity: 'C', layout: 'normal' },
            { cardNumber: 80, cardSet: cardSetId, name: 'Unnatural Endurance', rarity: 'C', layout: 'normal' },
            { cardNumber: 81, cardSet: cardSetId, name: 'Visions of Brutality', rarity: 'U', layout: 'normal' },
            { cardNumber: 82, cardSet: cardSetId, name: 'Witness the End', rarity: 'C', layout: 'normal' },
            { cardNumber: 83, cardSet: cardSetId, name: 'Corpse Churn', rarity: 'C', layout: 'normal' },
            { cardNumber: 84, cardSet: cardSetId, name: 'Drana\'s Chosen', rarity: 'R', layout: 'normal' },
            { cardNumber: 85, cardSet: cardSetId, name: 'Grasp of Darkness', rarity: 'U', layout: 'normal' },
            { cardNumber: 86, cardSet: cardSetId, name: 'Kalitas, Traitor of Ghet', rarity: 'M', layout: 'normal' },
            { cardNumber: 87, cardSet: cardSetId, name: 'Malakir Soothsayer', rarity: 'U', layout: 'normal' },
            { cardNumber: 88, cardSet: cardSetId, name: 'Null Caller', rarity: 'U', layout: 'normal' },
            { cardNumber: 89, cardSet: cardSetId, name: 'Remorseless Punishment', rarity: 'R', layout: 'normal' },
            { cardNumber: 90, cardSet: cardSetId, name: 'Tar Snare', rarity: 'C', layout: 'normal' },
            { cardNumber: 91, cardSet: cardSetId, name: 'Untamed Hunger', rarity: 'C', layout: 'normal' },
            { cardNumber: 92, cardSet: cardSetId, name: 'Vampire Envoy', rarity: 'C', layout: 'normal' },
            { cardNumber: 93, cardSet: cardSetId, name: 'Zulaport Chainmage', rarity: 'C', layout: 'normal' },
            { cardNumber: 94, cardSet: cardSetId, name: 'Consuming Sinkhole', rarity: 'C', layout: 'normal' },
            { cardNumber: 95, cardSet: cardSetId, name: 'Eldrazi Aggressor', rarity: 'C', layout: 'normal' },
            { cardNumber: 96, cardSet: cardSetId, name: 'Eldrazi Obligator', rarity: 'R', layout: 'normal' },
            { cardNumber: 97, cardSet: cardSetId, name: 'Immobilizer Eldrazi', rarity: 'U', layout: 'normal' },
            { cardNumber: 98, cardSet: cardSetId, name: 'Kozilek\'s Return', rarity: 'M', layout: 'normal' },
            { cardNumber: 99, cardSet: cardSetId, name: 'Maw of Kozilek', rarity: 'C', layout: 'normal' },
            { cardNumber: 100, cardSet: cardSetId, name: 'Reality Hemorrhage', rarity: 'C', layout: 'normal' },
            { cardNumber: 101, cardSet: cardSetId, name: 'Akoum Flameseeker', rarity: 'C', layout: 'normal' },
            { cardNumber: 102, cardSet: cardSetId, name: 'Boulder Salvo', rarity: 'C', layout: 'normal' },
            { cardNumber: 103, cardSet: cardSetId, name: 'Brute Strength', rarity: 'C', layout: 'normal' },
            { cardNumber: 104, cardSet: cardSetId, name: 'Chandra, Flamecaller', rarity: 'M', layout: 'normal' },
            { cardNumber: 105, cardSet: cardSetId, name: 'Cinder Hellion', rarity: 'C', layout: 'normal' },
            { cardNumber: 106, cardSet: cardSetId, name: 'Devour in Flames', rarity: 'U', layout: 'normal' },
            { cardNumber: 107, cardSet: cardSetId, name: 'Embodiment of Fury', rarity: 'U', layout: 'normal' },
            { cardNumber: 108, cardSet: cardSetId, name: 'Expedite', rarity: 'C', layout: 'normal' },
            { cardNumber: 109, cardSet: cardSetId, name: 'Fall of the Titans', rarity: 'R', layout: 'normal' },
            { cardNumber: 110, cardSet: cardSetId, name: 'Goblin Dark-Dwellers', rarity: 'R', layout: 'normal' },
            { cardNumber: 111, cardSet: cardSetId, name: 'Goblin Freerunner', rarity: 'C', layout: 'normal' },
            { cardNumber: 112, cardSet: cardSetId, name: 'Kazuul\'s Toll Collector', rarity: 'U', layout: 'normal' },
            { cardNumber: 113, cardSet: cardSetId, name: 'Oath of Chandra', rarity: 'R', layout: 'normal' },
            { cardNumber: 114, cardSet: cardSetId, name: 'Press into Service', rarity: 'U', layout: 'normal' },
            { cardNumber: 115, cardSet: cardSetId, name: 'Pyromancer\'s Assault', rarity: 'U', layout: 'normal' },
            { cardNumber: 116, cardSet: cardSetId, name: 'Reckless Bushwhacker', rarity: 'U', layout: 'normal' },
            { cardNumber: 117, cardSet: cardSetId, name: 'Sparkmage\'s Gambit', rarity: 'C', layout: 'normal' },
            { cardNumber: 118, cardSet: cardSetId, name: 'Tears of Valakut', rarity: 'U', layout: 'normal' },
            { cardNumber: 119, cardSet: cardSetId, name: 'Tyrant of Valakut', rarity: 'R', layout: 'normal' },
            { cardNumber: 120, cardSet: cardSetId, name: 'Zada\'s Commando', rarity: 'C', layout: 'normal' },
            { cardNumber: 121, cardSet: cardSetId, name: 'Birthing Hulk', rarity: 'U', layout: 'normal' },
            { cardNumber: 122, cardSet: cardSetId, name: 'Ruin in Their Wake', rarity: 'U', layout: 'normal' },
            { cardNumber: 123, cardSet: cardSetId, name: 'Scion Summoner', rarity: 'C', layout: 'normal' },
            { cardNumber: 124, cardSet: cardSetId, name: 'Stalking Drone', rarity: 'C', layout: 'normal' },
            { cardNumber: 125, cardSet: cardSetId, name: 'Vile Redeemer', rarity: 'R', layout: 'normal' },
            { cardNumber: 126, cardSet: cardSetId, name: 'World Breaker', rarity: 'M', layout: 'normal' },
            { cardNumber: 127, cardSet: cardSetId, name: 'Baloth Pup', rarity: 'U', layout: 'normal' },
            { cardNumber: 128, cardSet: cardSetId, name: 'Bonds of Mortality', rarity: 'U', layout: 'normal' },
            { cardNumber: 129, cardSet: cardSetId, name: 'Canopy Gorger', rarity: 'C', layout: 'normal' },
            { cardNumber: 130, cardSet: cardSetId, name: 'Elemental Uprising', rarity: 'C', layout: 'normal' },
            { cardNumber: 131, cardSet: cardSetId, name: 'Embodiment of Insight', rarity: 'U', layout: 'normal' },
            { cardNumber: 132, cardSet: cardSetId, name: 'Gladehart Cavalry', rarity: 'R', layout: 'normal' },
            { cardNumber: 133, cardSet: cardSetId, name: 'Harvester Troll', rarity: 'U', layout: 'normal' },
            { cardNumber: 134, cardSet: cardSetId, name: 'Lead by Example', rarity: 'C', layout: 'normal' },
            { cardNumber: 135, cardSet: cardSetId, name: 'Loam Larva', rarity: 'C', layout: 'normal' },
            { cardNumber: 136, cardSet: cardSetId, name: 'Natural State', rarity: 'C', layout: 'normal' },
            { cardNumber: 137, cardSet: cardSetId, name: 'Netcaster Spider', rarity: 'C', layout: 'normal' },
            { cardNumber: 138, cardSet: cardSetId, name: 'Nissa, Voice of Zendikar', rarity: 'M', layout: 'normal' },
            { cardNumber: 139, cardSet: cardSetId, name: 'Nissa\'s Judgment', rarity: 'U', layout: 'normal' },
            { cardNumber: 140, cardSet: cardSetId, name: 'Oath of Nissa', rarity: 'R', layout: 'normal' },
            { cardNumber: 141, cardSet: cardSetId, name: 'Pulse of Murasa', rarity: 'C', layout: 'normal' },
            { cardNumber: 142, cardSet: cardSetId, name: 'Saddleback Lagac', rarity: 'C', layout: 'normal' },
            { cardNumber: 143, cardSet: cardSetId, name: 'Seed Guardian', rarity: 'U', layout: 'normal' },
            { cardNumber: 144, cardSet: cardSetId, name: 'Sylvan Advocate', rarity: 'R', layout: 'normal' },
            { cardNumber: 145, cardSet: cardSetId, name: 'Tajuru Pathwarden', rarity: 'C', layout: 'normal' },
            { cardNumber: 146, cardSet: cardSetId, name: 'Vines of the Recluse', rarity: 'C', layout: 'normal' },
            { cardNumber: 147, cardSet: cardSetId, name: 'Zendikar Resurgent', rarity: 'R', layout: 'normal' },
            { cardNumber: 148, cardSet: cardSetId, name: 'Flayer Drone', rarity: 'U', layout: 'normal' },
            { cardNumber: 149, cardSet: cardSetId, name: 'Mindmelter', rarity: 'U', layout: 'normal' },
            { cardNumber: 150, cardSet: cardSetId, name: 'Void Grafter', rarity: 'U', layout: 'normal' },
            { cardNumber: 151, cardSet: cardSetId, name: 'Ayli, Eternal Pilgrim', rarity: 'R', layout: 'normal' },
            { cardNumber: 152, cardSet: cardSetId, name: 'Baloth Null', rarity: 'U', layout: 'normal' },
            { cardNumber: 153, cardSet: cardSetId, name: 'Cliffhaven Vampire', rarity: 'U', layout: 'normal' },
            { cardNumber: 154, cardSet: cardSetId, name: 'Joraga Auxiliary', rarity: 'U', layout: 'normal' },
            { cardNumber: 155, cardSet: cardSetId, name: 'Jori En, Ruin Diver', rarity: 'R', layout: 'normal' },
            { cardNumber: 156, cardSet: cardSetId, name: 'Mina and Denn, Wildborn', rarity: 'R', layout: 'normal' },
            { cardNumber: 157, cardSet: cardSetId, name: 'Reflector Mage', rarity: 'U', layout: 'normal' },
            { cardNumber: 158, cardSet: cardSetId, name: 'Relentless Hunter', rarity: 'U', layout: 'normal' },
            { cardNumber: 159, cardSet: cardSetId, name: 'Stormchaser Mage', rarity: 'U', layout: 'normal' },
            { cardNumber: 160, cardSet: cardSetId, name: 'Weapons Trainer', rarity: 'U', layout: 'normal' },
            { cardNumber: 161, cardSet: cardSetId, name: 'Bone Saw', rarity: 'C', layout: 'normal' },
            { cardNumber: 162, cardSet: cardSetId, name: 'Captain\'s Claws', rarity: 'R', layout: 'normal' },
            { cardNumber: 163, cardSet: cardSetId, name: 'Chitinous Cloak', rarity: 'U', layout: 'normal' },
            { cardNumber: 164, cardSet: cardSetId, name: 'Hedron Crawler', rarity: 'C', layout: 'normal' },
            { cardNumber: 165, cardSet: cardSetId, name: 'Seer\'s Lantern', rarity: 'C', layout: 'normal' },
            { cardNumber: 166, cardSet: cardSetId, name: 'Stoneforge Masterwork', rarity: 'R', layout: 'normal' },
            { cardNumber: 167, cardSet: cardSetId, name: 'Strider Harness', rarity: 'U', layout: 'normal' },
            { cardNumber: 168, cardSet: cardSetId, name: 'Cinder Barrens', rarity: 'U', layout: 'normal' },
            { cardNumber: 169, cardSet: cardSetId, name: 'Corrupted Crossroads', rarity: 'R', layout: 'normal' },
            { cardNumber: 170, cardSet: cardSetId, name: 'Crumbling Vestige', rarity: 'C', layout: 'normal' },
            { cardNumber: 171, cardSet: cardSetId, name: 'Hissing Quagmire', rarity: 'R', layout: 'normal' },
            { cardNumber: 172, cardSet: cardSetId, name: 'Holdout Settlement', rarity: 'C', layout: 'normal' },
            { cardNumber: 173, cardSet: cardSetId, name: 'Meandering River', rarity: 'U', layout: 'normal' },
            { cardNumber: 174, cardSet: cardSetId, name: 'Mirrorpool', rarity: 'M', layout: 'normal' },
            { cardNumber: 175, cardSet: cardSetId, name: 'Needle Spires', rarity: 'R', layout: 'normal' },
            { cardNumber: 176, cardSet: cardSetId, name: 'Ruins of Oran-Rief', rarity: 'R', layout: 'normal' },
            { cardNumber: 177, cardSet: cardSetId, name: 'Sea Gate Wreckage', rarity: 'R', layout: 'normal' },
            { cardNumber: 178, cardSet: cardSetId, name: 'Submerged Boneyard', rarity: 'U', layout: 'normal' },
            { cardNumber: 179, cardSet: cardSetId, name: 'Timber Gorge', rarity: 'U', layout: 'normal' },
            { cardNumber: 180, cardSet: cardSetId, name: 'Tranquil Expanse', rarity: 'U', layout: 'normal' },
            { cardNumber: 181, cardSet: cardSetId, name: 'Unknown Shores', rarity: 'C', layout: 'normal' },
            { cardNumber: 182, cardSet: cardSetId, name: 'Wandering Fumarole', rarity: 'R', layout: 'normal' },
            { cardNumber: 183, cardSet: cardSetId, name: 'Wastes', rarity: 'C', layout: 'normal' },
            { cardNumber: 184, cardSet: cardSetId, name: 'Wastes', rarity: 'C', layout: 'normal' },
        ]).execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Get the card set id
        const shortname = 'OGW';
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
