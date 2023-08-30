import { useState } from 'react';
import './styles.css';

export const ReactOnClick3 = () => {
  // const [isClicked, setIsClicked] = useState(false);
  // const [clickCount, setClickCount] = useState(2);

  // const buttonText = isClicked
  //  ? `Kliknięto we mnie ${clickCount}`
  //  : 'Kliknij we mnie';

  // function handleClick() {
  //  setIsClicked(true);
  //  setClickCount(clickCount * clickCount);
  // }

  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(2);

  const buttonText = isClicked
    ? `Kliknięto we mnie ${clickCount}`
    : 'Kliknij we mnie';

  function handleClick() {
    setIsClicked(true);
    setClickCount(clickCount * clickCount);
  }

  return (
    <div>
      <h1>Naciśnij przycisk</h1>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};
