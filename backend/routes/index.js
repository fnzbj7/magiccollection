var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	var connection = require('./db');
	var row;
	var sqlQuery
	var isCUC=false;
	var cardLimit = 35;
	if(isCUC){
		sqlQuery = 'select ca.card_1, ce.CardExpansionShortName, ca.Amount, c.Rarity, c.Doubleside '+
			'from cardamount ca '+
			'join cardexpansion ce on ca.CardExpansion_1 = ce.CardExpansionID '+
			'join card c on c.CardID = ca.Card_1 and c.CardExpansion_1 = ca.CardExpansion_1 '+
			"where ca.CardExpansion_1 = (select CardExpansionID from cardexpansion where CardExpansionShortName = 'AER') and player_1 = 1 and player_1 = 1 "+
			"and (c.Rarity != 'R' and c.Rarity != 'M') "+
			'order by ca.card_1, ce.CardExpansionShortName LIMIT ' + cardLimit +' OFFSET 0;';
	}else{
		sqlQuery = 'select ca.card_1, ce.CardExpansionShortName, ca.Amount, c.Rarity, c.Doubleside '+
			'from cardamount ca '+
			'join cardexpansion ce on ca.CardExpansion_1 = ce.CardExpansionID '+
			'join card c on c.CardID = ca.Card_1 and c.CardExpansion_1 = ca.CardExpansion_1 '+
			"where ca.CardExpansion_1 = (select CardExpansionID from cardexpansion where CardExpansionShortName = 'AER') and player_1 = 1 and player_1 = 1 "+
			'order by ca.card_1, ce.CardExpansionShortName LIMIT ' + cardLimit +' OFFSET 0;';
	}
	
	sqlQuery += "Select count(*) as lim from card ca where CardExpansion_1 = (select CardExpansionID from cardexpansion where CardExpansionShortName = 'AER')";
	connection.query( sqlQuery , function (err, rows, fields) {
		
		if (err) throw err;
		row = rows[0]
		var cartypes = rows[1];
		//cartypes['lim'] = 'Apple';
		console.log(cartypes[0].lim);
		res.locals.Test = "Teszt";
		res.render('index', { title: 'Nice one', workflowData: JSON.stringify(row), lim : cartypes[0].lim });
	});

});

module.exports = router;