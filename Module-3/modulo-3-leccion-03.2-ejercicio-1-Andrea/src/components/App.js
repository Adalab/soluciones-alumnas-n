import '../styles/App.css';
import {useState} from 'react';

function App() {
  // const [checked, setChecked] = useState(false);
  const [potatoChecked, setPotato] = useState(false);
  const [eggChecked, setEgg] = useState(false);
  const [onionChecked, setOnion] = useState(false);
  const [ingr1, setIngr1] = useState(false);
  const [ingr3, setIngr3] = useState(false);
  const [ingr6, setIngr6] = useState(false);


  const handleOptions = (ev) => {
    if(ev.target.id === 'ingredient2'){
      setPotato(ev.target.checked);
    }
    else if(ev.target.id === 'ingredient4'){
      setEgg(ev.target.checked);
    }
    else if(ev.target.id === 'ingredient5'){
      setOnion(ev.target.checked);
    }
    else if (ev.target.id === 'ingredient1'){
      setIngr1(ev.target.checked);
    }
    else if (ev.target.id === 'ingredient3'){
      setIngr3(ev.target.checked);
    }
    else if (ev.target.id === 'ingredient6'){
      setIngr6(ev.target.checked);
    }
console.log(ev.target.checked);
  }

  const noRobotMessage = () => {
    let message;
    if(potatoChecked && eggChecked && onionChecked && !ingr1 && !ingr3 && !ingr6){
      message = <p>Eres una persona concebollista</p>;
    }
    else{
      message = <p>Eres un robot sin paladar</p>;
    }
    return message;
  }

  const selectAll = (ev) => {
    ev.preventDefault();
    setPotato(true);
    setOnion(true);
    setEgg(true);
    setIngr1(true);
    setIngr3(true);
    setIngr6(true);
  }
  const deselectAll = (ev) => {
    ev.preventDefault();
    setPotato(false);
    setOnion(false);
    setEgg(false);
    setIngr1(false);
    setIngr3(false);
    setIngr6(false);
  }


  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas:</h1>
      <form className="form" action="">
        <label htmlFor="ingredient1">
          <input onChange={handleOptions} checked={ingr1} type="checkbox" name="ingredient1" id="ingredient1" />
          Macarrones</label>
        <label htmlFor="ingredient2">
          <input onChange={handleOptions} checked={potatoChecked} type="checkbox" name="ingredient2" id="ingredient2" />
          Patatas</label>
        <label htmlFor="ingredient3">
          <input onChange={handleOptions} checked={ingr3} type="checkbox" name="ingredient3" id="ingredient3" />
          Nueces</label>
        <label htmlFor="ingredient4">
          <input onChange={handleOptions} checked={eggChecked} type="checkbox" name="ingredient4" id="ingredient4" />
          Huevos</label>
        <label htmlFor="ingredient5">
          <input onChange={handleOptions} checked={onionChecked} type="checkbox" name="ingredient5" id="ingredient5" />
          Cebolla</label>
        <label htmlFor="ingredient6">
          <input onChange={handleOptions} checked={ingr6} type="checkbox" name="ingredient6" id="ingredient6" />
          Cerveza</label>
          <div>
            <button onClick={selectAll}>Marcas todas</button>
            <button onClick={deselectAll}>Borrar todas</button>
          </div>
      </form>
      {noRobotMessage()}
    </div>
  );
}

export default App;
