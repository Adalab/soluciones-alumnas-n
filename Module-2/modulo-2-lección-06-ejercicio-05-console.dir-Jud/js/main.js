"use strict";

// elemento de HTML
const inputHtml = document.querySelector(".js_input");

// handler
function handleInputChange(event) {
  debugger;
  const text = inputHtml.value;
  console.log(text + text);
  console.dir(inputHtml); // facilita info/propiedades de la variable o elemento
  console.log(event); // facilita info/propiedades del evento
}

// listener
inputHtml.addEventListener("change", handleInputChange);
