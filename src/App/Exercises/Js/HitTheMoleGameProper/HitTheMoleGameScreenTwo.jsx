import './styles.css';
import { useState } from 'react';
import { MoleIcon } from './MoleIcon.jsx';

export const HitTheMoleGameScreenTwo = () => {
  const [isChangeBckgr, setIsChangeBckgr] = useState(false);
  function handleClick() {
    setIsChangeBckgr(!isChangeBckgr);
  }

  return (
    <div className="molegamescreentwowrapper">
      <div className="molegame">
        <div>
          <div className="informationboard">
            <div>CZAS DO KOŃCA</div>
            <div>WYNIK</div>
            <div>PRZYCISKI STERUJĄCE</div>
          </div>
        </div>
        <div className="playingboard">
          <div>
            <button className="button_nr3">7:42</button>
          </div>
          <div>
            <button className="button_nr3">16</button>
          </div>
          <div>
            <button
              className={isChangeBckgr ? 'button_nr1' : 'button_nr2'}
              onClick={handleClick}
            >
              STOP
            </button>
          </div>
          <div className="div-of-boxes">
            <div className="screen-two-box"></div>
            <div className="screen-two-box">
              <MoleIcon />
            </div>
            <div className="screen-two-box"></div>
            <div className="screen-two-box"></div>
            <div className="screen-two-box"></div>
          </div>
          <div className="div-of-boxes">
            <div className="screen-two-box"></div>
            <div className="screen-two-box"></div>
            <div className="screen-two-box"></div>
            <div className="screen-two-box"></div>
            <div className="screen-two-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
