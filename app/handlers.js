var mongoose = require('mongoose');
var Post = mongoose.model('Post');

exports.index = function(req, res) {
	res.send('Hi! Welcome to LNY/MSC');
}

exports.about = function(req, res) {
	res.send('About');
}