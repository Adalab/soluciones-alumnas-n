'use strict';

const input = document.querySelector('.js-input');
const submitButton = document.querySelector('.js-button'); 
const title = document.querySelector('.js-subtitle');

function getURL (){
    let org = input.value;
    let url = 'https://api.github.com/orgs/' + org;
    return url;
}

function updateTitle(){
  let org = input.value;
  title.innerHTML = 'Mostrando todos los repositorios de: ' + org;
}

function getGithubOrg() {
    let url = getURL();
    fetch(url)
      .then(response => response.json())
      .then(data => {
        return fetch(url + '/repos');
      })
      .then(reposResponse => reposResponse.json())
      .then(reposName => {
        const namesList = document.querySelector('.js-list');
        if(reposName.message === 'Not Found'){
          namesList.innerHTML = `<li class="list-item">Ese nombre de organización es inválido</li>`;
        }
        else {
          updateTitle();
          namesList.innerHTML = '';
          for (const item of reposName) {       
            namesList.innerHTML += `<li class="list-item">${item.name}</li>`;
          }
        }
      
      })
  } 

input.addEventListener('change',getURL);
submitButton.addEventListener('click', getGithubOrg);