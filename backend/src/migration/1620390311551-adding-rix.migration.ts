import { CardSet } from "../card/entity/card-set.entity";
import { InsertResult, MigrationInterface, QueryRunner } from "typeorm";

export class addingRix1620390311551 implements MigrationInterface {
    name = 'addingRix1620390311551';

    public async up(queryRunner: QueryRunner): Promise<void> {

        const insertResult: InsertResult = await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('card_set')
            .values({ name: 'Rival of Ixalan', shortName: 'RIX' })
            .execute();
        const cardSetId: number = insertResult.identifiers[0].id;

        await queryRunner.manager.createQueryBuilder().insert().into('card').values([
            { cardNumber: 1, cardSet: cardSetId, name: 'Baffling End', rarity: 'U', layout: 'normal' },
            { cardNumber: 2, cardSet: cardSetId, name: 'Bishop of Binding', rarity: 'R', layout: 'normal' },
            { cardNumber: 3, cardSet: cardSetId, name: 'Blazing Hope', rarity: 'U', layout: 'normal' },
            { cardNumber: 4, cardSet: cardSetId, name: 'Cleansing Ray', rarity: 'C', layout: 'normal' },
            { cardNumber: 5, cardSet: cardSetId, name: 'Divine Verdict', rarity: 'C', layout: 'normal' },
            { cardNumber: 6, cardSet: cardSetId, name: 'Everdawn Champion', rarity: 'U', layout: 'normal' },
            { cardNumber: 7, cardSet: cardSetId, name: 'Exultant Skymarcher', rarity: 'C', layout: 'normal' },
            { cardNumber: 8, cardSet: cardSetId, name: 'Famished Paladin', rarity: 'U', layout: 'normal' },
            { cardNumber: 9, cardSet: cardSetId, name: 'Forerunner of the Legion', rarity: 'U', layout: 'normal' },
            { cardNumber: 10, cardSet: cardSetId, name: 'Imperial Ceratops', rarity: 'U', layout: 'normal' },
            { cardNumber: 11, cardSet: cardSetId, name: 'Legion Conquistador', rarity: 'C', layout: 'normal' },
            { cardNumber: 12, cardSet: cardSetId, name: 'Luminous Bonds', rarity: 'C', layout: 'normal' },
            { cardNumber: 13, cardSet: cardSetId, name: 'Majestic Heliopterus', rarity: 'U', layout: 'normal' },
            { cardNumber: 14, cardSet: cardSetId, name: 'Martyr of Dusk', rarity: 'C', layout: 'normal' },
            { cardNumber: 15, cardSet: cardSetId, name: 'Moment of Triumph', rarity: 'C', layout: 'normal' },
            { cardNumber: 16, cardSet: cardSetId, name: 'Paladin of Atonement', rarity: 'R', layout: 'normal' },
            { cardNumber: 17, cardSet: cardSetId, name: 'Pride of Conquerors', rarity: 'U', layout: 'normal' },
            { cardNumber: 18, cardSet: cardSetId, name: 'Radiant Destiny', rarity: 'R', layout: 'normal' },
            { cardNumber: 19, cardSet: cardSetId, name: 'Raptor Companion', rarity: 'C', layout: 'normal' },
            { cardNumber: 20, cardSet: cardSetId, name: 'Sanguine Glorifier', rarity: 'C', layout: 'normal' },
            { cardNumber: 21, cardSet: cardSetId, name: 'Skymarcher Aspirant', rarity: 'U', layout: 'normal' },
            { cardNumber: 22, cardSet: cardSetId, name: 'Slaughter the Strong', rarity: 'R', layout: 'normal' },
            { cardNumber: 23, cardSet: cardSetId, name: 'Snubhorn Sentry', rarity: 'C', layout: 'normal' },
            { cardNumber: 24, cardSet: cardSetId, name: 'Sphinx\'s Decree', rarity: 'R', layout: 'normal' },
            { cardNumber: 25, cardSet: cardSetId, name: 'Squire\'s Devotion', rarity: 'C', layout: 'normal' },
            { cardNumber: 26, cardSet: cardSetId, name: 'Sun Sentinel', rarity: 'C', layout: 'normal' },
            { cardNumber: 27, cardSet: cardSetId, name: 'Sun-Crested Pterodon', rarity: 'C', layout: 'normal' },
            { cardNumber: 28, cardSet: cardSetId, name: 'Temple Altisaur', rarity: 'R', layout: 'normal' },
            { cardNumber: 29, cardSet: cardSetId, name: 'Trapjaw Tyrant', rarity: 'M', layout: 'normal' },
            { cardNumber: 30, cardSet: cardSetId, name: 'Zetalpa, Primal Dawn', rarity: 'R', layout: 'normal' },
            { cardNumber: 31, cardSet: cardSetId, name: 'Admiral\'s Order', rarity: 'R', layout: 'normal' },
            { cardNumber: 32, cardSet: cardSetId, name: 'Aquatic Incursion', rarity: 'U', layout: 'normal' },
            { cardNumber: 33, cardSet: cardSetId, name: 'Crafty Cutpurse', rarity: 'R', layout: 'normal' },
            { cardNumber: 34, cardSet: cardSetId, name: 'Crashing Tide', rarity: 'C', layout: 'normal' },
            { cardNumber: 35, cardSet: cardSetId, name: 'Curious Obsession', rarity: 'U', layout: 'normal' },
            { cardNumber: 36, cardSet: cardSetId, name: 'Deadeye Rig-Hauler', rarity: 'C', layout: 'normal' },
            { cardNumber: 37, cardSet: cardSetId, name: 'Expel from Orazca', rarity: 'U', layout: 'normal' },
            { cardNumber: 38, cardSet: cardSetId, name: 'Flood of Recollection', rarity: 'U', layout: 'normal' },
            { cardNumber: 39, cardSet: cardSetId, name: 'Hornswoggle', rarity: 'U', layout: 'normal' },
            { cardNumber: 40, cardSet: cardSetId, name: 'Induced Amnesia', rarity: 'R', layout: 'normal' },
            { cardNumber: 41, cardSet: cardSetId, name: 'Kitesail Corsair', rarity: 'C', layout: 'normal' },
            { cardNumber: 42, cardSet: cardSetId, name: 'Kumena\'s Awakening', rarity: 'R', layout: 'normal' },
            { cardNumber: 43, cardSet: cardSetId, name: 'Mist-Cloaked Herald', rarity: 'C', layout: 'normal' },
            { cardNumber: 44, cardSet: cardSetId, name: 'Negate', rarity: 'C', layout: 'normal' },
            { cardNumber: 45, cardSet: cardSetId, name: 'Nezahal, Primal Tide', rarity: 'R', layout: 'normal' },
            { cardNumber: 46, cardSet: cardSetId, name: 'Release to the Wind', rarity: 'R', layout: 'normal' },
            { cardNumber: 47, cardSet: cardSetId, name: 'River Darter', rarity: 'C', layout: 'normal' },
            { cardNumber: 48, cardSet: cardSetId, name: 'Riverwise Augur', rarity: 'U', layout: 'normal' },
            { cardNumber: 49, cardSet: cardSetId, name: 'Sailor of Means', rarity: 'C', layout: 'normal' },
            { cardNumber: 50, cardSet: cardSetId, name: 'Sea Legs', rarity: 'C', layout: 'normal' },
            { cardNumber: 51, cardSet: cardSetId, name: 'Seafloor Oracle', rarity: 'R', layout: 'normal' },
            { cardNumber: 52, cardSet: cardSetId, name: 'Secrets of the Golden City', rarity: 'C', layout: 'normal' },
            { cardNumber: 53, cardSet: cardSetId, name: 'Silvergill Adept', rarity: 'U', layout: 'normal' },
            { cardNumber: 54, cardSet: cardSetId, name: 'Siren Reaver', rarity: 'U', layout: 'normal' },
            { cardNumber: 55, cardSet: cardSetId, name: 'Slippery Scoundrel', rarity: 'U', layout: 'normal' },
            { cardNumber: 56, cardSet: cardSetId, name: 'Soul of the Rapids', rarity: 'C', layout: 'normal' },
            { cardNumber: 57, cardSet: cardSetId, name: 'Spire Winder', rarity: 'C', layout: 'normal' },
            { cardNumber: 58, cardSet: cardSetId, name: 'Sworn Guardian', rarity: 'C', layout: 'normal' },
            { cardNumber: 59, cardSet: cardSetId, name: 'Timestream Navigator', rarity: 'M', layout: 'normal' },
            { cardNumber: 60, cardSet: cardSetId, name: 'Warkite Marauder', rarity: 'R', layout: 'normal' },
            { cardNumber: 61, cardSet: cardSetId, name: 'Waterknot', rarity: 'C', layout: 'normal' },
            { cardNumber: 62, cardSet: cardSetId, name: 'Arterial Flow', rarity: 'U', layout: 'normal' },
            { cardNumber: 63, cardSet: cardSetId, name: 'Canal Monitor', rarity: 'C', layout: 'normal' },
            { cardNumber: 64, cardSet: cardSetId, name: 'Champion of Dusk', rarity: 'R', layout: 'normal' },
            { cardNumber: 65, cardSet: cardSetId, name: 'Dark Inquiry', rarity: 'C', layout: 'normal' },
            { cardNumber: 66, cardSet: cardSetId, name: 'Dead Man\'s Chest', rarity: 'R', layout: 'normal' },
            { cardNumber: 67, cardSet: cardSetId, name: 'Dinosaur Hunter', rarity: 'C', layout: 'normal' },
            { cardNumber: 68, cardSet: cardSetId, name: 'Dire Fleet Poisoner', rarity: 'R', layout: 'normal' },
            { cardNumber: 69, cardSet: cardSetId, name: 'Dusk Charger', rarity: 'C', layout: 'normal' },
            { cardNumber: 70, cardSet: cardSetId, name: 'Dusk Legion Zealot', rarity: 'C', layout: 'normal' },
            { cardNumber: 71, cardSet: cardSetId, name: 'Fathom Fleet Boarder', rarity: 'C', layout: 'normal' },
            { cardNumber: 72, cardSet: cardSetId, name: 'Forerunner of the Coalition', rarity: 'U', layout: 'normal' },
            { cardNumber: 73, cardSet: cardSetId, name: 'Golden Demise', rarity: 'U', layout: 'normal' },
            { cardNumber: 74, cardSet: cardSetId, name: 'Grasping Scoundrel', rarity: 'C', layout: 'normal' },
            { cardNumber: 75, cardSet: cardSetId, name: 'Gruesome Fate', rarity: 'C', layout: 'normal' },
            { cardNumber: 76, cardSet: cardSetId, name: 'Impale', rarity: 'C', layout: 'normal' },
            { cardNumber: 77, cardSet: cardSetId, name: 'Mastermind\'s Acquisition', rarity: 'R', layout: 'normal' },
            { cardNumber: 78, cardSet: cardSetId, name: 'Mausoleum Harpy', rarity: 'U', layout: 'normal' },
            { cardNumber: 79, cardSet: cardSetId, name: 'Moment of Craving', rarity: 'C', layout: 'normal' },
            { cardNumber: 80, cardSet: cardSetId, name: 'Oathsworn Vampire', rarity: 'U', layout: 'normal' },
            { cardNumber: 81, cardSet: cardSetId, name: 'Pitiless Plunderer', rarity: 'U', layout: 'normal' },
            { cardNumber: 82, cardSet: cardSetId, name: 'Ravenous Chupacabra', rarity: 'U', layout: 'normal' },
            { cardNumber: 83, cardSet: cardSetId, name: 'Reaver Ambush', rarity: 'U', layout: 'normal' },
            { cardNumber: 84, cardSet: cardSetId, name: 'Recover', rarity: 'C', layout: 'normal' },
            { cardNumber: 85, cardSet: cardSetId, name: 'Sadistic Skymarcher', rarity: 'U', layout: 'normal' },
            { cardNumber: 86, cardSet: cardSetId, name: 'Tetzimoc, Primal Death', rarity: 'R', layout: 'normal' },
            { cardNumber: 87, cardSet: cardSetId, name: 'Tomb Robber', rarity: 'R', layout: 'normal' },
            { cardNumber: 88, cardSet: cardSetId, name: 'Twilight Prophet', rarity: 'M', layout: 'normal' },
            { cardNumber: 89, cardSet: cardSetId, name: 'Vampire Revenant', rarity: 'C', layout: 'normal' },
            { cardNumber: 90, cardSet: cardSetId, name: 'Vona\'s Hunger', rarity: 'R', layout: 'normal' },
            { cardNumber: 91, cardSet: cardSetId, name: 'Voracious Vampire', rarity: 'C', layout: 'normal' },
            { cardNumber: 92, cardSet: cardSetId, name: 'Blood Sun', rarity: 'R', layout: 'normal' },
            { cardNumber: 93, cardSet: cardSetId, name: 'Bombard', rarity: 'C', layout: 'normal' },
            { cardNumber: 94, cardSet: cardSetId, name: 'Brass\'s Bounty', rarity: 'R', layout: 'normal' },
            { cardNumber: 95, cardSet: cardSetId, name: 'Brazen Freebooter', rarity: 'C', layout: 'normal' },
            { cardNumber: 96, cardSet: cardSetId, name: 'Buccaneer\'s Bravado', rarity: 'C', layout: 'normal' },
            { cardNumber: 97, cardSet: cardSetId, name: 'Charging Tuskodon', rarity: 'U', layout: 'normal' },
            { cardNumber: 98, cardSet: cardSetId, name: 'Daring Buccaneer', rarity: 'U', layout: 'normal' },
            { cardNumber: 99, cardSet: cardSetId, name: 'Dire Fleet Daredevil', rarity: 'R', layout: 'normal' },
            { cardNumber: 100, cardSet: cardSetId, name: 'Etali, Primal Storm', rarity: 'R', layout: 'normal' },
            { cardNumber: 101, cardSet: cardSetId, name: 'Fanatical Firebrand', rarity: 'C', layout: 'normal' },
            { cardNumber: 102, cardSet: cardSetId, name: 'Forerunner of the Empire', rarity: 'U', layout: 'normal' },
            { cardNumber: 103, cardSet: cardSetId, name: 'Form of the Dinosaur', rarity: 'R', layout: 'normal' },
            { cardNumber: 104, cardSet: cardSetId, name: 'Frilled Deathspitter', rarity: 'C', layout: 'normal' },
            { cardNumber: 105, cardSet: cardSetId, name: 'Goblin Trailblazer', rarity: 'C', layout: 'normal' },
            { cardNumber: 106, cardSet: cardSetId, name: 'Mutiny', rarity: 'C', layout: 'normal' },
            { cardNumber: 107, cardSet: cardSetId, name: 'Needletooth Raptor', rarity: 'U', layout: 'normal' },
            { cardNumber: 108, cardSet: cardSetId, name: 'Orazca Raptor', rarity: 'C', layout: 'normal' },
            { cardNumber: 109, cardSet: cardSetId, name: 'Pirate\'s Pillage', rarity: 'U', layout: 'normal' },
            { cardNumber: 110, cardSet: cardSetId, name: 'Reckless Rage', rarity: 'U', layout: 'normal' },
            { cardNumber: 111, cardSet: cardSetId, name: 'Rekindling Phoenix', rarity: 'M', layout: 'normal' },
            { cardNumber: 112, cardSet: cardSetId, name: 'See Red', rarity: 'U', layout: 'normal' },
            { cardNumber: 113, cardSet: cardSetId, name: 'Shake the Foundations', rarity: 'U', layout: 'normal' },
            { cardNumber: 114, cardSet: cardSetId, name: 'Shatter', rarity: 'C', layout: 'normal' },
            { cardNumber: 115, cardSet: cardSetId, name: 'Silverclad Ferocidons', rarity: 'R', layout: 'normal' },
            { cardNumber: 116, cardSet: cardSetId, name: 'Stampeding Horncrest', rarity: 'C', layout: 'normal' },
            { cardNumber: 117, cardSet: cardSetId, name: 'Storm Fleet Swashbuckler', rarity: 'U', layout: 'normal' },
            { cardNumber: 118, cardSet: cardSetId, name: 'Sun-Collared Raptor', rarity: 'C', layout: 'normal' },
            { cardNumber: 119, cardSet: cardSetId, name: 'Swaggering Corsair', rarity: 'C', layout: 'normal' },
            { cardNumber: 120, cardSet: cardSetId, name: 'Tilonalli\'s Crown', rarity: 'C', layout: 'normal' },
            { cardNumber: 121, cardSet: cardSetId, name: 'Tilonalli\'s Summoner', rarity: 'R', layout: 'normal' },
            { cardNumber: 122, cardSet: cardSetId, name: 'Aggressive Urge', rarity: 'C', layout: 'normal' },
            { cardNumber: 123, cardSet: cardSetId, name: 'Cacophodon', rarity: 'U', layout: 'normal' },
            { cardNumber: 124, cardSet: cardSetId, name: 'Cherished Hatchling', rarity: 'U', layout: 'normal' },
            { cardNumber: 125, cardSet: cardSetId, name: 'Colossal Dreadmaw', rarity: 'C', layout: 'normal' },
            { cardNumber: 126, cardSet: cardSetId, name: 'Crested Herdcaller', rarity: 'U', layout: 'normal' },
            { cardNumber: 127, cardSet: cardSetId, name: 'Deeproot Elite', rarity: 'R', layout: 'normal' },
            { cardNumber: 128, cardSet: cardSetId, name: 'Enter the Unknown', rarity: 'U', layout: 'normal' },
            { cardNumber: 129, cardSet: cardSetId, name: 'Forerunner of the Heralds', rarity: 'U', layout: 'normal' },
            { cardNumber: 130, cardSet: cardSetId, name: 'Ghalta, Primal Hunger', rarity: 'R', layout: 'normal' },
            { cardNumber: 131, cardSet: cardSetId, name: 'Giltgrove Stalker', rarity: 'C', layout: 'normal' },
            { cardNumber: 132, cardSet: cardSetId, name: 'Hardy Veteran', rarity: 'C', layout: 'normal' },
            { cardNumber: 133, cardSet: cardSetId, name: 'Hunt the Weak', rarity: 'C', layout: 'normal' },
            { cardNumber: 134, cardSet: cardSetId, name: 'Jade Bearer', rarity: 'C', layout: 'normal' },
            { cardNumber: 135, cardSet: cardSetId, name: 'Jadecraft Artisan', rarity: 'C', layout: 'normal' },
            { cardNumber: 136, cardSet: cardSetId, name: 'Jadelight Ranger', rarity: 'R', layout: 'normal' },
            { cardNumber: 137, cardSet: cardSetId, name: 'Jungleborn Pioneer', rarity: 'C', layout: 'normal' },
            { cardNumber: 138, cardSet: cardSetId, name: 'Knight of the Stampede', rarity: 'C', layout: 'normal' },
            { cardNumber: 139, cardSet: cardSetId, name: 'Naturalize', rarity: 'C', layout: 'normal' },
            { cardNumber: 140, cardSet: cardSetId, name: 'Orazca Frillback', rarity: 'C', layout: 'normal' },
            { cardNumber: 141, cardSet: cardSetId, name: 'Overgrown Armasaur', rarity: 'C', layout: 'normal' },
            { cardNumber: 142, cardSet: cardSetId, name: 'Path of Discovery', rarity: 'R', layout: 'normal' },
            { cardNumber: 143, cardSet: cardSetId, name: 'Plummet', rarity: 'C', layout: 'normal' },
            { cardNumber: 144, cardSet: cardSetId, name: 'Polyraptor', rarity: 'M', layout: 'normal' },
            { cardNumber: 145, cardSet: cardSetId, name: 'Strength of the Pack', rarity: 'U', layout: 'normal' },
            { cardNumber: 146, cardSet: cardSetId, name: 'Swift Warden', rarity: 'U', layout: 'normal' },
            { cardNumber: 147, cardSet: cardSetId, name: 'Tendershoot Dryad', rarity: 'R', layout: 'normal' },
            { cardNumber: 148, cardSet: cardSetId, name: 'Thrashing Brontodon', rarity: 'U', layout: 'normal' },
            { cardNumber: 149, cardSet: cardSetId, name: 'Thunderherd Migration', rarity: 'U', layout: 'normal' },
            { cardNumber: 150, cardSet: cardSetId, name: 'Wayward Swordtooth', rarity: 'R', layout: 'normal' },
            { cardNumber: 151, cardSet: cardSetId, name: 'World Shaper', rarity: 'R', layout: 'normal' },
            { cardNumber: 152, cardSet: cardSetId, name: 'Angrath, the Flame-Chained', rarity: 'M', layout: 'normal' },
            { cardNumber: 153, cardSet: cardSetId, name: 'Atzocan Seer', rarity: 'U', layout: 'normal' },
            { cardNumber: 154, cardSet: cardSetId, name: 'Azor, the Lawbringer', rarity: 'M', layout: 'normal' },
            { cardNumber: 155, cardSet: cardSetId, name: 'Deadeye Brawler', rarity: 'U', layout: 'normal' },
            { cardNumber: 156, cardSet: cardSetId, name: 'Dire Fleet Neckbreaker', rarity: 'U', layout: 'normal' },
            { cardNumber: 157, cardSet: cardSetId, name: 'Elenda, the Dusk Rose', rarity: 'M', layout: 'normal' },
            { cardNumber: 158, cardSet: cardSetId, name: 'Hadana\'s Climb', rarity: 'R', layout: 'transform' },
            { cardNumber: 159, cardSet: cardSetId, name: 'Huatli, Radiant Champion', rarity: 'M', layout: 'normal' },
            { cardNumber: 160, cardSet: cardSetId, name: 'Journey to Eternity', rarity: 'R', layout: 'transform' },
            { cardNumber: 161, cardSet: cardSetId, name: 'Jungle Creeper', rarity: 'U', layout: 'normal' },
            { cardNumber: 162, cardSet: cardSetId, name: 'Kumena, Tyrant of Orazca', rarity: 'M', layout: 'normal' },
            { cardNumber: 163, cardSet: cardSetId, name: 'Legion Lieutenant', rarity: 'U', layout: 'normal' },
            { cardNumber: 164, cardSet: cardSetId, name: 'Merfolk Mistbinder', rarity: 'U', layout: 'normal' },
            { cardNumber: 165, cardSet: cardSetId, name: 'Path of Mettle', rarity: 'R', layout: 'transform' },
            { cardNumber: 166, cardSet: cardSetId, name: 'Profane Procession', rarity: 'R', layout: 'transform' },
            { cardNumber: 167, cardSet: cardSetId, name: 'Protean Raider', rarity: 'R', layout: 'normal' },
            { cardNumber: 168, cardSet: cardSetId, name: 'Raging Regisaur', rarity: 'U', layout: 'normal' },
            { cardNumber: 169, cardSet: cardSetId, name: 'Relentless Raptor', rarity: 'U', layout: 'normal' },
            { cardNumber: 170, cardSet: cardSetId, name: 'Resplendent Griffin', rarity: 'U', layout: 'normal' },
            { cardNumber: 171, cardSet: cardSetId, name: 'Siegehorn Ceratops', rarity: 'R', layout: 'normal' },
            { cardNumber: 172, cardSet: cardSetId, name: 'Storm Fleet Sprinter', rarity: 'U', layout: 'normal' },
            { cardNumber: 173, cardSet: cardSetId, name: 'Storm the Vault', rarity: 'R', layout: 'transform' },
            { cardNumber: 174, cardSet: cardSetId, name: 'Zacama, Primal Calamity', rarity: 'M', layout: 'normal' },
            { cardNumber: 175, cardSet: cardSetId, name: 'Awakened Amalgam', rarity: 'R', layout: 'normal' },
            { cardNumber: 176, cardSet: cardSetId, name: 'Azor\'s Gateway', rarity: 'M', layout: 'transform' },
            { cardNumber: 177, cardSet: cardSetId, name: 'Captain\'s Hook', rarity: 'R', layout: 'normal' },
            { cardNumber: 178, cardSet: cardSetId, name: 'Gleaming Barrier', rarity: 'C', layout: 'normal' },
            { cardNumber: 179, cardSet: cardSetId, name: 'Golden Guardian', rarity: 'R', layout: 'transform' },
            { cardNumber: 180, cardSet: cardSetId, name: 'The Immortal Sun', rarity: 'M', layout: 'normal' },
            { cardNumber: 181, cardSet: cardSetId, name: 'Orazca Relic', rarity: 'C', layout: 'normal' },
            { cardNumber: 182, cardSet: cardSetId, name: 'Silent Gravestone', rarity: 'R', layout: 'normal' },
            { cardNumber: 183, cardSet: cardSetId, name: 'Strider Harness', rarity: 'C', layout: 'normal' },
            { cardNumber: 184, cardSet: cardSetId, name: 'Traveler\'s Amulet', rarity: 'C', layout: 'normal' },
            { cardNumber: 185, cardSet: cardSetId, name: 'Arch of Orazca', rarity: 'R', layout: 'normal' },
            { cardNumber: 186, cardSet: cardSetId, name: 'Evolving Wilds', rarity: 'C', layout: 'normal' },
            { cardNumber: 187, cardSet: cardSetId, name: 'Forsaken Sanctuary', rarity: 'U', layout: 'normal' },
            { cardNumber: 188, cardSet: cardSetId, name: 'Foul Orchard', rarity: 'U', layout: 'normal' },
            { cardNumber: 189, cardSet: cardSetId, name: 'Highland Lake', rarity: 'U', layout: 'normal' },
            { cardNumber: 190, cardSet: cardSetId, name: 'Stone Quarry', rarity: 'U', layout: 'normal' },
            { cardNumber: 191, cardSet: cardSetId, name: 'Woodland Stream', rarity: 'U', layout: 'normal' },
            { cardNumber: 192, cardSet: cardSetId, name: 'Plains', rarity: 'C', layout: 'normal' },
            { cardNumber: 193, cardSet: cardSetId, name: 'Island', rarity: 'C', layout: 'normal' },
            { cardNumber: 194, cardSet: cardSetId, name: 'Swamp', rarity: 'C', layout: 'normal' },
            { cardNumber: 195, cardSet: cardSetId, name: 'Mountain', rarity: 'C', layout: 'normal' },
            { cardNumber: 196, cardSet: cardSetId, name: 'Forest', rarity: 'C', layout: 'normal' },
            { cardNumber: 197, cardSet: cardSetId, name: 'Vraska, Scheming Gorgon', rarity: 'M', layout: 'normal' },
            { cardNumber: 198, cardSet: cardSetId, name: 'Vampire Champion', rarity: 'C', layout: 'normal' },
            { cardNumber: 199, cardSet: cardSetId, name: 'Vraska\'s Conquistador', rarity: 'U', layout: 'normal' },
            { cardNumber: 200, cardSet: cardSetId, name: 'Vraska\'s Scorn', rarity: 'R', layout: 'normal' },
            { cardNumber: 201, cardSet: cardSetId, name: 'Angrath, Minotaur Pirate', rarity: 'M', layout: 'normal' },
            { cardNumber: 202, cardSet: cardSetId, name: 'Angrath\'s Ambusher', rarity: 'U', layout: 'normal' },
            { cardNumber: 203, cardSet: cardSetId, name: 'Swab Goblin', rarity: 'C', layout: 'normal' },
            { cardNumber: 204, cardSet: cardSetId, name: 'Angrath\'s Fury', rarity: 'R', layout: 'normal' },
            { cardNumber: 205, cardSet: cardSetId, name: 'Cinder Barrens', rarity: 'C', layout: 'normal' },
        ]).execute();

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Get the card set id
        const shortname = 'RIX';
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
