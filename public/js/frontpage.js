var currentGenre = ""; 



SC.initialize({
client_id: "328ae5752ec4b2ff5d3c89f27a34fa14"
});


$.get('/api/posts', function(html) {
	for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200, color: '42eda4'}, function(oembed) {
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
			});		
		}
		currentGenre="";
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
		currentGenre="excite";
	});
});

$('#bounce').click(function() {
	$.get('api/posts/bounce', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});		
		}
		currentGenre="bounce";
	});
});

$('#heavy').click(function() {
	$.get('api/posts/heavy', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
				$('#posts').append(oembed.html);
			});		
		}
		currentGenre="heavy";
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
		currentGenre="mellow";
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
		currentGenre="daze";
	});
});


/*$(document).ready(function(){
	$('#posts').pageless({
   		url: "api/posts/"+currentGenre,
   		scrape: function(data) {
   			var html = JSON.parse(data)
   			console.log(JSON.stringify(html));
			for (i = 0; i<html.length; i++) {
				SC.oEmbed(html[i].url, {auto_play: false, maxheight: 200}, function(oembed) {
					$('#posts').append(oembed.html);
				});
			}

   		}
   });
});*/
