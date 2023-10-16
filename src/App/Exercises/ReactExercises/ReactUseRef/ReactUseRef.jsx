import './styles.css';
import { useState, useRef } from 'react';

export const ReactUseRef = () => {
  const inputRef = useRef();
  const handleClick = () => {
    //  inputRef.current;
    // powyżej to samo co event.target
    inputRef.current.style.backgroundColor = 'red';
    // wpływamy na element, ale nie przerysowujemy widoku
  };
  return (
    <>
      <div className="reactUseRefPage">
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Focus input</button>
      </div>
    </>
  );
};
