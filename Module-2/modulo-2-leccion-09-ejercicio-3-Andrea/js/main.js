'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];



function bestLostNumber() {
    console.log('estoy dentro');
    let evens = findEvens(lostNumbers); 
    let multiplesOf3 = findMultiplesOf(lostNumbers);
    let bestLostNumbers = evens.concat(multiplesOf3);
    console.log('best lost numbers: ' + bestLostNumbers);
    return bestLostNumbers;
}

bestLostNumber();

function findEvens(array) {
    let evens = [];
    for (let index = 0; index < array.length; index++) {
        if(array[index] % 2 === 0) {
            evens.push(array[index]);
        }        
    }
    console.log('Números pares: ' + evens);
    return evens;
}
// findEvens(lostNumbers);

function findMultiplesOf (array){
    let chosenOnes = [];
    for (let index = 0; index < array.length; index++) {
        if(array[index] % 3 === 0){
            chosenOnes.push(array[index]);
        }
        
    }
    console.log('Números múltiplos de 3: ' + chosenOnes);
    return chosenOnes;
}

// findMultiplesOf(lostNumbers);