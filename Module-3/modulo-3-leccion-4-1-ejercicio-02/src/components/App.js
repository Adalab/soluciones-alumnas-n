// Fichero src/components/App.js
import '../styles/App.scss';
const App = () => {
  const tasksList = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];

  const renderTasksList = () => {
    return tasksList.map((eachTask) => {
      if (eachTask.completed === true) {
        return (
          <li className="done" key={eachTask.task}>
            {eachTask.task}
          </li>
        );
      } else {
        return <li key={eachTask.task}>{eachTask.task}</li>;
      }
    });
  };

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>{renderTasksList()}</ol>
    </div>
  );
};

export default App;
