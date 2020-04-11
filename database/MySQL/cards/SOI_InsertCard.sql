INSERT INTO card_set (name,short_name) values('Shadows over Innistrad','SOI');

INSERT INTO card (card_number,card_set_1, name, rarity, layout) VALUES
(1,(select cs.id from card_set cs where short_name ='SOI'),'Always Watching','R','normal'),
(2,(select cs.id from card_set cs where short_name ='SOI'),'Angel of Deliverance','R','normal'),
(3,(select cs.id from card_set cs where short_name ='SOI'),'Angelic Purge','C','normal'),
(4,(select cs.id from card_set cs where short_name ='SOI'),'Apothecary Geist','C','normal'),
(5,(select cs.id from card_set cs where short_name ='SOI'),'Archangel Avacyn','M','transform'),
(6,(select cs.id from card_set cs where short_name ='SOI'),'Avacynian Missionaries','U','transform'),
(7,(select cs.id from card_set cs where short_name ='SOI'),'Bound by Moonsilver','U','normal'),
(8,(select cs.id from card_set cs where short_name ='SOI'),'Bygone Bishop','R','normal'),
(9,(select cs.id from card_set cs where short_name ='SOI'),'Cathar''s Companion','C','normal'),
(10,(select cs.id from card_set cs where short_name ='SOI'),'Chaplain''s Blessing','C','normal'),
(11,(select cs.id from card_set cs where short_name ='SOI'),'Dauntless Cathar','C','normal'),
(12,(select cs.id from card_set cs where short_name ='SOI'),'Declaration in Stone','R','normal'),
(13,(select cs.id from card_set cs where short_name ='SOI'),'Descend upon the Sinful','M','normal'),
(14,(select cs.id from card_set cs where short_name ='SOI'),'Devilthorn Fox','C','normal'),
(15,(select cs.id from card_set cs where short_name ='SOI'),'Drogskol Cavalry','R','normal'),
(16,(select cs.id from card_set cs where short_name ='SOI'),'Eerie Interlude','R','normal'),
(17,(select cs.id from card_set cs where short_name ='SOI'),'Emissary of the Sleepless','C','normal'),
(18,(select cs.id from card_set cs where short_name ='SOI'),'Ethereal Guidance','C','normal'),
(19,(select cs.id from card_set cs where short_name ='SOI'),'Expose Evil','C','normal'),
(20,(select cs.id from card_set cs where short_name ='SOI'),'Gryff''s Boon','U','normal'),
(21,(select cs.id from card_set cs where short_name ='SOI'),'Hanweir Militia Captain','R','transform'),
(22,(select cs.id from card_set cs where short_name ='SOI'),'Hope Against Hope','U','normal'),
(23,(select cs.id from card_set cs where short_name ='SOI'),'Humble the Brute','U','normal'),
(24,(select cs.id from card_set cs where short_name ='SOI'),'Inquisitor''s Ox','C','normal'),
(25,(select cs.id from card_set cs where short_name ='SOI'),'Inspiring Captain','C','normal'),
(26,(select cs.id from card_set cs where short_name ='SOI'),'Militant Inquisitor','C','normal'),
(27,(select cs.id from card_set cs where short_name ='SOI'),'Moorland Drifter','C','normal'),
(28,(select cs.id from card_set cs where short_name ='SOI'),'Nahiri''s Machinations','U','normal'),
(29,(select cs.id from card_set cs where short_name ='SOI'),'Nearheath Chaplain','U','normal'),
(30,(select cs.id from card_set cs where short_name ='SOI'),'Not Forgotten','U','normal'),
(31,(select cs.id from card_set cs where short_name ='SOI'),'Odric, Lunarch Marshal','R','normal'),
(32,(select cs.id from card_set cs where short_name ='SOI'),'Open the Armory','U','normal'),
(33,(select cs.id from card_set cs where short_name ='SOI'),'Paranoid Parish-Blade','U','normal'),
(34,(select cs.id from card_set cs where short_name ='SOI'),'Pious Evangel','U','transform'),
(35,(select cs.id from card_set cs where short_name ='SOI'),'Puncturing Light','C','normal'),
(36,(select cs.id from card_set cs where short_name ='SOI'),'Reaper of Flight Moonsilver','U','normal'),
(37,(select cs.id from card_set cs where short_name ='SOI'),'Silverstrike','U','normal'),
(38,(select cs.id from card_set cs where short_name ='SOI'),'Spectral Shepherd','U','normal'),
(39,(select cs.id from card_set cs where short_name ='SOI'),'Stern Constable','C','normal'),
(40,(select cs.id from card_set cs where short_name ='SOI'),'Strength of Arms','C','normal'),
(41,(select cs.id from card_set cs where short_name ='SOI'),'Survive the Night','C','normal'),
(42,(select cs.id from card_set cs where short_name ='SOI'),'Tenacity','U','normal'),
(43,(select cs.id from card_set cs where short_name ='SOI'),'Thalia''s Lieutenant','R','normal'),
(44,(select cs.id from card_set cs where short_name ='SOI'),'Thraben Inspector','C','normal'),
(45,(select cs.id from card_set cs where short_name ='SOI'),'Topplegeist','U','normal'),
(46,(select cs.id from card_set cs where short_name ='SOI'),'Town Gossipmonger','U','transform'),
(47,(select cs.id from card_set cs where short_name ='SOI'),'Unruly Mob','C','normal'),
(48,(select cs.id from card_set cs where short_name ='SOI'),'Vessel of Ephemera','C','normal'),
(49,(select cs.id from card_set cs where short_name ='SOI'),'Aberrant Researcher','U','transform'),
(50,(select cs.id from card_set cs where short_name ='SOI'),'Broken Concentration','U','normal'),
(51,(select cs.id from card_set cs where short_name ='SOI'),'Catalog','C','normal'),
(52,(select cs.id from card_set cs where short_name ='SOI'),'Compelling Deterrence','U','normal'),
(53,(select cs.id from card_set cs where short_name ='SOI'),'Confirm Suspicions','R','normal'),
(54,(select cs.id from card_set cs where short_name ='SOI'),'Daring Sleuth','U','transform'),
(55,(select cs.id from card_set cs where short_name ='SOI'),'Deny Existence','C','normal'),
(56,(select cs.id from card_set cs where short_name ='SOI'),'Drownyard Explorers','C','normal'),
(57,(select cs.id from card_set cs where short_name ='SOI'),'Drunau Corpse Trawler','U','normal'),
(58,(select cs.id from card_set cs where short_name ='SOI'),'Engulf the Shore','R','normal'),
(59,(select cs.id from card_set cs where short_name ='SOI'),'Epiphany at the Drownyard','R','normal'),
(60,(select cs.id from card_set cs where short_name ='SOI'),'Erdwal Illuminator','U','normal'),
(61,(select cs.id from card_set cs where short_name ='SOI'),'Essence Flux','U','normal'),
(62,(select cs.id from card_set cs where short_name ='SOI'),'Fleeting Memories','U','normal'),
(63,(select cs.id from card_set cs where short_name ='SOI'),'Forgotten Creation','R','normal'),
(64,(select cs.id from card_set cs where short_name ='SOI'),'Furtive Homunculus','C','normal'),
(65,(select cs.id from card_set cs where short_name ='SOI'),'Geralf''s Masterpiece','M','normal'),
(66,(select cs.id from card_set cs where short_name ='SOI'),'Ghostly Wings','C','normal'),
(67,(select cs.id from card_set cs where short_name ='SOI'),'Gone Missing','C','normal'),
(68,(select cs.id from card_set cs where short_name ='SOI'),'Invasive Surgery','U','normal'),
(69,(select cs.id from card_set cs where short_name ='SOI'),'Jace, Unraveler of Secrets','M','normal'),
(70,(select cs.id from card_set cs where short_name ='SOI'),'Jace''s Scrutiny','C','normal'),
(71,(select cs.id from card_set cs where short_name ='SOI'),'Just the Wind','C','normal'),
(72,(select cs.id from card_set cs where short_name ='SOI'),'Lamplighter of Selhoff','C','normal'),
(73,(select cs.id from card_set cs where short_name ='SOI'),'Manic Scribe','U','normal'),
(74,(select cs.id from card_set cs where short_name ='SOI'),'Nagging Thoughts','C','normal'),
(75,(select cs.id from card_set cs where short_name ='SOI'),'Nephalia Moondrakes','R','normal'),
(76,(select cs.id from card_set cs where short_name ='SOI'),'Niblis of Dusk','C','normal'),
(77,(select cs.id from card_set cs where short_name ='SOI'),'Ongoing Investigation','U','normal'),
(78,(select cs.id from card_set cs where short_name ='SOI'),'Pieces of the Puzzle','C','normal'),
(79,(select cs.id from card_set cs where short_name ='SOI'),'Pore Over the Pages','U','normal'),
(80,(select cs.id from card_set cs where short_name ='SOI'),'Press for Answers','C','normal'),
(81,(select cs.id from card_set cs where short_name ='SOI'),'Rattlechains','R','normal'),
(82,(select cs.id from card_set cs where short_name ='SOI'),'Reckless Scholar','U','normal'),
(83,(select cs.id from card_set cs where short_name ='SOI'),'Rise from the Tides','U','normal'),
(84,(select cs.id from card_set cs where short_name ='SOI'),'Seagraf Skaab','C','normal'),
(85,(select cs.id from card_set cs where short_name ='SOI'),'Silburlind Snapper','C','normal'),
(86,(select cs.id from card_set cs where short_name ='SOI'),'Silent Observer','C','normal'),
(87,(select cs.id from card_set cs where short_name ='SOI'),'Sleep Paralysis','C','normal'),
(88,(select cs.id from card_set cs where short_name ='SOI'),'Startled Awake','M','transform'),
(89,(select cs.id from card_set cs where short_name ='SOI'),'Stitched Mangler','C','normal'),
(90,(select cs.id from card_set cs where short_name ='SOI'),'Stitchwing Skaab','U','normal'),
(91,(select cs.id from card_set cs where short_name ='SOI'),'Stormrider Spirit','C','normal'),
(92,(select cs.id from card_set cs where short_name ='SOI'),'Thing in the Ice','R','transform'),
(93,(select cs.id from card_set cs where short_name ='SOI'),'Trail of Evidence','U','normal'),
(94,(select cs.id from card_set cs where short_name ='SOI'),'Uninvited Geist','U','transform'),
(95,(select cs.id from card_set cs where short_name ='SOI'),'Vessel of Paramnesia','C','normal'),
(96,(select cs.id from card_set cs where short_name ='SOI'),'Welcome to the Fold','R','normal'),
(97,(select cs.id from card_set cs where short_name ='SOI'),'Accursed Witch','U','transform'),
(98,(select cs.id from card_set cs where short_name ='SOI'),'Alms of the Vein','C','normal'),
(99,(select cs.id from card_set cs where short_name ='SOI'),'Asylum Visitor','R','normal'),
(100,(select cs.id from card_set cs where short_name ='SOI'),'Behind the Scenes','U','normal'),
(101,(select cs.id from card_set cs where short_name ='SOI'),'Behold the Beyond','M','normal'),
(102,(select cs.id from card_set cs where short_name ='SOI'),'Biting Rain','U','normal'),
(103,(select cs.id from card_set cs where short_name ='SOI'),'Call the Bloodline','U','normal'),
(104,(select cs.id from card_set cs where short_name ='SOI'),'Creeping Dread','U','normal'),
(105,(select cs.id from card_set cs where short_name ='SOI'),'Crow of Dark Tidings','C','normal'),
(106,(select cs.id from card_set cs where short_name ='SOI'),'Dead Weight','C','normal'),
(107,(select cs.id from card_set cs where short_name ='SOI'),'Diregraf Colossus','R','normal'),
(108,(select cs.id from card_set cs where short_name ='SOI'),'Elusive Tormentor','R','transform'),
(109,(select cs.id from card_set cs where short_name ='SOI'),'Ever After','R','normal'),
(110,(select cs.id from card_set cs where short_name ='SOI'),'Farbog Revenant','C','normal'),
(111,(select cs.id from card_set cs where short_name ='SOI'),'From Under the Floorboards','R','normal'),
(112,(select cs.id from card_set cs where short_name ='SOI'),'Ghoulcaller''s Accomplice','C','normal'),
(113,(select cs.id from card_set cs where short_name ='SOI'),'Ghoulsteed','U','normal'),
(114,(select cs.id from card_set cs where short_name ='SOI'),'Gisa''s Bidding','U','normal'),
(115,(select cs.id from card_set cs where short_name ='SOI'),'Grotesque Mutation','C','normal'),
(116,(select cs.id from card_set cs where short_name ='SOI'),'Heir of Falkenrath','U','transform'),
(117,(select cs.id from card_set cs where short_name ='SOI'),'Hound of the Farbogs','C','normal'),
(118,(select cs.id from card_set cs where short_name ='SOI'),'Indulgent Aristocrat','U','normal'),
(119,(select cs.id from card_set cs where short_name ='SOI'),'Kindly Stranger','U','transform'),
(120,(select cs.id from card_set cs where short_name ='SOI'),'Liliana''s Indignation','U','normal'),
(121,(select cs.id from card_set cs where short_name ='SOI'),'Macabre Waltz','C','normal'),
(122,(select cs.id from card_set cs where short_name ='SOI'),'Markov Dreadknight','R','normal'),
(123,(select cs.id from card_set cs where short_name ='SOI'),'Merciless Resolve','C','normal'),
(124,(select cs.id from card_set cs where short_name ='SOI'),'Mindwrack Demon','M','normal'),
(125,(select cs.id from card_set cs where short_name ='SOI'),'Morkrut Necropod','U','normal'),
(126,(select cs.id from card_set cs where short_name ='SOI'),'Murderous Compulsion','C','normal'),
(127,(select cs.id from card_set cs where short_name ='SOI'),'Olivia''s Bloodsworn','U','normal'),
(128,(select cs.id from card_set cs where short_name ='SOI'),'Pale Rider of Trostad','U','normal'),
(129,(select cs.id from card_set cs where short_name ='SOI'),'Pick the Brain','U','normal'),
(130,(select cs.id from card_set cs where short_name ='SOI'),'Rancid Rats','C','normal'),
(131,(select cs.id from card_set cs where short_name ='SOI'),'Relentless Dead','M','normal'),
(132,(select cs.id from card_set cs where short_name ='SOI'),'Rottenheart Ghoul','C','normal'),
(133,(select cs.id from card_set cs where short_name ='SOI'),'Sanitarium Skeleton','C','normal'),
(134,(select cs.id from card_set cs where short_name ='SOI'),'Shamble Back','C','normal'),
(135,(select cs.id from card_set cs where short_name ='SOI'),'Sinister Concoction','U','normal'),
(136,(select cs.id from card_set cs where short_name ='SOI'),'Stallion of Ashmouth','C','normal'),
(137,(select cs.id from card_set cs where short_name ='SOI'),'Stromkirk Mentor','C','normal'),
(138,(select cs.id from card_set cs where short_name ='SOI'),'Throttle','C','normal'),
(139,(select cs.id from card_set cs where short_name ='SOI'),'To the Slaughter','R','normal'),
(140,(select cs.id from card_set cs where short_name ='SOI'),'Tooth Collector','U','normal'),
(141,(select cs.id from card_set cs where short_name ='SOI'),'Triskaidekaphobia','R','normal'),
(142,(select cs.id from card_set cs where short_name ='SOI'),'Twins of Maurer Estate','C','normal'),
(143,(select cs.id from card_set cs where short_name ='SOI'),'Vampire Noble','C','normal'),
(144,(select cs.id from card_set cs where short_name ='SOI'),'Vessel of Malignity','C','normal'),
(145,(select cs.id from card_set cs where short_name ='SOI'),'Avacyn''s Judgment','R','normal'),
(146,(select cs.id from card_set cs where short_name ='SOI'),'Bloodmad Vampire','C','normal'),
(147,(select cs.id from card_set cs where short_name ='SOI'),'Breakneck Rider','U','transform'),
(148,(select cs.id from card_set cs where short_name ='SOI'),'Burn from Within','R','normal'),
(149,(select cs.id from card_set cs where short_name ='SOI'),'Convicted Killer','C','transform'),
(150,(select cs.id from card_set cs where short_name ='SOI'),'Dance with Devils','U','normal'),
(151,(select cs.id from card_set cs where short_name ='SOI'),'Devils'' Playground','R','normal'),
(152,(select cs.id from card_set cs where short_name ='SOI'),'Dissension in the Ranks','U','normal'),
(153,(select cs.id from card_set cs where short_name ='SOI'),'Dual Shot','C','normal'),
(154,(select cs.id from card_set cs where short_name ='SOI'),'Ember-Eye Wolf','C','normal'),
(155,(select cs.id from card_set cs where short_name ='SOI'),'Falkenrath Gorger','R','normal'),
(156,(select cs.id from card_set cs where short_name ='SOI'),'Fiery Temper','C','normal'),
(157,(select cs.id from card_set cs where short_name ='SOI'),'Flameblade Angel','R','normal'),
(158,(select cs.id from card_set cs where short_name ='SOI'),'Gatstaf Arsonists','C','transform'),
(159,(select cs.id from card_set cs where short_name ='SOI'),'Geier Reach Bandit','R','transform'),
(160,(select cs.id from card_set cs where short_name ='SOI'),'Geistblast','U','normal'),
(161,(select cs.id from card_set cs where short_name ='SOI'),'Gibbering Fiend','U','normal'),
(162,(select cs.id from card_set cs where short_name ='SOI'),'Goldnight Castigator','M','normal'),
(163,(select cs.id from card_set cs where short_name ='SOI'),'Harness the Storm','R','normal'),
(164,(select cs.id from card_set cs where short_name ='SOI'),'Howlpack Wolf','C','normal'),
(165,(select cs.id from card_set cs where short_name ='SOI'),'Hulking Devil','C','normal'),
(166,(select cs.id from card_set cs where short_name ='SOI'),'Incorrigible Youths','U','normal'),
(167,(select cs.id from card_set cs where short_name ='SOI'),'Inner Struggle','U','normal'),
(168,(select cs.id from card_set cs where short_name ='SOI'),'Insolent Neonate','C','normal'),
(169,(select cs.id from card_set cs where short_name ='SOI'),'Kessig Forgemaster','U','transform'),
(170,(select cs.id from card_set cs where short_name ='SOI'),'Lightning Axe','U','normal'),
(171,(select cs.id from card_set cs where short_name ='SOI'),'Mad Prophet','U','normal'),
(172,(select cs.id from card_set cs where short_name ='SOI'),'Magmatic Chasm','C','normal'),
(173,(select cs.id from card_set cs where short_name ='SOI'),'Malevolent Whispers','U','normal'),
(174,(select cs.id from card_set cs where short_name ='SOI'),'Pyre Hound','C','normal'),
(175,(select cs.id from card_set cs where short_name ='SOI'),'Ravenous Bloodseeker','U','normal'),
(176,(select cs.id from card_set cs where short_name ='SOI'),'Reduce to Ashes','C','normal'),
(177,(select cs.id from card_set cs where short_name ='SOI'),'Rush of Adrenaline','C','normal'),
(178,(select cs.id from card_set cs where short_name ='SOI'),'Sanguinary Mage','C','normal'),
(179,(select cs.id from card_set cs where short_name ='SOI'),'Scourge Wolf','R','normal'),
(180,(select cs.id from card_set cs where short_name ='SOI'),'Senseless Rage','C','normal'),
(181,(select cs.id from card_set cs where short_name ='SOI'),'Sin Prodder','R','normal'),
(182,(select cs.id from card_set cs where short_name ='SOI'),'Skin Invasion','U','transform'),
(183,(select cs.id from card_set cs where short_name ='SOI'),'Spiteful Motives','U','normal'),
(184,(select cs.id from card_set cs where short_name ='SOI'),'Stensia Masquerade','U','normal'),
(185,(select cs.id from card_set cs where short_name ='SOI'),'Structural Distortion','C','normal'),
(186,(select cs.id from card_set cs where short_name ='SOI'),'Tormenting Voice','C','normal'),
(187,(select cs.id from card_set cs where short_name ='SOI'),'Ulrich''s Kindred','U','normal'),
(188,(select cs.id from card_set cs where short_name ='SOI'),'Uncaged Fury','C','normal'),
(189,(select cs.id from card_set cs where short_name ='SOI'),'Vessel of Volatility','C','normal'),
(190,(select cs.id from card_set cs where short_name ='SOI'),'Village Messenger','U','transform'),
(191,(select cs.id from card_set cs where short_name ='SOI'),'Voldaren Duelist','C','normal'),
(192,(select cs.id from card_set cs where short_name ='SOI'),'Wolf of Devil''s Breach','M','normal'),
(193,(select cs.id from card_set cs where short_name ='SOI'),'Aim High','C','normal'),
(194,(select cs.id from card_set cs where short_name ='SOI'),'Autumnal Gloom','U','transform'),
(195,(select cs.id from card_set cs where short_name ='SOI'),'Briarbridge Patrol','U','normal'),
(196,(select cs.id from card_set cs where short_name ='SOI'),'Byway Courier','C','normal'),
(197,(select cs.id from card_set cs where short_name ='SOI'),'Clip Wings','C','normal'),
(198,(select cs.id from card_set cs where short_name ='SOI'),'Confront the Unknown','C','normal'),
(199,(select cs.id from card_set cs where short_name ='SOI'),'Crawling Sensation','U','normal'),
(200,(select cs.id from card_set cs where short_name ='SOI'),'Cryptolith Rite','R','normal'),
(201,(select cs.id from card_set cs where short_name ='SOI'),'Cult of the Waxing Moon','U','normal'),
(202,(select cs.id from card_set cs where short_name ='SOI'),'Deathcap Cultivator','R','normal'),
(203,(select cs.id from card_set cs where short_name ='SOI'),'Duskwatch Recruiter','U','transform'),
(204,(select cs.id from card_set cs where short_name ='SOI'),'Equestrian Skill','C','normal'),
(205,(select cs.id from card_set cs where short_name ='SOI'),'Fork in the Road','C','normal'),
(206,(select cs.id from card_set cs where short_name ='SOI'),'Gloomwidow','U','normal'),
(207,(select cs.id from card_set cs where short_name ='SOI'),'Graf Mole','U','normal'),
(208,(select cs.id from card_set cs where short_name ='SOI'),'Groundskeeper','U','normal'),
(209,(select cs.id from card_set cs where short_name ='SOI'),'Hermit of the Natterknolls','U','transform'),
(210,(select cs.id from card_set cs where short_name ='SOI'),'Hinterland Logger','C','transform'),
(211,(select cs.id from card_set cs where short_name ='SOI'),'Howlpack Resurgence','U','normal'),
(212,(select cs.id from card_set cs where short_name ='SOI'),'Inexorable Blob','R','normal'),
(213,(select cs.id from card_set cs where short_name ='SOI'),'Intrepid Provisioner','C','normal'),
(214,(select cs.id from card_set cs where short_name ='SOI'),'Kessig Dire Swine','C','normal'),
(215,(select cs.id from card_set cs where short_name ='SOI'),'Lambholt Pacifist','U','transform'),
(216,(select cs.id from card_set cs where short_name ='SOI'),'Loam Dryad','C','normal'),
(217,(select cs.id from card_set cs where short_name ='SOI'),'Might Beyond Reason','C','normal'),
(218,(select cs.id from card_set cs where short_name ='SOI'),'Moldgraf Scavenger','C','normal'),
(219,(select cs.id from card_set cs where short_name ='SOI'),'Moonlight Hunt','U','normal'),
(220,(select cs.id from card_set cs where short_name ='SOI'),'Obsessive Skinner','U','normal'),
(221,(select cs.id from card_set cs where short_name ='SOI'),'Pack Guardian','U','normal'),
(222,(select cs.id from card_set cs where short_name ='SOI'),'Quilled Wolf','C','normal'),
(223,(select cs.id from card_set cs where short_name ='SOI'),'Rabid Bite','C','normal'),
(224,(select cs.id from card_set cs where short_name ='SOI'),'Root Out','C','normal'),
(225,(select cs.id from card_set cs where short_name ='SOI'),'Sage of Ancient Lore','R','transform'),
(226,(select cs.id from card_set cs where short_name ='SOI'),'Seasons Past','M','normal'),
(227,(select cs.id from card_set cs where short_name ='SOI'),'Second Harvest','R','normal'),
(228,(select cs.id from card_set cs where short_name ='SOI'),'Silverfur Partisan','R','normal'),
(229,(select cs.id from card_set cs where short_name ='SOI'),'Solitary Hunter','C','transform'),
(230,(select cs.id from card_set cs where short_name ='SOI'),'Soul Swallower','R','normal'),
(231,(select cs.id from card_set cs where short_name ='SOI'),'Stoic Builder','C','normal'),
(232,(select cs.id from card_set cs where short_name ='SOI'),'Thornhide Wolves','C','normal'),
(233,(select cs.id from card_set cs where short_name ='SOI'),'Tireless Tracker','R','normal'),
(234,(select cs.id from card_set cs where short_name ='SOI'),'Traverse the Ulvenwald','R','normal'),
(235,(select cs.id from card_set cs where short_name ='SOI'),'Ulvenwald Hydra','M','normal'),
(236,(select cs.id from card_set cs where short_name ='SOI'),'Ulvenwald Mysteries','U','normal'),
(237,(select cs.id from card_set cs where short_name ='SOI'),'Vessel of Nascency','C','normal'),
(238,(select cs.id from card_set cs where short_name ='SOI'),'Veteran Cathar','U','normal'),
(239,(select cs.id from card_set cs where short_name ='SOI'),'Watcher in the Web','C','normal'),
(240,(select cs.id from card_set cs where short_name ='SOI'),'Weirding Wood','U','normal'),
(241,(select cs.id from card_set cs where short_name ='SOI'),'Altered Ego','R','normal'),
(242,(select cs.id from card_set cs where short_name ='SOI'),'Anguished Unmaking','R','normal'),
(243,(select cs.id from card_set cs where short_name ='SOI'),'Arlinn Kord','M','transform'),
(244,(select cs.id from card_set cs where short_name ='SOI'),'Fevered Visions','R','normal'),
(245,(select cs.id from card_set cs where short_name ='SOI'),'The Gitrog Monster','M','normal'),
(246,(select cs.id from card_set cs where short_name ='SOI'),'Invocation of Saint Traft','R','normal'),
(247,(select cs.id from card_set cs where short_name ='SOI'),'Nahiri, the Harbinger','M','normal'),
(248,(select cs.id from card_set cs where short_name ='SOI'),'Olivia, Mobilized for War','M','normal'),
(249,(select cs.id from card_set cs where short_name ='SOI'),'Prized Amalgam','R','normal'),
(250,(select cs.id from card_set cs where short_name ='SOI'),'Sigarda, Heron''s Grace','M','normal'),
(251,(select cs.id from card_set cs where short_name ='SOI'),'Sorin, Grim Nemesis','M','normal'),
(252,(select cs.id from card_set cs where short_name ='SOI'),'Brain in a Jar','R','normal'),
(253,(select cs.id from card_set cs where short_name ='SOI'),'Corrupted Grafstone','R','normal'),
(254,(select cs.id from card_set cs where short_name ='SOI'),'Epitaph Golem','U','normal'),
(255,(select cs.id from card_set cs where short_name ='SOI'),'Explosive Apparatus','C','normal'),
(256,(select cs.id from card_set cs where short_name ='SOI'),'Harvest Hand','U','transform'),
(257,(select cs.id from card_set cs where short_name ='SOI'),'Haunted Cloak','U','normal'),
(258,(select cs.id from card_set cs where short_name ='SOI'),'Magnifying Glass','U','normal'),
(259,(select cs.id from card_set cs where short_name ='SOI'),'Murderer''s Axe','U','normal'),
(260,(select cs.id from card_set cs where short_name ='SOI'),'Neglected Heirloom','U','transform'),
(261,(select cs.id from card_set cs where short_name ='SOI'),'Runaway Carriage','U','normal'),
(262,(select cs.id from card_set cs where short_name ='SOI'),'Shard of Broken Glass','C','normal'),
(263,(select cs.id from card_set cs where short_name ='SOI'),'Skeleton Key','U','normal'),
(264,(select cs.id from card_set cs where short_name ='SOI'),'Slayer''s Plate','R','normal'),
(265,(select cs.id from card_set cs where short_name ='SOI'),'Tamiyo''s Journal','R','normal'),
(266,(select cs.id from card_set cs where short_name ='SOI'),'Thraben Gargoyle','U','transform'),
(267,(select cs.id from card_set cs where short_name ='SOI'),'True-Faith Censer','C','normal'),
(268,(select cs.id from card_set cs where short_name ='SOI'),'Wicker Witch','C','normal'),
(269,(select cs.id from card_set cs where short_name ='SOI'),'Wild-Field Scarecrow','U','normal'),
(270,(select cs.id from card_set cs where short_name ='SOI'),'Choked Estuary','R','normal'),
(271,(select cs.id from card_set cs where short_name ='SOI'),'Drownyard Temple','R','normal'),
(272,(select cs.id from card_set cs where short_name ='SOI'),'Foreboding Ruins','R','normal'),
(273,(select cs.id from card_set cs where short_name ='SOI'),'Forsaken Sanctuary','U','normal'),
(274,(select cs.id from card_set cs where short_name ='SOI'),'Fortified Village','R','normal'),
(275,(select cs.id from card_set cs where short_name ='SOI'),'Foul Orchard','U','normal'),
(276,(select cs.id from card_set cs where short_name ='SOI'),'Game Trail','R','normal'),
(277,(select cs.id from card_set cs where short_name ='SOI'),'Highland Lake','U','normal'),
(278,(select cs.id from card_set cs where short_name ='SOI'),'Port Town','R','normal'),
(279,(select cs.id from card_set cs where short_name ='SOI'),'Stone Quarry','U','normal'),
(280,(select cs.id from card_set cs where short_name ='SOI'),'Warped Landscape','C','normal'),
(281,(select cs.id from card_set cs where short_name ='SOI'),'Westvale Abbey','R','transform'),
(282,(select cs.id from card_set cs where short_name ='SOI'),'Woodland Stream','U','normal'),
(283,(select cs.id from card_set cs where short_name ='SOI'),'Plains','C','normal'),
(284,(select cs.id from card_set cs where short_name ='SOI'),'Plains','C','normal'),
(285,(select cs.id from card_set cs where short_name ='SOI'),'Plains','C','normal'),
(286,(select cs.id from card_set cs where short_name ='SOI'),'Island','C','normal'),
(287,(select cs.id from card_set cs where short_name ='SOI'),'Island','C','normal'),
(288,(select cs.id from card_set cs where short_name ='SOI'),'Island','C','normal'),
(289,(select cs.id from card_set cs where short_name ='SOI'),'Swamp','C','normal'),
(290,(select cs.id from card_set cs where short_name ='SOI'),'Swamp','C','normal'),
(291,(select cs.id from card_set cs where short_name ='SOI'),'Swamp','C','normal'),
(292,(select cs.id from card_set cs where short_name ='SOI'),'Mountain','C','normal'),
(293,(select cs.id from card_set cs where short_name ='SOI'),'Mountain','C','normal'),
(294,(select cs.id from card_set cs where short_name ='SOI'),'Mountain','C','normal'),
(295,(select cs.id from card_set cs where short_name ='SOI'),'Forest','C','normal'),
(296,(select cs.id from card_set cs where short_name ='SOI'),'Forest','C','normal'),
(297,(select cs.id from card_set cs where short_name ='SOI'),'Forest','C','normal');
