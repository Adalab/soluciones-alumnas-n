'use strict';

function calcWidth (isBorderBox, width, padding, borderSize){
    if (isBorderBox){
       console.log(`Como el elemento es border-box su ancho será ${width}(px) y el ancho total será ${width} (px) también.`);
    }
    else {
        console.log(`Como el elemento es content-box su ancho será ${width} (px) y el ancho total será ${width + 2 * padding + 2 * borderSize}(px).`);
    }
}

console.log(calcWidth(true, 100, 40, 5));

console.log(calcWidth(false, 100, 40, 5));