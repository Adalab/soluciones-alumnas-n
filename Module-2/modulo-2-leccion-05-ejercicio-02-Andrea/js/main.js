'use strict';

const button = document.querySelector('.button');

const myName = document.querySelector('.input');

function greetings() {
    console.log(`Hola ${myName.value}`);
}

button.addEventListener('click', greetings);