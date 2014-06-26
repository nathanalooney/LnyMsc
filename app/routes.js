var Post = require('../models/post');
var handlers = require('./handlers');

module.exports = function(router) {
	router.route('/').get(handlers.index);
	router.route('/about').get(handlers.about);
}