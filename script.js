window.onload = function() {
    style();
    $('.smile').click(function() {
        update();
    });
}

function style() {
    $colors = [
        'hidden',
        'woodenairplanelamp',
        'hypertext',
        'nighty',
        'blue',
        'yellow',
        'spring',
        'fadedflag',
        'ronald'
        ];
    $index = Math.round(Math.random() * ($colors.length - 1) - 0);
    var style = $colors[$index];
    $('body').attr('class',style);
    wiggle();
}

function update() {
    if($index <= $colors.length - 2) {
        $index += 1;
    } else {
        $index = 0;
    }
    var style = $colors[$index];
    $('body').attr('class',style);
    wiggle();
}

function wiggle() {
    setInterval(function() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var texts = $('i').length;
        for(var i = 0; i < texts+1; i++) {
            var x = (Math.floor((Math.random() * 3) + 1)) * (Math.round(Math.random()) * 2 - 1);
            var y = (Math.floor((Math.random() * 3) + 1)) * (Math.round(Math.random()) * 2 - 1);
            var z = (Math.floor((Math.random() * 3) + 1)) * (Math.round(Math.random()) * 2 - 1);
            if($('i').eq(i).ismouseover() && $('i').eq(i).children('a').length) {
                $('i').eq(i).transition({x:x/9, y:y/9, rotate:z/9}, 10);
            }
            else {
                $('i').eq(i).transition({x:x, y:y, rotate:z}, 90);
            }
        }
    },100);   
}

// ismouseover() by Subin Siby
// http://subinsb.com/how-to-check-if-the-mouse-is-over-an-element-in-jquery
$.mlp ={x:0,y:0};function documentHandler(){var $current =this=== document ? $(this): $(this).contents(); $current.mousemove(function(e){jQuery.mlp ={x:e.pageX,y:e.pageY}}); $current.find("iframe").load(documentHandler);}$(documentHandler); $.fn.ismouseover =function(overThis){var result =false;this.eq(0).each(function(){var $current = $(this).is("iframe")? $(this).contents().find("body"): $(this);var offset = $current.offset(); result
result = offset.left<=$.mlp.x && offset.left + $current.outerWidth()> $.mlp.x && offset.top<=$.mlp.y && offset.top + $current.outerHeight()> $.mlp.y;});return result;};