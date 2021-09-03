'use strict';

const background = document.querySelector('.main');


function changeColor (event){
event.currentTarget()
    if(background.classList.contains('purple')){
        background.classList.remove('purple');
        background.classList.add('red');
    }
  } else if (event.key === 'm') {
    if (background.classList.contains('red')) {
      background.classList.remove('red');
      background.classList.add('purple');
    }
  }
}

document.addEventListener('keydown', changeColor);
