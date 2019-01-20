var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');



var index = require('./routes/index');
var users = require('./routes/users');
var cards = require('./routes/cards');
var allcardsfromset = require('./routes/allcardsfromset');

var app = express();
app.use(cors());

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist', 'magiccollection')));

app.use('/users', users);
app.use('/cards', cards);
app.use('/allcardsfromset', allcardsfromset);
app.use((req, res, next) => {
	console.log(path.join("dist", "magiccollection","index.html"));
	res.sendFile(path.join(__dirname,"dist", "magiccollection","index.html"));
});

module.exports = app;
