  var divItem = document.createElement("div");
  divItem.id = 'btns' ;
  var Button1 = document.createElement('button');
  Button1.id = 'btn1' ;
  Button1.innerHTML = '1' ;
  var Button2 = document.createElement('button');
  Button2.id = 'btn2' ;
  Button2.innerHTML = '2' ;
  var Button3 = document.createElement('button');
  Button3.id = 'btn3' ;
  Button3.innerHTML = '3' ;
  var Button4 = document.createElement('button');
  Button4.id = 'btn4' ;
  Button4.innerHTML = '4' ;
  var Button5 = document.createElement('button');
  Button5.id = 'btn5' ;
  Button5.innerHTML = '5' ;
  var Button6 = document.createElement('button');
  Button6.id = 'btn6' ;
  Button6.innerHTML = '6' ;
  var Button7 = document.createElement('button');
  Button7.id = 'btn7' ;
  Button7.innerHTML = '7' ;
  var Button8 = document.createElement('button');
  Button8.id = 'btn8' ;
  Button8.innerHTML = '8' ;
  var Button9 = document.createElement('button');
  Button9.id = 'btn9' ;
  Button9.innerHTML = '9' ;

  divItem.innerHTML += Button1.outerHTML + Button2.outerHTML + Button3.outerHTML + Button4.outerHTML + Button5.outerHTML + Button6.outerHTML + Button7.outerHTML + Button8.outerHTML  + Button9.outerHTML;
  document.body.appendChild(divItem);

var btn_list = [];
btn_list[1] = document.getElementById('btn1');
btn_list[2] = document.getElementById('btn2');
btn_list[3] = document.getElementById('btn3');
btn_list[4] = document.getElementById('btn4');
btn_list[5] = document.getElementById('btn5');
btn_list[6] = document.getElementById('btn6');
btn_list[7] = document.getElementById('btn7');
btn_list[8] = document.getElementById('btn8');
btn_list[9] = document.getElementById('btn9');
btn_list[5].onclick = function() {
    for ( var i = 1 ; i <= 9 ; i++ ){
        if (i != 5){
            this_btn = btn_list[i].innerHTML ;
            if (this_btn == 1)
                btn_list[i].innerHTML = 4;
            if (this_btn == 2)
                btn_list[i].innerHTML = 1;
            if (this_btn == 3)
                btn_list[i].innerHTML = 2;
            if (this_btn == 4)
                btn_list[i].innerHTML = 7;
            if (this_btn == 6)
                btn_list[i].innerHTML = 3;
            if (this_btn == 7)
                btn_list[i].innerHTML = 8;
            if (this_btn == 8)
                btn_list[i].innerHTML = 9;
            if (this_btn == 9)
                btn_list[i].innerHTML = 6;
        }
    }
};
