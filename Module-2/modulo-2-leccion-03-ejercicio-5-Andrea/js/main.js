'use strict';

const notif = document.querySelector('.notification');

const title = document.querySelector('.title');

const text = document.querySelector('.text');

if (notif.classList.contains('warning')){
    title.innerHTML = 'AVISO';
    text.innerHTML = 'Tenga cuidado';
}
else if (notif.classList.contains('error')){
    title.innerHTML = 'ERROR';
    text.innerHTML = 'Ha surgido un error';
}
else {
    title.innerHTML = 'CORRECTO';
    text.innerHTML = 'Los datos son correctos';
}