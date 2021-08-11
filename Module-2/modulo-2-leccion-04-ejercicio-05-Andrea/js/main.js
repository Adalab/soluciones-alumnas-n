'use strict';

function getEl (selector) {
    const yourJsConst = document.querySelector(selector);
    return yourJsConst;
}


const image = getEl('.image');
console.log(`image:`);
console.log(image);



const title = getEl('.title');
console.log(`title:`);
console.log(title);


const box = getEl('.container');
console.log(`box:`);
console.log(box);

