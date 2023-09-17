/*
------------------
FACEMASH VIP
------------------
*/
-- --------------------------------------------------------

/*
-- Struttura della tabella `VIP`
*/ 

CREATE TABLE VIP(
	id_vip INT NOT NULL AUTO_INCREMENT,
	nome_vip VARCHAR(50) NOT NULL,
	cognome_vip VARCHAR(50) NOT NULL,
	nome_d_arte_vip VARCHAR(100) DEFAULT NULL,
	sesso CHAR(1) NOT NULL,
	vittorie INT NOT NULL DEFAULT 0,
	sconfitte INT NOT NULL DEFAULT 0,
	punteggio_elo INT NOT NULL DEFAULT 1400,
	img_vip VARCHAR(50) NOT NULL,
	PRIMARY KEY(id_vip)
)



/* 
-- Dump dei dati per la tabella `VIP`
*/
INSERT INTO VIP (nome_vip, cognome_vip, nome_d_arte_vip, 
	sesso, img_vip)

VALUES
('Isabel','Mebarak Ripoll','Shakira','F','immagini/1.jpg'),
('Juan Luis','Londoño Arias','Maluma','M','immagini/2.jpg'),
('Alfredo James','Pacino','Al Pacino','M','immagini/3.jpg');



INSERT INTO VIP (nome_vip, cognome_vip, sesso, img_vip)

VALUES
/*----------DONNE----------*/
('Abbie','Cornish','F','immagini/4.jpg'),
('Amanda','Seyfried','F','immagini/5.jpg'),
('Amber','Heard','F','immagini/6.jpg'),
('Amy','Adams','F','immagini/7.jpg'),
('Bridget','Moynahan','F','immagini/8.jpg'),
('Charlize','Theron','F','immagini/9.jpg'),
('Cindy','Crawford','F','immagini/10.jpg'),
('Elisabetta','Canalis','F','immagini/11.jpg'),
('Frances','O\'Connor','F','immagini/12.jpg'),
('Gal','Gadot','F','immagini/13.jpg'),
('Hailee','Steinfield','F','immagini/14.jpg'),
('Hayley','Atwell','F','immagini/15.jpg'),
('Jessica','Alba','F','immagini/16.jpg'),
('Jennifer','Aniston','F','immagini/17.jpg'),
('Jennifer','Connelly','F','immagini/18.jpg'),
('Keira','Knightley','F','immagini/19.jpg'),
('Leonie','Tepe','F','immagini/20.jpg'),
('Lily','Collins','F','immagini/21.jpg'),
('Manuela','Arcuri','F','immagini/22.jpg'),
('Michela','Quattrociocche','F','immagini/23.jpg'),
('Michelle','Monaghan','F','immagini/24.jpg'),
('Mila','Kunis','F','immagini/25.jpg'),
('Megan','Montaner','F','immagini/26.jpg'),
('Natalie','Portman','F','immagini/27.jpg'),
('Olivia','Wilde','F','immagini/28.jpg'),
('Penelope','Cruz','F','immagini/29.jpg'),
('Rachel','McAdams','F','immagini/30.jpg'),
('Sara','Sampaio','F','immagini/31.jpg'),
('Sharon','Stone','F','immagini/32.jpg'),
('Zoey','Deutch','F','immagini/33.jpg'),
('Jeanne','Tripplehorn','F','immagini/34.jpg'),
('Rebecca','Hall','F','immagini/35.jpg'),
('Vera','Farmiga','F','immagini/36.jpg'),
('Elizabeth','Olsen','F','immagini/37.jpg'),



/*----------UOMINI----------*/
('Alain','Delon','M','immagini/38.jpg'),
('Brad','Pitt','M','immagini/39.jpg'),
('Clive','Owen','M','immagini/40.jpg'),
('Douglas','Booth','M','immagini/41.jpg'),
('Elvis','Presley','M','immagini/42.jpg'),
('George','Clooney','M','immagini/43.jpg'),
('George','Michael','M','immagini/44.jpg'),
('James','Dean','M','immagini/45.jpg'),
('Jamie','Dornan','M','immagini/46.jpg'),
('Jared','Leto','M','immagini/47.jpg'),
('Jude','Law','M','immagini/48.jpg'),
('Justin','Bieber','M','immagini/49.jpg'),
('Leonardo','DiCaprio','M','immagini/50.jpg'),
('Marlon','Teixeira','M','immagini/51.jpg'),
('Matt','Bomer','M','immagini/52.jpg'),
('Paul','Newman','M','immagini/53.jpg'),
('Paul','Walker','M','immagini/54.jpg'),
('Raoul','Bova','M','immagini/55.jpg'),
('Ricky','Martin','M','immagini/56.jpg'),
('Zac','Efron','M','immagini/57.jpg'),
('Zayn','Malik','M','immagini/58.jpg'),
('Christian','Bale','M','immagini/59.jpg'),
('Denzel','Washington','M','immagini/60.jpg'),
('Jeremy','Renner','M','immagini/61.jpg'),
('Justin','Timberlake','M','immagini/62.jpg'),
('Michael','Douglas','M','immagini/63.jpg'),
('Ryan','Gosling','M','immagini/64.jpg'),
('James','McAvoy','M','immagini/65.jpg');

