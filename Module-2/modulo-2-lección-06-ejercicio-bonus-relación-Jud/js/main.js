"use strict";

//BONUS-2
//Objeto 1
const adalaber = {
  name: "Rosa",
};
console.log(adalaber.name); // Rosa

//Objeto 2 se relaciona con objeto 1
const adalaber2 = adalaber;
console.log(adalaber2.name); // Rosa

// Cambiamos la propiedad `name` del Objeto 1
adalaber.name = "Rocío";
// Y cambia dicha propiedad de ambos Objetos a la vez
console.log(adalaber.name); //Rocío
console.log(adalaber2.name); //Rocío

//BONUS-2
const text = document.querySelector(".js_input");
const numb = document.querySelector(".js_inputN");

//Handler
function handlerInputChange(event) {
  debugger;
  const text1 = text.value;
  console.log(text1 + text1);
  console.log(text1.trim() + text1.trim()); // trim es un método() que elimina espacios
  console.log(text1.length); // al ser una propiedad no lleva paréntesis
}

function handlerInputNChange(event) {
  debugger;
  const numb1 = parseFloat(numb.value); // pasa de tipo string a tipo number
  console.log(numb1 + numb1);
  console.log(numb1.toFixed(2)); // toFixed() es un método que devuelve 2 decimales como máximo y redondea
}

//Listener
text.addEventListener("change", handlerInputChange);
numb.addEventListener("change", handlerInputNChange);
