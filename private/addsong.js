$('#submit').click(function() {
	data = {}
	data.url = $('#url').val();
	data.excite = $('#excite').is(':checked');
	data.bounce = $('#bounce').is(':checked');
	data.heavy = $('#heavy').is(':checked');
	data.mellow = $('#mellow').is(':checked');
	data.daze = $('#daze').is(':checked');
	data.top = $('#top').is(':checked');
	console.log(data);
}

$(document).ready(function() {
	console.log("Hi!");
});