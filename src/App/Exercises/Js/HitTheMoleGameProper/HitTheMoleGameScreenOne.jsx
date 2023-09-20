import './styles.css';
import { useState } from 'react';

export const HitTheMoleGameScreenOne = ({ setScreenSwitch }) => {
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
  };

  function getTimes(obj) {
    return obj.map(({ isHighlightedTime }) => isHighlightedTime);
  }
  console.log('Boolean dla Time', getTimes(itemsTime));

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

  function getTheStartData(input1, input2) {
    const inputOneBooleanMap = input1.map(
      ({ isHighlightedTime }) => isHighlightedTime
    );
    const inputTwoBooleanMap = input2.map(
      ({ isHighlightedMole }) => isHighlightedMole
    );
    const concatenatedMap = inputOneBooleanMap.concat(inputTwoBooleanMap);
    if (concatenatedMap[0] === true && concatenatedMap[3] === true) {
      return 'Zaznaczono 1 minutę i 1 kreta';
    }
    if (concatenatedMap[0] === true && concatenatedMap[4] === true) {
      return 'Zaznaczono 1 minutę i 2 krety';
    }
    if (concatenatedMap[0] === true && concatenatedMap[5] === true) {
      return 'Zaznaczono 1 minutę i 3 krety';
    }
    if (concatenatedMap[1] === true && concatenatedMap[3] === true) {
      return 'Zaznaczono 2 minuty i 1 kreta';
    }
    if (concatenatedMap[1] === true && concatenatedMap[4] === true) {
      return 'Zaznaczono 2 minuty i 2 krety';
    }
    if (concatenatedMap[1] === true && concatenatedMap[5] === true) {
      return 'Zaznaczono 2 minuty i 3 krety';
    }
    if (concatenatedMap[2] === true && concatenatedMap[3] === true) {
      return 'Zaznaczono 3 minuty i 1 kreta';
    }
    if (concatenatedMap[2] === true && concatenatedMap[4] === true) {
      return 'Zaznaczono 3 minuty i 2 krety';
    }
    if (concatenatedMap[2] === true && concatenatedMap[5] === true) {
      return 'Zaznaczono 3 minuty i 3 krety';
    } else {
      return 'Nie zaznaczono obu opcji';
    }
  }

  console.log(
    'Komunikat z arraya Booleanów:',
    getTheStartData(itemsTime, itemsMole)
  );
  // TODO: Zmień klasy button_nr2 na button, a button_nr1 na highlightedButton a moleGame i inne camelem, plus miej konsekwentne nazwy
  // className={isHighlightedTime ? 'button_nr2' : 'button_nr1'} zmień żeby zrobić funkcję przełączającą i w klamrowych odwołać się do funkcji
  // jak masz {itemsTime.map(({ time, isHighlightedTime }) => ( to zrób analogiczną zmianę dla mole
  // zawartość tego co jest tutaj przenieś do innego komponentu

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
        </div>
      </div>
    </div>
  );
};
