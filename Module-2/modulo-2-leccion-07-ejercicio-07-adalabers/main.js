"use strict";

// * 1. Crear estructura de datos
// Array con objetos

const adalabers = [
  {
    name: "María",
    age: 29,
    job: "Diseñadora ",
  },
  {
    name: "Lucía",
    age: 31,
    job: "Ingenieria química",
  },
  {
    name: "Susana",
    age: 34,
    job: "Periodista",
  },
  {
    name: "Rocío",
    age: 25,
    job: "actriz ",
  },
  {
    name: "Inmaculada",
    age: 21,
    job: "diseñadora ",
  },
  {
    name: "Patricia",
    age: 31,
    job: "arquitecta ",
  },
];

// * Creacion de funciones
// TODO: número de adalabers: Contar la longitud del arreglo para saber cuantas Adalabers hay

function countAdalabers() {
  // Saber que tan longitud tiene el array (Su longitud inicial es de 5,
  // pero recordar que cuenta desde 0, asi que la posición 5º sera la posición 4)
  const length = adalabers.length;

  return length;
}

console.log(`El arreglo adalabers tiene una longitud de ${countAdalabers()}`);

// TODO: edad media de adalabers

function averageAge() {
  //Inicializar la variable suma desde cero, para sumar las edades con el recorrido for
  let sumAge = 0;

  //Recorrido del array adalabers: llamando la edad de cada adalaber y sumandalo
  for (let i = 0; i <= adalabers.length - 1; i++) {
    let ageAdalabers = adalabers[i].age; //llamando cada edad del arreglo
    sumAge = sumAge + ageAdalabers; // sumando en cada iteración
  }

  //Operación de la media
  const media = sumAge / adalabers.length;

  return media
}

console.log(`La edad media de las adalaber es ${averageAge()}`);

// TODO: Nombre de la adalaber más joven

function theYoungest() {
  // * Inicializar variables: 
  //Posición inicial para comenzar el ciclo for
  let ageMinor = adalabers[0].age;
  //Posición de la adalaber más joven
  let position = 0;

  // * Recorrido para buscar la Adalaber más joven 
  for (let i = 1; i < adalabers.length; i++) {
    let ageAdalabers = adalabers[i].age;

    //Busca la Adalaber más joven 
    if (ageAdalabers < ageMinor) {
      ageMinor = ageAdalabers;
    }

    //Busca la posicion de la Adalaber más joven
    if (ageAdalabers === ageMinor) {
      position = i;
    }
  }

  //nombrar variable de la posicion del la Adalaber más joven
  let theYoungest = adalabers[position].name
  
  return theYoungest
}

console.log(`La adalaber más joven es ${theYoungest()}`);

// TODO: Número de Adalabers diseñadoras

function countDesigners() {

  // * Inicializar variables: 
  //Posición inicial para comenzar el ciclo for
  let designer = 'diseñadora';
  //Contar el número de diseñadoras
  let count = 0;

  // * Recorrido para buscar las Adalaber diseñadoras
  for (let i = 0; i < adalabers.length; i++) {
    //Recorrido de adalabers en profesión 
    let designersAdalabers = adalabers[i].job;
    //Quitar espacios (trim) convertir las letras en minuscula (toLowerCase)
    let sameFormat = designersAdalabers.trim().toLowerCase();
    
    //Busca las diseñadoras Adalaber y las va sumando 
    if (sameFormat === designer) {
      count = count + 1;
    }
    
  }
  
  return count
}

console.log(`Hay ${countDesigners()} diseñadoras Adalabers`) 

  



