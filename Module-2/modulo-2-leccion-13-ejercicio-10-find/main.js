'use strict';

const users = [
    { name: 'María', isPremium: false, pin: 2389 },
    { name: 'Lucía', isPremium: true, pin: 2384 },
    { name: 'Susana', isPremium: true, pin: 2837 },
    { name: 'Rocío', isPremium: false, pin: 5232 },
    { name: 'Inmaculada', isPremium: false, pin: 8998 }
];


// * a) 
const userProblem = users.find(users => users.pin === 5232);

console.log(userProblem)

// * b)

const userDeleteIndex = users.findIndex(users => users.pin === 5232);

const userDelete = users.splice(userDeleteIndex, 1);

console.log(userDelete)
console.log(users);
