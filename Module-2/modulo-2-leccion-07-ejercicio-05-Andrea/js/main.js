'use strict';

//apartado a:
let numbers = [20, 54, 76, 33, 100];

let sum = 0;
for (let i = 0; i < 5; i++ ) {
    sum += numbers[i];
}

let media = sum / 5;

console.log('Media de 5 =', media);

// apartado b:

numbers = [20, 54, 76, 33, 100, 1412];

sum = 0;
for (let i = 0; i < 6; i++ ) {
    sum += numbers[i];
}

media = sum / 6;

console.log('Media de 6 =', media);


// apartado c:
function average (numbers) {
    let sum = 0;
    let media;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];        
    }

    media = sum / numbers.length;
    console.log('La media es: ' + media);
}

average(numbers);