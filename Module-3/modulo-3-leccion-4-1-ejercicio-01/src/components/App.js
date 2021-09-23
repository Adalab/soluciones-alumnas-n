// Fichero src/components/App.js
const App = () => {
  const tasks = [
    'Comprar harina, jamón y pan rallado',
    'Hacer croquetas ricas',
    'Ir a la puerta de un gimnasio',
    'Comerme las croquetas mirando a la gente que entra en el gimnasio',
  ];

  const renderTasksList = () => {
    return tasks.map((task, index) => {
      return <li key={index}>{task}</li>;
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
