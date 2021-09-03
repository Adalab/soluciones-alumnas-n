/*Ejercicio 1 de la lección 2.3 */

'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

let img = document.querySelector('.user__avatar');
img.src = userAvatar;

/*userAvatar ='http://www.fillmurray.com/300/300';*/

img.src = userAvatar || DEFAULT_AVATAR;



/*Ejercicio 2 de la lección 2.3*/

let nombre = 'ana';
undefined
nombre
"ana"
if (nombre === 'ana'){ console.log(`Bienvenida ${nombre}`)} else if (nombre ==='Daniela'){ console.log('Lo siento pero el usuario que has introducido no está registrado')};

undefined
nombre = 'Dayana';
"Dayana"
if (nombre === 'ana'){ console.log(`Bienvenida ${nombre}`)} else if (nombre ==='Daniela'){ console.log('Lo siento pero el usuario que has introducido no está registrado')};
undefined
nombre = 'Daniela';
"Daniela"
if (nombre === 'ana'){ console.log(`Bienvenida ${nombre}`)} else if (nombre ==='Daniela'){ console.log('Lo siento pero el usuario que has introducido no está registrado')};
