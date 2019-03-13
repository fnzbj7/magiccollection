var express = require('express');
const expressOasGenerator = require('express-oas-generator');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var index = require('./routes/index');
var users = require('./routes/users');
var cards = require('./routes/cards');
var calendar = require('./routes/calendar');

var allcardsfromset = require('./routes/allcardsfromset');

var app = express();


if ('development' == app.get('env')) {
	const swaggerUi = require('swagger-ui-express');
	const fileName = 'swagger_V01.json';
	// Uncomment if you need swagger UI
	const swaggerDocument = require('./swagger/' + fileName);
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
	//expressOasGenerator.init(app, null, 'swagger/' + fileName);
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist', 'magiccollection')));

app.use('/users', users);
app.use('/cards', cards);
app.use("/api/calendar", calendar);

app.use('/allcardsfromset', allcardsfromset);
app.use((req, res, next) => {
	console.log(path.join("dist", "magiccollection","index.html"));
	res.sendFile(path.join(__dirname,"dist", "magiccollection","index.html"));
});

module.exports = app;
