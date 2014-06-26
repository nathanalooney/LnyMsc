$.get('http://localhost:3000/api/posts/posts', function(html) {
	for (i = 0; i<html.length; i++) {
		$('#posts').append('<div><h1>'+html[i].title+' - '+html[i].artist+'</h1> <p> Play Song </p></div>');
	}
});

$('#logo').click(function() {
	$.get('http://localhost:3000/api/posts/posts', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			$('#posts').append('<div><h1>'+html[i].title+' - '+html[i].artist+'</h1> <p> Play Song </p></div>');
		}
	});
})



$('#bounce').click(function() {
	$.get('http://localhost:3000/api/posts/bounce', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			$('#posts').append('<div><h1>'+html[i].title+' - '+html[i].artist+'</h1> <p> Play Song </p></div>');
		}
	});
})


$('#excite').click(function() {

	$.get('http://localhost:3000/api/posts/excite', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			$('#posts').append('<div><h1>'+html[i].title+' - '+html[i].artist+'</h1> <p> Play Song </p></div>');
		}
	});
})