  SC.initialize({
    client_id: "328ae5752ec4b2ff5d3c89f27a34fa14"
  });






$.get('http://localhost:3000/api/posts', function(html) {
	for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});
	}
});

$('#logo').click(function() {
	$.get('http://localhost:3000/api/posts', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});		}
	});
});





$('#excite').click(function() {
	$.get('http://localhost:3000/api/posts/excite', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});
		}
	});
});

$('#bounce').click(function() {
	$.get('http://localhost:3000/api/posts/bounce', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});		}
	});
});

$('#heavy').click(function() {
	$.get('http://localhost:3000/api/posts/heavy', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});		}
	});
});


$('#mellow').click(function() {
	$.get('http://localhost:3000/api/posts/mellow', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});
		}
	});
});

$('#daze').click(function() {
	$.get('http://localhost:3000/api/posts/daze', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});
		}
	});
});

