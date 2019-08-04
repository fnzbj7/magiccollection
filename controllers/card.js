exports.getAllCardsFromSet = function(req, res, next) {
	console.log({ userId: req.userData.userId});
    var connection = require('../db/db');

    if(!req.query.search) {
        return res.status(500).json({message: 'No expansion selected'})
    }

	var sqlQuery =  'select ce.CardExpansionShortName cardExpansion, LPAD(c.cardID,3,0) cardNumber, IFNULL(ca.Amount, 0) cardAmount, c.Layout layout, c.Rarity rarity ' +
			'from card c ' +
			'join cardexpansion ce on c.CardExpansion_1 = ce.CardExpansionID and ce.CardExpansionShortName = ? ' +
			'left join cardamount ca on c.CardID = ca.Card_1 and c.CardExpansion_1 = ca.CardExpansion_1 and ca.Player_1 = ? ' +
			'order by c.cardID, ce.CardExpansionShortName';

		connection.query(sqlQuery, [ req.query.search, req.userData.userId]).then(results => {
			console.log('Szia');
			res.json(results);
		}).catch(error =>
            error === "DbError"
              ? res
                  .status(500)
                  .json({ message: "Some error happend in the Database!" })
              : "Ignored"
          );

};
