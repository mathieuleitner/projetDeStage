$(window).scroll(function() {
    var theta = $(window).scrollTop() / 200;
   console.log(theta)
   $('#mat').css({
        top:theta*10
   })
});