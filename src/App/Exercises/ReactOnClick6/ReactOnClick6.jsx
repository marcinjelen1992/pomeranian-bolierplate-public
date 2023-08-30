import { useState } from 'react';
import './styles.css';

export const ReactOnClick6 = () => {
  // const [buttonText, setButtonText] = useState('');
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [resultA, setResultA] = useState('');
  const [hasErrors, setHasErrors] = useState(false);
  const [noErrors, setNoErrors] = useState(false);

  function GetA(event) {
    setNumberA(event.target.value);
  }

  function GetB(event) {
    setNumberB(event.target.value);
  }

  function Multiply() {
    setResultA(numberA * numberB);
    if (isNaN(+numberA * +numberB)) {
      setHasErrors(true);
      setNoErrors(false);
    } else {
      setHasErrors(false);
      setNoErrors(true);
    }
  }

  // const isNotANumber = resultA !== isNaN(+numberA * +numberB);

  // Zamiast Wynik jest liczbą pokazuje NaN czyli ta funkcja nie jest prawidłowo uruchomiona i zrób to później

  return (
    <div>
      <h1>Mnożenie dwóch liczb z komunikatami</h1>
      <input type="text" value={numberA} onChange={GetA} />
      *
      <input type="text" value={numberB} onChange={GetB} />
      <button onClick={Multiply}>Oblicz</button>
      {hasErrors && <strong>Wpisana wartość nie jest liczbą</strong>}
      {noErrors && <strong>Wpisana wartość jest liczbą</strong>}
      <p>
        <strong>
          {numberA} * {numberB} ={' '}
          {hasErrors ? 'Wpisana wartość nie jest liczbą' : null}
          {noErrors ? resultA : null}
        </strong>
      </p>
    </div>
  );
};
