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

  function Multiply() {
    setResultA(numberA * numberB);
  }

  return (
    <div>
      <h1>Mnożenie dwóch liczb</h1>
      <input type="text" value={numberA} onChange={GetA} />
      *
      <input type="text" value={numberB} onChange={GetB} />
      <button onClick={Multiply}>Oblicz</button>
      <p>
        <strong>
          {numberA} * {numberB} = {resultA}
        </strong>
      </p>
    </div>
  );
};
