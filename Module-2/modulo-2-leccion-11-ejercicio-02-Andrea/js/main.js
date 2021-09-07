'use strict';

const output = document.querySelector('.js-result');

const input = document.querySelector('.js-input');

const button = document.querySelector('.js-submit');

const list = document.querySelector('.js-char-list');

const buttonNext = document.querySelector('.js-button');




function handleButton () {    
    let url = urlMaker(input.value);
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(characters => {
        console.log(characters);
        const people = characters.results;
        if(characters.count > 0) {
            list.innerHTML = '';
            for (let i = 0; i < people.length; i++) {
            list.innerHTML += `<li class="list-item">${people[i].name} : ${people[i].gender}</li>`;              
        }
        }
        else {
            list.innerHTML = `<li class="list-item">No se encontraron resultados</li>`; 
        }
        if(characters.next !== null){
            buttonNext.classList.remove('hidden');
        }
    })
}

let page = 2;

function handleButton2 () {
    console.log('estoy aqui');
    let url = addNextPage(input.value, page);
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(characters => {
        console.log(characters);
        console.log(characters.next);
        const people = characters.results;
            // list.innerHTML = '';
            for (let i = 0; i < people.length; i++) {
            list.innerHTML += `<li class="list-item">${people[i].name} : ${people[i].gender}</li>`;     
        }
        if(characters.next !== null){
            page++;
        }
        else {
            buttonNext.classList.add('hidden');
        }

    })
    
}

button.addEventListener('click', handleButton);

buttonNext.addEventListener('click', handleButton2);

function urlMaker(input){
    const url = 'https://swapi.dev/api/people/?search=' + input ;
    return url;
}

function addNextPage(input, page){
    let urlBeggining = urlMaker(input);
    let url = urlBeggining + '&page=' + page;
    return url;
}
