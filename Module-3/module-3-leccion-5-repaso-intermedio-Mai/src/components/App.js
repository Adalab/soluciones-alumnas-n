import '../styles/App.scss';
import data from './data.json';
import { useState } from 'react';

function App() {
  const [person, setPerson] = useState(data);
  const [searchContact, setSearchContact] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSearchInput = (ev) => {
    setSearchContact(ev.target.value);
  };
  const handleNewUser = (ev) => {
    ev.preventDefault(); // funcion que previene la recarga de la page
    const newData = {
      name: name,
      lastname: lastName,
      phone: phone,
      email: email,
    };
    setPerson([...person, newData]); // lo que ya teniamos más el array nuevo. person es el array de JSON y newData es el nuevo array modificado por la usuaria al añadirlo
  };
  const handleInput = (ev) => {
    if (ev.target.id === 'name') {
      setName(ev.target.value);
    } else if (ev.target.id === 'lastname') {
      setLastName(ev.target.value);
    } else if (ev.target.id === 'phone') {
      setPhone(ev.target.value);
    } else if (ev.target.id === 'email') {
      setEmail(ev.target.value);
    }
  };
  const renderPerson = () => {
    return person
      .filter((person) => {
        return person.name.toLowerCase().includes(searchContact.toLowerCase());
      })
      .map((person, i) => {
        return (
          <li key={i} id={i} className='contact__item'>
            <p className='contact__name'>
              <label className='contact__label'>Nombre:</label>
              {person.name + ' ' + person.lastname}
            </p>
            <p className='contact__phone'>
              <label className='contact__label'>Teléfono:</label>
              <a
                href={'tel:' + person.phone}
                title={'Pulsa aquí para llamar a ' + person.name}
              >
                {person.phone}
              </a>
            </p>
            <p className='contact__mail'>
              <label className='contact__label'>Email:</label>
              <a
                href={'mailto:' + person.email}
                title={'Pulsa aquí para escribir a ' + person.email}
              >
                {person.email}
              </a>
            </p>
          </li>
        );
      });
  };
  return (
    <div className='page'>
      <header className='header'>
        <h1 className='header__title'>Mi agenda de contactos</h1>
        <form>
          <input
            className='header__search'
            autoComplete='off'
            type='search'
            name='search'
            placeholder='Filtrar contactos por nombre'
            onChange={handleSearchInput}
          />
        </form>
      </header>

      <main>
        <ul className='contact__list'>{renderPerson()}</ul>

        <form className='new-contact__form'>
          <h2 className='new-contact__title'>Añade un nuevo contacto</h2>
          <input
            className='new-contact__input'
            type='text'
            name='name'
            id='name'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            className='new-contact__input'
            type='text'
            name='lastname'
            id='lastname'
            placeholder='Apellidos'
            onChange={handleInput}
          />
          <input
            className='new-contact__input'
            type='phone'
            name='phone'
            id='phone'
            placeholder='Teléfono'
            onChange={handleInput}
          />
          <input
            className='new-contact__input'
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            onChange={handleInput}
          />
          <input
            className='new-contact__btn'
            type='submit'
            value='Añadir'
            onClick={handleNewUser}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
