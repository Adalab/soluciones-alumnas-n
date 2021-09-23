import { useEffect, useState } from 'react';
import '../styles/App.scss';
import callToApi from '../services/api';

const App = () => {
  const [shows, setShows] = useState([]);
  const [searchName, setSearchName] = useState('');

  // useEffect

  useEffect(() => {
    callToApi(searchName).then((response) => {
      setShows(response);
    });
  }, [searchName]);

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
  };

  const renderShows = () => {
    return shows.map((show, index) => {
      return <li key={index}>Nombre: {show.name}</li>;
    });
  };

  return (
    <div>
      <h1>Series</h1>

      <form>
        <label htmlFor='name'>Busca por el nombre de tu serie:</label>
        <input
          type='text'
          name='name'
          id='name'
          value={searchName}
          onChange={handleSearchName}
        />
      </form>

      <h2>Personajes con el nombre: {searchName}</h2>
      <ul>{renderShows()}</ul>
    </div>
  );
};

export default App;
