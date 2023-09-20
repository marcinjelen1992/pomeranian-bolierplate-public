import './styles.css';
import { useState } from 'react';
import { MoleIcon } from './MoleIcon.jsx';

export const HitTheMoleGameScreenTwo = () => {
  const [isChangeBckgr, setIsChangeBckgr] = useState(false);
  function handleClick() {
    setIsChangeBckgr(!isChangeBckgr);
  }
  // 7:42 i 16 zrób jako divy, nie buttony
  return (
    <div className="moleGameScreenTwoWrapper">
      <div className="moleGame">
        <div>
          <div className="informationBoard">
            <div>CZAS DO KOŃCA</div>
            <div>WYNIK</div>
            <div>PRZYCISKI STERUJĄCE</div>
          </div>
        </div>
        <div className="playingBoard">
          <div>
            <button className="div_gray">7:42</button>
          </div>
          <div>
            <button className="div_gray">16</button>
          </div>
          <div>
            <button
              className={
                isChangeBckgr ? 'button_game' : 'button_game_highlighted'
              }
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
