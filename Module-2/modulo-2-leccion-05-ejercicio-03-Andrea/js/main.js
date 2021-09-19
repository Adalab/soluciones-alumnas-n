'use strict';

const paragraph = document.querySelector('.paragraph');

const paragraph2 = document.querySelector('.paragraph2');

function addParagraph () {
    console.log(`Se está ejecutando`);
    const addedParagraph = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloribus reprehenderit blanditiis, vero voluptate harum vel voluptatibus sed ullam aperiam officia consequatur perspiciatis expedita praesentium, tenetur voluptates laboriosam eaque odit?</p>`;
    paragraph2.innerHTML +=  addedParagraph; 
}

paragraph.addEventListener('mouseover', addParagraph);