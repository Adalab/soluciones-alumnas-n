'use strict';

function getEl (selector) {
    let yourJsConst = document.querySelector(selector);
    if (!yourJsConst) {
        console.error(`There is no element with a class, id or tag called ${selector}`);
    }
    return yourJsConst;
}


function isEven(num){
    if ( num % 2 === 0 ){
        console.log(`El número ${num} es PAR.`);
    }
    else {
        console.log(`El número ${num} es IMPAR.`);
    }
}

const myNumber = getEl('.paragraph');

console.log(`Tu número: ${myNumber.innerHTML}`);

let myNewNumber = parseInt(myNumber.innerHTML, 10);

console.log(isEven(myNewNumber));