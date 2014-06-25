// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
//var methodOverride = require('method-override');
var app            = express();
var router = express.Router();

var Post = require('./app/models/post');
var port = process.env.PORT || 3000;

var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL;

mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});



app.use(morgan('dev')); 					// log every request to the console
//app.use(bodyParser()); 						// pull information from html in POST
//app.use(methodOverride()); 					// simulate DELETE and PUT

router.route('/posts')
	.post(function(req, res) {
		var post = new Post();
		post.title = req.body.name;
		post.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({message: 'Bear created!'});
		});
	});







app.use('/api', router);

app.listen(port);	
console.log('Magic happens on port '+port); 			// shoutout to the user