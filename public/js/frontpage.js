var currentGenre = ""; 
var page = 0;
var widgetObjs = [];


SC.initialize({
client_id: "328ae5752ec4b2ff5d3c89f27a34fa14",
});



var changeFontColor = function() {
	$('td').each(function() {
		$(this).css("color", "#333333");
	});
}

var bindTwo = function(curr, next) {
	curr.bind(SC.Widget.Events.FINISH, function() {
		next.play();
	});
}

var setTriggerLoad = function() {
	widgetObjs[widgetObjs.length-2].bind(SC.Widget.Events.FINISH, function() {
		loadNextPosts();
	});
/*	widgetObjs[widgetObjs.length-1].bind(SC.Widget.Events.FINISH, function() {
		loadNextPosts();
	});*/
}

var linkNextPosts = function(callback) {
	widgetObjs[widgetObjs.length-5].unbind(SC.Widget.Events.FINISH);
	widgetObjs[widgetObjs.length-4].unbind(SC.Widget.Events.FINISH);
	for(var i = widgetObjs.length-5; i < widgetObjs.length-1; i++) {
			if(i==widgetObjs.length-2) {
				setTriggerLoad();
			}
		bindTwo(widgetObjs[i], widgetObjs[i+1]);			
	}
	if(typeof callback == "function") {
		callback();
	}
}

var loadNextPosts = function() {
	page+=1;
	$.get('api/posts/'+currentGenre, {page: page, limit: 3, offset: 6}, function(html) {
		for (i = 0; i<html.length; i++) {
			$('#posts').append(html[i].embed);
			widgetObjs.push(SC.Widget($('iframe:last')[0]));
		}
		linkNextPosts();
	});
}


var setAutoPlay = function() {
		var widgets = $('iframe').toArray();

		for (var i=0; i<widgets.length; i++) {
			widgetObjs[i] = SC.Widget(widgets[i]);
		}	

		for (var i=0; i<widgetObjs.length; i++) {
			if(i==widgetObjs.length-2) {
				setTriggerLoad();
			}
			bindTwo(widgetObjs[i], widgetObjs[i+1]);
		}
}


$('#logo').click(function() {
	if(currentGenre=="") return;
	widgetObjs = [];
	widgetObjs = [];
	$.get('/api/posts', {page: 0, limit: 6, offset: 0}, function(html) {
		page = 0;
		changeFontColor();
		$('#front').css("color", "#ff4400");
		$('#posts').empty();
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					}
		currentGenre="";
		setAutoPlay();
	});
});

$('#front').click(function() {
	if(currentGenre=="") return;
	widgetObjs = [];
	$.get('/api/posts', {page: 0, limit: 6, offset: 0}, function(html) {
		page = 0;
		changeFontColor();
		$('#posts').empty();
		$('#front').css("color", "#ff4400");
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					}
		currentGenre="";
		setAutoPlay();
	});
});

$('#excite').click(function() {
	if(currentGenre=="excite") return;
	widgetObjs = [];
	$.get('/api/posts/excite', {page: 0, limit: 6, offset: 0}, function(html) {
		page = 0;
		$('#posts').empty();
		changeFontColor();
		$('#excite').css("color", "#ff4400");
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					}
		currentGenre="excite";
		setAutoPlay();
	});
});

$('#bounce').click(function() {
	if(currentGenre=="bounce") return;
	widgetObjs = [];
	$.get('/api/posts/bounce', {page: 0, limit: 6, offset: 0}, function(html) {
		page = 0;
		$('#posts').empty();
		changeFontColor();
		$('#bounce').css("color", "#ff4400");
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					}
		currentGenre="bounce";
		setAutoPlay();
	});
});

$('#heavy').click(function() {
	if(currentGenre=="heavy") return;
	widgetObjs = [];
	$.get('/api/posts/heavy', {page: 0, limit: 6, offset: 0}, function(html) {
		page = 0;
		$('#posts').empty();
		changeFontColor();
		$('#heavy').css("color", "#ff4400");
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					}
		currentGenre="heavy";
		setAutoPlay();
	});
});


$('#mellow').click(function() {
	if(currentGenre=="mellow") return;
	widgetObjs = [];
	$.get('/api/posts/mellow', {page: 0, limit: 6, offset: 0}, function(html) {
		page = 0;
		$('#posts').empty();
		changeFontColor();
		$('#mellow').css("color", "#ff4400");
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					}
		currentGenre="mellow";
		setAutoPlay();
	});
});

$('#daze').click(function() {
	if(currentGenre=="daze") return;
	widgetObjs = [];
	$.get('/api/posts/daze', {page: 0, limit: 6, offset: 0}, function(html) {
		page = 0;
		$('#posts').empty();
		changeFontColor();
		$('#daze').css("color", "#ff4400");
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					}
		currentGenre="daze";
		setAutoPlay();
	});
});


$('#best').click(function() {
	if(currentGenre=="best") return;
	widgetObjs = [];
	$.get('/api/posts/best', {page: 0, limit: 6, offset: 0}, function(html) {
		page = 0;
		$('#posts').empty();
		changeFontColor();
		$('#best').css("color", "#ff4400");
		for (i = 0; i<html.length; i++) {
					$('#posts').append(html[i].embed);
					}
		currentGenre="best";
		setAutoPlay();
	});
});


var scrollLoad = function() {
	if($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
			$(window).off('scroll');
			console.log("Listener is off!");
			loadNextPosts();
			setTimeout(function() {
				$(window).on('scroll', scrollLoad);
				console.log("Listener is back!")
			}, 100);
	}
}


$(document).ready(function(){
	$('#front').css("color", "#ff4400");
	$.get('/api/posts', {page: 0, limit: 6, offset: 0}, function(html) {
		for (i = 0; i<html.length; i++) {
				$('#posts').append(html[i].embed);
			}
		var widgets = $('iframe').toArray();
		for (var i=0; i<widgets.length; i++) {
			widgetObjs[i] = SC.Widget(widgets[i]);
		}	
		for (var i=0; i<widgetObjs.length; i++) {
			if(i>=widgetObjs.length-2) {
				setTriggerLoad();
			}
			bindTwo(widgetObjs[i], widgetObjs[i+1]);
		}
	});
	setTimeout(function() {
	$(window).on('scroll', scrollLoad);
	}, 500);


});