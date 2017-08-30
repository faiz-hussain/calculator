var box = document.getElementById('display');


function toScreen(x){
    box.value += x;
    if(x ==='c'){
        box.value = '';
    }
}

function calculate(){
    x = box.value;
    x = eval(x);
    box.value = x;
}

function power(){
    x = box.value;
    x = eval (x * x);
    box.value = x;
}

function backspace(){
   var num = box.value;
   var length = num.length -1;
   var newNum = num.substring(0,length);
   box.value = newNum;
}