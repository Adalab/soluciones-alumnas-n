'use strict';

function workWithMovies () {
    const movies = ['El viaje de Chihiro', 
'Harry Potter y el prisionero de Azkabhan',
'Alicia en el país de las maravillas'];

console.log(movies);

movies[3]='La bella durmiente'; //se ha añadido un elemento más al array

console.log(movies);
movies[0]='El castillo ambulante'; //se sustituye el primer elemento
console.log(movies );
}

console.log(workWithMovies());