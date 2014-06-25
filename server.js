// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
//var methodOverride = require('method-override');
var app            = express();
var router = express.Router();



app.use(morgan('dev')); 					// log every request to the console
//app.use(bodyParser()); 						// pull information from html in POST
//app.use(methodOverride()); 					// simulate DELETE and PUT

router.get('/', function(req, res) {
	res.send('message: Welcome to LNY/MSC');
});

app.use('/api', router);

app.listen(8080);	
console.log('Magic happens on port 8080'); 			// shoutout to the user