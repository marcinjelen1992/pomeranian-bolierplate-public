import './styles.css';
import { useState, useEffect } from 'react';

export const HitTheMoleGameProper = () => {
  const DEFAULT_MOLE_GAME = [
    { name: 'oneminute', mole: 'onemole', isHighlighted: false },
    { name: 'twominutes', mole: 'twomoles', isHighlighted: false },
    { name: 'threeminutes', mole: 'threemoles', isHighlighted: false },
  ];

  const [items, setItems] = useState(DEFAULT_MOLE_GAME);
  console.log(items);

  //  const handleClick = (event) => {
  //    setItems(
  //      items.map((item) => {
  //        if (item.time === event.target.id) {
  //          return { ...item, isHighlighted: true };
  //        } else {
  //          return item;
  //       }
  //      })
  //    );
  //  };

  //  const handleClick = (event) => {
  //    setItemTime((prev) => ({
  //      ...prev,
  //      [event.target.name]: event.target.value,
  //    }));
  //  };

  const [isChangeBckgr, setIsChangeBckgr] = useState(false);
  function handleClick() {
    setIsChangeBckgr(!isChangeBckgr);
  }

  const handleClickMap = (event) => {
    setItems(
      items.map((item) => {
        if (item.name === event.target.id) {
          return { ...item, isHighlighted: true };
        } else {
          return item;
        }
      })
    );
  };

  function getNames(obj) {
    return obj.map(({ isHighlighted }) => isHighlighted);
  }
  console.log(getNames(items));

  // const handleClick = (event) => {
  //  setItems((item) => {
  //      if (item.name === event.target.id) {
  //        return {setIsChangeBckgr: true };
  //     } else {
  //       return setIsChangeBckgr: false;
  //      }
  //    })
  //  ;
  //};

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
            {items.map((item) => (
              <button
                key={item.name}
                data-highlighted={item.isHighlighted}
                id={item.name}
                onClick={handleClickMap}
              >
                {item.name}
              </button>
            ))}
            <button
              key={DEFAULT_MOLE_GAME.oneminute}
              data-highlighted={DEFAULT_MOLE_GAME.isHighlighted}
              id={DEFAULT_MOLE_GAME.oneminute}
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
