INSERT INTO card_set (name,short_name) values('Rival of Ixalan','RIX');

INSERT INTO card (card_number,card_set_1, name, rarity, layout) VALUES
(1,(select cs.id from card_set cs where short_name ='RIX'),'Baffling End','U','normal'),
(2,(select cs.id from card_set cs where short_name ='RIX'),'Bishop of Binding','R','normal'),
(3,(select cs.id from card_set cs where short_name ='RIX'),'Blazing Hope','U','normal'),
(4,(select cs.id from card_set cs where short_name ='RIX'),'Cleansing Ray','C','normal'),
(5,(select cs.id from card_set cs where short_name ='RIX'),'Divine Verdict','C','normal'),
(6,(select cs.id from card_set cs where short_name ='RIX'),'Everdawn Champion','U','normal'),
(7,(select cs.id from card_set cs where short_name ='RIX'),'Exultant Skymarcher','C','normal'),
(8,(select cs.id from card_set cs where short_name ='RIX'),'Famished Paladin','U','normal'),
(9,(select cs.id from card_set cs where short_name ='RIX'),'Forerunner of the Legion','U','normal'),
(10,(select cs.id from card_set cs where short_name ='RIX'),'Imperial Ceratops','U','normal'),
(11,(select cs.id from card_set cs where short_name ='RIX'),'Legion Conquistador','C','normal'),
(12,(select cs.id from card_set cs where short_name ='RIX'),'Luminous Bonds','C','normal'),
(13,(select cs.id from card_set cs where short_name ='RIX'),'Majestic Heliopterus','U','normal'),
(14,(select cs.id from card_set cs where short_name ='RIX'),'Martyr of Dusk','C','normal'),
(15,(select cs.id from card_set cs where short_name ='RIX'),'Moment of Triumph','C','normal'),
(16,(select cs.id from card_set cs where short_name ='RIX'),'Paladin of Atonement','R','normal'),
(17,(select cs.id from card_set cs where short_name ='RIX'),'Pride of Conquerors','U','normal'),
(18,(select cs.id from card_set cs where short_name ='RIX'),'Radiant Destiny','R','normal'),
(19,(select cs.id from card_set cs where short_name ='RIX'),'Raptor Companion','C','normal'),
(20,(select cs.id from card_set cs where short_name ='RIX'),'Sanguine Glorifier','C','normal'),
(21,(select cs.id from card_set cs where short_name ='RIX'),'Skymarcher Aspirant','U','normal'),
(22,(select cs.id from card_set cs where short_name ='RIX'),'Slaughter the Strong','R','normal'),
(23,(select cs.id from card_set cs where short_name ='RIX'),'Snubhorn Sentry','C','normal'),
(24,(select cs.id from card_set cs where short_name ='RIX'),'Sphinx''s Decree','R','normal'),
(25,(select cs.id from card_set cs where short_name ='RIX'),'Squire''s Devotion','C','normal'),
(26,(select cs.id from card_set cs where short_name ='RIX'),'Sun Sentinel','C','normal'),
(27,(select cs.id from card_set cs where short_name ='RIX'),'Sun-Crested Pterodon','C','normal'),
(28,(select cs.id from card_set cs where short_name ='RIX'),'Temple Altisaur','R','normal'),
(29,(select cs.id from card_set cs where short_name ='RIX'),'Trapjaw Tyrant','M','normal'),
(30,(select cs.id from card_set cs where short_name ='RIX'),'Zetalpa, Primal Dawn','R','normal'),
(31,(select cs.id from card_set cs where short_name ='RIX'),'Admiral''s Order','R','normal'),
(32,(select cs.id from card_set cs where short_name ='RIX'),'Aquatic Incursion','U','normal'),
(33,(select cs.id from card_set cs where short_name ='RIX'),'Crafty Cutpurse','R','normal'),
(34,(select cs.id from card_set cs where short_name ='RIX'),'Crashing Tide','C','normal'),
(35,(select cs.id from card_set cs where short_name ='RIX'),'Curious Obsession','U','normal'),
(36,(select cs.id from card_set cs where short_name ='RIX'),'Deadeye Rig-Hauler','C','normal'),
(37,(select cs.id from card_set cs where short_name ='RIX'),'Expel from Orazca','U','normal'),
(38,(select cs.id from card_set cs where short_name ='RIX'),'Flood of Recollection','U','normal'),
(39,(select cs.id from card_set cs where short_name ='RIX'),'Hornswoggle','U','normal'),
(40,(select cs.id from card_set cs where short_name ='RIX'),'Induced Amnesia','R','normal'),
(41,(select cs.id from card_set cs where short_name ='RIX'),'Kitesail Corsair','C','normal'),
(42,(select cs.id from card_set cs where short_name ='RIX'),'Kumena''s Awakening','R','normal'),
(43,(select cs.id from card_set cs where short_name ='RIX'),'Mist-Cloaked Herald','C','normal'),
(44,(select cs.id from card_set cs where short_name ='RIX'),'Negate','C','normal'),
(45,(select cs.id from card_set cs where short_name ='RIX'),'Nezahal, Primal Tide','R','normal'),
(46,(select cs.id from card_set cs where short_name ='RIX'),'Release to the Wind','R','normal'),
(47,(select cs.id from card_set cs where short_name ='RIX'),'River Darter','C','normal'),
(48,(select cs.id from card_set cs where short_name ='RIX'),'Riverwise Augur','U','normal'),
(49,(select cs.id from card_set cs where short_name ='RIX'),'Sailor of Means','C','normal'),
(50,(select cs.id from card_set cs where short_name ='RIX'),'Sea Legs','C','normal'),
(51,(select cs.id from card_set cs where short_name ='RIX'),'Seafloor Oracle','R','normal'),
(52,(select cs.id from card_set cs where short_name ='RIX'),'Secrets of the Golden City','C','normal'),
(53,(select cs.id from card_set cs where short_name ='RIX'),'Silvergill Adept','U','normal'),
(54,(select cs.id from card_set cs where short_name ='RIX'),'Siren Reaver','U','normal'),
(55,(select cs.id from card_set cs where short_name ='RIX'),'Slippery Scoundrel','U','normal'),
(56,(select cs.id from card_set cs where short_name ='RIX'),'Soul of the Rapids','C','normal'),
(57,(select cs.id from card_set cs where short_name ='RIX'),'Spire Winder','C','normal'),
(58,(select cs.id from card_set cs where short_name ='RIX'),'Sworn Guardian','C','normal'),
(59,(select cs.id from card_set cs where short_name ='RIX'),'Timestream Navigator','M','normal'),
(60,(select cs.id from card_set cs where short_name ='RIX'),'Warkite Marauder','R','normal'),
(61,(select cs.id from card_set cs where short_name ='RIX'),'Waterknot','C','normal'),
(62,(select cs.id from card_set cs where short_name ='RIX'),'Arterial Flow','U','normal'),
(63,(select cs.id from card_set cs where short_name ='RIX'),'Canal Monitor','C','normal'),
(64,(select cs.id from card_set cs where short_name ='RIX'),'Champion of Dusk','R','normal'),
(65,(select cs.id from card_set cs where short_name ='RIX'),'Dark Inquiry','C','normal'),
(66,(select cs.id from card_set cs where short_name ='RIX'),'Dead Man''s Chest','R','normal'),
(67,(select cs.id from card_set cs where short_name ='RIX'),'Dinosaur Hunter','C','normal'),
(68,(select cs.id from card_set cs where short_name ='RIX'),'Dire Fleet Poisoner','R','normal'),
(69,(select cs.id from card_set cs where short_name ='RIX'),'Dusk Charger','C','normal'),
(70,(select cs.id from card_set cs where short_name ='RIX'),'Dusk Legion Zealot','C','normal'),
(71,(select cs.id from card_set cs where short_name ='RIX'),'Fathom Fleet Boarder','C','normal'),
(72,(select cs.id from card_set cs where short_name ='RIX'),'Forerunner of the Coalition','U','normal'),
(73,(select cs.id from card_set cs where short_name ='RIX'),'Golden Demise','U','normal'),
(74,(select cs.id from card_set cs where short_name ='RIX'),'Grasping Scoundrel','C','normal'),
(75,(select cs.id from card_set cs where short_name ='RIX'),'Gruesome Fate','C','normal'),
(76,(select cs.id from card_set cs where short_name ='RIX'),'Impale','C','normal'),
(77,(select cs.id from card_set cs where short_name ='RIX'),'Mastermind''s Acquisition','R','normal'),
(78,(select cs.id from card_set cs where short_name ='RIX'),'Mausoleum Harpy','U','normal'),
(79,(select cs.id from card_set cs where short_name ='RIX'),'Moment of Craving','C','normal'),
(80,(select cs.id from card_set cs where short_name ='RIX'),'Oathsworn Vampire','U','normal'),
(81,(select cs.id from card_set cs where short_name ='RIX'),'Pitiless Plunderer','U','normal'),
(82,(select cs.id from card_set cs where short_name ='RIX'),'Ravenous Chupacabra','U','normal'),
(83,(select cs.id from card_set cs where short_name ='RIX'),'Reaver Ambush','U','normal'),
(84,(select cs.id from card_set cs where short_name ='RIX'),'Recover','C','normal'),
(85,(select cs.id from card_set cs where short_name ='RIX'),'Sadistic Skymarcher','U','normal'),
(86,(select cs.id from card_set cs where short_name ='RIX'),'Tetzimoc, Primal Death','R','normal'),
(87,(select cs.id from card_set cs where short_name ='RIX'),'Tomb Robber','R','normal'),
(88,(select cs.id from card_set cs where short_name ='RIX'),'Twilight Prophet','M','normal'),
(89,(select cs.id from card_set cs where short_name ='RIX'),'Vampire Revenant','C','normal'),
(90,(select cs.id from card_set cs where short_name ='RIX'),'Vona''s Hunger','R','normal'),
(91,(select cs.id from card_set cs where short_name ='RIX'),'Voracious Vampire','C','normal'),
(92,(select cs.id from card_set cs where short_name ='RIX'),'Blood Sun','R','normal'),
(93,(select cs.id from card_set cs where short_name ='RIX'),'Bombard','C','normal'),
(94,(select cs.id from card_set cs where short_name ='RIX'),'Brass''s Bounty','R','normal'),
(95,(select cs.id from card_set cs where short_name ='RIX'),'Brazen Freebooter','C','normal'),
(96,(select cs.id from card_set cs where short_name ='RIX'),'Buccaneer''s Bravado','C','normal'),
(97,(select cs.id from card_set cs where short_name ='RIX'),'Charging Tuskodon','U','normal'),
(98,(select cs.id from card_set cs where short_name ='RIX'),'Daring Buccaneer','U','normal'),
(99,(select cs.id from card_set cs where short_name ='RIX'),'Dire Fleet Daredevil','R','normal'),
(100,(select cs.id from card_set cs where short_name ='RIX'),'Etali, Primal Storm','R','normal'),
(101,(select cs.id from card_set cs where short_name ='RIX'),'Fanatical Firebrand','C','normal'),
(102,(select cs.id from card_set cs where short_name ='RIX'),'Forerunner of the Empire','U','normal'),
(103,(select cs.id from card_set cs where short_name ='RIX'),'Form of the Dinosaur','R','normal'),
(104,(select cs.id from card_set cs where short_name ='RIX'),'Frilled Deathspitter','C','normal'),
(105,(select cs.id from card_set cs where short_name ='RIX'),'Goblin Trailblazer','C','normal'),
(106,(select cs.id from card_set cs where short_name ='RIX'),'Mutiny','C','normal'),
(107,(select cs.id from card_set cs where short_name ='RIX'),'Needletooth Raptor','U','normal'),
(108,(select cs.id from card_set cs where short_name ='RIX'),'Orazca Raptor','C','normal'),
(109,(select cs.id from card_set cs where short_name ='RIX'),'Pirate''s Pillage','U','normal'),
(110,(select cs.id from card_set cs where short_name ='RIX'),'Reckless Rage','U','normal'),
(111,(select cs.id from card_set cs where short_name ='RIX'),'Rekindling Phoenix','M','normal'),
(112,(select cs.id from card_set cs where short_name ='RIX'),'See Red','U','normal'),
(113,(select cs.id from card_set cs where short_name ='RIX'),'Shake the Foundations','U','normal'),
(114,(select cs.id from card_set cs where short_name ='RIX'),'Shatter','C','normal'),
(115,(select cs.id from card_set cs where short_name ='RIX'),'Silverclad Ferocidons','R','normal'),
(116,(select cs.id from card_set cs where short_name ='RIX'),'Stampeding Horncrest','C','normal'),
(117,(select cs.id from card_set cs where short_name ='RIX'),'Storm Fleet Swashbuckler','U','normal'),
(118,(select cs.id from card_set cs where short_name ='RIX'),'Sun-Collared Raptor','C','normal'),
(119,(select cs.id from card_set cs where short_name ='RIX'),'Swaggering Corsair','C','normal'),
(120,(select cs.id from card_set cs where short_name ='RIX'),'Tilonalli''s Crown','C','normal'),
(121,(select cs.id from card_set cs where short_name ='RIX'),'Tilonalli''s Summoner','R','normal'),
(122,(select cs.id from card_set cs where short_name ='RIX'),'Aggressive Urge','C','normal'),
(123,(select cs.id from card_set cs where short_name ='RIX'),'Cacophodon','U','normal'),
(124,(select cs.id from card_set cs where short_name ='RIX'),'Cherished Hatchling','U','normal'),
(125,(select cs.id from card_set cs where short_name ='RIX'),'Colossal Dreadmaw','C','normal'),
(126,(select cs.id from card_set cs where short_name ='RIX'),'Crested Herdcaller','U','normal'),
(127,(select cs.id from card_set cs where short_name ='RIX'),'Deeproot Elite','R','normal'),
(128,(select cs.id from card_set cs where short_name ='RIX'),'Enter the Unknown','U','normal'),
(129,(select cs.id from card_set cs where short_name ='RIX'),'Forerunner of the Heralds','U','normal'),
(130,(select cs.id from card_set cs where short_name ='RIX'),'Ghalta, Primal Hunger','R','normal'),
(131,(select cs.id from card_set cs where short_name ='RIX'),'Giltgrove Stalker','C','normal'),
(132,(select cs.id from card_set cs where short_name ='RIX'),'Hardy Veteran','C','normal'),
(133,(select cs.id from card_set cs where short_name ='RIX'),'Hunt the Weak','C','normal'),
(134,(select cs.id from card_set cs where short_name ='RIX'),'Jade Bearer','C','normal'),
(135,(select cs.id from card_set cs where short_name ='RIX'),'Jadecraft Artisan','C','normal'),
(136,(select cs.id from card_set cs where short_name ='RIX'),'Jadelight Ranger','R','normal'),
(137,(select cs.id from card_set cs where short_name ='RIX'),'Jungleborn Pioneer','C','normal'),
(138,(select cs.id from card_set cs where short_name ='RIX'),'Knight of the Stampede','C','normal'),
(139,(select cs.id from card_set cs where short_name ='RIX'),'Naturalize','C','normal'),
(140,(select cs.id from card_set cs where short_name ='RIX'),'Orazca Frillback','C','normal'),
(141,(select cs.id from card_set cs where short_name ='RIX'),'Overgrown Armasaur','C','normal'),
(142,(select cs.id from card_set cs where short_name ='RIX'),'Path of Discovery','R','normal'),
(143,(select cs.id from card_set cs where short_name ='RIX'),'Plummet','C','normal'),
(144,(select cs.id from card_set cs where short_name ='RIX'),'Polyraptor','M','normal'),
(145,(select cs.id from card_set cs where short_name ='RIX'),'Strength of the Pack','U','normal'),
(146,(select cs.id from card_set cs where short_name ='RIX'),'Swift Warden','U','normal'),
(147,(select cs.id from card_set cs where short_name ='RIX'),'Tendershoot Dryad','R','normal'),
(148,(select cs.id from card_set cs where short_name ='RIX'),'Thrashing Brontodon','U','normal'),
(149,(select cs.id from card_set cs where short_name ='RIX'),'Thunderherd Migration','U','normal'),
(150,(select cs.id from card_set cs where short_name ='RIX'),'Wayward Swordtooth','R','normal'),
(151,(select cs.id from card_set cs where short_name ='RIX'),'World Shaper','R','normal'),
(152,(select cs.id from card_set cs where short_name ='RIX'),'Angrath, the Flame-Chained','M','normal'),
(153,(select cs.id from card_set cs where short_name ='RIX'),'Atzocan Seer','U','normal'),
(154,(select cs.id from card_set cs where short_name ='RIX'),'Azor, the Lawbringer','M','normal'),
(155,(select cs.id from card_set cs where short_name ='RIX'),'Deadeye Brawler','U','normal'),
(156,(select cs.id from card_set cs where short_name ='RIX'),'Dire Fleet Neckbreaker','U','normal'),
(157,(select cs.id from card_set cs where short_name ='RIX'),'Elenda, the Dusk Rose','M','normal'),
(158,(select cs.id from card_set cs where short_name ='RIX'),'Hadana''s Climb','R','transform'),
(159,(select cs.id from card_set cs where short_name ='RIX'),'Huatli, Radiant Champion','M','normal'),
(160,(select cs.id from card_set cs where short_name ='RIX'),'Journey to Eternity','R','transform'),
(161,(select cs.id from card_set cs where short_name ='RIX'),'Jungle Creeper','U','normal'),
(162,(select cs.id from card_set cs where short_name ='RIX'),'Kumena, Tyrant of Orazca','M','normal'),
(163,(select cs.id from card_set cs where short_name ='RIX'),'Legion Lieutenant','U','normal'),
(164,(select cs.id from card_set cs where short_name ='RIX'),'Merfolk Mistbinder','U','normal'),
(165,(select cs.id from card_set cs where short_name ='RIX'),'Path of Mettle','R','transform'),
(166,(select cs.id from card_set cs where short_name ='RIX'),'Profane Procession','R','transform'),
(167,(select cs.id from card_set cs where short_name ='RIX'),'Protean Raider','R','normal'),
(168,(select cs.id from card_set cs where short_name ='RIX'),'Raging Regisaur','U','normal'),
(169,(select cs.id from card_set cs where short_name ='RIX'),'Relentless Raptor','U','normal'),
(170,(select cs.id from card_set cs where short_name ='RIX'),'Resplendent Griffin','U','normal'),
(171,(select cs.id from card_set cs where short_name ='RIX'),'Siegehorn Ceratops','R','normal'),
(172,(select cs.id from card_set cs where short_name ='RIX'),'Storm Fleet Sprinter','U','normal'),
(173,(select cs.id from card_set cs where short_name ='RIX'),'Storm the Vault','R','transform'),
(174,(select cs.id from card_set cs where short_name ='RIX'),'Zacama, Primal Calamity','M','normal'),
(175,(select cs.id from card_set cs where short_name ='RIX'),'Awakened Amalgam','R','normal'),
(176,(select cs.id from card_set cs where short_name ='RIX'),'Azor''s Gateway','M','transform'),
(177,(select cs.id from card_set cs where short_name ='RIX'),'Captain''s Hook','R','normal'),
(178,(select cs.id from card_set cs where short_name ='RIX'),'Gleaming Barrier','C','normal'),
(179,(select cs.id from card_set cs where short_name ='RIX'),'Golden Guardian','R','transform'),
(180,(select cs.id from card_set cs where short_name ='RIX'),'The Immortal Sun','M','normal'),
(181,(select cs.id from card_set cs where short_name ='RIX'),'Orazca Relic','C','normal'),
(182,(select cs.id from card_set cs where short_name ='RIX'),'Silent Gravestone','R','normal'),
(183,(select cs.id from card_set cs where short_name ='RIX'),'Strider Harness','C','normal'),
(184,(select cs.id from card_set cs where short_name ='RIX'),'Traveler''s Amulet','C','normal'),
(185,(select cs.id from card_set cs where short_name ='RIX'),'Arch of Orazca','R','normal'),
(186,(select cs.id from card_set cs where short_name ='RIX'),'Evolving Wilds','C','normal'),
(187,(select cs.id from card_set cs where short_name ='RIX'),'Forsaken Sanctuary','U','normal'),
(188,(select cs.id from card_set cs where short_name ='RIX'),'Foul Orchard','U','normal'),
(189,(select cs.id from card_set cs where short_name ='RIX'),'Highland Lake','U','normal'),
(190,(select cs.id from card_set cs where short_name ='RIX'),'Stone Quarry','U','normal'),
(191,(select cs.id from card_set cs where short_name ='RIX'),'Woodland Stream','U','normal'),
(192,(select cs.id from card_set cs where short_name ='RIX'),'Plains','C','normal'),
(193,(select cs.id from card_set cs where short_name ='RIX'),'Island','C','normal'),
(194,(select cs.id from card_set cs where short_name ='RIX'),'Swamp','C','normal'),
(195,(select cs.id from card_set cs where short_name ='RIX'),'Mountain','C','normal'),
(196,(select cs.id from card_set cs where short_name ='RIX'),'Forest','C','normal'),
(197,(select cs.id from card_set cs where short_name ='RIX'),'Vraska, Scheming Gorgon','M','normal'),
(198,(select cs.id from card_set cs where short_name ='RIX'),'Vampire Champion','C','normal'),
(199,(select cs.id from card_set cs where short_name ='RIX'),'Vraska''s Conquistador','U','normal'),
(200,(select cs.id from card_set cs where short_name ='RIX'),'Vraska''s Scorn','R','normal'),
(201,(select cs.id from card_set cs where short_name ='RIX'),'Angrath, Minotaur Pirate','M','normal'),
(202,(select cs.id from card_set cs where short_name ='RIX'),'Angrath''s Ambusher','U','normal'),
(203,(select cs.id from card_set cs where short_name ='RIX'),'Swab Goblin','C','normal'),
(204,(select cs.id from card_set cs where short_name ='RIX'),'Angrath''s Fury','R','normal'),
(205,(select cs.id from card_set cs where short_name ='RIX'),'Cinder Barrens','C','normal');
