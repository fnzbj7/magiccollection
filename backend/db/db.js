var mysql = require("mysql");
var dbconfig = require("./dbconfig");
/* Create a dbconfig.json file next to this file, and contain something like this:

{
	"db": {
	  "multipleStatements": "true",
	  "host"     : "localhost",
	  "user"     : "root",
	  "password" : "admin",
	  "database" : "magic"
	}
}

*/
var pool = mysql.createPool(dbconfig.db);

module.exports = {
  query: function() {
    var sql_args = [];
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          console.log(err);
          return reject('DbError');
        }
        if (args.length > 1) {
          sql_args = args[1];
        }

        connection.query(args[0], sql_args, (err, results) => {
          connection.release(); // always put connection back in pool after last query
          if (err) {
            console.log(err);
            reject('DbError');
          } else {
            resolve(results);
          }
        });
      });
    });
  }
};
