  SC.initialize({
    client_id: "328ae5752ec4b2ff5d3c89f27a34fa14"
  });






$.get('/api/posts', function(html) {
	for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});
	}
});

$('#logo').click(function() {
	$.get('/api/posts', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});		}
	});
});





$('#excite').click(function() {
	$.get('api/posts/excite', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});
		}
	});
});

$('#bounce').click(function() {
	$.get('api/posts/bounce', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});		}
	});
});

$('#heavy').click(function() {
	$.get('api/posts/heavy', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});		}
	});
});


$('#mellow').click(function() {
	$.get('api/posts/mellow', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});
		}
	});
});

$('#daze').click(function() {
	$.get('api/posts/daze', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});
		}
	});
});

