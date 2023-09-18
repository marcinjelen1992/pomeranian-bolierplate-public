import './styles.css';
import { useState, useEffect } from 'react';

export const HitTheMoleGameProper = () => {
  const [isChangeBckgr, setIsChangeBckgr] = useState(false);
  function handleClick() {
    setIsChangeBckgr(!isChangeBckgr);
  }

  return (
    <div className="molegamewrapper">
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      <div className="molegame">
        <div>
          <div className="informationboard">
            <div>CZAS GRY</div>
            <div>LICZBA KRETÓW</div>
            <div>PRZYCISKI STERUJĄCE</div>
          </div>
        </div>
        <div className="playingboard">
          <div>
            <button
              className={isChangeBckgr ? 'button_nr2' : 'button_nr1'}
              onClick={handleClick}
            >
              1 minuta
            </button>
          </div>
          <div>
            <button
              className={isChangeBckgr ? 'button_nr2' : 'button_nr1'}
              onClick={handleClick}
            >
              1 kret
            </button>
          </div>
          <div>
            <button
              className={isChangeBckgr ? 'button_nr2' : 'button_nr1'}
              onClick={handleClick}
            >
              START
            </button>
          </div>
        </div>
        <div className="playingboard">
          <div>
            <button
              className={isChangeBckgr ? 'button_nr2' : 'button_nr1'}
              onClick={handleClick}
            >
              2 minuty
            </button>
          </div>
          <div>
            <button
              className={isChangeBckgr ? 'button_nr2' : 'button_nr1'}
              onClick={handleClick}
            >
              2 krety
            </button>
          </div>
        </div>
        <div className="playingboard">
          <div>
            <button
              className={isChangeBckgr ? 'button_nr2' : 'button_nr1'}
              onClick={handleClick}
            >
              3 minuty
            </button>
          </div>
          <div>
            <button
              className={isChangeBckgr ? 'button_nr2' : 'button_nr1'}
              onClick={handleClick}
            >
              3 krety
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
