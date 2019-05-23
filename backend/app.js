var compression = require('compression');
var express = require('express');
const expressOasGenerator = require('express-oas-generator');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
const rendertron = require('rendertron-middleware');

const bots = [
  'Screaming',
  'baiduspider',
  'bingbot',
  'embedly',
  'facebookexternalhit',
  'linkedinbot',
  'outbrain',
  'pinterest',
  'quora link preview',
  'rogerbot',
  'showyoubot',
  'slackbot',
  'twitterbot',
  'vkShare',
  'W3C_Validator',
  'whatsapp',
];

const staticFileExtensions = [
  'ai', 'avi', 'css', 'dat', 'dmg', 'doc', 'doc', 'exe', 'flv',
  'gif', 'ico', 'iso', 'jpeg', 'jpg', 'js', 'less', 'm4a', 'm4v',
  'mov', 'mp3', 'mp4', 'mpeg', 'mpg', 'pdf', 'png', 'ppt', 'psd',
  'rar', 'rss', 'svg', 'swf', 'tif', 'torrent', 'ttf', 'txt', 'wav',
  'webp', 'wmv', 'woff', 'xls', 'xml', 'zip',
];

const router = require("./routes/router");

var app = express();
app.use(compression());
app.use(cors());

app.use(rendertron.makeMiddleware({
    proxyUrl: 'https://weshop-rendertron.azurewebsites.net/render',
	userAgentPattern: new RegExp(bots.join('|'), 'i'),
	excludeUrlPattern: new RegExp(staticFileExtensions.join('|'), 'i')
}));

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

app.use('/api', router);

app.use((req, res, next) => {
	console.log(path.join("dist", "magiccollection","index.html"));
	res.sendFile(path.join(__dirname,"dist", "magiccollection","index.html"));
});

module.exports = app;
