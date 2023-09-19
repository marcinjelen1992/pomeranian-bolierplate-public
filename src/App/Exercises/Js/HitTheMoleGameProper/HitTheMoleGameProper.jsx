import './styles.css';
import { useState, useEffect } from 'react';

export const HitTheMoleGameProper = () => {
  const DEFAULT_MOLE_GAME = [
    {
      time: '1 minuta',
      mole: '1 kret',
      isHighlightedTime: false,
      isHighlightedMole: false,
    },
    {
      time: '2 minuty',
      mole: '2 krety',
      isHighlightedTime: false,
      isHighlightedMole: false,
    },
    {
      time: '3 minuty',
      mole: '3 krety',
      isHighlightedTime: false,
      isHighlightedMole: false,
    },
  ];

  const [items, setItems] = useState(DEFAULT_MOLE_GAME);
  console.log(items);

  const [isChangeBckgr, setIsChangeBckgr] = useState(false);
  function handleClick() {
    setIsChangeBckgr(!isChangeBckgr);
  }

  // Przestawiacz isHighlightedTime z false na true

  const handleClickTimeMap = (event) => {
    setItems(
      items.map((item) => {
        if (item.time === event.target.id) {
          return { ...item, isHighlightedTime: true };
        } else {
          return item;
        }
      })
    );
  };

  function getTimes(obj) {
    return obj.map(({ isHighlightedTime }) => isHighlightedTime);
  }
  console.log('Boolean dla Time', getTimes(items));

  // Przestawiacz isHighlightedMole z false na true

  const handleClickMoleMap = (event) => {
    setItems(
      items.map((item) => {
        if (item.mole === event.target.id) {
          return { ...item, isHighlightedMole: true };
        } else {
          return item;
        }
      })
    );
  };

  function getMoles(obj) {
    return obj.map(({ isHighlightedMole }) => isHighlightedMole);
  }
  console.log('Boolean dla Mole', getMoles(items));

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
        <p>
          Po lewej buttony osadzone klasycznie, działa flex lecz nie oddziałują
          z array.
          <strong>
            Po prawej buttony z array.map, zmieniają false na true.
          </strong>
        </p>

        {items.map((item) => (
          <div className="playingboard">
            <div>
              <button
                key={item.time}
                data-highlighted={item.isHighlightedTime}
                id={item.time}
                className={item.isHighlightedTime ? 'button_nr2' : 'button_nr1'}
                onClick={handleClickTimeMap}
              >
                {item.time}
              </button>
            </div>
            <div>
              <button
                key={item.mole}
                data-highlighted={item.isHighlightedMole}
                id={item.mole}
                className={item.isHighlightedMole ? 'button_nr2' : 'button_nr1'}
                onClick={handleClickMoleMap}
              >
                {item.mole}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
