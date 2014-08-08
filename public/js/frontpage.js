var player = {
	song: {
		prev: null,
		curr: null,
		next: null
	},
	currentGenre: "all", 
	playlist: {
		all: [],
		excite: [],
		bounce: [],
		heavy: [],
		mellow: [],
		daze: [],
		best: []
	},
	initialized: {
		all: true,
		excite: false,
		bounce: false,
		heavy: false,
		mellow: false,
		daze: false,
		best: false
	},
	page: {
		all: 0,
		excite: 0,
		bounce: 0,
		heavy: 0,
		mellow: 0,
		daze: 0,
		best: 0
	}
}

SC.initialize({
client_id: "328ae5752ec4b2ff5d3c89f27a34fa14",
});

var loadInitial = function() {
	$('#front').css("color", "#ff4400");
	var currentPlaylist = player.playlist[player.currentGenre];
	var currentPosts = '#'+player.currentGenre+'Posts';
	$.get('/api/posts/'+player.currentGenre, {page: 0, limit: 6, offset: 0}, function(html) {
		// Fill page with iframe elements.
		for (i = 0; i<html.length; i++) {
				$(currentPosts).append(html[i].embed);
			}		
		// Populate player.playlist object with widgets.
		var widgets = $(currentPosts).children('iframe')
		for (var i=0; i<widgets.length; i++) {
			currentPlaylist[i] = SC.Widget(widgets[i]);
		}
		player.song.curr = currentPlaylist[0];
		// Set up autoplay for initial songs.
		for (var i=0; i<currentPlaylist.length-1; i++) {
			if(i == currentPlaylist.length-2) {
				setTrigger(currentPlaylist[i]);
			}
			bindWidgets(currentPlaylist[i-1], currentPlaylist[i], currentPlaylist[i+1]);
		}
	});
}

var loadPosts = function () {
	player.page[player.currentGenre]+=1;
	var currentPlaylist = player.playlist[player.currentGenre];
	var currentPosts = '#'+player.currentGenre+'Posts';
	$.get('api/posts/'+player.currentGenre, {page: player.page[player.currentGenre], limit: 3, offset: 6}, function(html) {
		for (i = 0; i < html.length; i++) {
			$(currentPosts).append(html[i].embed);
			currentPlaylist.push(SC.Widget($(currentPosts).children('iframe').last()[0]));
		}
		var lastWidgets = currentPlaylist.slice(-5);
		lastWidgets[0].unbind(SC.Widget.Events.FINISH);
		lastWidgets[0].unbind(SC.Widget.Events.PAUSE);
		setTrigger(lastWidgets[3]);
		for (i = 1; i < lastWidgets.length-1; i++) {
			bindWidgets(lastWidgets[i-1], lastWidgets[i], lastWidgets[i+1]);
		}
	});
}

var setTrigger = function(widget) {
	widget.bind(SC.Widget.Events.PAUSE, function() {
			loadPosts();
		});
	widget.bind(SC.Widget.Events.FINISH, function() {
			loadPosts();
		});	
}

var bindWidgets = function(prev, curr, next) {
	curr.bind(SC.Widget.Events.PLAY, function() {
		$('#playPause').html('<span class="glyphicon glyphicon-pause">');
		player.song.prev = prev;
		player.song.curr = curr;
		player.song.next = next;
		player.song.curr.getCurrentSound(function(sound) {
			var title = sound.title;
			$('#songTitle').html(title.slice(0,30));
		});
	});
	curr.bind(SC.Widget.Events.PAUSE, function() {
		player.song.curr.isPaused(function(resp) {
			if (resp) {
				$('#playPause').html('<span class="glyphicon glyphicon-play">');
			}
		});
	});
	curr.bind(SC.Widget.Events.FINISH, function() {
		next.play();
	});
}

var hidePosts = function() {
	$('#centeredContent').children().each(function() {
		if ($(this).is(':visible')) {
			$(this).hide(400, 'swing');
		}
	});
}

var changeFontColor = function() {
	$('td').each(function() {
		$(this).css("color", "#333333");
	});
}

var scrollLoad = function() {
	if($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
		$(window).off('scroll');
		loadPosts();
		setTimeout(function() {
			$(window).on('scroll', scrollLoad);
		}, 500);
	}
}

$('#excite').click(function() {
	player.currentGenre = 'excite';
	hidePosts();
	changeFontColor();
	$('#excite').css('color', '#ff4400');
	if (player.initialized.excite == false) {
		$('#excitePosts').show(400, 'swing', function() {
			loadInitial();
			player.initialized.excite = true;				
		});			
	}
	else {
		$('#excitePosts').show(400, 'swing');
	}
});

$('#bounce').click(function() {
	player.currentGenre = 'bounce';
	hidePosts();
	changeFontColor();
	$('#bounce').css('color', '#ff4400');
	if (player.initialized.bounce == false) {
		$('#bouncePosts').show(400, 'swing', function() {
			loadInitial();
			player.initialized.bounce = true;				
		});			
	}
	else {
		$('#bouncePosts').show(400, 'swing');
	}
});

$('#heavy').click(function() {
	player.currentGenre = 'heavy';
	hidePosts();
	changeFontColor();
	$('#heavy').css('color', '#ff4400');
	if (player.initialized.heavy == false) {
		$('#heavyPosts').show(400, 'swing', function() {
			loadInitial();
			player.initialized.heavy = true;				
		});			
	}
	else {
		$('#heavyPosts').show(400, 'swing');
	}
});

$('#mellow').click(function() {
	player.currentGenre = 'mellow';
	hidePosts();
	changeFontColor();
	$('#mellow').css('color', '#ff4400');
	if (player.initialized.mellow == false) {
		$('#mellowPosts').show(400, 'swing', function() {
			loadInitial();
			player.initialized.mellow = true;				
		});			
	}
	else {
		$('#mellowPosts').show(400, 'swing');
	}
});

$('#daze').click(function() {
	player.currentGenre = 'daze';	
	hidePosts();
	changeFontColor();
	$('#daze').css('color', '#ff4400');
	if (player.initialized.daze == false) {
		hidePosts();
		$('#dazePosts').show(400, 'swing', function() {
			loadInitial();
			player.initialized.daze = true;				
		});			
	}
	else {
		$('#dazePosts').show(400, 'swing');
	}
});

$('#best').click(function() {
	player.currentGenre = 'best';
	hidePosts();
	changeFontColor();
	$('#best').css('color', '#ff4400');
	if (player.initialized.best == false) {
		hidePosts();
		$('#bestPosts').show(400, 'swing', function() {
			player.currentGenre = 'best';
			loadInitial();
			player.initialized.best = true;				
		});			
	}
	else {
		$('#bestPosts').show(400, 'swing');
	}
});

$('#all').click(function() {
	player.currentGenre = 'all';
	hidePosts();
	changeFontColor();
	$('#all').css('color', '#ff4400');
	if (player.initialized.all == false) {
		$('#allPosts').show(400, 'swing', function() {
			loadInitial();
			player.initialized.all = true;				
		});			
	}
	else {
		$('#allPosts').show(400, 'swing');			
	}
});

$('#playPrev').click(function(event) {
	event.preventDefault();
	player.song.prev.play();
	player.song.prev.seekTo(0);	
});

$('#playPause').click(function(event) {
	event.preventDefault();
	var x = player.song.curr.isPaused(function(resp) {
		if(resp) {
			player.song.curr.play();
			$('#playPause').html('<span class="glyphicon glyphicon-play">');
		}
		else {
			player.song.curr.pause();
			$('#playPause').html('<span class="glyphicon glyphicon-pause">');
		}
	});
});

$('#playNext').click(function(event) {
	event.preventDefault();
	player.song.next.play();
	player.song.next.seekTo(0);	
});

$(document).ready(function(){
	loadInitial(player.currentGenre);
	$('#all').css('color', '#ff4400');
	setTimeout(function() {
		$(window).on('scroll', scrollLoad);
	}, 1000);
});