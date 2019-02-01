function coffeeClick() {
    var elem = document.getElementById("coffee"); 
    var pos = -100;
    var id = setInterval(frame, 10);
    function frame() {
      
      if (pos == 30) {
        clearInterval(id);
        pos = -100;
      } 
      else {
        pos = pos + 0.25; 
       // elem.style.marginTop = pos + "%"; 
        elem.style.transform = "translateY(" + pos + "%)" ; 
      }
    }
  }
  