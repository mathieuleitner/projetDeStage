function extraire() {
    character = message.substring(I, I=I+1) ;
    if ( character == "-" &&  message.substr(I, 5) == "stop-" ) {              
         character = "<br>" ;
         I = I + 5;
         }
    IntroMessage.innerHTML += character;
    if ( I < message.length ) setTimeout(extraire, 120);
    }
I = 0 ;
message = "";
extraire();


setTimeout(function msgWax() {
    character = msg.substring(J, J=J+1) ;
    if ( character == "-" &&  msg.substr(J, 5) == "stop-" ) {              
         character = "<br>" ;
         J = J + 5;
         }
    if ( character == "-" &&  msg.substr(J, 6) == "space-" ) {              
         character = "&nbsp;" ;
         J = J + 6;
         }    
    Wax.innerHTML += character;
    if ( J < msg.length ) setTimeout(msgWax, 120);
}, 10);
J = 0 ;
msg = "";
msgWax();
