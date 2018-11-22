$(window).scroll(function() {
     var theta = Math.trunc($(window).scrollTop() / $(window).height() *10);
     console.log(theta)
     
     $('#mat').css({
          top:theta*10
     });

     if(theta >= 0 && theta < 3){
          $('body').css({
               background:"#111"
          });
     }
     
     else if(theta >= 3 && theta < 8){
          $('body').css({
               background:"red"
          });
          $('.menu__label').css({
               color:"white"
          });
          $('.menu__hamburger__part').css({
               background:"#2bcfc1"
          });
          $('.img--manor').css({
               transform:"scaleX(0)"
          });
          $('.manor--mickey').css({
               transform:"translateY(500px)"
          });
     }

     else if(theta >= 8 && theta < 14){
          $('body').css({
               background:"red"
          });
          $('.menu__label').css({
               color:"white"
          });
          $('.menu__hamburger__part').css({
               background:"#2bcfc1"
          });
          $('.img--manor').css({
               transform:"scaleX(1)"
          });
          $('.manor--mickey').css({
               transform:"translateY(0px)"
          });
          
     }

     else if(theta >= 14 && theta < 23){
          $('body').css({
               background:"white"
          });
          $('.menu__label').css({
               color:"black"
          });
          $('.menu__hamburger__part').css({
               background:"black"
          });
          $('.img--manor').css({
               transform:"scaleX(0)"
          });
          $('.manor--mickey').css({
               transform:"translateY(-500px)"
          });
     }
     
     else if(theta >= 23 && theta < 28){
          $('body').css({
               background:"gray"
          });
          $('.menu__label').css({
               color:"white"
          });
          $('.menu__hamburger__part').css({
               background:"rgb(178,204,42)"
          });
          $('.img--osec').css({
               transform:"scaleX(0)"
          });
          $('.osec--building').css({
               transform:"scaleY(0)"
          });
     }

     else if (theta >= 28 && theta < 33){
          $('.img--osec').css({
               transform:"scaleX(1)"
          });
          $('.osec--building').css({
               transform:"scaleY(1)"
          });
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
