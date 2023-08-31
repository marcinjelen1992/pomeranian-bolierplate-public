import './styles.css';
import { useState } from 'react';

export const BoxModel = () => {
  const isVisible = false;
  const [isChangeBckgr, setIsChangeBckgr] = useState(false);
  function handleClick() {
    setIsChangeBckgr(!isChangeBckgr);
  }

  return (
    <>
      <div>
        Box model:
        <div className="div_nr1">Przykładowy div</div>
        <div className="div_nr2">Przykładowy div</div>
        <p className={isChangeBckgr ? 'p_nr1' : 'p_nr2'}>
          Zmień kolor tła:<button onClick={handleClick}>Kliknij tutaj</button>
        </p>
        {isVisible && <p className="p_nr1">Przykładowy p</p>}
        <p className="p_nr3">Przykładowy p z display: inline</p>
        <p className="p_nr4">Przykładowy p z display: block</p>
        <h1 className="h1_nr1">Przykładowy h1</h1>
        <span className="span_nr1">Przykładowy span</span>
        <div className="div_nr3">Przykładowy div dotyczący overflow</div>
      </div>
    </>
  );
};
