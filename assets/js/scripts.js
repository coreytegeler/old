$(function() {
	
	var body = document.querySelector('body'),
			main = document.querySelector('main'),
			palettes = ['wooden-airplane-lamp', 'nighty', 'blue', 'spring', 'old-glory', 'ronald', 'cactus', 'long-sleeve', 'default'],
			styles = ['wiggle', 'fan', 'shadow', 'italic', 'from-the-other-side', 'redacted', 'farsighted', 'mini', 'jumbo'];

	var init = function() {
		shuffle(palettes);
		shuffle(styles);
		addPalette();
		addStyle();
		font();
		iscp();
		purchase();
		resize();

		setTimeout((function() {
			wiggle();
			$('main .inner').addClass('loaded');
		}), 500);

	};
	
	var resize = function() {
		font();
	};
	
	var font = function() {
		var fontSize = parseInt(body.style.fontSize),
				inner = main.querySelector(".inner")
				innerWidth = inner.getBoundingClientRect().width,
				ratio = 980 / 45,
				newFontSize = innerWidth / ratio;
		body.style.fontSize = newFontSize + "px";
	};

	var addPalette = function() {
		var palette = body.dataset.palette;
		if (!palette) {
			palette = palettes[random(0, palettes.length - 1)];
		}
		var index = palettes.indexOf(palette) + 1;
		if (index > palettes.length - 1) {
			index = 0;
		}
		var newPalette = palettes[index],
				oldIcon = $('link[rel="icon"]'),
				newIcon = oldIcon.clone();
		newIcon.attr('href', 'assets/images/icons/' + newPalette + '.png');
		newIcon.insertAfter(oldIcon);
		oldIcon.remove();
		console.log('Palette ⇶ "' + newPalette + '"');
		body.classList.remove(palette);
		body.classList.add(newPalette);
		body.setAttribute("data-palette", newPalette);
	};

	var addStyle = function(index) {
		var style = body.dataset.style,
				newStyle;

		if (style) {
			index = styles.indexOf(style) + 1;
			if (index > styles.length - 1) {
				index = 0;
			}
			newStyle = styles[index];
		} else {
			newStyle = 'wiggle';
		}
		console.log('Style ⇶ "' + newStyle + '"');
		if (style === 'wiggle') {
			$('main i').each(function() {
				$(this).stop();
			});
		}
		body.classList.remove(style);
		body.classList.add(newStyle);
		body.setAttribute("data-palette", newStyle)
	};
	
	var wiggle = function() {
		setInterval(function() {
			if (!body.classList.contains('wiggle')) {
				return;
			}
			var width = window.innerWidth,
					height = window.innerHeight,
					elems = document.querySelectorAll('main i'),
					elemsLength = elems.length,
					i = 0,
					results = [];
			while (i < elems) {
				var word = document.querySelectorAll('main i')[i],
						x = Math.floor(Math.random() * 3 + 1) * (Math.round(Math.random()) * 2 - 1),
						y = Math.floor(Math.random() * 3 + 1) * (Math.round(Math.random()) * 2 - 1),
						z = Math.floor(Math.random() * 3 + 1) * (Math.round(Math.random()) * 2 - 1),
						time = 90,
						scale = 1;
				if (word.classList.contains('symbol')) {
					scale = word.dataset.scale;
				}
				$(word).transition({
					x: x,
					y: y,
					rotate: z,
					scale: scale
				}, time);
				results.push(i++);
			}
		}, 90);
	};

	var shuffle = function(array) {
		var i, m, t;
		m = array.length;
		t = void 0;
		i = void 0;
		while (m) {
			i = Math.floor(Math.random() * m--);
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		return array;
	};
	
	var random = function(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	};

	$('.max.about .shadow').hover(function() {
		return $(this).parents('.about').toggleClass('tease');
	});

	$('.max.about .shadow').on('click', function() {
		var shadow = $(this),
				text = shadow.parents('.about')[0];
		$(text).transition({
			maxHeight: text.scrollHeight + 'px'
		}, 200, function() {
			shadow.remove();
			$(text).css({
				maxHeight: 'unset'
			});
		});
	});

	$('.action').click(function() {
		var action = this.dataset.action;
		switch (action) {
			case 'peace':
				addPalette();
				break;
			case 'love':
				addStyle();
				break;
		}
	});

	window.addEventListener("resize", resize);

	//PROJECT FUNCTIONS
	var iscp = function() {
		$('#iscp .past').hover(function() {
			$('#iscp').toggleClass('archive');
		});
	};

	var purchase = function() {
		$(body).on('click', '#pcgd .svg svg:first-of-type', function() {
			$(this).insertAfter($('#pcgd .svg svg:last-of-type'));
		});
	};
	
	// theStyle = void 0;
	// player = void 0;
	
	init();
});
