import './styles.css';
import { useState, useEffect } from 'react';

export const JsStorages = () => {
  const [test, setTest] = useState(localStorage.getItem('test'));
  function setLs() {
    localStorage.setItem('test', 1);
    setTest(1);
  }

  function resetLs() {
    localStorage.removeItem('test');
    setTest(null);
  }

  // Jak chcesz podpiąć pod sessionStorage to w każdej funkcji zamień localStorage. na sessionStorage.

  return (
    <>
      <div className="jsStoragesPage">
        <div>
          <button onClick={setLs}>Ustaw LS</button>
        </div>
        <div>
          <button onClick={resetLs}>Resetuj LS</button>
        </div>
        <div>
          <p>{test}</p>
        </div>
      </div>
    </>
  );
};
