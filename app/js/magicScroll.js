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
               background:"#d63939"
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
               background:"#d63939"
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

     else if (theta >= 28 && theta < 38){
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

     // SICPA

     else if (theta >= 38 && theta < 48){
          $('.img--osec').css({
               transform:"scaleX(1)"
          });
          $('.osec--building').css({
               transform:"scaleY(1)"
          });
          $('body').css({
               background:"white"
          });
          $('.menu__label').css({
               color:"black"
          });
          $('.menu__hamburger__part').css({
               background:"rgb(251, 91, 203)"
          });
     }

     // PMI

     else if (theta >= 48 && theta < 58){
          $('.img--osec').css({
               transform:"scaleX(1)"
          });
          $('.osec--building').css({
               transform:"scaleY(1)"
          });
          $('body').css({
               background:"#0066ff"
          });
          $('.menu__label').css({
               color:"white"
          });
          $('.menu__hamburger__part').css({
               background:"gold"
          });
     }

      // Nespresso

      else if (theta >= 58 && theta < 68){
          $('.img--osec').css({
               transform:"scaleX(1)"
          });
          $('.osec--building').css({
               transform:"scaleY(1)"
          });
          $('body').css({
               background:"#e1c292"
          });
          $('.menu__label').css({
               color:"black"
          });
          $('.menu__hamburger__part').css({
               background:"brown"
          });
     }

});
