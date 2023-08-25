import { useState } from 'react';
import './styles.css';

export const ReactOnClick3 = () => {
  // const [count, setCount] = useState(0);
  // Math.pow(x,y)

  // const text = isClicked ? 'Kliknięcie' : 'Nie kliknięte';

  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(2);

  const buttonText = isClicked
    ? `Kliknięto we mnie ${clickCount}`
    : 'Kliknij we mnie';

  function handleClick() {
    setIsClicked(true);
    setClickCount(clickCount * clickCount);
  }

  function Multiply() {
    var a = document.getElementById('txtA').value;
    var b = document.getElementById('txtB').value;
    var result = parseInt(a) * parseInt(b);
    alert(result);
  }

  return (
    <div>
      <h1>Cześć!</h1>
      <button onClick={handleClick}>{buttonText}</button>
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
        <strong>Wynik: {Multiply}</strong>
      </p>
    </div>
  );
};
