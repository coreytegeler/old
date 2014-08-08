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
            else if (text[i] == '  ') {
                
            }
            else {
                result[i] = '<span class="r">' + text[i] + '&nbsp;</span>';
            }
        }
        $(this).html(result.join(''));
    });
    wiggle();
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
            console.log(x,y,z);
            if($('.r').eq(i).ismouseover() && $('.r').eq(i).attr('href')) {
                $('.r').eq(i).transition({x:x*2, y:y*2, rotate:z*2}, 50);
            }
            else {
                $('.r').eq(i).transition({x:x, y:y, rotate:z}, 100);
            }
        }
    },100);   
}

// ismousover() plugin by Subin Siby
$.mlp ={x:0,y:0};function documentHandler(){var $current =this=== document ? $(this): $(this).contents(); $current.mousemove(function(e){jQuery.mlp ={x:e.pageX,y:e.pageY}}); $current.find("iframe").load(documentHandler);}$(documentHandler); $.fn.ismouseover =function(overThis){var result =false;this.eq(0).each(function(){var $current = $(this).is("iframe")? $(this).contents().find("body"): $(this);var offset = $current.offset(); result
result = offset.left<=$.mlp.x && offset.left + $current.outerWidth()> $.mlp.x && offset.top<=$.mlp.y && offset.top + $current.outerHeight()> $.mlp.y;});return result;};