'use strict';
const text = document.querySelector('.text')
const button = document.querySelector('.boton');

function changeText(){
    text.innerHTML = ('Mi primer click, ¡ole yo y la mujer que me parió!');
}

button.addEventListener('click', changeText);