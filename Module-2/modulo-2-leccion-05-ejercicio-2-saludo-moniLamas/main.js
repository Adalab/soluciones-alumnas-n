'use strict';

// debugger;


const button = document.querySelector(".js-btn");

function sayHi() {
const name = document.querySelector(".name").value;
console.log(`Hola ${name}`)
}

button.addEventListener("click", sayHi);

