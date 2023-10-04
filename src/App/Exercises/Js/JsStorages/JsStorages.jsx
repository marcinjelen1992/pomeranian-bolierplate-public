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

  const [name, setName] = useState('');
  const [nick, setNick] = useState(
    localStorage.getItem('nick')?.split(',') || []
  );

  function handleChange(event) {
    setName(event.target.value);
  }

  function setLs2() {
    setNick([...nick, name]);
    localStorage.setItem('nick', [...nick, name]);
  }

  // zrób tak by przez ...coś było coś dodawane do arraya, użyj pop by dodać na koniec arraya
  // po wczytaniu strony to ma od razu z local storage zaciągać dane na dzień dobry i wyświetlać tabelę

  function resetLs3() {
    localStorage.removeItem('nick', [nick.pop()]);
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
          <ul>
            {nick.map((item) => (
              <li>
                {item}
                <button onClick={resetLs3}>X</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
