window.onload = function() {
    wrap();
    linkFix();
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
            var randX = Math.sin(1/Math.floor((Math.random() * 5) + 1)*i);
            var randY = Math.sin(1/Math.floor((Math.random() * 5) + 1)*i);
            var x = randX;
            var y = randY;
            var xy = randX/randY;
            $('.r').eq(i).transition({rotateX:x, rotateY:y, x:x, y:y}, 100);
        }
    },100);   
}
function linkFix() {
    $('a').click(function() {
        var url = $(this).attr('href');
        window.open(url,'_blank');
    });
}