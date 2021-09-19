'use strict';

const input = document.querySelector('.input');
const paragraph = document.querySelector('.paragraph');

function updateInfo(event){
    paragraph.innerHTML=event.currentTarget.value;
    console.log(event.currentTarget.value);
}

input.addEventListener('keyup', updateInfo);

