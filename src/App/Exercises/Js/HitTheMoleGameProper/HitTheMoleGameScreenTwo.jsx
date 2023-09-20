import './styles.css';
import { useState } from 'react';
import { MoleIcon } from './MoleIcon.jsx';

export const HitTheMoleGameScreenTwo = ({ setScreenSwitch }) => {
  const handleScreenSwitch = () => {
    setScreenSwitch(false);
  };
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
            <div className="div_gray">
              <span>7:42</span>
            </div>
          </div>
          <div>
            <div className="div_gray">
              <span>16</span>
            </div>
          </div>
          <div>
            <button
              className="button_game_highlighted"
              onClick={handleScreenSwitch}
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
