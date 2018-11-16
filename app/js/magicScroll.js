$(window).scroll(function() {
     var theta = $(window).scrollTop() / 100;
     console.log(theta)
     $('#mat').css({
          top:theta*10
     });

     if(theta >= 0 && theta < 5){
          $('body').css({
               background:"#111"
          });
     }
     
     else if(theta >= 5 && theta < 15){
          $('body').css({
               background:"red"
          });
          $('.menu__label').css({
               color:"white"
          });
          $('.menu__hamburger__part').css({
               background:"#2bcfc1"
          });
     }

     else if(theta >= 15 && theta < 25){
          $('body').css({
               background:"white"
          });
          $('.menu__label').css({
               color:"black"
          });
          $('.menu__hamburger__part').css({
               background:"black"
          });
     }
     
     else if(theta >= 25 && theta < 35){
          $('body').css({
               background:"gray"
          });
          $('.menu__label').css({
               color:"white"
          });
          $('.menu__hamburger__part').css({
               background:"rgb(178,204,42)"
          });
     }

});
