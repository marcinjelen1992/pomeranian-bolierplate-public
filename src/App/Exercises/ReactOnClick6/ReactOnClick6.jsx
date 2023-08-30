import { useState } from 'react';
import './styles.css';

export const ReactOnClick6 = () => {
  // const [buttonText, setButtonText] = useState('');
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [resultA, setResultA] = useState('');
  const [hasErrors, setHasErrors] = useState(false);

  function GetA(event) {
    setNumberA(event.target.value);
  }

  function GetB(event) {
    setNumberB(event.target.value);
  }

  function Multiply() {
    setHasErrors(false);
    setResultA(numberA * numberB);
    if (isNaN(+numberA * +numberB)) {
      setHasErrors(true);
    }
  }

  const isNotANumber = resultA !== isNaN(+numberA * +numberB);

  // Zamiast Wynik jest liczbą pokazuje NaN czyli ta funkcja nie jest prawidłowo uruchomiona i zrób to później

  return (
    <div>
      <h1>Cześć!</h1>
      <input type="text" value={numberA} onChange={GetA} />
      *
      <input type="text" value={numberB} onChange={GetB} />
      <button onClick={Multiply}>Oblicz</button>
      {hasErrors && <strong>Wpisana wartość nie jest liczbą</strong>}
      <p>
        <strong>
          {numberA} * {numberB} = {resultA}
        </strong>
      </p>
      {resultA && hasErrors === false && (
        <p>
          Odpowiedź:
          {isNotANumber
            ? 'Wpisana wartość nie jest liczbą'
            : 'Wynik jest liczbą'}
        </p>
      )}
    </div>
  );
};
