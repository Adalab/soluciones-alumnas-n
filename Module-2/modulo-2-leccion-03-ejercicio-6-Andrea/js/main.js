'use strict';

let avocados;
let avocadoPrice = 1.5;
let money = 0.7;

// if (money >= avocadoPrice) {
//   avocados = money / avocadoPrice;
// } else {
//   avocados = 0;
// }

avocados = money >= avocadoPrice ? money / avocadoPrice : 0;
console.log(`Vas a comprar: ${avocados} aguacates`);