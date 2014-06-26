var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	title: String,
	artist: String,
	url: String,
	genre: {
		excite: Boolean,
		bounce: Boolean,
		heavy:  Boolean,
		mellow: Boolean,
		daze:   Boolean,
	},
	favorite: Boolean,
	time : { type : Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);