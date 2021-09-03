'use strict';

const mainContent = document.querySelector('.main')
const faceState = document.querySelector('.face');
const selectState = document.querySelector('#state');
const updateState = document.querySelector('.update');


// * Función para cambiar el estado de la pantalla
function changeFace() {
    // TODO Devuelve la opcion seleccionada
    let text = selectState.options[selectState.selectedIndex].text;
    // TODO Cambiar en el html la cara: estado (face)
    faceState.innerHTML = text; 
}

// * Función para generar un numero random 
function getRandom() {
    return Math.floor(Math.random() * 101);
}

// * Función para saber si un número es par o impar
function numberOddOrEven(number) {
    if (number%2 === 0) {
        mainContent.classList.remove('orange');
        mainContent.classList.add('yellow');
    } else {
        mainContent.classList.remove('yellow');
        mainContent.classList.add('orange');
    }
}


// * Función para cambiar de estado
function changeState() {
    // TODO Cambiar el estado en la pantalla
    changeFace()

    //TODO Generar un número random 
    let numberRandom = getRandom();

    //TODO Cambiar background según el número random
    numberOddOrEven(numberRandom);
}

// *Escuchar el boton 
updateState.addEventListener('click', changeState);

