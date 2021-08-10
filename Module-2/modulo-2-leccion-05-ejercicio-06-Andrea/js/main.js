'use strict';

const input = document.querySelector('.input');
const paragraph = document.querySelector('.paragraph');

function updateInfo(event){
    paragraph.innerHTML=event.currentTarget.value;
    console.log(event.currentTarget.value);
}

input.addEventListener('keydown', updateInfo);

// Por qué lo que se escribe en paragraph va siempre con un keypress de retraso? 

