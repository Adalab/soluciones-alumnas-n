"use strict";

// elemento de HTML
const button = document.querySelector(".button");
const nameInput = document.querySelector(".js_input").value;
const body = document.querySelector("body");
const saludo = `Hola, ${nameInput}.`;

// handler
function textAppears() {
  body.innerHTML += saludo;
  return body.innerHTML;
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", textAppears);
