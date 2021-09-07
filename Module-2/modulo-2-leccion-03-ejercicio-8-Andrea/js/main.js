
'use strict';

// const year = 2006;

// function leapYear (year){
//    let aux = year % 4;
//    console.log(aux);
//    switch (aux){
//        case '0':
//         console.log(`Este año, ${year}, es bisiesto`);
//         break;
//        case '1':
//         console.log(`El próximo año bisiesto será, ${year + 3}`);
//         break;
//        case '2':
//         console.log(`El próximo año bisiesto será, ${year + 2}`);
//         break;
//        case '3':
//         console.log(`El próximo año bisiesto será, ${year + 1}`);
//         break;
//    }
// }

// console.log(leapYear(2005));

let year = 2003;
let resto = (year % 4).toString();
switch (resto){
    case '1':
     console.log(`El próximo año bisiesto será, ${year + 3}`);
     break;
    case '2':
     console.log(`El próximo año bisiesto será, ${year + 2}`);
     break;
    case '3':
     console.log(`El próximo año bisiesto será, ${year + 1}`);
     break;
    default:
    console.log(`Este año, ${year}, ya es bisiesto`);
}