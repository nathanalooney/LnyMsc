var currentGenre = ""; 
var page = 0;


SC.initialize({
client_id: "328ae5752ec4b2ff5d3c89f27a34fa14"
});


$('#logo').click(function() {
	$.get('/api/posts', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			$('#posts').append(html[i].embed);
		}
		currentGenre="";
	});
});

$('#excite').click(function() {
	$.get('api/posts/excite', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			$('#posts').append(html[i].embed);
		}
		currentGenre="excite";
	});
});

$('#bounce').click(function() {
	$.get('api/posts/bounce', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			$('#posts').append(html[i].embed);	
		}
		currentGenre="bounce";
	});
});

$('#heavy').click(function() {
	$.get('api/posts/heavy', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			$('#posts').append(html[i].embed);
		}
		currentGenre="heavy";
	});
});


$('#mellow').click(function() {
	$.get('api/posts/mellow', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			$('#posts').append(html[i].embed);
		}
		currentGenre="mellow";
	});
});

$('#daze').click(function() {
	$.get('api/posts/daze', function(html) {
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
			$('#posts').append(html[i].embed);
		}
		currentGenre="daze";
	});
});


$(document).ready(function(){

	$.get('/api/posts', {page: 0, limit: 6, offset: 0}, function(html) {
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					console.log(html[i].embed);
					}
	});

	$.fn.scrollStopped = function(callback) {           
	        $(this).scroll(function(){
	            var self = this, $this = $(self);
	            if ($this.data('scrollTimeout')) {
	              clearTimeout($this.data('scrollTimeout'));
	            }
	            $this.data('scrollTimeout', setTimeout(callback,250,self));
	        });
	    };

	$(window).scrollStopped(function(){
		if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
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

