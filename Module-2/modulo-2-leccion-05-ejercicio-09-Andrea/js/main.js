'use strict';

const teacher1 = document.querySelector('.teacher1');

const teacher2 = document.querySelector('.teacher2');

const teacher3 = document.querySelector('.teacher3');

const fav1 = document.querySelector('.favorite');
const fav2 = document.querySelector('.favorite');
const fav3 = document.querySelector('.favorite');

function selectTeacher (event){

    const teacherSelected = event.currentTarget;
    console.log(teacherSelected);
    teacherSelected.classList.toggle('teacher--selected');

    const fav = teacherSelected.querySelector('.favorite');
    console.log(fav);

    if (fav.innerHTML === 'Quitar'){
        fav.innerHTML = 'Añadir';
    } 
    else{
        fav.innerHTML = 'Quitar';
    }
}

teacher1.addEventListener('click',selectTeacher);
teacher2.addEventListener('click',selectTeacher);
teacher3.addEventListener('click',selectTeacher);