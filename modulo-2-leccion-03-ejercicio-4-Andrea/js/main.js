'use strict'; 

// let dogAgeN = 6;

function dogToHuman (dogAge){
    if (dogAge === 1){
        return console.log('Tu perro tiene 15 años humanos');
    }
    else if (dogAge === 2){
        return console.log(`Tu perro tiene ${15+9} años humanos`);
    }
    else {
        let newAge = (dogAge - 2)*5;
        return console.log(`Tu perro tiene ${newAge} años humanos`);
    }
}
console.log(dogToHuman(1));

