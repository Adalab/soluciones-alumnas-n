import '../styles/App.css';

// Fichero src/components/App.js
import { useState } from 'react';

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [operation, setOperation] = useState('Sumar');

  const handleNumberA = ev => {
    setNumberA(ev.target.value);
  };

  const handleNumberB = ev => {
    setNumberB(ev.target.value);
  };

  const handleSelector = (ev) => {
    setOperation(ev.target.value);
  }
  const operationChosen = () => {
    if(operation === 'Sumar'){
      return 'suma';
    }
    else if(operation === 'Restar'){
      return 'resta';
    }
    else if(operation === 'Multiplicar'){
      return 'multiplicación';
    }
    else if(operation === 'Dividir'){
      return 'división';
    }
  }
  const total = () => {
    if(operation === 'Sumar'){
      return parseInt(numberA) + parseInt(numberB);
    }
    else if(operation === 'Restar'){
      return parseInt(numberA) - parseInt(numberB);
    }
    else if(operation === 'Multiplicar'){
      return parseInt(numberA) * parseInt(numberB);
    }
    else if(operation === 'Dividir'){
      return parseInt(numberA) / parseInt(numberB);
    }
  } 

  const reset = (ev) => {
    ev.preventDefault();
    setNumberA(0);
    setNumberB(0);
    setOperation('Sumar');
  }

  return (
    <div className="page">
      <h1>La calculadora:</h1>
      <form className="form">
        <label htmlFor="operation">Escoge la operación:</label>
        <select onChange={handleSelector} className="selector" name="operation" id="operation">
          <option value="Sumar">Sumar</option>
          <option value="Restar">Restar</option>
          <option value="Multiplicar">Multiplicar</option>
          <option value="Dividir">Dividir</option>
        </select>
        <label>
          Escribe un número:
          <input className="input" value={numberA} type="number" name="name" onChange={handleNumberA} />
        </label>
        <label>
          Escribe otro número:
          <input className="input" value={numberB} type="number" name="email" onChange={handleNumberB} />
        </label>
        <button className="button" onClick={reset}>Reset</button>
      </form>
      <p>
        La <strong> {operationChosen()}</strong> de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        <strong> {total()}</strong>.
      </p>
    </div>
  );
};

export default App;
