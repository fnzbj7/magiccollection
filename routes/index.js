var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	var connection = require('./db');
	var row;
	var sqlQuery
	var isCUC=true;
	if(isCUC){
	sqlQuery = 'select ca.card_1, ce.CardExpansionShortName, ca.Amount, c.Rarity, c.Doubleside '+
			'from cardamount ca '+
			'join cardexpansion ce on ca.CardExpansion_1 = ce.CardExpansionID '+
			'join card c on c.CardID = ca.Card_1 and c.CardExpansion_1 = ca.CardExpansion_1 '+
			'where ca.CardExpansion_1 = 9 and player_1 = 1 and player_1 = 1 '+
			"and (c.Rarity != 'R' and c.Rarity != 'M') "+
			'order by ca.card_1, ce.CardExpansionShortName LIMIT 35 OFFSET 0;';
	}else{
		sqlQuery = 'select ca.card_1, ce.CardExpansionShortName, ca.Amount, c.Rarity, c.Doubleside '+
			'from cardamount ca '+
			'join cardexpansion ce on ca.CardExpansion_1 = ce.CardExpansionID '+
			'join card c on c.CardID = ca.Card_1 and c.CardExpansion_1 = ca.CardExpansion_1 '+
			'where ca.CardExpansion_1 = 9 and player_1 = 1 and player_1 = 1 '+
			'order by ca.card_1, ce.CardExpansionShortName LIMIT 35 OFFSET 0;';
	}
	connection.query( sqlQuery , function (err, rows, fields) {
		
		if (err) throw err;
		row = rows
		res.locals.Test = "Teszt";
		res.render('index', { title: 'Nice one', workflowData: JSON.stringify(row) });
	});

});

module.exports = router;