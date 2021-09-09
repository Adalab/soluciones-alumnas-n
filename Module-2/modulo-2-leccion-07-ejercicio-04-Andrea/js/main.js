'use strict';

let currentYear = 2017;
let hunterMoons = [];

for (let i = 0; i < 15; i++) {
    currentYear += 3;
    hunterMoons[i] = currentYear;    
}

console.log('Las siguientes 15 lunas de cazador serán en los años:');
console.log(hunterMoons);