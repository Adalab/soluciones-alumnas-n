'use strict';

const image = document.querySelector('.js-image');
const starText = document.querySelector('.js-result');


function getStar() {

    fetch('https://swapi.dev/api/people/?page=5')
        .then(response => response.json())

        .then(data => console.log(data));
    // .then(data => {
    //     starText.innerHTML = "json.data"
    // });
}





document.querySelector('.js-star').addEventListener("click", getStar);