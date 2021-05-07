import { CardSet } from "../card/entity/card-set.entity";
import { InsertResult, MigrationInterface, QueryRunner } from "typeorm";

export class addingEmn1620387686808 implements MigrationInterface {
    name = 'addingEmn1620387686808';

    public async up(queryRunner: QueryRunner): Promise<void> {

        const insertResult: InsertResult = await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card_set')
            .values({ name: 'Eldritch Moon', shortName: 'EMN' })
            .execute();
        const cardSetId: number = insertResult.identifiers[0].id;

        await queryRunner.manager.createQueryBuilder().insert().into('card').values([
            { cardNumber: 1, cardSet: cardSetId, name: 'Abundant Maw', rarity: 'U', layout: 'normal' },
            { cardNumber: 2, cardSet: cardSetId, name: 'Decimator of the Provinces', rarity: 'M', layout: 'normal' },
            { cardNumber: 3, cardSet: cardSetId, name: 'Distended Mindbender', rarity: 'R', layout: 'normal' },
            { cardNumber: 4, cardSet: cardSetId, name: 'Drownyard Behemoth', rarity: 'U', layout: 'normal' },
            { cardNumber: 5, cardSet: cardSetId, name: 'Elder Deep-Fiend', rarity: 'R', layout: 'normal' },
            { cardNumber: 6, cardSet: cardSetId, name: 'Emrakul, the Promised End', rarity: 'M', layout: 'normal' },
            { cardNumber: 7, cardSet: cardSetId, name: 'Eternal Scourge', rarity: 'R', layout: 'normal' },
            { cardNumber: 8, cardSet: cardSetId, name: 'It of the Horrid Swarm', rarity: 'C', layout: 'normal' },
            { cardNumber: 9, cardSet: cardSetId, name: 'Lashweed Lurker', rarity: 'U', layout: 'normal' },
            { cardNumber: 10, cardSet: cardSetId, name: 'Mockery of Nature', rarity: 'U', layout: 'normal' },
            { cardNumber: 11, cardSet: cardSetId, name: 'Vexing Scuttler', rarity: 'U', layout: 'normal' },
            { cardNumber: 12, cardSet: cardSetId, name: 'Wretched Gryff', rarity: 'C', layout: 'normal' },
            { cardNumber: 13, cardSet: cardSetId, name: 'Blessed Alliance', rarity: 'U', layout: 'normal' },
            { cardNumber: 14, cardSet: cardSetId, name: 'Borrowed Grace', rarity: 'C', layout: 'normal' },
            { cardNumber: 15, cardSet: cardSetId, name: 'Bruna, the Fading Light', rarity: 'R', layout: 'meld' },
            { cardNumber: 16, cardSet: cardSetId, name: 'Choking Restraints', rarity: 'C', layout: 'normal' },
            { cardNumber: 17, cardSet: cardSetId, name: 'Collective Effort', rarity: 'R', layout: 'normal' },
            { cardNumber: 18, cardSet: cardSetId, name: 'Courageous Outrider', rarity: 'U', layout: 'normal' },
            { cardNumber: 19, cardSet: cardSetId, name: 'Dawn Gryff', rarity: 'C', layout: 'normal' },
            { cardNumber: 20, cardSet: cardSetId, name: 'Deploy the Gatewatch', rarity: 'M', layout: 'normal' },
            { cardNumber: 21, cardSet: cardSetId, name: 'Desperate Sentry', rarity: 'C', layout: 'normal' },
            { cardNumber: 22, cardSet: cardSetId, name: 'Drogskol Shieldmate', rarity: 'U', layout: 'normal' },
            { cardNumber: 23, cardSet: cardSetId, name: 'Extricator of Sin', rarity: 'U', layout: 'transform' },
            { cardNumber: 24, cardSet: cardSetId, name: 'Faith Unbroken', rarity: 'U', layout: 'normal' },
            { cardNumber: 25, cardSet: cardSetId, name: 'Faithbearer Paladin', rarity: 'C', layout: 'normal' },
            { cardNumber: 26, cardSet: cardSetId, name: 'Fiend Binder', rarity: 'C', layout: 'normal' },
            { cardNumber: 27, cardSet: cardSetId, name: 'Geist of the Lonely Vigil', rarity: 'U', layout: 'normal' },
            { cardNumber: 28, cardSet: cardSetId, name: 'Gisela, the Broken Blade', rarity: 'M', layout: 'meld' },
            { cardNumber: 29, cardSet: cardSetId, name: 'Give No Ground', rarity: 'U', layout: 'normal' },
            { cardNumber: 30, cardSet: cardSetId, name: 'Guardian of Pilgrims', rarity: 'C', layout: 'normal' },
            { cardNumber: 31, cardSet: cardSetId, name: 'Ironclad Slayer', rarity: 'C', layout: 'normal' },
            { cardNumber: 32, cardSet: cardSetId, name: 'Ironwright\'s Cleansing', rarity: 'C', layout: 'normal' },
            { cardNumber: 33, cardSet: cardSetId, name: 'Lone Rider', rarity: 'U', layout: 'transform' },
            { cardNumber: 34, cardSet: cardSetId, name: 'Long Road Home', rarity: 'U', layout: 'normal' },
            { cardNumber: 35, cardSet: cardSetId, name: 'Lunarch Mantle', rarity: 'C', layout: 'normal' },
            { cardNumber: 36, cardSet: cardSetId, name: 'Peace of Mind', rarity: 'U', layout: 'normal' },
            { cardNumber: 37, cardSet: cardSetId, name: 'Providence', rarity: 'R', layout: 'normal' },
            { cardNumber: 38, cardSet: cardSetId, name: 'Repel the Abominable', rarity: 'U', layout: 'normal' },
            { cardNumber: 39, cardSet: cardSetId, name: 'Sanctifier of Souls', rarity: 'R', layout: 'normal' },
            { cardNumber: 40, cardSet: cardSetId, name: 'Selfless Spirit', rarity: 'R', layout: 'normal' },
            { cardNumber: 41, cardSet: cardSetId, name: 'Sigarda\'s Aid', rarity: 'R', layout: 'normal' },
            { cardNumber: 42, cardSet: cardSetId, name: 'Sigardian Priest', rarity: 'C', layout: 'normal' },
            { cardNumber: 43, cardSet: cardSetId, name: 'Spectral Reserves', rarity: 'C', layout: 'normal' },
            { cardNumber: 44, cardSet: cardSetId, name: 'Steadfast Cathar', rarity: 'C', layout: 'normal' },
            { cardNumber: 45, cardSet: cardSetId, name: 'Subjugator Angel', rarity: 'U', layout: 'normal' },
            { cardNumber: 46, cardSet: cardSetId, name: 'Thalia, Heretic Cathar', rarity: 'R', layout: 'normal' },
            { cardNumber: 47, cardSet: cardSetId, name: 'Thalia\'s Lancers', rarity: 'R', layout: 'normal' },
            { cardNumber: 48, cardSet: cardSetId, name: 'Thraben Standard Bearer', rarity: 'C', layout: 'normal' },
            { cardNumber: 49, cardSet: cardSetId, name: 'Advanced Stitchwing', rarity: 'U', layout: 'normal' },
            { cardNumber: 50, cardSet: cardSetId, name: 'Chilling Grasp', rarity: 'U', layout: 'normal' },
            { cardNumber: 51, cardSet: cardSetId, name: 'Coax from the Blind Eternities', rarity: 'R', layout: 'normal' },
            { cardNumber: 52, cardSet: cardSetId, name: 'Contingency Plan', rarity: 'C', layout: 'normal' },
            { cardNumber: 53, cardSet: cardSetId, name: 'Convolute', rarity: 'C', layout: 'normal' },
            { cardNumber: 54, cardSet: cardSetId, name: 'Curious Homunculus', rarity: 'U', layout: 'transform' },
            { cardNumber: 55, cardSet: cardSetId, name: 'Displace', rarity: 'C', layout: 'normal' },
            { cardNumber: 56, cardSet: cardSetId, name: 'Docent of Perfection', rarity: 'R', layout: 'transform' },
            { cardNumber: 57, cardSet: cardSetId, name: 'Drag Under', rarity: 'C', layout: 'normal' },
            { cardNumber: 58, cardSet: cardSetId, name: 'Enlightened Maniac', rarity: 'C', layout: 'normal' },
            { cardNumber: 59, cardSet: cardSetId, name: 'Exultant Cultist', rarity: 'C', layout: 'normal' },
            { cardNumber: 60, cardSet: cardSetId, name: 'Fogwalker', rarity: 'C', layout: 'normal' },
            { cardNumber: 61, cardSet: cardSetId, name: 'Fortune\'s Favor', rarity: 'U', layout: 'normal' },
            { cardNumber: 62, cardSet: cardSetId, name: 'Geist of the Archives', rarity: 'U', layout: 'normal' },
            { cardNumber: 63, cardSet: cardSetId, name: 'Grizzled Angler', rarity: 'U', layout: 'transform' },
            { cardNumber: 64, cardSet: cardSetId, name: 'Identity Thief', rarity: 'R', layout: 'normal' },
            { cardNumber: 65, cardSet: cardSetId, name: 'Imprisoned in the Moon', rarity: 'R', layout: 'normal' },
            { cardNumber: 66, cardSet: cardSetId, name: 'Ingenious Skaab', rarity: 'C', layout: 'normal' },
            { cardNumber: 67, cardSet: cardSetId, name: 'Laboratory Brute', rarity: 'C', layout: 'normal' },
            { cardNumber: 68, cardSet: cardSetId, name: 'Lunar Force', rarity: 'U', layout: 'normal' },
            { cardNumber: 69, cardSet: cardSetId, name: 'Mausoleum Wanderer', rarity: 'R', layout: 'normal' },
            { cardNumber: 70, cardSet: cardSetId, name: 'Mind\'s Dilation', rarity: 'M', layout: 'normal' },
            { cardNumber: 71, cardSet: cardSetId, name: 'Nebelgast Herald', rarity: 'U', layout: 'normal' },
            { cardNumber: 72, cardSet: cardSetId, name: 'Niblis of Frost', rarity: 'R', layout: 'normal' },
            { cardNumber: 73, cardSet: cardSetId, name: 'Scour the Laboratory', rarity: 'U', layout: 'normal' },
            { cardNumber: 74, cardSet: cardSetId, name: 'Spontaneous Mutation', rarity: 'C', layout: 'normal' },
            { cardNumber: 75, cardSet: cardSetId, name: 'Summary Dismissal', rarity: 'R', layout: 'normal' },
            { cardNumber: 76, cardSet: cardSetId, name: 'Take Inventory', rarity: 'C', layout: 'normal' },
            { cardNumber: 77, cardSet: cardSetId, name: 'Tattered Haunter', rarity: 'C', layout: 'normal' },
            { cardNumber: 78, cardSet: cardSetId, name: 'Turn Aside', rarity: 'C', layout: 'normal' },
            { cardNumber: 79, cardSet: cardSetId, name: 'Unsubstantiate', rarity: 'U', layout: 'normal' },
            { cardNumber: 80, cardSet: cardSetId, name: 'Wharf Infiltrator', rarity: 'R', layout: 'normal' },
            { cardNumber: 81, cardSet: cardSetId, name: 'Boon of Emrakul', rarity: 'C', layout: 'normal' },
            { cardNumber: 82, cardSet: cardSetId, name: 'Borrowed Malevolence', rarity: 'C', layout: 'normal' },
            { cardNumber: 83, cardSet: cardSetId, name: 'Cemetery Recruitment', rarity: 'C', layout: 'normal' },
            { cardNumber: 84, cardSet: cardSetId, name: 'Certain Death', rarity: 'C', layout: 'normal' },
            { cardNumber: 85, cardSet: cardSetId, name: 'Collective Brutality', rarity: 'R', layout: 'normal' },
            { cardNumber: 86, cardSet: cardSetId, name: 'Cryptbreaker', rarity: 'R', layout: 'normal' },
            { cardNumber: 87, cardSet: cardSetId, name: 'Dark Salvation', rarity: 'R', layout: 'normal' },
            { cardNumber: 88, cardSet: cardSetId, name: 'Dusk Feaster', rarity: 'U', layout: 'normal' },
            { cardNumber: 89, cardSet: cardSetId, name: 'Gavony Unhallowed', rarity: 'C', layout: 'normal' },
            { cardNumber: 90, cardSet: cardSetId, name: 'Graf Harvest', rarity: 'U', layout: 'normal' },
            { cardNumber: 91, cardSet: cardSetId, name: 'Graf Rats', rarity: 'C', layout: 'meld' },
            { cardNumber: 92, cardSet: cardSetId, name: 'Haunted Dead', rarity: 'U', layout: 'normal' },
            { cardNumber: 93, cardSet: cardSetId, name: 'Liliana, the Last Hope', rarity: 'M', layout: 'normal' },
            { cardNumber: 94, cardSet: cardSetId, name: 'Liliana\'s Elite', rarity: 'U', layout: 'normal' },
            { cardNumber: 95, cardSet: cardSetId, name: 'Markov Crusader', rarity: 'U', layout: 'normal' },
            { cardNumber: 96, cardSet: cardSetId, name: 'Midnight Scavengers', rarity: 'C', layout: 'meld' },
            { cardNumber: 97, cardSet: cardSetId, name: 'Murder', rarity: 'U', layout: 'normal' },
            { cardNumber: 98, cardSet: cardSetId, name: 'Noosegraf Mob', rarity: 'R', layout: 'normal' },
            { cardNumber: 99, cardSet: cardSetId, name: 'Oath of Liliana', rarity: 'R', layout: 'normal' },
            { cardNumber: 100, cardSet: cardSetId, name: 'Olivia\'s Dragoon', rarity: 'C', layout: 'normal' },
            { cardNumber: 101, cardSet: cardSetId, name: 'Prying Questions', rarity: 'U', layout: 'normal' },
            { cardNumber: 102, cardSet: cardSetId, name: 'Rise from the Grave', rarity: 'U', layout: 'normal' },
            { cardNumber: 103, cardSet: cardSetId, name: 'Ruthless Disposal', rarity: 'U', layout: 'normal' },
            { cardNumber: 104, cardSet: cardSetId, name: 'Skirsdag Supplicant', rarity: 'C', layout: 'normal' },
            { cardNumber: 105, cardSet: cardSetId, name: 'Strange Augmentation', rarity: 'C', layout: 'normal' },
            { cardNumber: 106, cardSet: cardSetId, name: 'Stromkirk Condemned', rarity: 'R', layout: 'normal' },
            { cardNumber: 107, cardSet: cardSetId, name: 'Succumb to Temptation', rarity: 'C', layout: 'normal' },
            { cardNumber: 108, cardSet: cardSetId, name: 'Thraben Foulbloods', rarity: 'C', layout: 'normal' },
            { cardNumber: 109, cardSet: cardSetId, name: 'Tree of Perdition', rarity: 'M', layout: 'normal' },
            { cardNumber: 110, cardSet: cardSetId, name: 'Vampire Cutthroat', rarity: 'U', layout: 'normal' },
            { cardNumber: 111, cardSet: cardSetId, name: 'Voldaren Pariah', rarity: 'R', layout: 'transform' },
            { cardNumber: 112, cardSet: cardSetId, name: 'Wailing Ghoul', rarity: 'C', layout: 'normal' },
            { cardNumber: 113, cardSet: cardSetId, name: 'Weirded Vampire', rarity: 'C', layout: 'normal' },
            { cardNumber: 114, cardSet: cardSetId, name: 'Whispers of Emrakul', rarity: 'U', layout: 'normal' },
            { cardNumber: 115, cardSet: cardSetId, name: 'Abandon Reason', rarity: 'U', layout: 'normal' },
            { cardNumber: 116, cardSet: cardSetId, name: 'Alchemist\'s Greeting', rarity: 'C', layout: 'normal' },
            { cardNumber: 117, cardSet: cardSetId, name: 'Assembled Alphas', rarity: 'R', layout: 'normal' },
            { cardNumber: 118, cardSet: cardSetId, name: 'Bedlam Reveler', rarity: 'R', layout: 'normal' },
            { cardNumber: 119, cardSet: cardSetId, name: 'Blood Mist', rarity: 'U', layout: 'normal' },
            { cardNumber: 120, cardSet: cardSetId, name: 'Bold Impaler', rarity: 'C', layout: 'normal' },
            { cardNumber: 121, cardSet: cardSetId, name: 'Borrowed Hostility', rarity: 'C', layout: 'normal' },
            { cardNumber: 122, cardSet: cardSetId, name: 'Brazen Wolves', rarity: 'C', layout: 'normal' },
            { cardNumber: 123, cardSet: cardSetId, name: 'Collective Defiance', rarity: 'R', layout: 'normal' },
            { cardNumber: 124, cardSet: cardSetId, name: 'Conduit of Storms', rarity: 'U', layout: 'transform' },
            { cardNumber: 125, cardSet: cardSetId, name: 'Deranged Whelp', rarity: 'U', layout: 'normal' },
            { cardNumber: 126, cardSet: cardSetId, name: 'Distemper of the Blood', rarity: 'C', layout: 'normal' },
            { cardNumber: 127, cardSet: cardSetId, name: 'Falkenrath Reaver', rarity: 'C', layout: 'normal' },
            { cardNumber: 128, cardSet: cardSetId, name: 'Furyblade Vampire', rarity: 'U', layout: 'normal' },
            { cardNumber: 129, cardSet: cardSetId, name: 'Galvanic Bombardment', rarity: 'C', layout: 'normal' },
            { cardNumber: 130, cardSet: cardSetId, name: 'Hanweir Garrison', rarity: 'R', layout: 'meld' },
            { cardNumber: 131, cardSet: cardSetId, name: 'Harmless Offering', rarity: 'R', layout: 'normal' },
            { cardNumber: 132, cardSet: cardSetId, name: 'Impetuous Devils', rarity: 'R', layout: 'normal' },
            { cardNumber: 133, cardSet: cardSetId, name: 'Incendiary Flow', rarity: 'U', layout: 'normal' },
            { cardNumber: 134, cardSet: cardSetId, name: 'Insatiable Gorgers', rarity: 'U', layout: 'normal' },
            { cardNumber: 135, cardSet: cardSetId, name: 'Make Mischief', rarity: 'C', layout: 'normal' },
            { cardNumber: 136, cardSet: cardSetId, name: 'Mirrorwing Dragon', rarity: 'M', layout: 'normal' },
            { cardNumber: 137, cardSet: cardSetId, name: 'Nahiri\'s Wrath', rarity: 'M', layout: 'normal' },
            { cardNumber: 138, cardSet: cardSetId, name: 'Otherworldly Outburst', rarity: 'C', layout: 'normal' },
            { cardNumber: 139, cardSet: cardSetId, name: 'Prophetic Ravings', rarity: 'C', layout: 'normal' },
            { cardNumber: 140, cardSet: cardSetId, name: 'Savage Alliance', rarity: 'U', layout: 'normal' },
            { cardNumber: 141, cardSet: cardSetId, name: 'Shreds of Sanity', rarity: 'U', layout: 'normal' },
            { cardNumber: 142, cardSet: cardSetId, name: 'Smoldering Werewolf', rarity: 'U', layout: 'transform' },
            { cardNumber: 143, cardSet: cardSetId, name: 'Spreading Flames', rarity: 'U', layout: 'normal' },
            { cardNumber: 144, cardSet: cardSetId, name: 'Stensia Banquet', rarity: 'C', layout: 'normal' },
            { cardNumber: 145, cardSet: cardSetId, name: 'Stensia Innkeeper', rarity: 'C', layout: 'normal' },
            { cardNumber: 146, cardSet: cardSetId, name: 'Stromkirk Occultist', rarity: 'R', layout: 'normal' },
            { cardNumber: 147, cardSet: cardSetId, name: 'Thermo-Alchemist', rarity: 'C', layout: 'normal' },
            { cardNumber: 148, cardSet: cardSetId, name: 'Vildin-Pack Outcast', rarity: 'C', layout: 'transform' },
            { cardNumber: 149, cardSet: cardSetId, name: 'Weaver of Lightning', rarity: 'U', layout: 'normal' },
            { cardNumber: 150, cardSet: cardSetId, name: 'Backwoods Survivalists', rarity: 'C', layout: 'normal' },
            { cardNumber: 151, cardSet: cardSetId, name: 'Bloodbriar', rarity: 'C', layout: 'normal' },
            { cardNumber: 152, cardSet: cardSetId, name: 'Clear Shot', rarity: 'U', layout: 'normal' },
            { cardNumber: 153, cardSet: cardSetId, name: 'Crop Sigil', rarity: 'U', layout: 'normal' },
            { cardNumber: 154, cardSet: cardSetId, name: 'Crossroads Consecrator', rarity: 'C', layout: 'normal' },
            { cardNumber: 155, cardSet: cardSetId, name: 'Eldritch Evolution', rarity: 'R', layout: 'normal' },
            { cardNumber: 156, cardSet: cardSetId, name: 'Emrakul\'s Evangel', rarity: 'R', layout: 'normal' },
            { cardNumber: 157, cardSet: cardSetId, name: 'Emrakul\'s Influence', rarity: 'U', layout: 'normal' },
            { cardNumber: 158, cardSet: cardSetId, name: 'Foul Emissary', rarity: 'U', layout: 'normal' },
            { cardNumber: 159, cardSet: cardSetId, name: 'Gnarlwood Dryad', rarity: 'U', layout: 'normal' },
            { cardNumber: 160, cardSet: cardSetId, name: 'Grapple with the Past', rarity: 'C', layout: 'normal' },
            { cardNumber: 161, cardSet: cardSetId, name: 'Hamlet Captain', rarity: 'U', layout: 'normal' },
            { cardNumber: 162, cardSet: cardSetId, name: 'Ishkanah, Grafwidow', rarity: 'M', layout: 'normal' },
            { cardNumber: 163, cardSet: cardSetId, name: 'Kessig Prowler', rarity: 'U', layout: 'transform' },
            { cardNumber: 164, cardSet: cardSetId, name: 'Noose Constrictor', rarity: 'U', layout: 'normal' },
            { cardNumber: 165, cardSet: cardSetId, name: 'Permeating Mass', rarity: 'R', layout: 'normal' },
            { cardNumber: 166, cardSet: cardSetId, name: 'Prey Upon', rarity: 'C', layout: 'normal' },
            { cardNumber: 167, cardSet: cardSetId, name: 'Primal Druid', rarity: 'C', layout: 'normal' },
            { cardNumber: 168, cardSet: cardSetId, name: 'Shrill Howler', rarity: 'U', layout: 'transform' },
            { cardNumber: 169, cardSet: cardSetId, name: 'Somberwald Stag', rarity: 'U', layout: 'normal' },
            { cardNumber: 170, cardSet: cardSetId, name: 'Spirit of the Hunt', rarity: 'R', layout: 'normal' },
            { cardNumber: 171, cardSet: cardSetId, name: 'Splendid Reclamation', rarity: 'R', layout: 'normal' },
            { cardNumber: 172, cardSet: cardSetId, name: 'Springsage Ritual', rarity: 'C', layout: 'normal' },
            { cardNumber: 173, cardSet: cardSetId, name: 'Swift Spinner', rarity: 'C', layout: 'normal' },
            { cardNumber: 174, cardSet: cardSetId, name: 'Tangleclaw Werewolf', rarity: 'U', layout: 'transform' },
            { cardNumber: 175, cardSet: cardSetId, name: 'Ulvenwald Captive', rarity: 'C', layout: 'transform' },
            { cardNumber: 176, cardSet: cardSetId, name: 'Ulvenwald Observer', rarity: 'R', layout: 'normal' },
            { cardNumber: 177, cardSet: cardSetId, name: 'Waxing Moon', rarity: 'C', layout: 'normal' },
            { cardNumber: 178, cardSet: cardSetId, name: 'Wolfkin Bond', rarity: 'C', layout: 'normal' },
            { cardNumber: 179, cardSet: cardSetId, name: 'Woodcutter\'s Grit', rarity: 'C', layout: 'normal' },
            { cardNumber: 180, cardSet: cardSetId, name: 'Woodland Patrol', rarity: 'C', layout: 'normal' },
            { cardNumber: 181, cardSet: cardSetId, name: 'Bloodhall Priest', rarity: 'R', layout: 'normal' },
            { cardNumber: 182, cardSet: cardSetId, name: 'Campaign of Vengeance', rarity: 'U', layout: 'normal' },
            { cardNumber: 183, cardSet: cardSetId, name: 'Gisa and Geralf', rarity: 'M', layout: 'normal' },
            { cardNumber: 184, cardSet: cardSetId, name: 'Grim Flayer', rarity: 'M', layout: 'normal' },
            { cardNumber: 185, cardSet: cardSetId, name: 'Heron\'s Grace Champion', rarity: 'R', layout: 'normal' },
            { cardNumber: 186, cardSet: cardSetId, name: 'Mercurial Geists', rarity: 'U', layout: 'normal' },
            { cardNumber: 187, cardSet: cardSetId, name: 'Mournwillow', rarity: 'U', layout: 'normal' },
            { cardNumber: 188, cardSet: cardSetId, name: 'Ride Down', rarity: 'U', layout: 'normal' },
            { cardNumber: 189, cardSet: cardSetId, name: 'Spell Queller', rarity: 'R', layout: 'normal' },
            { cardNumber: 190, cardSet: cardSetId, name: 'Tamiyo, Field Researcher', rarity: 'M', layout: 'normal' },
            { cardNumber: 191, cardSet: cardSetId, name: 'Ulrich of the Krallenhorde', rarity: 'M', layout: 'transform' },
            { cardNumber: 192, cardSet: cardSetId, name: 'Cathar\'s Shield', rarity: 'C', layout: 'normal' },
            { cardNumber: 193, cardSet: cardSetId, name: 'Cryptolith Fragment', rarity: 'U', layout: 'transform' },
            { cardNumber: 194, cardSet: cardSetId, name: 'Cultist\'s Staff', rarity: 'C', layout: 'normal' },
            { cardNumber: 195, cardSet: cardSetId, name: 'Field Creeper', rarity: 'C', layout: 'normal' },
            { cardNumber: 196, cardSet: cardSetId, name: 'Geist-Fueled Scarecrow', rarity: 'U', layout: 'normal' },
            { cardNumber: 197, cardSet: cardSetId, name: 'Lupine Prototype', rarity: 'R', layout: 'normal' },
            { cardNumber: 198, cardSet: cardSetId, name: 'Slayer\'s Cleaver', rarity: 'U', layout: 'normal' },
            { cardNumber: 199, cardSet: cardSetId, name: 'Soul Separator', rarity: 'R', layout: 'normal' },
            { cardNumber: 200, cardSet: cardSetId, name: 'Stitcher\'s Graft', rarity: 'R', layout: 'normal' },
            { cardNumber: 201, cardSet: cardSetId, name: 'Terrarion', rarity: 'C', layout: 'normal' },
            { cardNumber: 202, cardSet: cardSetId, name: 'Thirsting Axe', rarity: 'U', layout: 'normal' },
            { cardNumber: 203, cardSet: cardSetId, name: 'Geier Reach Sanitarium', rarity: 'R', layout: 'normal' },
            { cardNumber: 204, cardSet: cardSetId, name: 'Hanweir Battlements', rarity: 'R', layout: 'meld' },
            { cardNumber: 205, cardSet: cardSetId, name: 'Nephalia Academy', rarity: 'U', layout: 'normal' },
        ]).execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Get the card set id
        const shortname = 'EMN';
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
