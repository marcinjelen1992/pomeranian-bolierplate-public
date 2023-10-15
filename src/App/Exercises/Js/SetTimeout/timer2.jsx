import { useState, useEffect } from 'react';

// setInterval
// Jest używana do cyklicznego wykonywania pewnych operacji w określonych odstępach czasu
// setTimeout
// Jest używana do wykonania pewnej operacji po określonym przez nas czasie
export const Timer2 = () => {
  const [czas, setCzas] = useState(255);
  const [isRunning, setIsRunning] = useState(false);
  // { ? : } ternary operator
  const toogleTimer = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    let timerInterval;
    if (isRunning && czas > 0) {
      timerInterval = setInterval(() => {
        setCzas((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }
    return () => {
      clearInterval(timerInterval);
    };
  }, [isRunning, czas]);

  // w powyższej funkcji ten return i powtórzenie clearInterwval to funkcja zwrotna

  const generateRandomNumbersAtIntervals = () => {
    if (isRunning > 0) return Math.ceil(Math.random() * 10);
  };

  const restartTimer = () => {
    setCzas(255);
  };

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

  function divideTimeBySixty(input) {
    const twoDotString = ':';
    const twoDotAndZeroString = ':0';
    const twoDotAndTwoZeroString = ':00';
    const internalSeconds = input;
    const numberAfterDivision = input / 60;
    const numberAtCeiling = Math.ceil(numberAfterDivision);
    const multiplyOfSixty = 60 * numberAtCeiling;
    const partAfterTwoDots = internalSeconds - (multiplyOfSixty - 60);
    if (partAfterTwoDots === 60) {
      return numberAtCeiling + twoDotAndTwoZeroString;
    }
    if (partAfterTwoDots <= 9 && partAfterTwoDots >= 1) {
      return numberAtCeiling - 1 + twoDotAndZeroString + partAfterTwoDots;
    } else return numberAtCeiling - 1 + twoDotString + partAfterTwoDots;
  }

  return (
    <div>
      <div>
        <h1>Timer countdown to zero</h1>
        <h2>{convertSecondToMinutes(czas)}</h2>
        <h3>{divideTimeBySixty(czas)}</h3>
        <button onClick={toogleTimer}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={restartTimer}>Restart</button>
      </div>
    </div>
  );
};
