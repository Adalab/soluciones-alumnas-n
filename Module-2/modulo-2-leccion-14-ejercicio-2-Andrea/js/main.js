'use strict';

let counter = 0;

const page = document.querySelector('.js-body');
const title = document.querySelector('.js-title');
const container = document.querySelector('.js-container');

let html = '';
const incrementAndShowCounter = () => {
  const time = document.querySelector('.js-time');
  if (counter < 12 ){
    paintGrape();
    counter++;    
    time.innerHTML = counter;   
  }
  else{
    time.classList.add('hidden');
    html = `<img class="img js-img hidden" src="./images/uva.png" alt="uva">`;
    container.innerHTML = html;
    container.classList.add('hidden');
    celebration();
  }
};

function paintGrape(){
  if(counter < 12 ){ 
    html += `<img class="img js-img" src="./images/uva.png" alt="uva">`;
    container.innerHTML = html;
  }
}

function celebration(){
  page.classList.add('bg');
  title.classList.remove('hidden');
}
setInterval(incrementAndShowCounter, 1000);