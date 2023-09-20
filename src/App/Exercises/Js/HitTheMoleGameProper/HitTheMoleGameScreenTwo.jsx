import './styles.css';
import { useState } from 'react';
import { MoleIcon } from './MoleIcon.jsx';

export const HitTheMoleGameScreenTwo = ({ setScreenSwitch }) => {
  const handleScreenSwitch = () => {
    setScreenSwitch(false);
  };

  // Poniżej kod do randomowego popup kretów

  const initialArrayFirstRow = [
    { id: 1, isMolePresent: false, isClicked: false },
    { id: 2, isMolePresent: false, isClicked: false },
    { id: 3, isMolePresent: true, isClicked: false },
    { id: 4, isMolePresent: false, isClicked: false },
    { id: 5, isMolePresent: false, isClicked: false },
    { id: 6, isMolePresent: false, isClicked: false },
    { id: 7, isMolePresent: false, isClicked: false },
    { id: 8, isMolePresent: false, isClicked: false },
    { id: 9, isMolePresent: true, isClicked: false },
    { id: 10, isMolePresent: false, isClicked: false },
  ];

  const [itemsArrayFirstRow, setArrayFirstRow] = useState(initialArrayFirstRow);

  const handleMoleHit = (event) => {
    console.log(event);
    setArrayFirstRow(
      itemsArrayFirstRow.map((element) => {
        if (element.id === event.id) {
          return { ...element, isClicked: true };
        } else {
          return { ...element, isClicked: false };
        }
      })
    );
  };

  //TODO użyj handlemole timeout zrób warunek żeby to co było true stało się false

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
            <div style={{ textAlign: 'center' }} className="div_gray">
              7:42
            </div>
          </div>
          <div>
            <div style={{ textAlign: 'center' }} className="div_gray">
              16
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
            <div className="div-of-boxes-row">
              {itemsArrayFirstRow.map((element) => {
                const isClickedFieldWithMoles =
                  element.isMolePresent && element.isClicked
                    ? 'screen-two-box-correct '
                    : '';
                return (
                  <div
                    id={element.id}
                    className={isClickedFieldWithMoles + 'screen-two-box'}
                    onClick={() => handleMoleHit(element)}
                  >
                    {element.isMolePresent && <MoleIcon />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
