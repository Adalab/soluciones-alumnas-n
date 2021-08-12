'use strict';

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');

function changeStyle (event){
   const selectedButton = event.currentTarget;
    selectedButton.classList.toggle('color2');
}

button1.addEventListener('click', changeStyle);
button2.addEventListener('click', changeStyle);