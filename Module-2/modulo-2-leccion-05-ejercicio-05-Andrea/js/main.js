'use strict';

const background = document.querySelector('.main');


function changeColor (event){
    if(event.key === 'r'){
        if(background.classList.contains('purple')){
            background.classList.remove('purple');
            background.classList.add('red');
        }
    }
    else if(event.key === 'm'){
        if (background.classList.contains('red')){
            background.classList.remove('red');
            background.classList.add('purple');
        }
    }


}

document.addEventListener('keydown', changeColor);

// IMPORTANTE no se pone en este caso el elemento background sino que se hace directamente sobre document