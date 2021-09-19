import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [theme, setTheme] = useState('default');
  const renderDarkModeText = () => {
    if (theme === 'default') {
      setTheme('dark');
    } else {
      setTheme('default');
    }
  };
  return (
    <div className={theme}>
      <button onClick={renderDarkModeText}>Des / Activar el dark mode</button>
      <p>Tienes activado el dark mode</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure vel
        libero, at quidem nostrum dolorem. Libero obcaecati dolorum, iure, quos
        rem hic dicta, ut consectetur quasi incidunt asperiores assumenda a.
      </p>
    </div>
  );
}

export default App;
