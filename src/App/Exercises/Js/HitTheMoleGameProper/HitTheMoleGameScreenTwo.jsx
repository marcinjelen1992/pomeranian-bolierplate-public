import './styles.css';
import { useState, useEffect } from 'react';
import { MoleIcon } from './MoleIcon.jsx';
import { TimerForGame } from './TimerForGame';
import { SettingsCatcher } from './SettingsCatcher';

export const HitTheMoleGameScreenTwo = ({ setScreenSwitch, getInput1 }) => {
  const handleScreenSwitch = () => {
    setScreenSwitch(false);
  };

  const timeCatch = (input) => {
    return input;
  };

  console.log(timeCatch({ getInput1 }));
  // Poniżej kod do randomowego popup kretów

  const initialArrayFirstRow = [
    { id: 1, isMolePresent: false, isClicked: false },
    { id: 2, isMolePresent: false, isClicked: false },
    { id: 3, isMolePresent: false, isClicked: false },
    { id: 4, isMolePresent: false, isClicked: false },
    { id: 5, isMolePresent: false, isClicked: false },
    { id: 6, isMolePresent: false, isClicked: false },
    { id: 7, isMolePresent: false, isClicked: false },
    { id: 8, isMolePresent: false, isClicked: false },
    { id: 9, isMolePresent: false, isClicked: false },
    { id: 10, isMolePresent: false, isClicked: false },
  ];

  const [itemsArrayFirstRow, setArrayFirstRow] = useState(initialArrayFirstRow);

  // const [timeoutId, setTimeoutId] = useState(null);

  // poniżej timer do randomizera kretów
  const [czas, setCzas] = useState(180);

  useEffect(() => {
    let timerInterval;
    if (czas > 0) {
      timerInterval = setInterval(() => {
        setCzas((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }
    return () => {
      clearInterval(timerInterval);
    };
  }, [czas]);

  function convertSecondToMinutes(input) {
    const internalSeconds = input;
    const string3 = '3:';
    const string3zero = '3:0';
    const string2 = '2:';
    const string2zero = '2:0';
    const string1 = '1:';
    const string1zero = '1:0';
    if (input <= 239 && input >= 190) {
      return string3 + (+internalSeconds - 180);
    }
    if (input <= 189 && input >= 180) {
      return string3zero + (+internalSeconds - 180);
    }
    if (input <= 179 && input >= 130) {
      return string2 + (+internalSeconds - 120);
    }
    if (input <= 129 && input >= 120) {
      return string2zero + (+internalSeconds - 120);
    }
    if (input <= 119 && input >= 70) {
      return string1 + (+internalSeconds - 60);
    }
    if (input <= 69 && input >= 60) {
      return string1zero + (+internalSeconds - 60);
    } else return internalSeconds;
  }

  // setTimeout(function () {
  //  setArrayFirstRow(
  //    itemsArrayFirstRow.map((element) => {
  //      return { ...element, isClicked: false };
  //    })
  //  );
  // }, 200)

  // Usuń to poniżej i spod returna

  const [initialNumber, setInitialNumber] = useState(4);

  const handleMoleRandomisation = (number) => {
    setArrayFirstRow(
      itemsArrayFirstRow.map((element) => {
        if (element.id === +number) {
          return { ...element, isMolePresent: true };
        } else {
          return { ...element, isMolePresent: false };
        }
      })
    );
  };

  const [isBooleanTrue, setIsBooleanTrue] = useState(true);

  useEffect(() => {
    handleMoleRandomisation(initialNumber);
    let timerInterval;
    if (isBooleanTrue) {
      timerInterval = setInterval(() => {
        setInitialNumber(Math.ceil(Math.random() * 10));
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }
    return () => {
      clearInterval(timerInterval);
    };
  }, [initialNumber]);

  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleMoleHit = (event) => {
    setArrayFirstRow(
      itemsArrayFirstRow.map((element) => {
        if (element.id === event.id) {
          return { ...element, isClicked: true };
        } else {
          return { ...element, isClicked: false };
        }
      })
    );
    setIsClicked(true);

    const arrayOfClickedMoles = itemsArrayFirstRow.map((element) => {
      if (element.isMolePresent && true === event.isMolePresent) {
        return +1;
      } else {
        return -1;
      }
    });
    console.log(arrayOfClickedMoles);
    const inArrayMax = arrayOfClickedMoles.reduce(
      (a, b) => Math.max(a, b),
      -Infinity
    );
    setClickCount(clickCount + inArrayMax);
    setTimeout(function () {
      setArrayFirstRow(
        itemsArrayFirstRow.map((element) => {
          return { ...element, isClicked: false };
        })
      );
    }, 200);
  };

  const clickText = isClicked ? `${clickCount}` : '0';

  //const [isRunning, setIsRunning] = useState(false);

  //const toogleTimer = () => {
  //  setIsRunning(!isRunning);
  //};

  // useEffect(() => {
  //  let timerInterval;
  //  if (isRunning) {
  //    timerInterval = setInterval(() => {
  //      setCzas((prev) => prev + 1);
  //    }, 1000);
  //  } else {
  //    clearInterval(timerInterval);
  //  }
  //  return () => {
  //    clearInterval(timerInterval);
  //  };
  // }, [isRunning]);

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
              {convertSecondToMinutes(czas)}
            </div>
          </div>
          <div>
            <div style={{ textAlign: 'center' }} className="div_gray">
              {clickText}
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
                const isClickedFieldWithMoles = () => {
                  if (element.isClicked === true) {
                    if (element.isMolePresent === true) {
                      return 'screen-two-box-correct ';
                    } else {
                      return 'screen-two-box-incorrect ';
                    }
                  } else {
                    return '';
                  }
                };

                return (
                  <div
                    id={element.id}
                    className={isClickedFieldWithMoles() + 'screen-two-box'}
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
