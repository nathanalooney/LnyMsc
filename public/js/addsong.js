SC.initialize({
client_id: "328ae5752ec4b2ff5d3c89f27a34fa14"
});

var data = {};


$('#submit').click(function() {

	data.excite = $('#excite').is(':checked');
	data.bounce = $('#bounce').is(':checked');
	data.heavy = $('#heavy').is(':checked');
	data.mellow = $('#mellow').is(':checked');
	data.daze = $('#daze').is(':checked');
	data.favorite = $('#favorite').is(':checked');

	SC.oEmbed($('#url').val(), {maxheight: 200, show_comments: false}, function(song) {
		data.embed = song.html;
		data.title = song.title;
		$.post('/api/posts', {embed: data.embed, title: data.title, excite: data.excite, bounce: data.bounce, heavy: data.heavy, mellow: data.mellow, daze: data.daze, favorite: data.favorite}, function(data, succ) {
		$('#resp').text(succ);
		});
	});


});

$(document).ready(function() {
	console.log("Hi!");
});