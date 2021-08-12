'use strict';

const input1 = document.querySelector('.js_input1');
const input2 = document.querySelector('.js_input2');


const info = document.querySelector('.paragraph');

const button = document.querySelector('.js_button');

const movies = [];

function inputHandler (){
    movies [0] = input1.value;
    movies [1] = input2.value;
   
    console.log(movies);
    for (const movie of movies) {
        console.log('A mi también me encanta ' + movie + '. Tenemos mucho en común!');           
    }
}

button.addEventListener('click', inputHandler);