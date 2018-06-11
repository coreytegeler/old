$ ->
	$body = $('body')
	$main = $('main')
	palettes = ['wooden-airplane-lamp','nighty','blue','spring','old-glory','ronald','cactus','long-sleeve','default']
	styles = ['wiggle','fan','shadow','italic','from-the-other-side','redacted','farsighted','mini','jumbo']

	init = () ->
		shuffle(palettes)
		shuffle(styles)
		addPalette()
		addStyle()
		font()
		iscp()
		purchase()
		rbma()
		qr()
		resize()
		setTimeout (->
			wiggle()
			$('.wrapper').addClass('loaded')
		), 500

	resize = () ->
		font()
		return

	font = () ->
		fontSize = parseInt($body.css('fontSize'))
		wrapperWidth = $('.wrapper').innerWidth()
		ratio = 980 / 45
		newFontSize = wrapperWidth / ratio
		$body.css 'fontSize': newFontSize
		return

	addPalette = () ->
		palette = $body.attr('data-palette')
		if !palette
			palette = palettes[random(0, palettes.length-1)]
		index = palettes.indexOf(palette)+1;
		if index > palettes.length - 1
			index = 0
		newPalette = palettes[index]
		$oldIcon = $('link[rel="icon"]')
		$newIcon = $oldIcon.clone()
		$newIcon.attr 'href', 'assets/images/icons/' + newPalette + '.png'
		$newIcon.insertAfter $oldIcon
		$oldIcon.remove()
		# console.log 'Palette ⇶ "' + newPalette + '"'
		$body
			.removeClass(palette)
			.addClass(newPalette)
			.attr('data-palette', newPalette)
		return

	addStyle = (index) ->
		style = $body.attr('data-style')
		if style
			index = styles.indexOf(style)+1;
			if index > styles.length - 1
				index = 0
			newStyle = styles[index]
		else
			newStyle = 'wiggle'
		# console.log 'Style ⇶ "' + newStyle + '"'
		if style == 'wiggle'
			$('main i').each ->
				$(this).stop()
				return
		$body
			.removeClass(style)
			.addClass(newStyle)
			.attr('data-style', newStyle)
		return

	wiggle = () ->
		setInterval ->
			if !$body.hasClass('wiggle')
				return
			width = window.innerWidth
			height = window.innerHeight
			texts = $('main i').length
			i = 0
			while i < texts
				$word = $('main i').eq(i)
				x = Math.floor(Math.random() * 3 + 1) * (Math.round(Math.random()) * 2 - 1)
				y = Math.floor(Math.random() * 3 + 1) * (Math.round(Math.random()) * 2 - 1)
				z = Math.floor(Math.random() * 3 + 1) * (Math.round(Math.random()) * 2 - 1)
				time = 90
				scale = 1
				if $word.is('.symbol')
					scale = $word.attr('data-scale')
				$word.transition {
					x: x
					y: y
					rotate: z
					scale: scale
				}, time
				i++
		, 90

	onYouTubeIframeAPIReady = () ->
		window.player = new (YT.Player)('anthem',
			height: '230'
			width: '200'
			videoId: 'teeOavr7yLg')
		return

	rbma = () ->
		tag = document.createElement('script')
		tag.src = 'https://www.youtube.com/iframe_api'
		firstScriptTag = document.getElementsByTagName('script')[0]
		firstScriptTag.parentNode.insertBefore tag, firstScriptTag
		$('#rbma .click').on 'click', ->
			data = $(this).attr('data-data')
			switch data
				when 'confetti'
					$('#rbma').toggleClass data
				when 'logo'
					$(this).toggleClass 'toggled'
				when 'japan'
					$(this).toggleClass 'toggled'
					if $(this).hasClass('toggled')
						player.playVideo()
					else
						player.stopVideo()
			return
		return

	iscp = () ->
		$('#iscp .past').hover ->
			$('#iscp').toggleClass 'archive'
			return
		return

	purchase = () ->
		$body.on 'click', '#pcgd .svg svg:first-of-type', ->
			$(this).insertAfter $('#pcgd .svg svg:last-of-type')
			return
		return

	qr = () ->
		wrapColor $('#qr')
		return

	wrapColor = (el) ->
		colors = [
			'ff33ff'
			'3399cc'
			'ff6633'
			'b619cc'
			'33cc33'
			'ff0000'
		]
		$els = $(el).children()
		$els.each (i, el) ->
			if $(el).children(':not(br)').length
				wrapColor el
			else
				chars = $(el).text().split('')
				$(el).empty()
				colorIndex = 0
				$(chars).each (i, char) ->
					`var color`
					color = colors[colorIndex]
					$(el).append '<span style="color:#' + color + '">' + char + '</span>'
					if colorIndex < colors.length - 1
						colorIndex++
					else
						colorIndex = 0
					return
			return
		return

	shuffle = (array) ->
		m = array.length
		t = undefined
		i = undefined
		while m
			i = Math.floor(Math.random() * m--)
			t = array[m]
			array[m] = array[i]
			array[i] = t
		array

	random = (min, max) ->
		return Math.floor(Math.random() * (max - min)) + min

	$('.max.text .shadow').hover ->
		$(this).parents('.text').toggleClass('tease')

	$('.max.text .shadow').on 'click', () ->
		shadow = $(this)
		text = shadow.parents('.text')[0]
		$(text).transition
			maxHeight: text.scrollHeight+'px'
		, () ->
			shadow.remove()
			$(text).css
				maxHeight: 'auto'

	$('.action').click ->
		action = $(this).attr('data-action')
		switch action
			when 'peace'
				addPalette()
			when 'love'
				addStyle()

	theStyle = undefined
	player = undefined

	init()