'use strict';

// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}

// When the function mySecretLetter() is executed BEFORE showing the variable secretLetter, secretLetter changes due to it. From Y --- > X 


// console.log(`mySecretLetter: ${mySecretLetter()}`); // devuelve "x"

// console.log(`secretLetter: ${secretLetter}`); // devuelve "x"


// When the function is put AFTER the variable, secretLetter is set to its initial value because the function has not executed yet, therefore Y:

console.log(`secretLetter: ${secretLetter}`); // devuelve "Y"
console.log(`mySecretLetter: ${mySecretLetter()}`); // devuelve "X"



