var mysql = require('mysql');
var dbconfig = {
  multipleStatements: true,
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'magic'
};

var connection;

function handleDisconnect() {

connection = mysql.createConnection(dbconfig);

  connection.connect(function(err) {              
    if(err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 5000);
    }
  });

  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'PROTOCOL_CONNECTION_LOST') { 
      setTimeout(handleDisconnect, 10000);
    } else {
      throw err;
    }
  });
  
  module.exports = connection;
}

handleDisconnect();



