import { useState } from 'react';
import './styles.css';

export const ReactOnClick5 = () => {
  const [buttonText, setButtonText] = useState('');

  function Multiply() {
    var a = document.getElementById('txtA').value;
    var b = document.getElementById('txtB').value;
    var result = parseInt(a) * parseInt(b);
    setButtonText(result);
  }

  return (
    <div>
      <h1>Cześć!</h1>
      <input type="number" id="txtA" name="txtA" />
      *
      <input type="number" id="txtB" name="txtB" />
      <button onClick={Multiply()}>Oblicz</button>
      <p>
        <strong>Wynik: {buttonText}</strong>
      </p>
    </div>
  );
};
