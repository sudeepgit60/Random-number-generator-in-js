const my_button=document.getElementById("mybutton");  // storing button with constant
const my_label=document.getElementById("mylabel");  // storing label with constant
let max=6;
let min=1;
let randomNum;

mybutton.onclick=function(){  
    randomNum=Math.floor(Math.random()*max) + min;
    mylabel.textContent=randomNum;
}

