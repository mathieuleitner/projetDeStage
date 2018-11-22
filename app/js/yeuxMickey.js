$(document).ready(function() {
    console.log('ready')

    $('#manor').mousemove(function(event){
        var xPos = event.pageX/10-40;
        var yPos = event.pageY/10-110;
        $('.manor--mickey--tete--yeux--pupille').css({
            'left' : xPos + '%',
            'top' : yPos + '%'
        });
       
    });

});
