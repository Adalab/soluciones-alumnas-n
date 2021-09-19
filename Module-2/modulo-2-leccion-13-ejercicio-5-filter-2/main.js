'use strict';

const pins = [2389, 2384, 2837, 5232, 8998];


const evenNumber = pins.filter(
    pins => {
    if (pins % 2 === 0) {
        return pins;
        } 
    }
);


console.log(evenNumber)