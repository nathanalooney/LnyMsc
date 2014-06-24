module.exports = function(app) {
	var handlers = require('./handlers');
	app.get('/', handlers.index);
	app.get('/info', handlers.info);
	app.get('/test', handlers.test);
	app.get('/add', handlers.createPost);
}