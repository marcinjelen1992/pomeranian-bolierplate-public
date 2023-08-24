import { useState } from 'react';
import './styles.css';

export const ReactOnClick = () => {
  const [count, setCount] = useState(0);

  // const text = isClicked ? 'Kliknięcie' : 'Nie kliknięte';

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Cześć!</h1>
      <button id="txtA" onClick={handleClick}>
        {count}
      </button>
    </div>
  );
};
