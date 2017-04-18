window.onload = function() {
	color();
	style(0);
	font();
	iscp();
	purchase();
	rbma();
	soylent();
	qr();
	resize();
	$('.action').click(function() {
		var action = $(this).attr('data-action');
		update(action);
	});
	setTimeout(function() {
		setInterval(function() {
			if($('main').hasClass('wiggle')) {
					wiggle();    
			}
		}, 90);
	},500);
	$('.wrapper').transition({
		opacity: 1
	}, 200, 'easeInOutQuad')
}


function resize() {
	font();
}

function font() {
	var fontSize = parseInt($('body').css('fontSize'));
	var wrapperWidth = $('.wrapper').innerWidth();
	var ratio = 980/45;
	var newFontSize = wrapperWidth / ratio;
	$('body').css({'fontSize':newFontSize});
}

var thePalette;
function color() {
	var palettes = [
		'wooden-airplane-lamp',
		'nighty',
		'blue',
		'spring',
		'old-glory',
		'ronald',
		'cactus',
		'long-sleeve',
		'default' //not on load     
	];
	paletteLength = palettes.length;
	index = Math.round(Math.random() * (paletteLength - 2) - 0);

	var newPalette = palettes[index];
	if(newPalette == thePalette) {
		color();
		return;
	}

	var $oldIcon = $('link[rel="icon"]');
	var $newIcon = $oldIcon.clone();
	$newIcon.attr('href', 'assets/images/icons/'+newPalette+'.png');
	$newIcon.insertAfter($oldIcon);
	$oldIcon.remove();
	console.log('Palette \u21F6 "' + newPalette + '"');
	$('body').removeClass(thePalette).addClass(newPalette);
	thePalette = newPalette;
}

var theStyle;
function style(index) {
	var styles = [
		'wiggle',
		'fan',
		'shadow',
		'ad-blocker',
		'italic',
		'from-the-other-side',
		'blacked-out',
		'farsighted',
		'mini',
		'jumbo'
	];

	if(index == undefined) {
		styleLength = styles.length;
		index = Math.round(Math.random() * (styleLength - 1) - 0);
	}

	var newStyle = styles[index];
	if(newStyle == theStyle) {
		style();
		return;
	}

	console.log('Style \u21F6 "' + newStyle + '"');

	if(theStyle == 'wiggle') {
		$('main i').each(function() {
			$(this).stop();
		});
	}

	$('main').removeClass(theStyle).addClass(newStyle);
	theStyle = newStyle;
}

function update(action) {
	switch(action) {
		case 'peace':
			color();
			break;
		case 'love':
			style();
			break;
		case 'timetravel':

	}
}

function wiggle() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	var texts = $('main i').length;
	for(var i = 0; i < texts; i++) {
		var word = $('main i').eq(i);
		var x = (Math.floor((Math.random() * 3) + 1)) * (Math.round(Math.random()) * 2 - 1);
		var y = (Math.floor((Math.random() * 3) + 1)) * (Math.round(Math.random()) * 2 - 1);
		var z = (Math.floor((Math.random() * 3) + 1)) * (Math.round(Math.random()) * 2 - 1);
		var time = 90;
		var scale = 1;

		if($(word).is('.symbol')) {
			scale = $(word).attr('data-scale');
		}

		$(word).transition({x:x, y:y, rotate:z, scale: scale}, time);        
	}    
}

var player;
function onYouTubeIframeAPIReady() {
	player = new YT.Player('anthem', {
		height: '230',
		width: '200',
		videoId: 'teeOavr7yLg'
	});
}
function rbma() {
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	$('#rbma .click').on('click', function() {
		var data = $(this).attr('data-data');
		switch (data) {
			case 'confetti':
				$('#rbma').toggleClass(data);
				break;
			case 'logo':
				$(this).toggleClass('toggled');
				break;
			case 'japan':
				$(this).toggleClass('toggled');
				if($(this).hasClass('toggled')) {
					player.playVideo();
				} else {
					player.stopVideo();
				}
				break;
		}
	});
}

function iscp() {
	$('#iscp .past').hover(function() {
		$('#iscp').toggleClass('archive');
	});
}

function purchase() {
	$('body').on('click', '#pcgd .svg:first-of-type', function() {
		$(this).insertAfter($('#pcgd .svg:last-of-type'));
	});
}

function soylent() {
	$('body').on('mouseenter', '#soylent .reveal', function() {
		$('#soylent').addClass('mountain');
	}).on('mouseleave', '#soylent .reveal', function() {
		$('#soylent').removeClass('mountain');
	});
}

function qr() {
  wrapColor($('#qr'))
}

function wrapColor(el) {
	var colors = ['ff33ff','3399cc','ff6633','b619cc','33cc33','ff0000'];
	$els = $(el).children()
	$els.each(function(i, el) {
		if($(el).children(':not(br)').length) {
			wrapColor(el)
		} else {
			var chars = $(el).text().split('')
		  $(el).empty()
		  var colorIndex = 0
		  $(chars).each(function(i, char) {
		  	var color = colors[colorIndex]
				$(el).append('<span style="color:#'+color+'">' + char + '</span>')
				if(colorIndex < colors.length-1) {
			    colorIndex++
			  } else {
			    colorIndex = 0
			  }
			})
		}
	})
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}