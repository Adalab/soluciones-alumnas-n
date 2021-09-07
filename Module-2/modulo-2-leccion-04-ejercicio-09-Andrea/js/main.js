'use strict';

const IVA = (price) => {
    let tax = Math.round(price * 0.21);
    console.log(`Precio sin IVA: ${price} €, IVA: ${tax} € y Total: ${tax + price} €`);
}

IVA(50);

IVA(10);