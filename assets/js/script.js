window.onload = function() {
    color();
    compost();
    iscp();
    purchase();
    rbma();
    soylent();
    style(0);
    font();
    $('.action').click(function() {
        var action = $(this).attr('data-action');
        update(action);
    });
    setInterval(function() {
        if($('main').hasClass('wiggle')) {
            wiggle();    
        }
    }, 90);
}

$(window).resize(function() {
    font();
    var $compostPile = $('.note.compost-pile');
    var noteWidth = $compostPile.innerWidth();
    var noteHeight = $compostPile.innerHeight();
    var compostCanvas = document.getElementsByTagName('canvas')[0];
    if(compostCanvas) {
        compostCanvas.width = noteWidth;
        compostCanvas.height = noteHeight;
        $(compostCanvas).css({
            width: noteWidth,
            height: noteHeight
        });
    }

}).resize();

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
        'woodenairplanelamp',
        'default',
        'nighty',
        'blue',
        'spring',
        'fadedflag',
        'ronald',
        'cactus',
        'longsleeve',
        ' ' //not on load     
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
        'blacked-out'
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

function compost() {
    var $note = $('#compost-pile');
    var noteWidth = $note.innerWidth();
    var noteHeight = $note.innerHeight();
    var compostPaper = new paper.PaperScope();
    var canvas = document.createElement('canvas');
    canvas.width = noteWidth;
    canvas.height = noteHeight;
    $(canvas).addClass('compost')
        .attr('resize', true)
        .css({
            width: noteWidth,
            height: noteHeight
        }).
        appendTo($note);
    compostPaper.setup(canvas);
    var symbols = [];
    var svgs = ['apple','banana','beet','carrot','dirt0','dirt1','dirt2','dirt3','dirt4','dirt5','egg1','egg2','peanut','tomato'];
    for(var i = 0; i < svgs.length; i++) {
        var imgUrl = '/assets/images/compost/'+svgs[i]+'.svg';
        $.ajax({
            type: "GET",
            async: false,
            url: imgUrl,
            success: function(svg){
                var importedSvg = paper.project.importSVG(svg);
                var symbol = new paper.Symbol(importedSvg);
                symbols[i] = symbol;
            }
        });
    }
    for(var y = 0; y < 4000; y += 130) {
        for(var x = 0; x < 4000; x += 130) {
            var index = random(0,symbols.length);
            var symbol = symbols[index];
            var shiftX = random(-90,90);
            var shiftY = random(-90,90);
            if(symbol != undefined) {
                var newSymbol = symbol.place({
                    x: x + shiftX,
                    y: y + shiftY
                });
                newSymbol.rotate(random(0, 360));
                newSymbol.scale(0.25);
                newSymbol.sendToBack();
            }
        }
    }
    paper.view.draw();
}

function rbma() {
    var player;
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('anthem');
    }

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

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}