"use strict";

const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron'
  }
];

//Recorrido del arreglo
for (let index = 0; index < items.length; index++) {
  //Variables
  const element = items[index];
  let position = index;
  let type = typeof element;
  let parents = items[3];

    //Recorrido dentro del objeto que esta en la posición 3
    if (position === 3) {
    for (const property in parents){
      console.log(`El dato ${property}:${parents[property]} está en la posición ${position} y es de tipo ${type}`);
    }
    //El resto del array que no corresponde a un objeto puede ir en el ciclo normal
  } else {
    console.log(`El dato ${element} está en la posición ${position} y es de tipo ${type}`)
  }
}

