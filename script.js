window.onload = function() {
    color();
    $('.action').click(function() {
        var action = $(this).attr('data-action');
        update(action);
    });
}

var thePalette;
function color() {
    $palettes = {
        0: ['woodenairplanelamp', ''],
        1: ['hypertext', ''],
        2: ['nighty', ''],
        3: ['blue', ''],
        4: ['yellow', ''],
        5: ['spring', ''],
        6: ['fadedflag', ''],
        7: ['ronald', ''],
        0: ['cactus', '']
    };
    paletteLength = Object.keys($palettes).length;
    $index = Math.round(Math.random() * (paletteLength - 1) - 0);

    var newPalette = $($palettes)[0][$index];
    newPalette = newPalette[0];

    if(newPalette == thePalette) {
        color();
        return;
    }
    $('body').removeClass(thePalette).addClass(newPalette);
    thePalette = newPalette;
    setInterval(function() {
        wiggle();
    }, 90);
}

var theStyle;
function style() {
    $styles = [
        'shadow',
        'hidden',
        'italic',
        ''
    ];
    
    styleLength = $styles.length;
    $index = Math.round(Math.random() * (styleLength - 1) - 0);

    var newStyle = $styles[$index];

    if(newStyle == theStyle) {
        style();
        return;
    }

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

var BIG = 1;
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
        var factor = 1;
        var scale = 1;

        // var matrix = $(word).css('transform');
        // if(matrix != 'none' && matrix != undefined) {
        //     var values = matrix.split('(')[1];
        //     values = values.split(')')[0];
        //     values = values.split(',');
        //     var a = values[0];
        //     var b = values[1];
        //     var c = values[2];
        //     var d = values[3];
        //     var scale = Math.sqrt(a*a + b*b);
        // } else {
        //     scale = '';
        // }
        if($(word).is('.symbol')) {
            scale = $(word).attr('data-scale');
            if($(word).ismouseover()) {
                factor = 9;
                scale = scale;  
                time = 10;
            } 
        }
        else if($(word).ismouseover() && $(word).children('a').length) {
            factor = 9; 
            time = 10;
            scale = 1;
        } else {
            scale = 1;
        }
        // x = 0;
        // y = 0;
        // z = 0;
        $(word).transition({x:x/factor, y:y/factor, rotate:z/factor, scale: scale}, time);
    }    
}

// ismouseover() by Subin Siby
// http://subinsb.com/how-to-check-if-the-mouse-is-over-an-element-in-jquery
$.mlp ={x:0,y:0};function documentHandler(){var $current =this=== document ? $(this): $(this).contents(); $current.mousemove(function(e){jQuery.mlp ={x:e.pageX,y:e.pageY}}); $current.find("iframe").load(documentHandler);}$(documentHandler); $.fn.ismouseover =function(overThis){var result =false;this.eq(0).each(function(){var $current = $(this).is("iframe")? $(this).contents().find("body"): $(this);var offset = $current.offset(); result
result = offset.left<=$.mlp.x && offset.left + $current.outerWidth()> $.mlp.x && offset.top<=$.mlp.y && offset.top + $current.outerHeight()> $.mlp.y;});return result;};