import { useState } from 'react';
import './styles.css';

export const ReactOnClick4 = () => {
  //const [count, setCount] = useState(0);
  //const [value, setValue] = useState('');
  // const buttonText = isClicked ? 'Kliknięcie' : 'Nie kliknięte';
  // const text2 = 'To jest 5';

  const test = 'Tom';

  if (test === 'Tom') {
    console.log('Test jest równe Tom');
  } else if (test === 'Sam') {
    console.log('Test to Sam');
  } else {
  }
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(5);
  const [buttonText, setButtonText] = useState('Odliczanie');

  function handleClick() {
    if (clickCount !== 0) {
      setClickCount(clickCount - 1);
    }
    if (clickCount <= 1) {
      setButtonText('Odliczanie zakończone');
    }
  }

  return (
    <div>
      <h1>Cześć!</h1>
      <button onClick={handleClick}>{clickCount}</button>
      <p>
        <strong>{buttonText}</strong>
      </p>
    </div>
  );
};
