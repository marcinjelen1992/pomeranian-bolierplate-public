import { useState } from 'react';
import './styles.css';

export const ReactOnClick5 = () => {
  // const [isClicked, setIsClicked] = useState(false);
  // const [clickCount, setClickCount] = useState(2);

  // const buttonText = isClicked
  //  ? `Kliknięto we mnie ${clickCount}`
  //  : 'Kliknij we mnie';

  // function handleClick() {
  //  setIsClicked(true);
  //  setClickCount(clickCount * clickCount);
  // }

  const [buttonText, setButtonText] = useState('Odliczanie');

  function Multiply() {
    var a = document.getElementById('txtA').value;
    var b = document.getElementById('txtB').value;
    var result = parseInt(a) * parseInt(b);
    setButtonText(result);
  }

  return (
    <div>
      <h1>Cześć!</h1>
      <input type="text" id="txtA" name="txtA" />
      *
      <input type="text" id="txtB" name="txtA" />
      <input
        type="button"
        name="btnMultiply"
        value="Submit"
        onclick="Multiply()"
      />
      <p>
        <strong>Wynik: {buttonText}</strong>
      </p>
    </div>
  );
};
