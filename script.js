window.onload = function() {
    var wrapBtn = $('.wrap');
    $('.wrap').click(function() {
        wrap();
    });   
}

function wrap() {
    $(this).addClass('r');
    $('body').addClass('wrapped');
    $('p').each(function(){
        var text = $(this).html().split(' '),
            len = text.length,
            result = []; 

        for( var i = 0; i < len; i++ ) {
            if(text[i].indexOf('>') != -1 || text[i].indexOf('<') != -1 || text[i].indexOf('"') != -1) {
                result[i] =  text[i];
            }
            else if (text[i] == '  ') {
                
            }
            else {
                result[i] = '<span class="r">' + text[i] + '&nbsp;</span>';
            }
        }
        $(this).html(result.join(' '));
    });
    fly();
}

function fly() {
    $('body').mousemove(function(event) {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var texts = $('.r').length;
        for(var i = 0; i < texts+1; i++) {
            var randX = Math.sin(1/(event.clientX))*800*(i+1/5) - event.clientX/2;
            var randY = Math.sin(1/(event.clientY))*800*(i+1/5) - event.clientY/2;
            var x = randX;
            var y = randY;
            var xy = randX/randY;
            $('.r').eq(i).css({rotateX:x, rotateY:y, x:x, y:y});
        }
    });
}