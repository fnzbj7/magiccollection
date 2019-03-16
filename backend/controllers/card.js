exports.getAllCardsFromSet = function(req, res, next) {
    var connection = require('../routes/db');
    
    if(!req.query.search) {
        return res.status(500).json({message: 'No expansion selected'})      
    }

	var sqlQuery = 'select ce.CardExpansionShortName cardExpansion, LPAD(ca.card_1,3,0) cardNumber, ca.Amount cardAmount, c.Doubleside doubleside '+
			'from cardamount ca '+
			'join cardexpansion ce on ca.CardExpansion_1 = ce.CardExpansionID '+
			'join card c on c.CardID = ca.Card_1 and c.CardExpansion_1 = ca.CardExpansion_1 '+
			'where ca.CardExpansion_1 = (select CardExpansionID from cardexpansion where CardExpansionShortName = ?) '+
			'and player_1 = 1 '+
			'order by ca.card_1, ce.CardExpansionShortName;';

	
	connection.query(sqlQuery, [ req.query.search], function(err, results){
		res.json(results);
	})
	
		  
		  
}

