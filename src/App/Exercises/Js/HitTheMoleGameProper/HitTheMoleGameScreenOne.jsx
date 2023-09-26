import { SettingsCatcher } from './SettingsCatcher';
import './styles.css';
import { useState } from 'react';

export const HitTheMoleGameScreenOne = ({
  setScreenSwitch,
  setExportItemsTime,
  input2,
}) => {
  const handleScreenSwitch = () => {
    setScreenSwitch(true);
  };
  const DEFAULT_MOLE_GAME_TIME = [
    {
      time: '1 minuta',

      isHighlightedTime: false,
    },
    {
      time: '2 minuty',

      isHighlightedTime: false,
    },
    {
      time: '3 minuty',

      isHighlightedTime: false,
    },
  ];

  const [itemsTime, setItemsTime] = useState(DEFAULT_MOLE_GAME_TIME);
  console.log(itemsTime);

  const DEFAULT_MOLE_GAME_MOLE = [
    {
      mole: '1 kret',

      isHighlightedMole: false,
    },
    {
      mole: '2 krety',

      isHighlightedMole: false,
    },
    {
      mole: '3 krety',

      isHighlightedMole: false,
    },
  ];

  const [itemsMole, setItemsMole] = useState(DEFAULT_MOLE_GAME_MOLE);
  console.log(itemsMole);

  const [isChangeBckgr, setIsChangeBckgr] = useState(false);
  function handleClick() {
    setIsChangeBckgr(!isChangeBckgr);
  }

  // Przestawiacz isHighlightedTime z false na true

  const handleClickTimeMap = (event) => {
    setItemsTime(
      itemsTime.map((item) => {
        if (item.time === event.target.id) {
          return { ...item, isHighlightedTime: true };
        } else {
          return { ...item, isHighlightedTime: false };
        }
      })
    );
    setExportItemsTime(
      itemsTime.map((item) => {
        if (item.time === event.target.id) {
          return { isHighlightedTime: true };
        } else {
          return { isHighlightedTime: false };
        }
      })
    );
  };

  function getTimes(obj) {
    return obj.map(({ isHighlightedTime }) => isHighlightedTime);
  }
  console.log('Boolean dla Time w ScreenOne', getTimes(itemsTime));

  // Przestawiacz isHighlightedMole z false na true

  const handleClickMoleMap = (event) => {
    setItemsMole(
      itemsMole.map((item) => {
        if (item.mole === event.target.id) {
          return { ...item, isHighlightedMole: true };
        } else {
          return { ...item, isHighlightedMole: false };
        }
      })
    );
  };

  function getMoles(obj) {
    return obj.map(({ isHighlightedMole }) => isHighlightedMole);
  }
  console.log('Boolean dla Mole', getMoles(itemsMole));

  // Funkcja do podpięcia pod przycisk START

  // Przekazana jako props

  return (
    <div className="moleGameScreenOneWrapper">
      <div className="moleGame">
        <div>
          <div className="informationBoard">
            <div>CZAS GRY</div>
            <div>LICZBA KRETÓW</div>
            <div>PRZYCISKI STERUJĄCE</div>
          </div>
        </div>
        <div className="playingBoard">
          <div className="arrayRowOfButtons">
            {itemsTime.map(({ time, isHighlightedTime }) => (
              <div>
                <button
                  key={time}
                  data-highlighted={isHighlightedTime}
                  id={time}
                  className={
                    isHighlightedTime
                      ? 'button_game_highlighted'
                      : 'button_game'
                  }
                  onClick={handleClickTimeMap}
                >
                  {time}
                </button>
              </div>
            ))}
          </div>
          <div className="arrayRowOfButtons">
            {itemsMole.map(({ mole, isHighlightedMole }) => (
              <div>
                <button
                  key={mole}
                  data-highlighted={isHighlightedMole}
                  id={mole}
                  className={
                    isHighlightedMole
                      ? 'button_game_highlighted'
                      : 'button_game'
                  }
                  onClick={handleClickMoleMap}
                >
                  {mole}
                </button>
              </div>
            ))}
          </div>
          <div>
            <button className="button_game" onClick={handleScreenSwitch}>
              START
            </button>
          </div>
          <div>
            <SettingsCatcher input1={itemsTime} input2={itemsMole} />
          </div>
        </div>
      </div>
    </div>
  );
};
