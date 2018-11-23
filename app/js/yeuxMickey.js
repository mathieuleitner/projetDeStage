$(document).ready(function() {
    console.log('ready')

    $('#manor').mousemove(function(event){
        var xPos = event.pageX / $(window).width() * 100 - 8;
        var yPos = event.pageY / $(window).height() * 100 - 120;

        if (yPos < 10){
            yPos = 10;
        }

        else if ( yPos > 90 ){
            yPos = 90;
        }

        $('.manor--mickey--tete--yeux--pupille').css({
            'left' : xPos + '%',
            'top' : yPos + '%'
        });
        console.log('yPos = ' + yPos);
        console.log('xPos = ' + xPos);
       
    });

});
