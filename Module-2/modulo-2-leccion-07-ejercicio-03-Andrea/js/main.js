'use strict';

let acc = 0;

for (let i = 0; i < 9; i++) {
    acc += acc + 2;    
}

console.log('El resultado total es: ' + acc);