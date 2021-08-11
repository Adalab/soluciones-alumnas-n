'use strict';

const userIngredient = 'MANZANA';

const ingredient = userIngredient.toLowerCase();

switch (ingredient) {
    case 'plátano':
        console.log('Puedes hacer banana bread');
        break;
    case 'manzana':
    console.log('Puedes hacer hojaldres rellenos de manzana');
        break;
    case 'huevo':
    console.log('Si tienes huevos puedes hacer flan');
        break;
    default:
        console.log('Si no tienes plátano, manzana o huevos puedes hacer arroz con leche');
}