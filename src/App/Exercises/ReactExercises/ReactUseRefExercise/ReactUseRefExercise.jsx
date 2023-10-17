import './styles.css';
import { useState, useRef } from 'react';

export const ReactUseRefExercise = () => {
  const inputRef1 = useRef();
  const handleClick1 = () => {
    inputRef1.current.style.color = 'red';
  };
  const handleClick2 = () => {
    inputRef1.current.style.color = 'blue';
  };

  const inputRef2 = useRef();
  const resetInput1 = () => {
    inputRef2.current.value = '';
  };

  const buttonRef3 = useRef();
  const disableButton1 = () => {
    buttonRef3.current.setAttribute('disabled', true);
  };
  return (
    <>
      <div className="reactUseRefPage">
        <button onClick={handleClick1}>Zmień kolor tekstu na czerwony</button>
        <button onClick={handleClick2}>Zmień kolor tekstu na niebieski</button>
        <p ref={inputRef1}>Jestem tekstem zmieniającym kolor</p>
      </div>
      <div>
        <input ref={inputRef2} type="text" />
        <button onClick={resetInput1}>Wyczyść teskst</button>
      </div>
      <div>
        <button ref={buttonRef3} onClick={disableButton1}>
          Kliknij żeby zablokować
        </button>
      </div>
    </>
  );
};
