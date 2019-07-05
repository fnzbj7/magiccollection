exports.getAllCardsFromSet = function(req, res, next) {
	console.log({ userId: req.userData.userId});
    var connection = require('../db/db');
    
    if(!req.query.search) {
        return res.status(500).json({message: 'No expansion selected'})      
    }

	var sqlQuery =  'select ce.CardExpansionShortName cardExpansion, LPAD(c.cardID,3,0) cardNumber, IFNULL(ca.Amount, 0) cardAmount, c.Doubleside doubleside, c.Rarity rarity ' +
			'from card c ' +
			'join cardexpansion ce on c.CardExpansion_1 = ce.CardExpansionID and ce.CardExpansionShortName = ? ' +
			'left join cardamount ca on c.CardID = ca.Card_1 and c.CardExpansion_1 = ca.CardExpansion_1 and ca.Player_1 = ? ' +
			'order by c.cardID, ce.CardExpansionShortName';

		connection.query(sqlQuery, [ req.query.search, req.userData.userId]).then(results => {
			res.json(results);
		}).catch(error =>
            error === "DbError"
              ? res
                  .status(500)
                  .json({ message: "Some error happend in the Database!" })
              : "Ignored"
          );
	
};

exports.getCardsWithPaging = function(req, res, next) {
	var connection = require('./db');
	console.log(req.query.search);
	console.log(req.query.paging);
	var row;
	var sqlQuery
	var isCUC=false;
	if(isCUC){
	sqlQuery = 'select ca.card_1, ce.CardExpansionShortName, ca.Amount, c.Rarity, c.Doubleside '+
			'from cardamount ca '+
			'join cardexpansion ce on ca.CardExpansion_1 = ce.CardExpansionID '+
			'join card c on c.CardID = ca.Card_1 and c.CardExpansion_1 = ca.CardExpansion_1 '+
			'where ca.CardExpansion_1 = (select CardExpansionID from cardexpansion where CardExpansionShortName = ?) '+
			'and player_1 = 1 '+
			"and (c.Rarity != 'R' and c.Rarity != 'M') "+
			'order by ca.card_1, ce.CardExpansionShortName LIMIT 35 OFFSET ?;';
	}else{
		sqlQuery = 'select ca.card_1, ce.CardExpansionShortName, ca.Amount, c.Rarity, c.Doubleside '+
			'from cardamount ca '+
			'join cardexpansion ce on ca.CardExpansion_1 = ce.CardExpansionID '+
			'join card c on c.CardID = ca.Card_1 and c.CardExpansion_1 = ca.CardExpansion_1 '+
			'where ca.CardExpansion_1 = (select CardExpansionID from cardexpansion where CardExpansionShortName = ?) '+
			'and player_1 = 1 '+
			'order by ca.card_1, ce.CardExpansionShortName LIMIT 35 OFFSET ?;';
	}
	
	sqlQuery += 'Select count(*) as lim from card ca where CardExpansion_1 = (select CardExpansionID from cardexpansion where CardExpansionShortName = ?);';
	connection.query(sqlQuery, [ req.query.search, (req.query.paging - 1 )* 35, req.query.search]).then( (rows) => {
		if (err){
			console.error(err);
			//throw err
		} 
		row = rows[0]
		res.send( JSON.stringify([row, rows[1]]));
	});

}

