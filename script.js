window.onload = function() {
    var html = $.parseHTML($('main').html());
    console.log(html);
    for (var i = 0; i < html.length; i++) {
        if (html[i] != "" || html[i] != "<br>") {
            console.log(html[i]);
            html[i].remove();
        }
    }
}