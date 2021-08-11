'use strict';

const myWindow = document.querySelector('.box');

const ventana = document.defaultView;

// * Para poder usar la window hay que crearse un elemento ventana usando document.defaultView

function colorfulScroll() { 
    if(window.scrollY >= 250){
        console.log(`Se han superado 250px`);
        if(myWindow.classList.contains('container1')){
            myWindow.classList.remove('container1');
            myWindow.classList.add('container2');
        }    
    }
    else{
        console.log(`Aun no se han llegado a 250px`);
        if(myWindow.classList.contains('container2')){
            myWindow.classList.remove('container2');
            myWindow.classList.add('container1');
        }
    }    
}

ventana.addEventListener('scroll', colorfulScroll);