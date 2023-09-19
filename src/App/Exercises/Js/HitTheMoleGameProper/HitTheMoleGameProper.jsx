import './styles.css';
import { useState, useEffect } from 'react';
import { HitTheMoleGameScreenTwo } from './HitTheMoleGameScreenTwo.jsx';

export const HitTheMoleGameProper = () => {
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

  // TODO

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
          <div className="arraymaprow">
            {itemsTime.map((item) => (
              <div>
                <button
                  key={item.time}
                  data-highlighted={item.isHighlightedTime}
                  id={item.time}
                  className={
                    item.isHighlightedTime ? 'button_nr2' : 'button_nr1'
                  }
                  onClick={handleClickTimeMap}
                >
                  {item.time}
                </button>
              </div>
            ))}
          </div>
          <div className="arraymaprow">
            {itemsMole.map((item) => (
              <div>
                <button
                  key={item.mole}
                  data-highlighted={item.isHighlightedMole}
                  id={item.mole}
                  className={
                    item.isHighlightedMole ? 'button_nr2' : 'button_nr1'
                  }
                  onClick={handleClickMoleMap}
                >
                  {item.mole}
                </button>
              </div>
            ))}
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
      </div>
      <p>Poniżej ekran drugi będący osobnym komponentem</p>
      <HitTheMoleGameScreenTwo />
    </div>
  );
};
