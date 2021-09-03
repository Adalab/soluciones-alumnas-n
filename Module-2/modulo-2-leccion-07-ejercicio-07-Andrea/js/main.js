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
    },
    {
        name: 'Pepita' ,
        age: 18 ,
        job: 'periodista'
    },
    {
        name: 'Ana',
        age: 25,
        job: 'actriz'
    },
    {
        name: 'Blanca' ,
        age: 17 ,
        job: 'diseñadora'
    }
];

// Una función countAdalabers que devuelve el número de adalabers en el listado.

function cuentaAdalabers (adalabers){
    console.log('En el listado hay ' + adalabers.length + ' adalabers');
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
console.log('La media es' ,averageAge(adalabers));


// Una función theYoungest que devuelve el nombre de la adalaber más joven.
function theYoungest  (adalabers){
    let index = 0;
    let youngest = adalabers[index].age;
    let youngestName = adalabers[index].name;
    for (let i = 1; i < adalabers.length; i++) {
        if (youngest > adalabers[i].age){
            youngest = adalabers[i].age;
            youngestName = adalabers[i].name;
        }   
    }
    return youngestName;
}
console.log('La más joven es ' + theYoungest(adalabers));



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

console.log('Número de diseñadoras: ', countDesigners(adalabers));