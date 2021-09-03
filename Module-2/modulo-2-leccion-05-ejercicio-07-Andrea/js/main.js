'use strict';

const button = document.querySelector('.button');

// function changeStyle () {
//     if(button.classList.contains('color1')){
//         button.classList.remove('color1');
//         button.classList.add('color2')
//     }
//     else if (button.classList.contains('color2')){
//         button.classList.remove('color2');
//         button.classList.add('color1')
//     }
// }

function changeStyle (){
    button.classList.toggle('color2');
}

button.addEventListener('click', changeStyle);