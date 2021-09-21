import '../styles/App.scss';
import { useState } from 'react';

const App = () => {
  let classNameadd = 'done';
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);
  const handleClick = (ev) => {
    const liClicked = ev.currentTarget.id;
    tasks[liClicked].completed = !tasks[liClicked].completed;
    setTasks([...tasks]);
  };

  const renderList = () =>
    tasks.map((tasks, index) => {
      return (
        <li
          key={index}
          className={tasks.completed ? `${classNameadd}` : ''}
          onClick={handleClick}
          id={index}
        >
          {tasks.task}
        </li>
      );
    });

  return (
    <div>
      <h2>Mi lista de tareas</h2>
      <ol>{renderList()}</ol>
    </div>
  );
};

export default App;
