'use strict';

let adalabers = [
    {
        name: 'María' ,
        age: 29,
        job: 'diseñadora'
    },
    {
        name: 'Lucía',
        age: 31,
        job: 'ingeniera química'
    },
    {
        name: 'Susana' ,
        age: 31 ,
        job: 'periodista'
    },
    {
        name: 'Rocío',
        age: 25,
        job: 'actriz'
    },
    {
        name: 'Inmaculada' ,
        age: 21 ,
        job: 'diseñadora'
    }
];

// Una función countAdalabers que devuelve el número de adalabers en el listado.

function cuentaAdalabers (adalabers){
    console.log(adalabers.length);
    // let cont = 0;
    // for (let i = 0; i < adalabers.length; i++) {
    //     console.log(adalabers[i]);
    //     cont = cont + 1;      
    // }
    // return cont;
}

cuentaAdalabers(adalabers);

// Una función averageAge que devuelve la media de edad de listado.

function averageAge  (adalabers){
    let totalAge = 0;
    for (let i = 0; i < adalabers.length; i++) {
        totalAge += adalabers[i].age;   
    }
    let media = totalAge / adalabers.length;
    return media;
}
console.log(averageAge(adalabers));


// Una función theYoungest que devuelve el nombre de la adalaber más joven.
function theYoungest  (adalabers){
    let youngest;
    for (let i = 1; i < adalabers.length; i++) {
        if (adalabers[i-1].age > adalabers[i].age){
            youngest = adalabers[i].name;
        }   
        else{
            youngest = adalabers[i-1].name;
        }
    }
    return youngest;
}
console.log(theYoungest(adalabers));


// Una función countDesigners que devuelve el número de adalabers que son diseñadoras.

function countDesigners (adalabers){
    let cont = 0;
    for (let i = 0; i < adalabers.length; i++) {
        if (adalabers[i].job === 'diseñadora'){
            cont = cont + 1; 
        }            
    }
    return cont;
}

console.log( countDesigners(adalabers));