"use strict";

const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');

function selectBtn() {
  screen.classList.toggle('red')
}

//forEach permite recorrer los elementos del array sin necesidad de usar for 
//Se crea una función que recorra cada elemento y escuche cuando se da click sobre este 
btns.forEach(btn => btn.addEventListener('click', selectBtn));

