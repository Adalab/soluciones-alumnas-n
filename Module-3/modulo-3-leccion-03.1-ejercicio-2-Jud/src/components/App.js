import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  // function withoutVowels(string) {
  //   var strWithoutVowels = [];
  //   string = string.split('');
  //   var vowels = ['a', 'e', 'i', 'o', 'u'];
  //   for (var i = 0; i < string.length; i++) {
  //     if (vowels.indexOf(string[i]) < 0) {
  //       strWithoutVowels.push(string[i]);
  //     }
  //   }
  //   strWithoutVowels = strWithoutVowels.join('');
  //   return strWithoutVowels;
  // }

  const handleText = (ev) => {
    let string = ev.currentTarget.value;
    //let newText = withoutVowels(string); //elimina vocales
    let newText = string.replace(/[aeiou]/gi, 'i'); //cambia las vocales por "i"
    setText(newText);
  };
  return (
    <div>
      <header>
        <h1 className="title">Modulo 3 - Formulario </h1>
      </header>
      <main>
        <h2>Ejercicio 2</h2>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="text">Escribe aquí lo que desees: </label>
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            onChange={handleText}
          ></textarea>
          <p>
            Tu texto transformado es: <small>{text}</small>
          </p>
        </form>
      </main>
    </div>
  );
}

export default App;
