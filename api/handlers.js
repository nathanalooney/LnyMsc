var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var request = require('request');

exports.createPost = function(req, res) {
	var post = new Post();
	post.genre.excite = req.body.excite;
	post.genre.bounce = req.body.bounce;
	post.genre.heavy = req.body.heavy;
	post.genre.mellow = req.body.mellow;
	post.genre.daze = req.body.daze;
	post.favorite = req.body.favorite;

	//console.log("http://soundcloud.com/oembed?format=json&url="+req.body.url+"&maxheight=200&show_comments-false");

/*	request("http://soundcloud.com/oembed?format=json&url="+req.body.url+"&maxheight=200&show_comments=false", function(error, response, body) {
		var song = JSON.parse(body);
		post.embed = song['html'];
		post.title = song['title'];
		post.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({message: 'Post created!: ' + post.title});
			});
		});*/
}

/*exports.addSong = function(req, res) {

}
*/

exports.getPosts = function(req, res) {
	var page = req.param('page');
	var limit = req.param('limit');
	var offset = req.param('offset');
	var skip = page*3;

	skip=parseInt(skip) + parseInt(offset);
	console.log(skip);

	Post.find().sort('-time').skip(skip).limit(limit).exec(function(err, posts) {
		if (err) {
			res.send(err);
		}
		res.json(posts);
	});
}

exports.getExcite = function(req, res) {
	var page = req.param('page');
	var limit = req.param('limit');
	var offset = req.param('offset');
	Post.find().sort('-time').where('genre.excite').equals(true).skip((page*3)+offset).limit(limit).exec(function(err, posts) {
		if (err) {
			res.send(err);
		}
		res.json(posts);
	});
}

exports.getBounce = function(req, res) {
	var page = req.param('page');
	var limit = req.param('limit');
	var offset = req.param('offset');
	Post.find().sort('-time').where('genre.bounce').equals(true).skip((page*3)+offset).limit(limit).exec(function(err, posts) {
		if (err) {
			res.send(err);
		}
		res.json(posts);
	});
}

exports.getHeavy = function(req, res) {
	var page = req.param('page');
	var limit = req.param('limit');
	var offset = req.param('offset');
	Post.find().sort('-time').where('genre.heavy').equals(true).skip((page*3)+offset).limit(limit).exec(function(err, posts) {
		if (err) {
			res.send(err);
		}
		res.json(posts);
	});
}

exports.getMellow = function(req, res) {
	var page = req.param('page');
	var limit = req.param('limit');
	var offset = req.param('offset');
	Post.find().sort('-time').where('genre.mellow').equals(true).skip((page*3)+offset).limit(limit).exec(function(err, posts) {
		if (err) {
			res.send(err);
		}
		res.json(posts);
	});
}

exports.getDaze = function(req, res) {
	var page = req.param('page');
	var limit = req.param('limit');
	var offset = req.param('offset');
	Post.find().sort('-time').where('genre.daze').equals(true).skip((page*3)+offset).limit(limit).exec(function(err, posts) {
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