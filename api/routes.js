var Post = require('../models/post');
var handlers = require('./handlers');

module.exports = function(router) {

router.route('/posts')
	.post(handlers.createPost)
	.get(handlers.getPosts);

router.route('/posts/:post_id')
	.get(handlers.getPost);

router.route('/excite')
	.get(handlers.getExcite);

router.route('/bounce')
	.get(handlers.getBounce);

router.route('/heavy')
	.get(handlers.getHeavy);

router.route('/mellow')
	.get(handlers.getMellow);

router.route('/daze')
	.get(handlers.getDaze);
}