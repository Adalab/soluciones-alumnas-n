const nameCompi = 'Maitane';
const surname = 'Abad';
const secondSurname = 'Conde';
const totalCaracteres = nameCompi.length + surname.length + secondSurname.length;
const title = document.querySelector('.title');
title.innerHTML = `El nombre de mi compañera es ${nameCompi} ${surname} ${secondSurname}, y está compuesto por ${totalCaracteres} caracteres.`;

/* Si lo hago así se suman los espacios al conteo de los caracteres, y me pone nerviosa

const nameCompi = 'Maitane Abad Conde';
const title = document.querySelector('.title');
title.innerHTML = `El nombre de mi compañera es ${nameCompi}, y está compuesto por ` + nameCompi.length + `caracteres.`; */

