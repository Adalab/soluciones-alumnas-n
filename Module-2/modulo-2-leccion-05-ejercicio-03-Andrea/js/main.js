'use strict';

const paragraph = document.querySelector('.paragraph');

function addParagraph () {
    paragraph.innerHTML +=  `<p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloribus reprehenderit blanditiis, vero voluptate harum vel voluptatibus sed ullam aperiam officia consequatur perspiciatis expedita praesentium, tenetur voluptates laboriosam eaque odit?</p>`;
}

paragraph.addEventListener('mouseover', addParagraph);