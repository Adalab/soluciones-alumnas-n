'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

//encontrar la usuaria y su posición
const userFound = users.find((user) => user.pin === 5232);
console.log(userFound.name); //Rocio
const userPlace = users.findIndex((user) => user.pin === 5232);
console.log(userPlace); //3

//eliminar usuaria Rocio pues se da de baja
users.splice(3, 1);
console.log(users); //Maria, Lucia, Susana, Inmaculada
