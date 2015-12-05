window.onload = function() {
    color();
    style(0);
    $('.action').click(function() {
        var action = $(this).attr('data-action');
        update(action);
    });
    setInterval(function() {
        if($('body').hasClass('wiggle')) {
            wiggle();    
        }
    }, 90);
}

var thePalette;
function color() {
    var palettes = [
        'woodenairplanelamp',
        'hypertext',
        'nighty',
        'blue',
        'yellow',
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
    console.log('Palette \u21F6 "' + newPalette + '"');
    $('body').removeClass(thePalette).addClass(newPalette);
    thePalette = newPalette;
}

var theStyle;
function style(index) {
    var styles = [
        'wiggle',
        'spin',
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
    $('body').removeClass(theStyle).addClass(newStyle);
    theStyle = newStyle;
    // $('body').attr('class', palette[0]+' '+action);
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
    var texts = $('i').length;
    for(var i = 0; i < texts; i++) {
        var word = $('i').eq(i);
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