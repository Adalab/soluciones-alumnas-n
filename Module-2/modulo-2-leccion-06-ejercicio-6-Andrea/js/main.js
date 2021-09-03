'use strict';

const pearsBasket = {
    maxNPears : 15, // Número máximo de peras
    minNPears : 1, // Número mínimo de peras
    nPears : 8, // Número actual de peras
    n0Pears : 0 // Número inicial de peras
};

// Método para añadir al cesto una pera:
pearsBasket.addPear = (nPears) => {
    nPears=nPears+1;
    return nPears;
}

// Método para sacar del cesto una pera:
pearsBasket.takePear = (nPears) => {
    nPears=nPears-1;
    return nPears;
}

// Método para restablecer el número de peras al valor inicial:
pearsBasket.resetBasket = (nPears, n0Pears) => {
    nPears=n0Pears;
    return nPears;
}

let pearsNow = pearsBasket.addPear(pearsBasket.nPears);
console.log(`Peras después de añadir 1: ${pearsNow}`);
pearsNow = pearsBasket.takePear(pearsBasket.nPears);
console.log(`Peras después de quitar 1: ${pearsNow}`);
pearsNow = pearsBasket.resetBasket(pearsBasket.nPears, pearsBasket.n0Pears);
console.log(`Peras después de reiniciar la cesta: ${pearsNow}`);

pearsBasket.nPears = pearsBasket.resetBasket(pearsBasket.nPears, pearsBasket.n0Pears);
console.log(pearsBasket);