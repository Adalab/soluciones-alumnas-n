import '../styles/App.scss';

function App() {
  const inputClass = 'input';
  const handleIput = (ev) => {
    console.log('La tecla pulsada es: ', ev.key);
    console.log('El valor del input es: ', ev.target.value);
  };
  const handleBotton = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <form>
        <label>Ejercicio 1</label>
        <input
          placeholder='Escribe aqui'
          className={inputClass}
          onKeyUp={handleIput}
        />
        <button onClick={handleBotton}>Click me!</button>
      </form>
    </div>
  );
}

export default App;
