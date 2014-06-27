var mongoose = require('mongoose');
var Post = mongoose.model('Post');

exports.createPost = function(req, res) {
	var post = new Post();
	post.title = req.body.title;
	post.artist = req.body.artist;
	post.url = req.body.url;

	post.genre.excite = req.body.excite;
	post.genre.bounce = req.body.bounce;
	post.genre.heavy = req.body.heavy;
	post.genre.mellow = req.body.mellow;
	post.genre.daze = req.body.daze;

	post.save(function(err) {
		if (err) {
			res.send(err);
		}
		res.json({message: 'Post created!'+post.url});
	});
}

/*exports.addSong = function(req, res) {

}
*/

exports.getPosts = function(req, res) {
	var page = req.param('page');
	if (page=='undefined') page = 0;

	Post.find().sort('-time').exec(function(err, posts) {
		if (err) {
			res.send(err);
		}
		res.json(posts);
		console.log(req.param('page'));
	});
}

exports.getExcite = function(req, res) {
	Post.find().sort('-time').where('genre.excite').equals(true).exec(function(err, posts) {
		if (err) {
			res.send(err);
		}
		res.json(posts);
	});
}

exports.getBounce = function(req, res) {
	Post.find().sort('-time').where('genre.bounce').equals(true).exec(function(err, posts) {
		if (err) {
			res.send(err);
		}
		res.json(posts);
	});
}

exports.getHeavy = function(req, res) {
	Post.find().sort('-time').where('genre.heavy').equals(true).exec(function(err, posts) {
		if (err) {
			res.send(err);
		}
		res.json(posts);
	});
}

exports.getMellow = function(req, res) {
	Post.find().sort('-time').where('genre.mellow').equals(true).exec(function(err, posts) {
		if (err) {
			res.send(err);
		}
		res.json(posts);
	});
}

exports.getDaze = function(req, res) {
	Post.find().sort('-time').where('genre.daze').equals(true).exec(function(err, posts) {
		if (err) {
			res.send(err);
		}
		res.json(posts);
	});
}

exports.getPost = function(req, res) {
	Post.findById(req.params.post_id, function(err, post) {
		if (err) {
			res.send(err);
		}
		res.json(post);
	});
}