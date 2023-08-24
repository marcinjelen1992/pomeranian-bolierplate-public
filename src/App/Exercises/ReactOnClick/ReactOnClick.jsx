import { useState } from 'react';
import './styles.css';

export const ReactOnClick = () => {
  //const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  // const text = isClicked ? 'Kliknięcie' : 'Nie kliknięte';

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleClick() {
    setValue('');
  }

  return (
    <div>
      <h1>Cześć!</h1>
      <button onClick={handleClick}>Resetuj</button>
      <input type="text" value={value} onChange={handleChange} />
      <p>
        <strong>{value}</strong>
      </p>
    </div>
  );
};
