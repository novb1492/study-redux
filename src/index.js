let plus=document.querySelector('#plus');
let num=document.querySelector('#num');
let minus=document.querySelector('#minus');

let count=0;

num.innerHTML=count;

function updateText() {
  num.innerHTML=count;
}
function add() {
  count=count+1;
  updateText();
}
function minusF() {
  count=count-1;
  updateText();
}

plus.addEventListener("click",add);
minus.addEventListener("click",minusF);

