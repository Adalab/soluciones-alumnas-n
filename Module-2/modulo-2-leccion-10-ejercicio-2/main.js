'use strict';

const image = document.querySelector('.js-image');


function getADog() {

    fetch('https://random.dog/woof.json')
        .then(response => response.json())
        .then(jsonData => {
            image.src = jsonData.url
        });
}



document.querySelector('.js-dog').addEventListener("click", getADog);