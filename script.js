window.onload = function() {
    // wrap();
    style();
}

function style() {
    var colors = [
        'woodenairplanelamp',
        'hypertext',
        'nighty',
        'rgb',
        'hidden',
        'blue'
        ];
    var rand = Math.round(Math.random() * (colors.length - 1) - 0);
    var style = colors[rand];
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
            if($('i').eq(i).ismouseover() && $('i').has('a')) {
                $('i').eq(i).transition({x:x/9, y:y/9, rotate:z/9}, 90);
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