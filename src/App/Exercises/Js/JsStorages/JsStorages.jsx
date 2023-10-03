import './styles.css';
import { useState } from 'react';

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

  const [nick, setNick] = useState(localStorage.getItem('test3'));
  const [nickInLs, setNickInLs] = useState(null);

  function handleChange(event) {
    setNick(event.target.value);
  }

  function setLs2() {
    localStorage.setItem('test3', nick);
    setNickInLs(
      <li>
        {nick}
        <button onClick={resetLs3}>X</button>
      </li>
    );
  }

  function resetLs3() {
    localStorage.removeItem('test3');
    setNick(null);
    setNickInLs(null);
  }

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
      <div className="jsStoragesPage">
        <div>
          <strong>NICK</strong>
        </div>
        <div>
          <div>
            <input
              type="text"
              placeholder="wpisz nick"
              onChange={handleChange}
            />
          </div>
          <div>
            <button onClick={setLs2}>DODAJ</button>
          </div>
        </div>
        <div className="allNicksList">
          <ul>{nickInLs}</ul>
        </div>
      </div>
    </>
  );
};
