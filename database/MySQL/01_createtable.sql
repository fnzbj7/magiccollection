CREATE TABLE CardExpansion (
CardExpansionID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
CardExpansionName VARCHAR(30) NOT NULL,
CardExpansionShortName VARCHAR(4) NOT NULL
);

CREATE TABLE Card (
CardID INT(3) UNSIGNED NOT NULL,
CardExpansion_1 INT(6) UNSIGNED NOT NULL,
CardName VARCHAR(40) NOT NULL,
Rarity VARCHAR(3),
Doubleside INT(1),
PRIMARY KEY(CardID,CardExpansion_1),
FOREIGN KEY (CardExpansion_1) REFERENCES CardExpansion(CardExpansionID)
);

CREATE TABLE Player (
PlayerID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
Email VARCHAR(40) NOT NULL,
Password VARCHAR(60) NOT NULL,
FirstName VARCHAR(30),
LastName VARCHAR(30),
DciNumber VARCHAR(10),
Activated INT(1),
PlayerName VARCHAR(30) NOT NULL
); 

CREATE TABLE EmailVerification (
Player_1 INT(6) UNSIGNED PRIMARY KEY,
VerificationHash VARCHAR(60),
FOREIGN KEY (Player_1) REFERENCES Player(PlayerID)
);

CREATE TABLE CardAmount (
Card_1 INT(3) UNSIGNED NOT NULL,
CardExpansion_1 INT(6) UNSIGNED NOT NULL,
Player_1 INT(6) UNSIGNED NOT NULL,
Amount INT(2),
PRIMARY KEY(Card_1,CardExpansion_1,Player_1),
FOREIGN KEY (Player_1) REFERENCES Player(PlayerID),
FOREIGN KEY (CardExpansion_1) REFERENCES CardExpansion(CardExpansionID)
);

CREATE TABLE UploadFile (
FileName VARCHAR(50),
CardExpansion_1 INT(6) UNSIGNED NOT NULL,
PRIMARY KEY(FileName,CardExpansion_1),
FOREIGN KEY (CardExpansion_1) REFERENCES CardExpansion(CardExpansionID)
); 
