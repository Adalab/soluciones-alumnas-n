'use strict';

const button = document.querySelectorAll('.js_button');
console.log(button);

const body = document.querySelector('.js_body');

function alarm () {
    body.classList.toggle('alarm');
}

button[0].addEventListener('click', alarm);
button[1].addEventListener('click', alarm);
button[2].addEventListener('click', alarm);
