//var mongoose = require('mongoose');
//var Post = mongoose.model('Post');


exports.index = function(req, res) {
	Post.findRecent(function(err, all_posts) {
		res.render('index',{posts: all_posts}, function(err,html) {
			res.send(html);
		});
	});
}

exports.info = function(req, res) {
	var video_id = req.query.v;
	res.render('info', { id: video_id }, function(err, html) {
		res.send(html);
	});
}

exports.test = function(req,res) {
	res.render('test', function(err, html){
		res.send(html);
	});
}

exports.createPost = function(req, res) {
	var newPost = new Post({ 
								title: 'Maipei', 
								description: 'Test', 
								embed: 'https://soundcloud.com/breathecarolina/bang-it-out-gazzo-remix'
						});
	newPost.save(function(err) {
		if (err) {
			console.log("Error saving pin");
		} else {
			res.redirect('/');
		};
	});	

}