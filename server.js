// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var mongoose	   = require('mongoose');

//var methodOverride = require('method-override');
var app            = express();
var postAPIRouter = express.Router();
var staticRouter = express.Router();
var Post = require('./models/post');
var port = process.env.PORT || 3000;

var uristring = 'mongodb://heroku_app26708181:k9iqrd7ljf0m101b8a3c5tsueg@dbh11.mongolab.com:27117/heroku_app26708181'


mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});


app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
//app.use(methodOverride()); 					// simulate DELETE and PUT
app.use(express.static(__dirname+'/public'));


require('./api/routes')(postAPIRouter);
require('./app/routes')(staticRouter);

app.use('/', staticRouter);
app.use('/api/posts', postAPIRouter);


app.listen(port);	
console.log('Magic happens on port '+port); 			// shoutout to the user