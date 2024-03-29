import { CardSet } from "../card/entity/card-set.entity";
import { InsertResult, MigrationInterface, QueryRunner } from "typeorm";

export class addingXln1620390186868 implements MigrationInterface {
    name = 'addingXln1620390186868';

    public async up(queryRunner: QueryRunner): Promise<void> {

        const insertResult: InsertResult = await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card_set')
            .values({ name: 'Ixalan', shortName: 'XLN' })
            .execute();
        const cardSetId: number = insertResult.identifiers[0].id;

        await queryRunner.manager.createQueryBuilder().insert().into('card').values([
            { cardNumber: 1, cardSet: cardSetId, name: 'Adanto Vanguard', rarity: 'U', layout: 'normal' },
            { cardNumber: 2, cardSet: cardSetId, name: 'Ashes of the Abhorrent', rarity: 'R', layout: 'normal' },
            { cardNumber: 3, cardSet: cardSetId, name: 'Axis of Mortality', rarity: 'M', layout: 'normal' },
            { cardNumber: 4, cardSet: cardSetId, name: 'Bellowing Aegisaur', rarity: 'U', layout: 'normal' },
            { cardNumber: 5, cardSet: cardSetId, name: 'Bishop of Rebirth', rarity: 'R', layout: 'normal' },
            { cardNumber: 6, cardSet: cardSetId, name: 'Bishop\'s Soldier', rarity: 'C', layout: 'normal' },
            { cardNumber: 7, cardSet: cardSetId, name: 'Bright Reprisal', rarity: 'U', layout: 'normal' },
            { cardNumber: 8, cardSet: cardSetId, name: 'Demystify', rarity: 'C', layout: 'normal' },
            { cardNumber: 9, cardSet: cardSetId, name: 'Duskborne Skymarcher', rarity: 'U', layout: 'normal' },
            { cardNumber: 10, cardSet: cardSetId, name: 'Emissary of Sunrise', rarity: 'U', layout: 'normal' },
            { cardNumber: 11, cardSet: cardSetId, name: 'Encampment Keeper', rarity: 'C', layout: 'normal' },
            { cardNumber: 12, cardSet: cardSetId, name: 'Glorifier of Dusk', rarity: 'U', layout: 'normal' },
            { cardNumber: 13, cardSet: cardSetId, name: 'Goring Ceratops', rarity: 'R', layout: 'normal' },
            { cardNumber: 14, cardSet: cardSetId, name: 'Imperial Aerosaur', rarity: 'U', layout: 'normal' },
            { cardNumber: 15, cardSet: cardSetId, name: 'Imperial Lancer', rarity: 'U', layout: 'normal' },
            { cardNumber: 16, cardSet: cardSetId, name: 'Inspiring Cleric', rarity: 'U', layout: 'normal' },
            { cardNumber: 17, cardSet: cardSetId, name: 'Ixalan\'s Binding', rarity: 'U', layout: 'normal' },
            { cardNumber: 18, cardSet: cardSetId, name: 'Kinjalli\'s Caller', rarity: 'C', layout: 'normal' },
            { cardNumber: 19, cardSet: cardSetId, name: 'Kinjalli\'s Sunwing', rarity: 'R', layout: 'normal' },
            { cardNumber: 20, cardSet: cardSetId, name: 'Legion Conquistador', rarity: 'C', layout: 'normal' },
            { cardNumber: 21, cardSet: cardSetId, name: 'Legion\'s Judgment', rarity: 'C', layout: 'normal' },
            { cardNumber: 22, cardSet: cardSetId, name: 'Legion\'s Landing', rarity: 'R', layout: 'transform' },
            { cardNumber: 23, cardSet: cardSetId, name: 'Looming Altisaur', rarity: 'C', layout: 'normal' },
            { cardNumber: 24, cardSet: cardSetId, name: 'Mavren Fein, Dusk Apostle', rarity: 'R', layout: 'normal' },
            { cardNumber: 25, cardSet: cardSetId, name: 'Paladin of the Bloodstained', rarity: 'C', layout: 'normal' },
            { cardNumber: 26, cardSet: cardSetId, name: 'Pious Interdiction', rarity: 'C', layout: 'normal' },
            { cardNumber: 27, cardSet: cardSetId, name: 'Priest of the Wakening Sun', rarity: 'R', layout: 'normal' },
            { cardNumber: 28, cardSet: cardSetId, name: 'Pterodon Knight', rarity: 'C', layout: 'normal' },
            { cardNumber: 29, cardSet: cardSetId, name: 'Queen\'s Commission', rarity: 'C', layout: 'normal' },
            { cardNumber: 30, cardSet: cardSetId, name: 'Rallying Roar', rarity: 'U', layout: 'normal' },
            { cardNumber: 31, cardSet: cardSetId, name: 'Raptor Companion', rarity: 'C', layout: 'normal' },
            { cardNumber: 32, cardSet: cardSetId, name: 'Ritual of Rejuvenation', rarity: 'C', layout: 'normal' },
            { cardNumber: 33, cardSet: cardSetId, name: 'Sanguine Sacrament', rarity: 'R', layout: 'normal' },
            { cardNumber: 34, cardSet: cardSetId, name: 'Settle the Wreckage', rarity: 'R', layout: 'normal' },
            { cardNumber: 35, cardSet: cardSetId, name: 'Sheltering Light', rarity: 'U', layout: 'normal' },
            { cardNumber: 36, cardSet: cardSetId, name: 'Shining Aerosaur', rarity: 'C', layout: 'normal' },
            { cardNumber: 37, cardSet: cardSetId, name: 'Skyblade of the Legion', rarity: 'C', layout: 'normal' },
            { cardNumber: 38, cardSet: cardSetId, name: 'Slash of Talons', rarity: 'C', layout: 'normal' },
            { cardNumber: 39, cardSet: cardSetId, name: 'Steadfast Armasaur', rarity: 'U', layout: 'normal' },
            { cardNumber: 40, cardSet: cardSetId, name: 'Sunrise Seeker', rarity: 'C', layout: 'normal' },
            { cardNumber: 41, cardSet: cardSetId, name: 'Territorial Hammerskull', rarity: 'C', layout: 'normal' },
            { cardNumber: 42, cardSet: cardSetId, name: 'Tocatli Honor Guard', rarity: 'R', layout: 'normal' },
            { cardNumber: 43, cardSet: cardSetId, name: 'Vampire\'s Zeal', rarity: 'C', layout: 'normal' },
            { cardNumber: 44, cardSet: cardSetId, name: 'Wakening Sun\'s Avatar', rarity: 'M', layout: 'normal' },
            { cardNumber: 45, cardSet: cardSetId, name: 'Air Elemental', rarity: 'U', layout: 'normal' },
            { cardNumber: 46, cardSet: cardSetId, name: 'Arcane Adaptation', rarity: 'R', layout: 'normal' },
            { cardNumber: 47, cardSet: cardSetId, name: 'Cancel', rarity: 'C', layout: 'normal' },
            { cardNumber: 48, cardSet: cardSetId, name: 'Chart a Course', rarity: 'U', layout: 'normal' },
            { cardNumber: 49, cardSet: cardSetId, name: 'Daring Saboteur', rarity: 'R', layout: 'normal' },
            { cardNumber: 50, cardSet: cardSetId, name: 'Deadeye Quartermaster', rarity: 'U', layout: 'normal' },
            { cardNumber: 51, cardSet: cardSetId, name: 'Deeproot Waters', rarity: 'U', layout: 'normal' },
            { cardNumber: 52, cardSet: cardSetId, name: 'Depths of Desire', rarity: 'C', layout: 'normal' },
            { cardNumber: 53, cardSet: cardSetId, name: 'Dive Down', rarity: 'C', layout: 'normal' },
            { cardNumber: 54, cardSet: cardSetId, name: 'Dreamcaller Siren', rarity: 'R', layout: 'normal' },
            { cardNumber: 55, cardSet: cardSetId, name: 'Entrancing Melody', rarity: 'R', layout: 'normal' },
            { cardNumber: 56, cardSet: cardSetId, name: 'Favorable Winds', rarity: 'U', layout: 'normal' },
            { cardNumber: 57, cardSet: cardSetId, name: 'Fleet Swallower', rarity: 'R', layout: 'normal' },
            { cardNumber: 58, cardSet: cardSetId, name: 'Headwater Sentries', rarity: 'C', layout: 'normal' },
            { cardNumber: 59, cardSet: cardSetId, name: 'Herald of Secret Streams', rarity: 'R', layout: 'normal' },
            { cardNumber: 60, cardSet: cardSetId, name: 'Jace, Cunning Castaway', rarity: 'M', layout: 'normal' },
            { cardNumber: 61, cardSet: cardSetId, name: 'Kopala, Warden of Waves', rarity: 'R', layout: 'normal' },
            { cardNumber: 62, cardSet: cardSetId, name: 'Lookout\'s Dispersal', rarity: 'U', layout: 'normal' },
            { cardNumber: 63, cardSet: cardSetId, name: 'Navigator\'s Ruin', rarity: 'U', layout: 'normal' },
            { cardNumber: 64, cardSet: cardSetId, name: 'One With the Wind', rarity: 'C', layout: 'normal' },
            { cardNumber: 65, cardSet: cardSetId, name: 'Opt', rarity: 'C', layout: 'normal' },
            { cardNumber: 66, cardSet: cardSetId, name: 'Overflowing Insight', rarity: 'M', layout: 'normal' },
            { cardNumber: 67, cardSet: cardSetId, name: 'Perilous Voyage', rarity: 'U', layout: 'normal' },
            { cardNumber: 68, cardSet: cardSetId, name: 'Pirate\'s Prize', rarity: 'C', layout: 'normal' },
            { cardNumber: 69, cardSet: cardSetId, name: 'Prosperous Pirates', rarity: 'C', layout: 'normal' },
            { cardNumber: 70, cardSet: cardSetId, name: 'River Sneak', rarity: 'U', layout: 'normal' },
            { cardNumber: 71, cardSet: cardSetId, name: 'River\'s Rebuke', rarity: 'R', layout: 'normal' },
            { cardNumber: 72, cardSet: cardSetId, name: 'Run Aground', rarity: 'C', layout: 'normal' },
            { cardNumber: 73, cardSet: cardSetId, name: 'Sailor of Means', rarity: 'C', layout: 'normal' },
            { cardNumber: 74, cardSet: cardSetId, name: 'Search for Azcanta', rarity: 'R', layout: 'transform' },
            { cardNumber: 75, cardSet: cardSetId, name: 'Shaper Apprentice', rarity: 'C', layout: 'normal' },
            { cardNumber: 76, cardSet: cardSetId, name: 'Shipwreck Looter', rarity: 'C', layout: 'normal' },
            { cardNumber: 77, cardSet: cardSetId, name: 'Shore Keeper', rarity: 'C', layout: 'normal' },
            { cardNumber: 78, cardSet: cardSetId, name: 'Siren Lookout', rarity: 'C', layout: 'normal' },
            { cardNumber: 79, cardSet: cardSetId, name: 'Siren Stormtamer', rarity: 'U', layout: 'normal' },
            { cardNumber: 80, cardSet: cardSetId, name: 'Siren\'s Ruse', rarity: 'C', layout: 'normal' },
            { cardNumber: 81, cardSet: cardSetId, name: 'Spell Pierce', rarity: 'C', layout: 'normal' },
            { cardNumber: 82, cardSet: cardSetId, name: 'Spell Swindle', rarity: 'R', layout: 'normal' },
            { cardNumber: 83, cardSet: cardSetId, name: 'Storm Fleet Aerialist', rarity: 'U', layout: 'normal' },
            { cardNumber: 84, cardSet: cardSetId, name: 'Storm Fleet Spy', rarity: 'U', layout: 'normal' },
            { cardNumber: 85, cardSet: cardSetId, name: 'Storm Sculptor', rarity: 'C', layout: 'normal' },
            { cardNumber: 86, cardSet: cardSetId, name: 'Tempest Caller', rarity: 'U', layout: 'normal' },
            { cardNumber: 87, cardSet: cardSetId, name: 'Watertrap Weaver', rarity: 'C', layout: 'normal' },
            { cardNumber: 88, cardSet: cardSetId, name: 'Wind Strider', rarity: 'C', layout: 'normal' },
            { cardNumber: 89, cardSet: cardSetId, name: 'Anointed Deacon', rarity: 'C', layout: 'normal' },
            { cardNumber: 90, cardSet: cardSetId, name: 'Arguel\'s Blood Fast', rarity: 'R', layout: 'transform' },
            { cardNumber: 91, cardSet: cardSetId, name: 'Bishop of the Bloodstained', rarity: 'U', layout: 'normal' },
            { cardNumber: 92, cardSet: cardSetId, name: 'Blight Keeper', rarity: 'C', layout: 'normal' },
            { cardNumber: 93, cardSet: cardSetId, name: 'Bloodcrazed Paladin', rarity: 'R', layout: 'normal' },
            { cardNumber: 94, cardSet: cardSetId, name: 'Boneyard Parley', rarity: 'M', layout: 'normal' },
            { cardNumber: 95, cardSet: cardSetId, name: 'Contract Killing', rarity: 'C', layout: 'normal' },
            { cardNumber: 96, cardSet: cardSetId, name: 'Costly Plunder', rarity: 'C', layout: 'normal' },
            { cardNumber: 97, cardSet: cardSetId, name: 'Dark Nourishment', rarity: 'U', layout: 'normal' },
            { cardNumber: 98, cardSet: cardSetId, name: 'Deadeye Tormentor', rarity: 'C', layout: 'normal' },
            { cardNumber: 99, cardSet: cardSetId, name: 'Deadeye Tracker', rarity: 'R', layout: 'normal' },
            { cardNumber: 100, cardSet: cardSetId, name: 'Deathless Ancient', rarity: 'U', layout: 'normal' },
            { cardNumber: 101, cardSet: cardSetId, name: 'Desperate Castaways', rarity: 'C', layout: 'normal' },
            { cardNumber: 102, cardSet: cardSetId, name: 'Dire Fleet Hoarder', rarity: 'C', layout: 'normal' },
            { cardNumber: 103, cardSet: cardSetId, name: 'Dire Fleet Interloper', rarity: 'C', layout: 'normal' },
            { cardNumber: 104, cardSet: cardSetId, name: 'Dire Fleet Ravager', rarity: 'M', layout: 'normal' },
            { cardNumber: 105, cardSet: cardSetId, name: 'Duress', rarity: 'C', layout: 'normal' },
            { cardNumber: 106, cardSet: cardSetId, name: 'Fathom Fleet Captain', rarity: 'R', layout: 'normal' },
            { cardNumber: 107, cardSet: cardSetId, name: 'Fathom Fleet Cutthroat', rarity: 'C', layout: 'normal' },
            { cardNumber: 108, cardSet: cardSetId, name: 'Grim Captain\'s Call', rarity: 'U', layout: 'normal' },
            { cardNumber: 109, cardSet: cardSetId, name: 'Heartless Pillage', rarity: 'U', layout: 'normal' },
            { cardNumber: 110, cardSet: cardSetId, name: 'Kitesail Freebooter', rarity: 'U', layout: 'normal' },
            { cardNumber: 111, cardSet: cardSetId, name: 'Lurking Chupacabra', rarity: 'U', layout: 'normal' },
            { cardNumber: 112, cardSet: cardSetId, name: 'March of the Drowned', rarity: 'C', layout: 'normal' },
            { cardNumber: 113, cardSet: cardSetId, name: 'Mark of the Vampire', rarity: 'C', layout: 'normal' },
            { cardNumber: 114, cardSet: cardSetId, name: 'Queen\'s Agent', rarity: 'C', layout: 'normal' },
            { cardNumber: 115, cardSet: cardSetId, name: 'Queen\'s Bay Soldier', rarity: 'C', layout: 'normal' },
            { cardNumber: 116, cardSet: cardSetId, name: 'Raiders\' Wake', rarity: 'U', layout: 'normal' },
            { cardNumber: 117, cardSet: cardSetId, name: 'Revel in Riches', rarity: 'R', layout: 'normal' },
            { cardNumber: 118, cardSet: cardSetId, name: 'Ruin Raider', rarity: 'R', layout: 'normal' },
            { cardNumber: 119, cardSet: cardSetId, name: 'Ruthless Knave', rarity: 'U', layout: 'normal' },
            { cardNumber: 120, cardSet: cardSetId, name: 'Sanctum Seeker', rarity: 'R', layout: 'normal' },
            { cardNumber: 121, cardSet: cardSetId, name: 'Seekers\' Squire', rarity: 'U', layout: 'normal' },
            { cardNumber: 122, cardSet: cardSetId, name: 'Skittering Heartstopper', rarity: 'C', layout: 'normal' },
            { cardNumber: 123, cardSet: cardSetId, name: 'Skulduggery', rarity: 'C', layout: 'normal' },
            { cardNumber: 124, cardSet: cardSetId, name: 'Skymarch Bloodletter', rarity: 'C', layout: 'normal' },
            { cardNumber: 125, cardSet: cardSetId, name: 'Spreading Rot', rarity: 'C', layout: 'normal' },
            { cardNumber: 126, cardSet: cardSetId, name: 'Sword-Point Diplomacy', rarity: 'R', layout: 'normal' },
            { cardNumber: 127, cardSet: cardSetId, name: 'Vanquish the Weak', rarity: 'C', layout: 'normal' },
            { cardNumber: 128, cardSet: cardSetId, name: 'Vicious Conquistador', rarity: 'U', layout: 'normal' },
            { cardNumber: 129, cardSet: cardSetId, name: 'Vraska\'s Contempt', rarity: 'R', layout: 'normal' },
            { cardNumber: 130, cardSet: cardSetId, name: 'Walk the Plank', rarity: 'U', layout: 'normal' },
            { cardNumber: 131, cardSet: cardSetId, name: 'Wanted Scoundrels', rarity: 'U', layout: 'normal' },
            { cardNumber: 132, cardSet: cardSetId, name: 'Angrath\'s Marauders', rarity: 'R', layout: 'normal' },
            { cardNumber: 133, cardSet: cardSetId, name: 'Bonded Horncrest', rarity: 'U', layout: 'normal' },
            { cardNumber: 134, cardSet: cardSetId, name: 'Brazen Buccaneers', rarity: 'C', layout: 'normal' },
            { cardNumber: 135, cardSet: cardSetId, name: 'Burning Sun\'s Avatar', rarity: 'R', layout: 'normal' },
            { cardNumber: 136, cardSet: cardSetId, name: 'Captain Lannery Storm', rarity: 'R', layout: 'normal' },
            { cardNumber: 137, cardSet: cardSetId, name: 'Captivating Crew', rarity: 'R', layout: 'normal' },
            { cardNumber: 138, cardSet: cardSetId, name: 'Charging Monstrosaur', rarity: 'U', layout: 'normal' },
            { cardNumber: 139, cardSet: cardSetId, name: 'Demolish', rarity: 'C', layout: 'normal' },
            { cardNumber: 140, cardSet: cardSetId, name: 'Dinosaur Stampede', rarity: 'U', layout: 'normal' },
            { cardNumber: 141, cardSet: cardSetId, name: 'Dual Shot', rarity: 'C', layout: 'normal' },
            { cardNumber: 142, cardSet: cardSetId, name: 'Fathom Fleet Firebrand', rarity: 'C', layout: 'normal' },
            { cardNumber: 143, cardSet: cardSetId, name: 'Fiery Cannonade', rarity: 'U', layout: 'normal' },
            { cardNumber: 144, cardSet: cardSetId, name: 'Fire Shrine Keeper', rarity: 'C', layout: 'normal' },
            { cardNumber: 145, cardSet: cardSetId, name: 'Firecannon Blast', rarity: 'C', layout: 'normal' },
            { cardNumber: 146, cardSet: cardSetId, name: 'Frenzied Raptor', rarity: 'C', layout: 'normal' },
            { cardNumber: 147, cardSet: cardSetId, name: 'Headstrong Brute', rarity: 'C', layout: 'normal' },
            { cardNumber: 148, cardSet: cardSetId, name: 'Hijack', rarity: 'C', layout: 'normal' },
            { cardNumber: 149, cardSet: cardSetId, name: 'Lightning Strike', rarity: 'U', layout: 'normal' },
            { cardNumber: 150, cardSet: cardSetId, name: 'Lightning-Rig Crew', rarity: 'U', layout: 'normal' },
            { cardNumber: 151, cardSet: cardSetId, name: 'Makeshift Munitions', rarity: 'U', layout: 'normal' },
            { cardNumber: 152, cardSet: cardSetId, name: 'Nest Robber', rarity: 'C', layout: 'normal' },
            { cardNumber: 153, cardSet: cardSetId, name: 'Otepec Huntmaster', rarity: 'U', layout: 'normal' },
            { cardNumber: 154, cardSet: cardSetId, name: 'Rampaging Ferocidon', rarity: 'R', layout: 'normal' },
            { cardNumber: 155, cardSet: cardSetId, name: 'Raptor Hatchling', rarity: 'U', layout: 'normal' },
            { cardNumber: 156, cardSet: cardSetId, name: 'Repeating Barrage', rarity: 'R', layout: 'normal' },
            { cardNumber: 157, cardSet: cardSetId, name: 'Rigging Runner', rarity: 'U', layout: 'normal' },
            { cardNumber: 158, cardSet: cardSetId, name: 'Rile', rarity: 'C', layout: 'normal' },
            { cardNumber: 159, cardSet: cardSetId, name: 'Rowdy Crew', rarity: 'M', layout: 'normal' },
            { cardNumber: 160, cardSet: cardSetId, name: 'Rummaging Goblin', rarity: 'C', layout: 'normal' },
            { cardNumber: 161, cardSet: cardSetId, name: 'Star of Extinction', rarity: 'M', layout: 'normal' },
            { cardNumber: 162, cardSet: cardSetId, name: 'Storm Fleet Arsonist', rarity: 'U', layout: 'normal' },
            { cardNumber: 163, cardSet: cardSetId, name: 'Storm Fleet Pyromancer', rarity: 'C', layout: 'normal' },
            { cardNumber: 164, cardSet: cardSetId, name: 'Sun-Crowned Hunters', rarity: 'C', layout: 'normal' },
            { cardNumber: 165, cardSet: cardSetId, name: 'Sunbird\'s Invocation', rarity: 'R', layout: 'normal' },
            { cardNumber: 166, cardSet: cardSetId, name: 'Sure Strike', rarity: 'C', layout: 'normal' },
            { cardNumber: 167, cardSet: cardSetId, name: 'Swashbuckling', rarity: 'C', layout: 'normal' },
            { cardNumber: 168, cardSet: cardSetId, name: 'Thrash of Raptors', rarity: 'C', layout: 'normal' },
            { cardNumber: 169, cardSet: cardSetId, name: 'Tilonalli\'s Knight', rarity: 'C', layout: 'normal' },
            { cardNumber: 170, cardSet: cardSetId, name: 'Tilonalli\'s Skinshifter', rarity: 'R', layout: 'normal' },
            { cardNumber: 171, cardSet: cardSetId, name: 'Trove of Temptation', rarity: 'U', layout: 'normal' },
            { cardNumber: 172, cardSet: cardSetId, name: 'Unfriendly Fire', rarity: 'C', layout: 'normal' },
            { cardNumber: 173, cardSet: cardSetId, name: 'Vance\'s Blasting Cannons', rarity: 'R', layout: 'transform' },
            { cardNumber: 174, cardSet: cardSetId, name: 'Wily Goblin', rarity: 'U', layout: 'normal' },
            { cardNumber: 175, cardSet: cardSetId, name: 'Ancient Brontodon', rarity: 'C', layout: 'normal' },
            { cardNumber: 176, cardSet: cardSetId, name: 'Atzocan Archer', rarity: 'U', layout: 'normal' },
            { cardNumber: 177, cardSet: cardSetId, name: 'Blinding Fog', rarity: 'C', layout: 'normal' },
            { cardNumber: 178, cardSet: cardSetId, name: 'Blossom Dryad', rarity: 'C', layout: 'normal' },
            { cardNumber: 179, cardSet: cardSetId, name: 'Carnage Tyrant', rarity: 'M', layout: 'normal' },
            { cardNumber: 180, cardSet: cardSetId, name: 'Colossal Dreadmaw', rarity: 'C', layout: 'normal' },
            { cardNumber: 181, cardSet: cardSetId, name: 'Commune with Dinosaurs', rarity: 'C', layout: 'normal' },
            { cardNumber: 182, cardSet: cardSetId, name: 'Crash the Ramparts', rarity: 'C', layout: 'normal' },
            { cardNumber: 183, cardSet: cardSetId, name: 'Crushing Canopy', rarity: 'C', layout: 'normal' },
            { cardNumber: 184, cardSet: cardSetId, name: 'Deathgorge Scavenger', rarity: 'R', layout: 'normal' },
            { cardNumber: 185, cardSet: cardSetId, name: 'Deeproot Champion', rarity: 'R', layout: 'normal' },
            { cardNumber: 186, cardSet: cardSetId, name: 'Deeproot Warrior', rarity: 'C', layout: 'normal' },
            { cardNumber: 187, cardSet: cardSetId, name: 'Drover of the Mighty', rarity: 'U', layout: 'normal' },
            { cardNumber: 188, cardSet: cardSetId, name: 'Emergent Growth', rarity: 'U', layout: 'normal' },
            { cardNumber: 189, cardSet: cardSetId, name: 'Emperor\'s Vanguard', rarity: 'R', layout: 'normal' },
            { cardNumber: 190, cardSet: cardSetId, name: 'Grazing Whiptail', rarity: 'C', layout: 'normal' },
            { cardNumber: 191, cardSet: cardSetId, name: 'Growing Rites of Itlimoc', rarity: 'R', layout: 'transform' },
            { cardNumber: 192, cardSet: cardSetId, name: 'Ixalli\'s Diviner', rarity: 'C', layout: 'normal' },
            { cardNumber: 193, cardSet: cardSetId, name: 'Ixalli\'s Keeper', rarity: 'C', layout: 'normal' },
            { cardNumber: 194, cardSet: cardSetId, name: 'Jade Guardian', rarity: 'C', layout: 'normal' },
            { cardNumber: 195, cardSet: cardSetId, name: 'Jungle Delver', rarity: 'C', layout: 'normal' },
            { cardNumber: 196, cardSet: cardSetId, name: 'Kumena\'s Speaker', rarity: 'U', layout: 'normal' },
            { cardNumber: 197, cardSet: cardSetId, name: 'Merfolk Branchwalker', rarity: 'U', layout: 'normal' },
            { cardNumber: 198, cardSet: cardSetId, name: 'New Horizons', rarity: 'C', layout: 'normal' },
            { cardNumber: 199, cardSet: cardSetId, name: 'Old-Growth Dryads', rarity: 'R', layout: 'normal' },
            { cardNumber: 200, cardSet: cardSetId, name: 'Pounce', rarity: 'C', layout: 'normal' },
            { cardNumber: 201, cardSet: cardSetId, name: 'Ranging Raptors', rarity: 'U', layout: 'normal' },
            { cardNumber: 202, cardSet: cardSetId, name: 'Ravenous Daggertooth', rarity: 'C', layout: 'normal' },
            { cardNumber: 203, cardSet: cardSetId, name: 'Ripjaw Raptor', rarity: 'R', layout: 'normal' },
            { cardNumber: 204, cardSet: cardSetId, name: 'River Heralds\' Boon', rarity: 'C', layout: 'normal' },
            { cardNumber: 205, cardSet: cardSetId, name: 'Savage Stomp', rarity: 'U', layout: 'normal' },
            { cardNumber: 206, cardSet: cardSetId, name: 'Shapers\' Sanctuary', rarity: 'R', layout: 'normal' },
            { cardNumber: 207, cardSet: cardSetId, name: 'Slice in Twain', rarity: 'U', layout: 'normal' },
            { cardNumber: 208, cardSet: cardSetId, name: 'Snapping Sailback', rarity: 'U', layout: 'normal' },
            { cardNumber: 209, cardSet: cardSetId, name: 'Spike-Tailed Ceratops', rarity: 'C', layout: 'normal' },
            { cardNumber: 210, cardSet: cardSetId, name: 'Thundering Spineback', rarity: 'U', layout: 'normal' },
            { cardNumber: 211, cardSet: cardSetId, name: 'Tishana\'s Wayfinder', rarity: 'C', layout: 'normal' },
            { cardNumber: 212, cardSet: cardSetId, name: 'Verdant Rebirth', rarity: 'U', layout: 'normal' },
            { cardNumber: 213, cardSet: cardSetId, name: 'Verdant Sun\'s Avatar', rarity: 'R', layout: 'normal' },
            { cardNumber: 214, cardSet: cardSetId, name: 'Vineshaper Mystic', rarity: 'U', layout: 'normal' },
            { cardNumber: 215, cardSet: cardSetId, name: 'Waker of the Wilds', rarity: 'R', layout: 'normal' },
            { cardNumber: 216, cardSet: cardSetId, name: 'Wildgrowth Walker', rarity: 'U', layout: 'normal' },
            { cardNumber: 217, cardSet: cardSetId, name: 'Admiral Beckett Brass', rarity: 'M', layout: 'normal' },
            { cardNumber: 218, cardSet: cardSetId, name: 'Belligerent Brontodon', rarity: 'U', layout: 'normal' },
            { cardNumber: 219, cardSet: cardSetId, name: 'Call to the Feast', rarity: 'U', layout: 'normal' },
            { cardNumber: 220, cardSet: cardSetId, name: 'Deadeye Plunderers', rarity: 'U', layout: 'normal' },
            { cardNumber: 221, cardSet: cardSetId, name: 'Dire Fleet Captain', rarity: 'U', layout: 'normal' },
            { cardNumber: 222, cardSet: cardSetId, name: 'Gishath, Sun\'s Avatar', rarity: 'M', layout: 'normal' },
            { cardNumber: 223, cardSet: cardSetId, name: 'Hostage Taker', rarity: 'R', layout: 'normal' },
            { cardNumber: 224, cardSet: cardSetId, name: 'Huatli, Warrior Poet', rarity: 'M', layout: 'normal' },
            { cardNumber: 225, cardSet: cardSetId, name: 'Marauding Looter', rarity: 'U', layout: 'normal' },
            { cardNumber: 226, cardSet: cardSetId, name: 'Raging Swordtooth', rarity: 'U', layout: 'normal' },
            { cardNumber: 227, cardSet: cardSetId, name: 'Regisaur Alpha', rarity: 'R', layout: 'normal' },
            { cardNumber: 228, cardSet: cardSetId, name: 'Shapers of Nature', rarity: 'U', layout: 'normal' },
            { cardNumber: 229, cardSet: cardSetId, name: 'Sky Terror', rarity: 'U', layout: 'normal' },
            { cardNumber: 230, cardSet: cardSetId, name: 'Tishana, Voice of Thunder', rarity: 'M', layout: 'normal' },
            { cardNumber: 231, cardSet: cardSetId, name: 'Vona, Butcher of Magan', rarity: 'M', layout: 'normal' },
            { cardNumber: 232, cardSet: cardSetId, name: 'Vraska, Relic Seeker', rarity: 'M', layout: 'normal' },
            { cardNumber: 233, cardSet: cardSetId, name: 'Cobbled Wings', rarity: 'C', layout: 'normal' },
            { cardNumber: 234, cardSet: cardSetId, name: 'Conqueror\'s Galleon', rarity: 'R', layout: 'transform' },
            { cardNumber: 235, cardSet: cardSetId, name: 'Dowsing Dagger', rarity: 'R', layout: 'transform' },
            { cardNumber: 236, cardSet: cardSetId, name: 'Dusk Legion Dreadnought', rarity: 'U', layout: 'normal' },
            { cardNumber: 237, cardSet: cardSetId, name: 'Elaborate Firecannon', rarity: 'U', layout: 'normal' },
            { cardNumber: 238, cardSet: cardSetId, name: 'Fell Flagship', rarity: 'R', layout: 'normal' },
            { cardNumber: 239, cardSet: cardSetId, name: 'Gilded Sentinel', rarity: 'C', layout: 'normal' },
            { cardNumber: 240, cardSet: cardSetId, name: 'Hierophant\'s Chalice', rarity: 'C', layout: 'normal' },
            { cardNumber: 241, cardSet: cardSetId, name: 'Pillar of Origins', rarity: 'U', layout: 'normal' },
            { cardNumber: 242, cardSet: cardSetId, name: 'Pirate\'s Cutlass', rarity: 'C', layout: 'normal' },
            { cardNumber: 243, cardSet: cardSetId, name: 'Primal Amulet', rarity: 'R', layout: 'transform' },
            { cardNumber: 244, cardSet: cardSetId, name: 'Prying Blade', rarity: 'C', layout: 'normal' },
            { cardNumber: 245, cardSet: cardSetId, name: 'Sentinel Totem', rarity: 'U', layout: 'normal' },
            { cardNumber: 246, cardSet: cardSetId, name: 'Shadowed Caravel', rarity: 'R', layout: 'normal' },
            { cardNumber: 247, cardSet: cardSetId, name: 'Sleek Schooner', rarity: 'U', layout: 'normal' },
            { cardNumber: 248, cardSet: cardSetId, name: 'Sorcerous Spyglass', rarity: 'R', layout: 'normal' },
            { cardNumber: 249, cardSet: cardSetId, name: 'Thaumatic Compass', rarity: 'R', layout: 'transform' },
            { cardNumber: 250, cardSet: cardSetId, name: 'Treasure Map', rarity: 'R', layout: 'transform' },
            { cardNumber: 251, cardSet: cardSetId, name: 'Vanquisher\'s Banner', rarity: 'R', layout: 'normal' },
            { cardNumber: 252, cardSet: cardSetId, name: 'Dragonskull Summit', rarity: 'R', layout: 'normal' },
            { cardNumber: 253, cardSet: cardSetId, name: 'Drowned Catacomb', rarity: 'R', layout: 'normal' },
            { cardNumber: 254, cardSet: cardSetId, name: 'Field of Ruin', rarity: 'U', layout: 'normal' },
            { cardNumber: 255, cardSet: cardSetId, name: 'Glacial Fortress', rarity: 'R', layout: 'normal' },
            { cardNumber: 256, cardSet: cardSetId, name: 'Rootbound Crag', rarity: 'R', layout: 'normal' },
            { cardNumber: 257, cardSet: cardSetId, name: 'Sunpetal Grove', rarity: 'R', layout: 'normal' },
            { cardNumber: 258, cardSet: cardSetId, name: 'Unclaimed Territory', rarity: 'U', layout: 'normal' },
            { cardNumber: 259, cardSet: cardSetId, name: 'Unknown Shores', rarity: 'C', layout: 'normal' },
            { cardNumber: 260, cardSet: cardSetId, name: 'Plains', rarity: 'C', layout: 'normal' },
            { cardNumber: 261, cardSet: cardSetId, name: 'Plains', rarity: 'C', layout: 'normal' },
            { cardNumber: 262, cardSet: cardSetId, name: 'Plains', rarity: 'C', layout: 'normal' },
            { cardNumber: 263, cardSet: cardSetId, name: 'Plains', rarity: 'C', layout: 'normal' },
            { cardNumber: 264, cardSet: cardSetId, name: 'Island', rarity: 'C', layout: 'normal' },
            { cardNumber: 265, cardSet: cardSetId, name: 'Island', rarity: 'C', layout: 'normal' },
            { cardNumber: 266, cardSet: cardSetId, name: 'Island', rarity: 'C', layout: 'normal' },
            { cardNumber: 267, cardSet: cardSetId, name: 'Island', rarity: 'C', layout: 'normal' },
            { cardNumber: 268, cardSet: cardSetId, name: 'Swamp', rarity: 'C', layout: 'normal' },
            { cardNumber: 269, cardSet: cardSetId, name: 'Swamp', rarity: 'C', layout: 'normal' },
            { cardNumber: 270, cardSet: cardSetId, name: 'Swamp', rarity: 'C', layout: 'normal' },
            { cardNumber: 271, cardSet: cardSetId, name: 'Swamp', rarity: 'C', layout: 'normal' },
            { cardNumber: 272, cardSet: cardSetId, name: 'Mountain', rarity: 'C', layout: 'normal' },
            { cardNumber: 273, cardSet: cardSetId, name: 'Mountain', rarity: 'C', layout: 'normal' },
            { cardNumber: 274, cardSet: cardSetId, name: 'Mountain', rarity: 'C', layout: 'normal' },
            { cardNumber: 275, cardSet: cardSetId, name: 'Mountain', rarity: 'C', layout: 'normal' },
            { cardNumber: 276, cardSet: cardSetId, name: 'Forest', rarity: 'C', layout: 'normal' },
            { cardNumber: 277, cardSet: cardSetId, name: 'Forest', rarity: 'C', layout: 'normal' },
            { cardNumber: 278, cardSet: cardSetId, name: 'Forest', rarity: 'C', layout: 'normal' },
            { cardNumber: 279, cardSet: cardSetId, name: 'Forest', rarity: 'C', layout: 'normal' },
            { cardNumber: 280, cardSet: cardSetId, name: 'Jace, Ingenious Mind-Mage', rarity: 'M', layout: 'normal' },
            { cardNumber: 281, cardSet: cardSetId, name: 'Castaway\'s Despair', rarity: 'C', layout: 'normal' },
            { cardNumber: 282, cardSet: cardSetId, name: 'Grasping Current', rarity: 'R', layout: 'normal' },
            { cardNumber: 283, cardSet: cardSetId, name: 'Jace\'s Sentinel', rarity: 'U', layout: 'normal' },
            { cardNumber: 284, cardSet: cardSetId, name: 'Woodland Stream', rarity: 'C', layout: 'normal' },
            { cardNumber: 285, cardSet: cardSetId, name: 'Huatli, Dinosaur Knight', rarity: 'M', layout: 'normal' },
            { cardNumber: 286, cardSet: cardSetId, name: 'Huatli\'s Snubhorn', rarity: 'C', layout: 'normal' },
            { cardNumber: 287, cardSet: cardSetId, name: 'Huatli\'s Spurring', rarity: 'U', layout: 'normal' },
            { cardNumber: 288, cardSet: cardSetId, name: 'Sun-Blessed Mount', rarity: 'R', layout: 'normal' },
            { cardNumber: 289, cardSet: cardSetId, name: 'Stone Quarry', rarity: 'C', layout: 'normal' },
        ]).execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Get the card set id
        const shortname = 'XLN';
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
