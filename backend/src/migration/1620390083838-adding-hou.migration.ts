import { CardSet } from "../card/entity/card-set.entity";
import { InsertResult, MigrationInterface, QueryRunner } from "typeorm";

export class addingHou1620390083838 implements MigrationInterface {
    name = 'addingHou1620390083838';

    public async up(queryRunner: QueryRunner): Promise<void> {

        const insertResult: InsertResult = await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card_set')
            .values({ name: 'Hour of Devestation', shortName: 'HOU' })
            .execute();
        const cardSetId: number = insertResult.identifiers[0].id;

        await queryRunner.manager.createQueryBuilder().insert().into('card').values([
            { cardNumber: 1, cardSet: cardSetId, name: 'Act of Heroism', rarity: 'C', layout: 'normal' },
            { cardNumber: 2, cardSet: cardSetId, name: 'Adorned Pouncer', rarity: 'R', layout: 'normal' },
            { cardNumber: 3, cardSet: cardSetId, name: 'Angel of Condemnation', rarity: 'R', layout: 'normal' },
            { cardNumber: 4, cardSet: cardSetId, name: 'Angel of the God-Pharaoh', rarity: 'U', layout: 'normal' },
            { cardNumber: 5, cardSet: cardSetId, name: 'Aven of Enduring Hope', rarity: 'C', layout: 'normal' },
            { cardNumber: 6, cardSet: cardSetId, name: 'Crested Sunmare', rarity: 'M', layout: 'normal' },
            { cardNumber: 7, cardSet: cardSetId, name: 'Dauntless Aven', rarity: 'C', layout: 'normal' },
            { cardNumber: 8, cardSet: cardSetId, name: 'Desert\'s Hold', rarity: 'U', layout: 'normal' },
            { cardNumber: 9, cardSet: cardSetId, name: 'Disposal Mummy', rarity: 'C', layout: 'normal' },
            { cardNumber: 10, cardSet: cardSetId, name: 'Djeru, With Eyes Open', rarity: 'R', layout: 'normal' },
            { cardNumber: 11, cardSet: cardSetId, name: 'Djeru\'s Renunciation', rarity: 'C', layout: 'normal' },
            { cardNumber: 12, cardSet: cardSetId, name: 'Dutiful Servants', rarity: 'C', layout: 'normal' },
            { cardNumber: 13, cardSet: cardSetId, name: 'Gideon\'s Defeat', rarity: 'U', layout: 'normal' },
            { cardNumber: 14, cardSet: cardSetId, name: 'God-Pharaoh\'s Faithful', rarity: 'C', layout: 'normal' },
            { cardNumber: 15, cardSet: cardSetId, name: 'Hour of Revelation', rarity: 'R', layout: 'normal' },
            { cardNumber: 16, cardSet: cardSetId, name: 'Mummy Paramount', rarity: 'C', layout: 'normal' },
            { cardNumber: 17, cardSet: cardSetId, name: 'Oketra\'s Avenger', rarity: 'C', layout: 'normal' },
            { cardNumber: 18, cardSet: cardSetId, name: 'Oketra\'s Last Mercy', rarity: 'R', layout: 'normal' },
            { cardNumber: 19, cardSet: cardSetId, name: 'Overwhelming Splendor', rarity: 'M', layout: 'normal' },
            { cardNumber: 20, cardSet: cardSetId, name: 'Sandblast', rarity: 'C', layout: 'normal' },
            { cardNumber: 21, cardSet: cardSetId, name: 'Saving Grace', rarity: 'U', layout: 'normal' },
            { cardNumber: 22, cardSet: cardSetId, name: 'Solemnity', rarity: 'R', layout: 'normal' },
            { cardNumber: 23, cardSet: cardSetId, name: 'Solitary Camel', rarity: 'C', layout: 'normal' },
            { cardNumber: 24, cardSet: cardSetId, name: 'Steadfast Sentinel', rarity: 'C', layout: 'normal' },
            { cardNumber: 25, cardSet: cardSetId, name: 'Steward of Solidarity', rarity: 'U', layout: 'normal' },
            { cardNumber: 26, cardSet: cardSetId, name: 'Sunscourge Champion', rarity: 'U', layout: 'normal' },
            { cardNumber: 27, cardSet: cardSetId, name: 'Unconventional Tactics', rarity: 'U', layout: 'normal' },
            { cardNumber: 28, cardSet: cardSetId, name: 'Vizier of the True', rarity: 'U', layout: 'normal' },
            { cardNumber: 29, cardSet: cardSetId, name: 'Aerial Guide', rarity: 'C', layout: 'normal' },
            { cardNumber: 30, cardSet: cardSetId, name: 'Aven Reedstalker', rarity: 'C', layout: 'normal' },
            { cardNumber: 31, cardSet: cardSetId, name: 'Champion of Wits', rarity: 'R', layout: 'normal' },
            { cardNumber: 32, cardSet: cardSetId, name: 'Countervailing Winds', rarity: 'C', layout: 'normal' },
            { cardNumber: 33, cardSet: cardSetId, name: 'Cunning Survivor', rarity: 'C', layout: 'normal' },
            { cardNumber: 34, cardSet: cardSetId, name: 'Eternal of Harsh Truths', rarity: 'U', layout: 'normal' },
            { cardNumber: 35, cardSet: cardSetId, name: 'Fraying Sanity', rarity: 'R', layout: 'normal' },
            { cardNumber: 36, cardSet: cardSetId, name: 'Hour of Eternity', rarity: 'R', layout: 'normal' },
            { cardNumber: 37, cardSet: cardSetId, name: 'Imaginary Threats', rarity: 'U', layout: 'normal' },
            { cardNumber: 38, cardSet: cardSetId, name: 'Jace\'s Defeat', rarity: 'U', layout: 'normal' },
            { cardNumber: 39, cardSet: cardSetId, name: 'Kefnet\'s Last Word', rarity: 'R', layout: 'normal' },
            { cardNumber: 40, cardSet: cardSetId, name: 'Nimble Obstructionist', rarity: 'R', layout: 'normal' },
            { cardNumber: 41, cardSet: cardSetId, name: 'Ominous Sphinx', rarity: 'U', layout: 'normal' },
            { cardNumber: 42, cardSet: cardSetId, name: 'Proven Combatant', rarity: 'C', layout: 'normal' },
            { cardNumber: 43, cardSet: cardSetId, name: 'Riddleform', rarity: 'U', layout: 'normal' },
            { cardNumber: 44, cardSet: cardSetId, name: 'Seer of the Last Tomorrow', rarity: 'C', layout: 'normal' },
            { cardNumber: 45, cardSet: cardSetId, name: 'Sinuous Striker', rarity: 'U', layout: 'normal' },
            { cardNumber: 46, cardSet: cardSetId, name: 'Spellweaver Eternal', rarity: 'C', layout: 'normal' },
            { cardNumber: 47, cardSet: cardSetId, name: 'Strategic Planning', rarity: 'C', layout: 'normal' },
            { cardNumber: 48, cardSet: cardSetId, name: 'Striped Riverwinder', rarity: 'C', layout: 'normal' },
            { cardNumber: 49, cardSet: cardSetId, name: 'Supreme Will', rarity: 'U', layout: 'normal' },
            { cardNumber: 50, cardSet: cardSetId, name: 'Swarm Intelligence', rarity: 'R', layout: 'normal' },
            { cardNumber: 51, cardSet: cardSetId, name: 'Tragic Lesson', rarity: 'C', layout: 'normal' },
            { cardNumber: 52, cardSet: cardSetId, name: 'Unesh, Criosphinx Sovereign', rarity: 'M', layout: 'normal' },
            { cardNumber: 53, cardSet: cardSetId, name: 'Unquenchable Thirst', rarity: 'C', layout: 'normal' },
            { cardNumber: 54, cardSet: cardSetId, name: 'Unsummon', rarity: 'C', layout: 'normal' },
            { cardNumber: 55, cardSet: cardSetId, name: 'Vizier of the Anointed', rarity: 'U', layout: 'normal' },
            { cardNumber: 56, cardSet: cardSetId, name: 'Accursed Horde', rarity: 'U', layout: 'normal' },
            { cardNumber: 57, cardSet: cardSetId, name: 'Ammit Eternal', rarity: 'R', layout: 'normal' },
            { cardNumber: 58, cardSet: cardSetId, name: 'Apocalypse Demon', rarity: 'R', layout: 'normal' },
            { cardNumber: 59, cardSet: cardSetId, name: 'Banewhip Punisher', rarity: 'U', layout: 'normal' },
            { cardNumber: 60, cardSet: cardSetId, name: 'Bontu\'s Last Reckoning', rarity: 'R', layout: 'normal' },
            { cardNumber: 61, cardSet: cardSetId, name: 'Carrion Screecher', rarity: 'C', layout: 'normal' },
            { cardNumber: 62, cardSet: cardSetId, name: 'Doomfall', rarity: 'U', layout: 'normal' },
            { cardNumber: 63, cardSet: cardSetId, name: 'Dreamstealer', rarity: 'R', layout: 'normal' },
            { cardNumber: 64, cardSet: cardSetId, name: 'Grisly Survivor', rarity: 'C', layout: 'normal' },
            { cardNumber: 65, cardSet: cardSetId, name: 'Hour of Glory', rarity: 'R', layout: 'normal' },
            { cardNumber: 66, cardSet: cardSetId, name: 'Khenra Eternal', rarity: 'C', layout: 'normal' },
            { cardNumber: 67, cardSet: cardSetId, name: 'Lethal Sting', rarity: 'C', layout: 'normal' },
            { cardNumber: 68, cardSet: cardSetId, name: 'Liliana\'s Defeat', rarity: 'U', layout: 'normal' },
            { cardNumber: 69, cardSet: cardSetId, name: 'Lurching Rotbeast', rarity: 'C', layout: 'normal' },
            { cardNumber: 70, cardSet: cardSetId, name: 'Marauding Boneslasher', rarity: 'C', layout: 'normal' },
            { cardNumber: 71, cardSet: cardSetId, name: 'Merciless Eternal', rarity: 'U', layout: 'normal' },
            { cardNumber: 72, cardSet: cardSetId, name: 'Moaning Wall', rarity: 'C', layout: 'normal' },
            { cardNumber: 73, cardSet: cardSetId, name: 'Razaketh, the Foulblooded', rarity: 'M', layout: 'normal' },
            { cardNumber: 74, cardSet: cardSetId, name: 'Razaketh\'s Rite', rarity: 'U', layout: 'normal' },
            { cardNumber: 75, cardSet: cardSetId, name: 'Ruin Rat', rarity: 'C', layout: 'normal' },
            { cardNumber: 76, cardSet: cardSetId, name: 'Scrounger of Souls', rarity: 'C', layout: 'normal' },
            { cardNumber: 77, cardSet: cardSetId, name: 'Torment of Hailfire', rarity: 'R', layout: 'normal' },
            { cardNumber: 78, cardSet: cardSetId, name: 'Torment of Scarabs', rarity: 'U', layout: 'normal' },
            { cardNumber: 79, cardSet: cardSetId, name: 'Torment of Venom', rarity: 'C', layout: 'normal' },
            { cardNumber: 80, cardSet: cardSetId, name: 'Vile Manifestation', rarity: 'U', layout: 'normal' },
            { cardNumber: 81, cardSet: cardSetId, name: 'Without Weakness', rarity: 'C', layout: 'normal' },
            { cardNumber: 82, cardSet: cardSetId, name: 'Wretched Camel', rarity: 'C', layout: 'normal' },
            { cardNumber: 83, cardSet: cardSetId, name: 'Abrade', rarity: 'U', layout: 'normal' },
            { cardNumber: 84, cardSet: cardSetId, name: 'Blur of Blades', rarity: 'C', layout: 'normal' },
            { cardNumber: 85, cardSet: cardSetId, name: 'Burning-Fist Minotaur', rarity: 'U', layout: 'normal' },
            { cardNumber: 86, cardSet: cardSetId, name: 'Chandra\'s Defeat', rarity: 'U', layout: 'normal' },
            { cardNumber: 87, cardSet: cardSetId, name: 'Chaos Maw', rarity: 'R', layout: 'normal' },
            { cardNumber: 88, cardSet: cardSetId, name: 'Crash Through', rarity: 'C', layout: 'normal' },
            { cardNumber: 89, cardSet: cardSetId, name: 'Defiant Khenra', rarity: 'C', layout: 'normal' },
            { cardNumber: 90, cardSet: cardSetId, name: 'Earthshaker Khenra', rarity: 'R', layout: 'normal' },
            { cardNumber: 91, cardSet: cardSetId, name: 'Fervent Paincaster', rarity: 'U', layout: 'normal' },
            { cardNumber: 92, cardSet: cardSetId, name: 'Firebrand Archer', rarity: 'C', layout: 'normal' },
            { cardNumber: 93, cardSet: cardSetId, name: 'Frontline Devastator', rarity: 'C', layout: 'normal' },
            { cardNumber: 94, cardSet: cardSetId, name: 'Gilded Cerodon', rarity: 'C', layout: 'normal' },
            { cardNumber: 95, cardSet: cardSetId, name: 'Granitic Titan', rarity: 'C', layout: 'normal' },
            { cardNumber: 96, cardSet: cardSetId, name: 'Hazoret\'s Undying Fury', rarity: 'R', layout: 'normal' },
            { cardNumber: 97, cardSet: cardSetId, name: 'Hour of Devastation', rarity: 'R', layout: 'normal' },
            { cardNumber: 98, cardSet: cardSetId, name: 'Imminent Doom', rarity: 'R', layout: 'normal' },
            { cardNumber: 99, cardSet: cardSetId, name: 'Inferno Jet', rarity: 'U', layout: 'normal' },
            { cardNumber: 100, cardSet: cardSetId, name: 'Khenra Scrapper', rarity: 'C', layout: 'normal' },
            { cardNumber: 101, cardSet: cardSetId, name: 'Kindled Fury', rarity: 'C', layout: 'normal' },
            { cardNumber: 102, cardSet: cardSetId, name: 'Magmaroth', rarity: 'U', layout: 'normal' },
            { cardNumber: 103, cardSet: cardSetId, name: 'Manticore Eternal', rarity: 'U', layout: 'normal' },
            { cardNumber: 104, cardSet: cardSetId, name: 'Neheb, the Eternal', rarity: 'M', layout: 'normal' },
            { cardNumber: 105, cardSet: cardSetId, name: 'Open Fire', rarity: 'C', layout: 'normal' },
            { cardNumber: 106, cardSet: cardSetId, name: 'Puncturing Blow', rarity: 'C', layout: 'normal' },
            { cardNumber: 107, cardSet: cardSetId, name: 'Sand Strangler', rarity: 'U', layout: 'normal' },
            { cardNumber: 108, cardSet: cardSetId, name: 'Thorned Moloch', rarity: 'C', layout: 'normal' },
            { cardNumber: 109, cardSet: cardSetId, name: 'Wildfire Eternal', rarity: 'R', layout: 'normal' },
            { cardNumber: 110, cardSet: cardSetId, name: 'Ambuscade', rarity: 'C', layout: 'normal' },
            { cardNumber: 111, cardSet: cardSetId, name: 'Beneath the Sands', rarity: 'C', layout: 'normal' },
            { cardNumber: 112, cardSet: cardSetId, name: 'Bitterbow Sharpshooters', rarity: 'C', layout: 'normal' },
            { cardNumber: 113, cardSet: cardSetId, name: 'Devotee of Strength', rarity: 'U', layout: 'normal' },
            { cardNumber: 114, cardSet: cardSetId, name: 'Dune Diviner', rarity: 'U', layout: 'normal' },
            { cardNumber: 115, cardSet: cardSetId, name: 'Feral Prowler', rarity: 'C', layout: 'normal' },
            { cardNumber: 116, cardSet: cardSetId, name: 'Frilled Sandwalla', rarity: 'C', layout: 'normal' },
            { cardNumber: 117, cardSet: cardSetId, name: 'Gift of Strength', rarity: 'C', layout: 'normal' },
            { cardNumber: 118, cardSet: cardSetId, name: 'Harrier Naga', rarity: 'C', layout: 'normal' },
            { cardNumber: 119, cardSet: cardSetId, name: 'Hope Tender', rarity: 'U', layout: 'normal' },
            { cardNumber: 120, cardSet: cardSetId, name: 'Hour of Promise', rarity: 'R', layout: 'normal' },
            { cardNumber: 121, cardSet: cardSetId, name: 'Life Goes On', rarity: 'C', layout: 'normal' },
            { cardNumber: 122, cardSet: cardSetId, name: 'Majestic Myriarch', rarity: 'M', layout: 'normal' },
            { cardNumber: 123, cardSet: cardSetId, name: 'Nissa\'s Defeat', rarity: 'U', layout: 'normal' },
            { cardNumber: 124, cardSet: cardSetId, name: 'Oasis Ritualist', rarity: 'C', layout: 'normal' },
            { cardNumber: 125, cardSet: cardSetId, name: 'Overcome', rarity: 'U', layout: 'normal' },
            { cardNumber: 126, cardSet: cardSetId, name: 'Pride Sovereign', rarity: 'R', layout: 'normal' },
            { cardNumber: 127, cardSet: cardSetId, name: 'Quarry Beetle', rarity: 'U', layout: 'normal' },
            { cardNumber: 128, cardSet: cardSetId, name: 'Rampaging Hippo', rarity: 'C', layout: 'normal' },
            { cardNumber: 129, cardSet: cardSetId, name: 'Ramunap Excavator', rarity: 'R', layout: 'normal' },
            { cardNumber: 130, cardSet: cardSetId, name: 'Ramunap Hydra', rarity: 'R', layout: 'normal' },
            { cardNumber: 131, cardSet: cardSetId, name: 'Resilient Khenra', rarity: 'R', layout: 'normal' },
            { cardNumber: 132, cardSet: cardSetId, name: 'Rhonas\'s Last Stand', rarity: 'R', layout: 'normal' },
            { cardNumber: 133, cardSet: cardSetId, name: 'Rhonas\'s Stalwart', rarity: 'C', layout: 'normal' },
            { cardNumber: 134, cardSet: cardSetId, name: 'Sidewinder Naga', rarity: 'C', layout: 'normal' },
            { cardNumber: 135, cardSet: cardSetId, name: 'Sifter Wurm', rarity: 'U', layout: 'normal' },
            { cardNumber: 136, cardSet: cardSetId, name: 'Tenacious Hunter', rarity: 'U', layout: 'normal' },
            { cardNumber: 137, cardSet: cardSetId, name: 'Uncage the Menagerie', rarity: 'M', layout: 'normal' },
            { cardNumber: 138, cardSet: cardSetId, name: 'Bloodwater Entity', rarity: 'U', layout: 'normal' },
            { cardNumber: 139, cardSet: cardSetId, name: 'The Locust God', rarity: 'M', layout: 'normal' },
            { cardNumber: 140, cardSet: cardSetId, name: 'Nicol Bolas, God-Pharaoh', rarity: 'M', layout: 'normal' },
            { cardNumber: 141, cardSet: cardSetId, name: 'Obelisk Spider', rarity: 'U', layout: 'normal' },
            { cardNumber: 142, cardSet: cardSetId, name: 'Resolute Survivors', rarity: 'U', layout: 'normal' },
            { cardNumber: 143, cardSet: cardSetId, name: 'River Hoopoe', rarity: 'U', layout: 'normal' },
            { cardNumber: 144, cardSet: cardSetId, name: 'Samut, the Tested', rarity: 'M', layout: 'normal' },
            { cardNumber: 145, cardSet: cardSetId, name: 'The Scarab God', rarity: 'M', layout: 'normal' },
            { cardNumber: 146, cardSet: cardSetId, name: 'The Scorpion God', rarity: 'M', layout: 'normal' },
            { cardNumber: 147, cardSet: cardSetId, name: 'Unraveling Mummy', rarity: 'U', layout: 'normal' },
            { cardNumber: 148, cardSet: cardSetId, name: 'Farm', rarity: 'U', layout: 'aftermath' },
            { cardNumber: 149, cardSet: cardSetId, name: 'Consign', rarity: 'U', layout: 'aftermath' },
            { cardNumber: 150, cardSet: cardSetId, name: 'Claim', rarity: 'U', layout: 'aftermath' },
            { cardNumber: 151, cardSet: cardSetId, name: 'Struggle', rarity: 'U', layout: 'aftermath' },
            { cardNumber: 152, cardSet: cardSetId, name: 'Appeal', rarity: 'U', layout: 'aftermath' },
            { cardNumber: 153, cardSet: cardSetId, name: 'Leave', rarity: 'R', layout: 'aftermath' },
            { cardNumber: 154, cardSet: cardSetId, name: 'Reason', rarity: 'R', layout: 'aftermath' },
            { cardNumber: 155, cardSet: cardSetId, name: 'Grind', rarity: 'R', layout: 'aftermath' },
            { cardNumber: 156, cardSet: cardSetId, name: 'Refuse', rarity: 'R', layout: 'aftermath' },
            { cardNumber: 157, cardSet: cardSetId, name: 'Driven', rarity: 'R', layout: 'aftermath' },
            { cardNumber: 158, cardSet: cardSetId, name: 'Abandoned Sarcophagus', rarity: 'R', layout: 'normal' },
            { cardNumber: 159, cardSet: cardSetId, name: 'Crook of Condemnation', rarity: 'U', layout: 'normal' },
            { cardNumber: 160, cardSet: cardSetId, name: 'Dagger of the Worthy', rarity: 'U', layout: 'normal' },
            { cardNumber: 161, cardSet: cardSetId, name: 'God-Pharaoh\'s Gift', rarity: 'R', layout: 'normal' },
            { cardNumber: 162, cardSet: cardSetId, name: 'Graven Abomination', rarity: 'C', layout: 'normal' },
            { cardNumber: 163, cardSet: cardSetId, name: 'Hollow One', rarity: 'R', layout: 'normal' },
            { cardNumber: 164, cardSet: cardSetId, name: 'Manalith', rarity: 'C', layout: 'normal' },
            { cardNumber: 165, cardSet: cardSetId, name: 'Mirage Mirror', rarity: 'R', layout: 'normal' },
            { cardNumber: 166, cardSet: cardSetId, name: 'Sunset Pyramid', rarity: 'U', layout: 'normal' },
            { cardNumber: 167, cardSet: cardSetId, name: 'Traveler\'s Amulet', rarity: 'C', layout: 'normal' },
            { cardNumber: 168, cardSet: cardSetId, name: 'Wall of Forgotten Pharaohs', rarity: 'C', layout: 'normal' },
            { cardNumber: 169, cardSet: cardSetId, name: 'Crypt of the Eternals', rarity: 'U', layout: 'normal' },
            { cardNumber: 170, cardSet: cardSetId, name: 'Desert of the Fervent', rarity: 'C', layout: 'normal' },
            { cardNumber: 171, cardSet: cardSetId, name: 'Desert of the Glorified', rarity: 'C', layout: 'normal' },
            { cardNumber: 172, cardSet: cardSetId, name: 'Desert of the Indomitable', rarity: 'C', layout: 'normal' },
            { cardNumber: 173, cardSet: cardSetId, name: 'Desert of the Mindful', rarity: 'C', layout: 'normal' },
            { cardNumber: 174, cardSet: cardSetId, name: 'Desert of the True', rarity: 'C', layout: 'normal' },
            { cardNumber: 175, cardSet: cardSetId, name: 'Dunes of the Dead', rarity: 'U', layout: 'normal' },
            { cardNumber: 176, cardSet: cardSetId, name: 'Endless Sands', rarity: 'R', layout: 'normal' },
            { cardNumber: 177, cardSet: cardSetId, name: 'Hashep Oasis', rarity: 'U', layout: 'normal' },
            { cardNumber: 178, cardSet: cardSetId, name: 'Hostile Desert', rarity: 'R', layout: 'normal' },
            { cardNumber: 179, cardSet: cardSetId, name: 'Ifnir Deadlands', rarity: 'U', layout: 'normal' },
            { cardNumber: 180, cardSet: cardSetId, name: 'Ipnu Rivulet', rarity: 'U', layout: 'normal' },
            { cardNumber: 181, cardSet: cardSetId, name: 'Ramunap Ruins', rarity: 'U', layout: 'normal' },
            { cardNumber: 182, cardSet: cardSetId, name: 'Scavenger Grounds', rarity: 'R', layout: 'normal' },
            { cardNumber: 183, cardSet: cardSetId, name: 'Shefet Dunes', rarity: 'U', layout: 'normal' },
            { cardNumber: 184, cardSet: cardSetId, name: 'Survivors\' Encampment', rarity: 'C', layout: 'normal' },
            { cardNumber: 185, cardSet: cardSetId, name: 'Plains', rarity: 'C', layout: 'normal' },
            { cardNumber: 186, cardSet: cardSetId, name: 'Island', rarity: 'C', layout: 'normal' },
            { cardNumber: 187, cardSet: cardSetId, name: 'Swamp', rarity: 'C', layout: 'normal' },
            { cardNumber: 188, cardSet: cardSetId, name: 'Mountain', rarity: 'C', layout: 'normal' },
            { cardNumber: 189, cardSet: cardSetId, name: 'Forest', rarity: 'C', layout: 'normal' },
            { cardNumber: 190, cardSet: cardSetId, name: 'Plains', rarity: 'C', layout: 'normal' },
            { cardNumber: 191, cardSet: cardSetId, name: 'Plains', rarity: 'C', layout: 'normal' },
            { cardNumber: 192, cardSet: cardSetId, name: 'Island', rarity: 'C', layout: 'normal' },
            { cardNumber: 193, cardSet: cardSetId, name: 'Island', rarity: 'C', layout: 'normal' },
            { cardNumber: 194, cardSet: cardSetId, name: 'Swamp', rarity: 'C', layout: 'normal' },
            { cardNumber: 195, cardSet: cardSetId, name: 'Swamp', rarity: 'C', layout: 'normal' },
            { cardNumber: 196, cardSet: cardSetId, name: 'Mountain', rarity: 'C', layout: 'normal' },
            { cardNumber: 197, cardSet: cardSetId, name: 'Mountain', rarity: 'C', layout: 'normal' },
            { cardNumber: 198, cardSet: cardSetId, name: 'Forest', rarity: 'C', layout: 'normal' },
            { cardNumber: 199, cardSet: cardSetId, name: 'Forest', rarity: 'C', layout: 'normal' },
            { cardNumber: 200, cardSet: cardSetId, name: 'Nissa, Genesis Mage', rarity: 'M', layout: 'normal' },
            { cardNumber: 201, cardSet: cardSetId, name: 'Avid Reclaimer', rarity: 'U', layout: 'normal' },
            { cardNumber: 202, cardSet: cardSetId, name: 'Brambleweft Behemoth', rarity: 'C', layout: 'normal' },
            { cardNumber: 203, cardSet: cardSetId, name: 'Nissa\'s Encouragement', rarity: 'R', layout: 'normal' },
            { cardNumber: 204, cardSet: cardSetId, name: 'Woodland Stream', rarity: 'C', layout: 'normal' },
            { cardNumber: 205, cardSet: cardSetId, name: 'Nicol Bolas, the Deceiver', rarity: 'M', layout: 'normal' },
            { cardNumber: 206, cardSet: cardSetId, name: 'Wasp of the Bitter End', rarity: 'U', layout: 'normal' },
            { cardNumber: 207, cardSet: cardSetId, name: 'Zealot of the God-Pharaoh', rarity: 'C', layout: 'normal' },
            { cardNumber: 208, cardSet: cardSetId, name: 'Visage of Bolas', rarity: 'R', layout: 'normal' },
            { cardNumber: 209, cardSet: cardSetId, name: 'Cinder Barrens', rarity: 'C', layout: 'normal' },
        ]).execute();

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Get the card set id
        const shortname = 'HOU';
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
