import { CardSet } from "../card/entity/card-set.entity";
import { InsertResult, MigrationInterface, QueryRunner } from "typeorm";

export class addingWar1620399859574 implements MigrationInterface {
    name = 'addingWar1620399859574';

    public async up(queryRunner: QueryRunner): Promise<void> {

        const insertResult: InsertResult = await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card_set')
            .values({ name: 'War of The Spark', shortName: 'WAR' })
            .execute();
        const cardSetId: number = insertResult.identifiers[0].id;

        await queryRunner.manager.createQueryBuilder().insert().into('card').values([
            { cardNumber: 1, cardSet: cardSetId, name: 'Karn, the Great Creator', rarity: 'R', layout: 'normal' },
            { cardNumber: 2, cardSet: cardSetId, name: 'Ugin, the Ineffable', rarity: 'R', layout: 'normal' },
            { cardNumber: 3, cardSet: cardSetId, name: 'Ugin\'s Conjurant', rarity: 'U', layout: 'normal' },
            { cardNumber: 4, cardSet: cardSetId, name: 'Ajani\'s Pridemate', rarity: 'U', layout: 'normal' },
            { cardNumber: 5, cardSet: cardSetId, name: 'Battlefield Promotion', rarity: 'C', layout: 'normal' },
            { cardNumber: 6, cardSet: cardSetId, name: 'Bond of Discipline', rarity: 'U', layout: 'normal' },
            { cardNumber: 7, cardSet: cardSetId, name: 'Bulwark Giant', rarity: 'C', layout: 'normal' },
            { cardNumber: 8, cardSet: cardSetId, name: 'Charmed Stray', rarity: 'C', layout: 'normal' },
            { cardNumber: 9, cardSet: cardSetId, name: 'Defiant Strike', rarity: 'C', layout: 'normal' },
            { cardNumber: 10, cardSet: cardSetId, name: 'Divine Arrow', rarity: 'C', layout: 'normal' },
            { cardNumber: 11, cardSet: cardSetId, name: 'Enforcer Griffin', rarity: 'C', layout: 'normal' },
            { cardNumber: 12, cardSet: cardSetId, name: 'Finale of Glory', rarity: 'M', layout: 'normal' },
            { cardNumber: 13, cardSet: cardSetId, name: 'Gideon Blackblade', rarity: 'M', layout: 'normal' },
            { cardNumber: 14, cardSet: cardSetId, name: 'Gideon\'s Sacrifice', rarity: 'C', layout: 'normal' },
            { cardNumber: 15, cardSet: cardSetId, name: 'Gideon\'s Triumph', rarity: 'U', layout: 'normal' },
            { cardNumber: 16, cardSet: cardSetId, name: 'God-Eternal Oketra', rarity: 'M', layout: 'normal' },
            { cardNumber: 17, cardSet: cardSetId, name: 'Grateful Apparition', rarity: 'U', layout: 'normal' },
            { cardNumber: 18, cardSet: cardSetId, name: 'Ignite the Beacon', rarity: 'R', layout: 'normal' },
            { cardNumber: 19, cardSet: cardSetId, name: 'Ironclad Krovod', rarity: 'C', layout: 'normal' },
            { cardNumber: 20, cardSet: cardSetId, name: 'Law-Rune Enforcer', rarity: 'C', layout: 'normal' },
            { cardNumber: 21, cardSet: cardSetId, name: 'Loxodon Sergeant', rarity: 'C', layout: 'normal' },
            { cardNumber: 22, cardSet: cardSetId, name: 'Makeshift Battalion', rarity: 'C', layout: 'normal' },
            { cardNumber: 23, cardSet: cardSetId, name: 'Martyr for the Cause', rarity: 'C', layout: 'normal' },
            { cardNumber: 24, cardSet: cardSetId, name: 'Parhelion II', rarity: 'R', layout: 'normal' },
            { cardNumber: 25, cardSet: cardSetId, name: 'Pouncing Lynx', rarity: 'C', layout: 'normal' },
            { cardNumber: 26, cardSet: cardSetId, name: 'Prison Realm', rarity: 'U', layout: 'normal' },
            { cardNumber: 27, cardSet: cardSetId, name: 'Rally of Wings', rarity: 'U', layout: 'normal' },
            { cardNumber: 28, cardSet: cardSetId, name: 'Ravnica at War', rarity: 'R', layout: 'normal' },
            { cardNumber: 29, cardSet: cardSetId, name: 'Rising Populace', rarity: 'C', layout: 'normal' },
            { cardNumber: 30, cardSet: cardSetId, name: 'Single Combat', rarity: 'R', layout: 'normal' },
            { cardNumber: 31, cardSet: cardSetId, name: 'Sunblade Angel', rarity: 'U', layout: 'normal' },
            { cardNumber: 32, cardSet: cardSetId, name: 'Teyo, the Shieldmage', rarity: 'U', layout: 'normal' },
            { cardNumber: 33, cardSet: cardSetId, name: 'Teyo\'s Lightshield', rarity: 'C', layout: 'normal' },
            { cardNumber: 34, cardSet: cardSetId, name: 'Tomik, Distinguished Advokist', rarity: 'R', layout: 'normal' },
            { cardNumber: 35, cardSet: cardSetId, name: 'Topple the Statue', rarity: 'C', layout: 'normal' },
            { cardNumber: 36, cardSet: cardSetId, name: 'Trusted Pegasus', rarity: 'C', layout: 'normal' },
            { cardNumber: 37, cardSet: cardSetId, name: 'The Wanderer', rarity: 'U', layout: 'normal' },
            { cardNumber: 38, cardSet: cardSetId, name: 'Wanderer\'s Strike', rarity: 'C', layout: 'normal' },
            { cardNumber: 39, cardSet: cardSetId, name: 'War Screecher', rarity: 'C', layout: 'normal' },
            { cardNumber: 40, cardSet: cardSetId, name: 'Ashiok\'s Skulker', rarity: 'C', layout: 'normal' },
            { cardNumber: 41, cardSet: cardSetId, name: 'Augur of Bolas', rarity: 'U', layout: 'normal' },
            { cardNumber: 42, cardSet: cardSetId, name: 'Aven Eternal', rarity: 'C', layout: 'normal' },
            { cardNumber: 43, cardSet: cardSetId, name: 'Bond of Insight', rarity: 'U', layout: 'normal' },
            { cardNumber: 44, cardSet: cardSetId, name: 'Callous Dismissal', rarity: 'C', layout: 'normal' },
            { cardNumber: 45, cardSet: cardSetId, name: 'Commence the Endgame', rarity: 'R', layout: 'normal' },
            { cardNumber: 46, cardSet: cardSetId, name: 'Contentious Plan', rarity: 'C', layout: 'normal' },
            { cardNumber: 47, cardSet: cardSetId, name: 'Crush Dissent', rarity: 'C', layout: 'normal' },
            { cardNumber: 48, cardSet: cardSetId, name: 'Erratic Visionary', rarity: 'C', layout: 'normal' },
            { cardNumber: 49, cardSet: cardSetId, name: 'Eternal Skylord', rarity: 'U', layout: 'normal' },
            { cardNumber: 50, cardSet: cardSetId, name: 'Fblthp, the Lost', rarity: 'R', layout: 'normal' },
            { cardNumber: 51, cardSet: cardSetId, name: 'Finale of Revelation', rarity: 'M', layout: 'normal' },
            { cardNumber: 52, cardSet: cardSetId, name: 'Flux Channeler', rarity: 'U', layout: 'normal' },
            { cardNumber: 53, cardSet: cardSetId, name: 'God-Eternal Kefnet', rarity: 'M', layout: 'normal' },
            { cardNumber: 54, cardSet: cardSetId, name: 'Jace, Wielder of Mysteries', rarity: 'R', layout: 'normal' },
            { cardNumber: 55, cardSet: cardSetId, name: 'Jace\'s Triumph', rarity: 'U', layout: 'normal' },
            { cardNumber: 56, cardSet: cardSetId, name: 'Kasmina, Enigmatic Mentor', rarity: 'U', layout: 'normal' },
            { cardNumber: 57, cardSet: cardSetId, name: 'Kasmina\'s Transmutation', rarity: 'C', layout: 'normal' },
            { cardNumber: 58, cardSet: cardSetId, name: 'Kiora\'s Dambreaker', rarity: 'C', layout: 'normal' },
            { cardNumber: 59, cardSet: cardSetId, name: 'Lazotep Plating', rarity: 'U', layout: 'normal' },
            { cardNumber: 60, cardSet: cardSetId, name: 'Naga Eternal', rarity: 'C', layout: 'normal' },
            { cardNumber: 61, cardSet: cardSetId, name: 'Narset, Parter of Veils', rarity: 'U', layout: 'normal' },
            { cardNumber: 62, cardSet: cardSetId, name: 'Narset\'s Reversal', rarity: 'R', layout: 'normal' },
            { cardNumber: 63, cardSet: cardSetId, name: 'No Escape', rarity: 'C', layout: 'normal' },
            { cardNumber: 64, cardSet: cardSetId, name: 'Relentless Advance', rarity: 'C', layout: 'normal' },
            { cardNumber: 65, cardSet: cardSetId, name: 'Rescuer Sphinx', rarity: 'U', layout: 'normal' },
            { cardNumber: 66, cardSet: cardSetId, name: 'Silent Submersible', rarity: 'R', layout: 'normal' },
            { cardNumber: 67, cardSet: cardSetId, name: 'Sky Theater Strix', rarity: 'C', layout: 'normal' },
            { cardNumber: 68, cardSet: cardSetId, name: 'Spark Double', rarity: 'R', layout: 'normal' },
            { cardNumber: 69, cardSet: cardSetId, name: 'Spellkeeper Weird', rarity: 'C', layout: 'normal' },
            { cardNumber: 70, cardSet: cardSetId, name: 'Stealth Mission', rarity: 'C', layout: 'normal' },
            { cardNumber: 71, cardSet: cardSetId, name: 'Tamiyo\'s Epiphany', rarity: 'C', layout: 'normal' },
            { cardNumber: 72, cardSet: cardSetId, name: 'Teferi\'s Time Twist', rarity: 'C', layout: 'normal' },
            { cardNumber: 73, cardSet: cardSetId, name: 'Thunder Drake', rarity: 'C', layout: 'normal' },
            { cardNumber: 74, cardSet: cardSetId, name: 'Totally Lost', rarity: 'C', layout: 'normal' },
            { cardNumber: 75, cardSet: cardSetId, name: 'Wall of Runes', rarity: 'C', layout: 'normal' },
            { cardNumber: 76, cardSet: cardSetId, name: 'Aid the Fallen', rarity: 'C', layout: 'normal' },
            { cardNumber: 77, cardSet: cardSetId, name: 'Banehound', rarity: 'C', layout: 'normal' },
            { cardNumber: 78, cardSet: cardSetId, name: 'Bleeding Edge', rarity: 'U', layout: 'normal' },
            { cardNumber: 79, cardSet: cardSetId, name: 'Bolas\'s Citadel', rarity: 'R', layout: 'normal' },
            { cardNumber: 80, cardSet: cardSetId, name: 'Bond of Revival', rarity: 'U', layout: 'normal' },
            { cardNumber: 81, cardSet: cardSetId, name: 'Charity Extractor', rarity: 'C', layout: 'normal' },
            { cardNumber: 82, cardSet: cardSetId, name: 'Command the Dreadhorde', rarity: 'R', layout: 'normal' },
            { cardNumber: 83, cardSet: cardSetId, name: 'Davriel, Rogue Shadowmage', rarity: 'U', layout: 'normal' },
            { cardNumber: 84, cardSet: cardSetId, name: 'Davriel\'s Shadowfugue', rarity: 'C', layout: 'normal' },
            { cardNumber: 85, cardSet: cardSetId, name: 'Deliver Unto Evil', rarity: 'R', layout: 'normal' },
            { cardNumber: 86, cardSet: cardSetId, name: 'Dreadhorde Invasion', rarity: 'R', layout: 'normal' },
            { cardNumber: 87, cardSet: cardSetId, name: 'Dreadmalkin', rarity: 'U', layout: 'normal' },
            { cardNumber: 88, cardSet: cardSetId, name: 'Duskmantle Operative', rarity: 'C', layout: 'normal' },
            { cardNumber: 89, cardSet: cardSetId, name: 'The Elderspell', rarity: 'R', layout: 'normal' },
            { cardNumber: 90, cardSet: cardSetId, name: 'Eternal Taskmaster', rarity: 'U', layout: 'normal' },
            { cardNumber: 91, cardSet: cardSetId, name: 'Finale of Eternity', rarity: 'M', layout: 'normal' },
            { cardNumber: 92, cardSet: cardSetId, name: 'God-Eternal Bontu', rarity: 'M', layout: 'normal' },
            { cardNumber: 93, cardSet: cardSetId, name: 'Herald of the Dreadhorde', rarity: 'C', layout: 'normal' },
            { cardNumber: 94, cardSet: cardSetId, name: 'Kaya\'s Ghostform', rarity: 'C', layout: 'normal' },
            { cardNumber: 95, cardSet: cardSetId, name: 'Lazotep Behemoth', rarity: 'C', layout: 'normal' },
            { cardNumber: 96, cardSet: cardSetId, name: 'Lazotep Reaver', rarity: 'C', layout: 'normal' },
            { cardNumber: 97, cardSet: cardSetId, name: 'Liliana, Dreadhorde General', rarity: 'M', layout: 'normal' },
            { cardNumber: 98, cardSet: cardSetId, name: 'Liliana\'s Triumph', rarity: 'U', layout: 'normal' },
            { cardNumber: 99, cardSet: cardSetId, name: 'Massacre Girl', rarity: 'R', layout: 'normal' },
            { cardNumber: 100, cardSet: cardSetId, name: 'Ob Nixilis, the Hate-Twisted', rarity: 'U', layout: 'normal' },
            { cardNumber: 101, cardSet: cardSetId, name: 'Ob Nixilis\'s Cruelty', rarity: 'C', layout: 'normal' },
            { cardNumber: 102, cardSet: cardSetId, name: 'Price of Betrayal', rarity: 'U', layout: 'normal' },
            { cardNumber: 103, cardSet: cardSetId, name: 'Shriekdiver', rarity: 'C', layout: 'normal' },
            { cardNumber: 104, cardSet: cardSetId, name: 'Sorin\'s Thirst', rarity: 'C', layout: 'normal' },
            { cardNumber: 105, cardSet: cardSetId, name: 'Spark Harvest', rarity: 'C', layout: 'normal' },
            { cardNumber: 106, cardSet: cardSetId, name: 'Spark Reaper', rarity: 'C', layout: 'normal' },
            { cardNumber: 107, cardSet: cardSetId, name: 'Tithebearer Giant', rarity: 'C', layout: 'normal' },
            { cardNumber: 108, cardSet: cardSetId, name: 'Toll of the Invasion', rarity: 'C', layout: 'normal' },
            { cardNumber: 109, cardSet: cardSetId, name: 'Unlikely Aid', rarity: 'C', layout: 'normal' },
            { cardNumber: 110, cardSet: cardSetId, name: 'Vampire Opportunist', rarity: 'C', layout: 'normal' },
            { cardNumber: 111, cardSet: cardSetId, name: 'Vizier of the Scorpion', rarity: 'U', layout: 'normal' },
            { cardNumber: 112, cardSet: cardSetId, name: 'Vraska\'s Finisher', rarity: 'C', layout: 'normal' },
            { cardNumber: 113, cardSet: cardSetId, name: 'Ahn-Crop Invader', rarity: 'C', layout: 'normal' },
            { cardNumber: 114, cardSet: cardSetId, name: 'Blindblast', rarity: 'C', layout: 'normal' },
            { cardNumber: 115, cardSet: cardSetId, name: 'Bolt Bend', rarity: 'U', layout: 'normal' },
            { cardNumber: 116, cardSet: cardSetId, name: 'Bond of Passion', rarity: 'U', layout: 'normal' },
            { cardNumber: 117, cardSet: cardSetId, name: 'Burning Prophet', rarity: 'C', layout: 'normal' },
            { cardNumber: 118, cardSet: cardSetId, name: 'Chainwhip Cyclops', rarity: 'C', layout: 'normal' },
            { cardNumber: 119, cardSet: cardSetId, name: 'Chandra, Fire Artisan', rarity: 'R', layout: 'normal' },
            { cardNumber: 120, cardSet: cardSetId, name: 'Chandra\'s Pyrohelix', rarity: 'C', layout: 'normal' },
            { cardNumber: 121, cardSet: cardSetId, name: 'Chandra\'s Triumph', rarity: 'U', layout: 'normal' },
            { cardNumber: 122, cardSet: cardSetId, name: 'Cyclops Electromancer', rarity: 'U', layout: 'normal' },
            { cardNumber: 123, cardSet: cardSetId, name: 'Demolish', rarity: 'C', layout: 'normal' },
            { cardNumber: 124, cardSet: cardSetId, name: 'Devouring Hellion', rarity: 'U', layout: 'normal' },
            { cardNumber: 125, cardSet: cardSetId, name: 'Dreadhorde Arcanist', rarity: 'R', layout: 'normal' },
            { cardNumber: 126, cardSet: cardSetId, name: 'Dreadhorde Twins', rarity: 'U', layout: 'normal' },
            { cardNumber: 127, cardSet: cardSetId, name: 'Finale of Promise', rarity: 'M', layout: 'normal' },
            { cardNumber: 128, cardSet: cardSetId, name: 'Goblin Assailant', rarity: 'C', layout: 'normal' },
            { cardNumber: 129, cardSet: cardSetId, name: 'Goblin Assault Team', rarity: 'C', layout: 'normal' },
            { cardNumber: 130, cardSet: cardSetId, name: 'Grim Initiate', rarity: 'C', layout: 'normal' },
            { cardNumber: 131, cardSet: cardSetId, name: 'Heartfire', rarity: 'C', layout: 'normal' },
            { cardNumber: 132, cardSet: cardSetId, name: 'Honor the God-Pharaoh', rarity: 'C', layout: 'normal' },
            { cardNumber: 133, cardSet: cardSetId, name: 'Ilharg, the Raze-Boar', rarity: 'M', layout: 'normal' },
            { cardNumber: 134, cardSet: cardSetId, name: 'Invading Manticore', rarity: 'C', layout: 'normal' },
            { cardNumber: 135, cardSet: cardSetId, name: 'Jaya, Venerated Firemage', rarity: 'U', layout: 'normal' },
            { cardNumber: 136, cardSet: cardSetId, name: 'Jaya\'s Greeting', rarity: 'C', layout: 'normal' },
            { cardNumber: 137, cardSet: cardSetId, name: 'Krenko, Tin Street Kingpin', rarity: 'R', layout: 'normal' },
            { cardNumber: 138, cardSet: cardSetId, name: 'Mizzium Tank', rarity: 'R', layout: 'normal' },
            { cardNumber: 139, cardSet: cardSetId, name: 'Nahiri\'s Stoneblades', rarity: 'C', layout: 'normal' },
            { cardNumber: 140, cardSet: cardSetId, name: 'Neheb, Dreadhorde Champion', rarity: 'R', layout: 'normal' },
            { cardNumber: 141, cardSet: cardSetId, name: 'Raging Kronch', rarity: 'C', layout: 'normal' },
            { cardNumber: 142, cardSet: cardSetId, name: 'Samut\'s Sprint', rarity: 'C', layout: 'normal' },
            { cardNumber: 143, cardSet: cardSetId, name: 'Sarkhan the Masterless', rarity: 'R', layout: 'normal' },
            { cardNumber: 144, cardSet: cardSetId, name: 'Sarkhan\'s Catharsis', rarity: 'C', layout: 'normal' },
            { cardNumber: 145, cardSet: cardSetId, name: 'Spellgorger Weird', rarity: 'C', layout: 'normal' },
            { cardNumber: 146, cardSet: cardSetId, name: 'Tibalt, Rakish Instigator', rarity: 'U', layout: 'normal' },
            { cardNumber: 147, cardSet: cardSetId, name: 'Tibalt\'s Rager', rarity: 'U', layout: 'normal' },
            { cardNumber: 148, cardSet: cardSetId, name: 'Turret Ogre', rarity: 'C', layout: 'normal' },
            { cardNumber: 149, cardSet: cardSetId, name: 'Arboreal Grazer', rarity: 'C', layout: 'normal' },
            { cardNumber: 150, cardSet: cardSetId, name: 'Arlinn, Voice of the Pack', rarity: 'U', layout: 'normal' },
            { cardNumber: 151, cardSet: cardSetId, name: 'Arlinn\'s Wolf', rarity: 'C', layout: 'normal' },
            { cardNumber: 152, cardSet: cardSetId, name: 'Awakening of Vitu-Ghazi', rarity: 'R', layout: 'normal' },
            { cardNumber: 153, cardSet: cardSetId, name: 'Band Together', rarity: 'C', layout: 'normal' },
            { cardNumber: 154, cardSet: cardSetId, name: 'Bloom Hulk', rarity: 'C', layout: 'normal' },
            { cardNumber: 155, cardSet: cardSetId, name: 'Bond of Flourishing', rarity: 'U', layout: 'normal' },
            { cardNumber: 156, cardSet: cardSetId, name: 'Centaur Nurturer', rarity: 'C', layout: 'normal' },
            { cardNumber: 157, cardSet: cardSetId, name: 'Challenger Troll', rarity: 'U', layout: 'normal' },
            { cardNumber: 158, cardSet: cardSetId, name: 'Courage in Crisis', rarity: 'C', layout: 'normal' },
            { cardNumber: 159, cardSet: cardSetId, name: 'Evolution Sage', rarity: 'U', layout: 'normal' },
            { cardNumber: 160, cardSet: cardSetId, name: 'Finale of Devastation', rarity: 'M', layout: 'normal' },
            { cardNumber: 161, cardSet: cardSetId, name: 'Forced Landing', rarity: 'C', layout: 'normal' },
            { cardNumber: 162, cardSet: cardSetId, name: 'Giant Growth', rarity: 'C', layout: 'normal' },
            { cardNumber: 163, cardSet: cardSetId, name: 'God-Eternal Rhonas', rarity: 'M', layout: 'normal' },
            { cardNumber: 164, cardSet: cardSetId, name: 'Jiang Yanggu, Wildcrafter', rarity: 'U', layout: 'normal' },
            { cardNumber: 165, cardSet: cardSetId, name: 'Kraul Stinger', rarity: 'C', layout: 'normal' },
            { cardNumber: 166, cardSet: cardSetId, name: 'Kronch Wrangler', rarity: 'C', layout: 'normal' },
            { cardNumber: 167, cardSet: cardSetId, name: 'Mowu, Loyal Companion', rarity: 'U', layout: 'normal' },
            { cardNumber: 168, cardSet: cardSetId, name: 'New Horizons', rarity: 'C', layout: 'normal' },
            { cardNumber: 169, cardSet: cardSetId, name: 'Nissa, Who Shakes the World', rarity: 'R', layout: 'normal' },
            { cardNumber: 170, cardSet: cardSetId, name: 'Nissa\'s Triumph', rarity: 'U', layout: 'normal' },
            { cardNumber: 171, cardSet: cardSetId, name: 'Paradise Druid', rarity: 'U', layout: 'normal' },
            { cardNumber: 172, cardSet: cardSetId, name: 'Planewide Celebration', rarity: 'R', layout: 'normal' },
            { cardNumber: 173, cardSet: cardSetId, name: 'Pollenbright Druid', rarity: 'C', layout: 'normal' },
            { cardNumber: 174, cardSet: cardSetId, name: 'Primordial Wurm', rarity: 'C', layout: 'normal' },
            { cardNumber: 175, cardSet: cardSetId, name: 'Return to Nature', rarity: 'C', layout: 'normal' },
            { cardNumber: 176, cardSet: cardSetId, name: 'Snarespinner', rarity: 'C', layout: 'normal' },
            { cardNumber: 177, cardSet: cardSetId, name: 'Steady Aim', rarity: 'C', layout: 'normal' },
            { cardNumber: 178, cardSet: cardSetId, name: 'Storm the Citadel', rarity: 'U', layout: 'normal' },
            { cardNumber: 179, cardSet: cardSetId, name: 'Thundering Ceratok', rarity: 'C', layout: 'normal' },
            { cardNumber: 180, cardSet: cardSetId, name: 'Vivien, Champion of the Wilds', rarity: 'R', layout: 'normal' },
            { cardNumber: 181, cardSet: cardSetId, name: 'Vivien\'s Arkbow', rarity: 'R', layout: 'normal' },
            { cardNumber: 182, cardSet: cardSetId, name: 'Vivien\'s Grizzly', rarity: 'C', layout: 'normal' },
            { cardNumber: 183, cardSet: cardSetId, name: 'Wardscale Crocodile', rarity: 'C', layout: 'normal' },
            { cardNumber: 184, cardSet: cardSetId, name: 'Ajani, the Greathearted', rarity: 'R', layout: 'normal' },
            { cardNumber: 185, cardSet: cardSetId, name: 'Angrath\'s Rampage', rarity: 'U', layout: 'normal' },
            { cardNumber: 186, cardSet: cardSetId, name: 'Bioessence Hydra', rarity: 'R', layout: 'normal' },
            { cardNumber: 187, cardSet: cardSetId, name: 'Casualties of War', rarity: 'R', layout: 'normal' },
            { cardNumber: 188, cardSet: cardSetId, name: 'Cruel Celebrant', rarity: 'U', layout: 'normal' },
            { cardNumber: 189, cardSet: cardSetId, name: 'Deathsprout', rarity: 'U', layout: 'normal' },
            { cardNumber: 190, cardSet: cardSetId, name: 'Despark', rarity: 'U', layout: 'normal' },
            { cardNumber: 191, cardSet: cardSetId, name: 'Domri, Anarch of Bolas', rarity: 'R', layout: 'normal' },
            { cardNumber: 192, cardSet: cardSetId, name: 'Domri\'s Ambush', rarity: 'U', layout: 'normal' },
            { cardNumber: 193, cardSet: cardSetId, name: 'Dovin\'s Veto', rarity: 'U', layout: 'normal' },
            { cardNumber: 194, cardSet: cardSetId, name: 'Dreadhorde Butcher', rarity: 'R', layout: 'normal' },
            { cardNumber: 195, cardSet: cardSetId, name: 'Elite Guardmage', rarity: 'U', layout: 'normal' },
            { cardNumber: 196, cardSet: cardSetId, name: 'Enter the God-Eternals', rarity: 'R', layout: 'normal' },
            { cardNumber: 197, cardSet: cardSetId, name: 'Feather, the Redeemed', rarity: 'R', layout: 'normal' },
            { cardNumber: 198, cardSet: cardSetId, name: 'Gleaming Overseer', rarity: 'U', layout: 'normal' },
            { cardNumber: 199, cardSet: cardSetId, name: 'Heartwarming Redemption', rarity: 'U', layout: 'normal' },
            { cardNumber: 200, cardSet: cardSetId, name: 'Huatli\'s Raptor', rarity: 'U', layout: 'normal' },
            { cardNumber: 201, cardSet: cardSetId, name: 'Invade the City', rarity: 'U', layout: 'normal' },
            { cardNumber: 202, cardSet: cardSetId, name: 'Leyline Prowler', rarity: 'U', layout: 'normal' },
            { cardNumber: 203, cardSet: cardSetId, name: 'Living Twister', rarity: 'R', layout: 'normal' },
            { cardNumber: 204, cardSet: cardSetId, name: 'Mayhem Devil', rarity: 'U', layout: 'normal' },
            { cardNumber: 205, cardSet: cardSetId, name: 'Merfolk Skydiver', rarity: 'U', layout: 'normal' },
            { cardNumber: 206, cardSet: cardSetId, name: 'Neoform', rarity: 'U', layout: 'normal' },
            { cardNumber: 207, cardSet: cardSetId, name: 'Nicol Bolas, Dragon-God', rarity: 'M', layout: 'normal' },
            { cardNumber: 208, cardSet: cardSetId, name: 'Niv-Mizzet Reborn', rarity: 'M', layout: 'normal' },
            { cardNumber: 209, cardSet: cardSetId, name: 'Oath of Kaya', rarity: 'R', layout: 'normal' },
            { cardNumber: 210, cardSet: cardSetId, name: 'Pledge of Unity', rarity: 'U', layout: 'normal' },
            { cardNumber: 211, cardSet: cardSetId, name: 'Ral, Storm Conduit', rarity: 'R', layout: 'normal' },
            { cardNumber: 212, cardSet: cardSetId, name: 'Ral\'s Outburst', rarity: 'U', layout: 'normal' },
            { cardNumber: 213, cardSet: cardSetId, name: 'Roalesk, Apex Hybrid', rarity: 'M', layout: 'normal' },
            { cardNumber: 214, cardSet: cardSetId, name: 'Role Reversal', rarity: 'R', layout: 'normal' },
            { cardNumber: 215, cardSet: cardSetId, name: 'Rubblebelt Rioters', rarity: 'U', layout: 'normal' },
            { cardNumber: 216, cardSet: cardSetId, name: 'Solar Blaze', rarity: 'R', layout: 'normal' },
            { cardNumber: 217, cardSet: cardSetId, name: 'Sorin, Vengeful Bloodlord', rarity: 'R', layout: 'normal' },
            { cardNumber: 218, cardSet: cardSetId, name: 'Soul Diviner', rarity: 'R', layout: 'normal' },
            { cardNumber: 219, cardSet: cardSetId, name: 'Storrev, Devkarin Lich', rarity: 'R', layout: 'normal' },
            { cardNumber: 220, cardSet: cardSetId, name: 'Tamiyo, Collector of Tales', rarity: 'R', layout: 'normal' },
            { cardNumber: 221, cardSet: cardSetId, name: 'Teferi, Time Raveler', rarity: 'R', layout: 'normal' },
            { cardNumber: 222, cardSet: cardSetId, name: 'Tenth District Legionnaire', rarity: 'U', layout: 'normal' },
            { cardNumber: 223, cardSet: cardSetId, name: 'Time Wipe', rarity: 'R', layout: 'normal' },
            { cardNumber: 224, cardSet: cardSetId, name: 'Tolsimir, Friend to Wolves', rarity: 'R', layout: 'normal' },
            { cardNumber: 225, cardSet: cardSetId, name: 'Tyrant\'s Scorn', rarity: 'U', layout: 'normal' },
            { cardNumber: 226, cardSet: cardSetId, name: 'Widespread Brutality', rarity: 'R', layout: 'normal' },
            { cardNumber: 227, cardSet: cardSetId, name: 'Angrath, Captain of Chaos', rarity: 'U', layout: 'normal' },
            { cardNumber: 228, cardSet: cardSetId, name: 'Ashiok, Dream Render', rarity: 'U', layout: 'normal' },
            { cardNumber: 229, cardSet: cardSetId, name: 'Dovin, Hand of Control', rarity: 'U', layout: 'normal' },
            { cardNumber: 230, cardSet: cardSetId, name: 'Huatli, the Sun\'s Heart', rarity: 'U', layout: 'normal' },
            { cardNumber: 231, cardSet: cardSetId, name: 'Kaya, Bane of the Dead', rarity: 'U', layout: 'normal' },
            { cardNumber: 232, cardSet: cardSetId, name: 'Kiora, Behemoth Beckoner', rarity: 'U', layout: 'normal' },
            { cardNumber: 233, cardSet: cardSetId, name: 'Nahiri, Storm of Stone', rarity: 'U', layout: 'normal' },
            { cardNumber: 234, cardSet: cardSetId, name: 'Saheeli, Sublime Artificer', rarity: 'U', layout: 'normal' },
            { cardNumber: 235, cardSet: cardSetId, name: 'Samut, Tyrant Smasher', rarity: 'U', layout: 'normal' },
            { cardNumber: 236, cardSet: cardSetId, name: 'Vraska, Swarm\'s Eminence', rarity: 'U', layout: 'normal' },
            { cardNumber: 237, cardSet: cardSetId, name: 'Firemind Vessel', rarity: 'U', layout: 'normal' },
            { cardNumber: 238, cardSet: cardSetId, name: 'God-Pharaoh\'s Statue', rarity: 'U', layout: 'normal' },
            { cardNumber: 239, cardSet: cardSetId, name: 'Guild Globe', rarity: 'C', layout: 'normal' },
            { cardNumber: 240, cardSet: cardSetId, name: 'Iron Bully', rarity: 'C', layout: 'normal' },
            { cardNumber: 241, cardSet: cardSetId, name: 'Mana Geode', rarity: 'C', layout: 'normal' },
            { cardNumber: 242, cardSet: cardSetId, name: 'Prismite', rarity: 'C', layout: 'normal' },
            { cardNumber: 243, cardSet: cardSetId, name: 'Saheeli\'s Silverwing', rarity: 'C', layout: 'normal' },
            { cardNumber: 244, cardSet: cardSetId, name: 'Blast Zone', rarity: 'R', layout: 'normal' },
            { cardNumber: 245, cardSet: cardSetId, name: 'Emergence Zone', rarity: 'U', layout: 'normal' },
            { cardNumber: 246, cardSet: cardSetId, name: 'Gateway Plaza', rarity: 'C', layout: 'normal' },
            { cardNumber: 247, cardSet: cardSetId, name: 'Interplanar Beacon', rarity: 'U', layout: 'normal' },
            { cardNumber: 248, cardSet: cardSetId, name: 'Karn\'s Bastion', rarity: 'R', layout: 'normal' },
            { cardNumber: 249, cardSet: cardSetId, name: 'Mobilized District', rarity: 'R', layout: 'normal' },
            { cardNumber: 250, cardSet: cardSetId, name: 'Plains', rarity: 'C', layout: 'normal' },
            { cardNumber: 251, cardSet: cardSetId, name: 'Plains', rarity: 'C', layout: 'normal' },
            { cardNumber: 252, cardSet: cardSetId, name: 'Plains', rarity: 'C', layout: 'normal' },
            { cardNumber: 253, cardSet: cardSetId, name: 'Island', rarity: 'C', layout: 'normal' },
            { cardNumber: 254, cardSet: cardSetId, name: 'Island', rarity: 'C', layout: 'normal' },
            { cardNumber: 255, cardSet: cardSetId, name: 'Island', rarity: 'C', layout: 'normal' },
            { cardNumber: 256, cardSet: cardSetId, name: 'Swamp', rarity: 'C', layout: 'normal' },
            { cardNumber: 257, cardSet: cardSetId, name: 'Swamp', rarity: 'C', layout: 'normal' },
            { cardNumber: 258, cardSet: cardSetId, name: 'Swamp', rarity: 'C', layout: 'normal' },
            { cardNumber: 259, cardSet: cardSetId, name: 'Mountain', rarity: 'C', layout: 'normal' },
            { cardNumber: 260, cardSet: cardSetId, name: 'Mountain', rarity: 'C', layout: 'normal' },
            { cardNumber: 261, cardSet: cardSetId, name: 'Mountain', rarity: 'C', layout: 'normal' },
            { cardNumber: 262, cardSet: cardSetId, name: 'Forest', rarity: 'C', layout: 'normal' },
            { cardNumber: 263, cardSet: cardSetId, name: 'Forest', rarity: 'C', layout: 'normal' },
            { cardNumber: 264, cardSet: cardSetId, name: 'Forest', rarity: 'C', layout: 'normal' },
            { cardNumber: 265, cardSet: cardSetId, name: 'Gideon, the Oathsworn', rarity: 'M', layout: 'normal' },
            { cardNumber: 266, cardSet: cardSetId, name: 'Desperate Lunge', rarity: 'C', layout: 'normal' },
            { cardNumber: 267, cardSet: cardSetId, name: 'Gideon\'s Battle Cry', rarity: 'R', layout: 'normal' },
            { cardNumber: 268, cardSet: cardSetId, name: 'Gideon\'s Company', rarity: 'U', layout: 'normal' },
            { cardNumber: 269, cardSet: cardSetId, name: 'Orzhov Guildgate', rarity: 'C', layout: 'normal' },
            { cardNumber: 270, cardSet: cardSetId, name: 'Jace, Arcane Strategist', rarity: 'M', layout: 'normal' },
            { cardNumber: 271, cardSet: cardSetId, name: 'Guildpact Informant', rarity: 'C', layout: 'normal' },
            { cardNumber: 272, cardSet: cardSetId, name: 'Jace\'s Projection', rarity: 'U', layout: 'normal' },
            { cardNumber: 273, cardSet: cardSetId, name: 'Jace\'s Ruse', rarity: 'R', layout: 'normal' },
            { cardNumber: 274, cardSet: cardSetId, name: 'Simic Guildgate', rarity: 'C', layout: 'normal' },
            { cardNumber: 275, cardSet: cardSetId, name: 'Tezzeret, Master of the Bridge', rarity: 'M', layout: 'normal' },
        ]).execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Get the card set id
        const shortname = 'WAR';
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
