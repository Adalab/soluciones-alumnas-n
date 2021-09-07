'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const usersAcces = users.filter((user) => user.pin % 2 === 0);
console.log(usersAcces);
for (let i = 0; i < usersAcces.length; i++) {
  console.log(
    `Este usuario tiene un PIN par ${usersAcces[i].name} y, por tanto, acceso.`
  );
}
