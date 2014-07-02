var currentGenre = ""; 
var page = 0;

var changeFontColor = function() {
	$('td').each(function() {
		$(this).css("color", "#333333");
	});
}


$('#logo').click(function() {
	$.get('/api/posts', {page: 0, limit: 6, offset: 0}, function(html) {
		page = 0;
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					console.log(html[i].embed);
					}
		currentGenre="";
	});
});

$('#excite').click(function() {
	$.get('/api/posts/excite', {page: 0, limit: 6, offset: 0}, function(html) {
		page = 0;
		$('#posts').empty();
		changeFontColor();
		$('#excite').css("color", "#ff4400");
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					console.log(html[i].embed);
					}
		currentGenre="excite";
	});
});

$('#bounce').click(function() {
	$.get('/api/posts/bounce', {page: 0, limit: 6, offset: 0}, function(html) {
		page = 0;
		$('#posts').empty();
		changeFontColor();
		$('#bounce').css("color", "#ff4400");
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					console.log(html[i].embed);
					}
		currentGenre="bounce";
	});
});

$('#heavy').click(function() {
	$.get('/api/posts/heavy', {page: 0, limit: 6, offset: 0}, function(html) {
		page = 0;
		$('#posts').empty();
		changeFontColor();
		$('#heavy').css("color", "#ff4400");
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					console.log(html[i].embed);
					}
		currentGenre="heavy";
	});
});


$('#mellow').click(function() {
	$.get('/api/posts/mellow', {page: 0, limit: 6, offset: 0}, function(html) {
		page = 0;
		$('#posts').empty();
		changeFontColor();
		$('#mellow').css("color", "#ff4400");
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					console.log(html[i].embed);
					}
		currentGenre="mellow";
	});
});

$('#daze').click(function() {
	$.get('/api/posts/daze', {page: 0, limit: 6, offset: 0}, function(html) {
		page = 0;
		$('#posts').empty();
		changeFontColor();
		$('#daze').css("color", "#ff4400");
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					console.log(html[i].embed);
					}
		currentGenre="daze";
	});
});


$(document).ready(function(){

	$.get('/api/posts', {page: 0, limit: 6, offset: 0}, function(html) {
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					}
	});


	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() > $(document).height() - 150) {
			page+=1;
			$.get('api/posts/'+currentGenre, {page: page, limit: 3, offset: 6}, function(html) {
				console.log(html);
			for (i = 0; i<html.length; i++) {
				$('#posts').append(html[i].embed);
				}
	   		});
		}
	});

});