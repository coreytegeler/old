window.onload = function() {
    wrap();
}

function wrap() {
    $(this).addClass('r');
    $('body').addClass('wrapped');
    $('p').each(function(){
        var text = $(this).html().split(' '),
            len = text.length,
            result = []; 
        for( var i = 0; i < len; i++ ) {
            if(text[i].indexOf('>') != -1 || text[i].indexOf('<') != -1 || text[i].indexOf('"') != -1 || text[i].indexOf('"') != -1) {
                if(text[i].indexOf('>') != -1) {
                    result[i] = text[i] + "&nbsp;";
                }
                else {
                    result[i] =  text[i] + " ";
                }
            }
            else if (text[i] == '  ' ) {
                
            }
            else {
                result[i] = '<span class="r">' + text[i] + '&nbsp;</span>';
            }
        }
        $(this).html(result.join(''));
    });

    $('.refresh').click(function() {
        console.log(Math.round(Math.random()));
        if(Math.random() == 1) {
            doSomething();
        }
        else {
            paint();
        }
    });
}

function paint() {
    var colors = [
        "woodenairplanelamp",
        "hypertext",
        "victoria",
        "thxbb",
        "jesus",
        "jack",
        'rgb',
        'freedom',
        'capecode',
        'hidden'
        ];
    var rand = Math.round(Math.random() * (colors.length - 1) - 0);
    var style = colors[rand];
    $('body').attr('class',style);
}

function doSomething() {
    var things = [
        'wiggle',
        'blur'
        ];
    var rand = Math.round(Math.random() * (things.length - 1) - 0);
    var style = things[rand];
    $('body').addClass(style);

    if(style == 'wiggle') {
        wiggle();
    }
    if(style == 'blur') {
        blur();
    }
}

function wiggle() {
    setInterval(function() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var texts = $('.r').length;
        for(var i = 0; i < texts+1; i++) {
            var x = (Math.floor((Math.random() * 3) + 1)) * (Math.round(Math.random()) * 2 - 1);
            var y = (Math.floor((Math.random() * 3) + 1)) * (Math.round(Math.random()) * 2 - 1);
            var z = (Math.floor((Math.random() * 3) + 1)) * (Math.round(Math.random()) * 2 - 1);
            if($('.r').eq(i).ismouseover() && $('.r').eq(i).attr('href')) {
                $('.r').eq(i).transition({x:x/5, y:y/5, rotate:z/5}, 100);
            }
            else {
                $('.r').eq(i).transition({x:x, y:y, rotate:z}, 100);
            }
        }
    },100);   
}

// ismouseover() by Subin Siby
// http://subinsb.com/how-to-check-if-the-mouse-is-over-an-element-in-jquery
$.mlp ={x:0,y:0};function documentHandler(){var $current =this=== document ? $(this): $(this).contents(); $current.mousemove(function(e){jQuery.mlp ={x:e.pageX,y:e.pageY}}); $current.find("iframe").load(documentHandler);}$(documentHandler); $.fn.ismouseover =function(overThis){var result =false;this.eq(0).each(function(){var $current = $(this).is("iframe")? $(this).contents().find("body"): $(this);var offset = $current.offset(); result
result = offset.left<=$.mlp.x && offset.left + $current.outerWidth()> $.mlp.x && offset.top<=$.mlp.y && offset.top + $current.outerHeight()> $.mlp.y;});return result;};