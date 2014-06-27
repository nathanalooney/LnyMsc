SC.initialize({
client_id: "328ae5752ec4b2ff5d3c89f27a34fa14"
});

var data = {};


$('#submit').click(function() {
	data.url = $('#url').val();
	data.excite = $('#excite').is(':checked');
	data.bounce = $('#bounce').is(':checked');
	data.heavy = $('#heavy').is(':checked');
	data.mellow = $('#mellow').is(':checked');
	data.daze = $('#daze').is(':checked');
	data.top = $('#top').is(':checked');

	SC.oEmbed(data.url, {maxheight: 200}, function(player) {
		data.embed = player.html;
		console.log(data.embed);
	});
});

$(document).ready(function() {
	console.log("Hi!");
});