import { useState } from 'react';
import './styles.css';

export const ReactOnClick5 = () => {
  // const [buttonText, setButtonText] = useState('');
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [resultA, setResultA] = useState('');

  function GetA(event) {
    setNumberA(event.target.value);
  }

  function GetB(event) {
    setNumberB(event.target.value);
  }

  return (
    <div>
      <h1>Cześć!</h1>
      <input type="text" value={numberA} onChange={GetA} />
      *
      <input type="text" value={numberB} onChange={GetB} />
      <button>Oblicz</button>
      <p>
        <strong>
          {numberA} * {numberB} = {resultA}
        </strong>
      </p>
    </div>
  );
};
