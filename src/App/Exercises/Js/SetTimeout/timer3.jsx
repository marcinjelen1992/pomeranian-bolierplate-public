import { useState, useEffect } from 'react';

// setInterval
// Jest używana do cyklicznego wykonywania pewnych operacji w określonych odstępach czasu
// setTimeout
// Jest używana do wykonania pewnej operacji po określonym przez nas czasie
export const Timer3 = () => {
  const [czas, setCzas] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  // { ? : } ternary operator
  const toogleTimer = () => {
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    let timerInterval;
    if (isRunning) {
      timerInterval = setInterval(() => {
        setCzas((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }
    return () => {
      clearInterval(timerInterval);
    };
  }, [isRunning]);

  // w powyższej funkcji ten return i powtórzenie clearInterwval to funkcja zwrotna

  const restartTimer = () => {
    setCzas(0);
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

  function octalNumber(input) {
    const secondsInOctal = input.toString(8);
    return secondsInOctal;
  }

  function hexadecimalInOctalNotation(input) {
    const secondsInOctal = input.toString(8);
    const halfOfOctal = secondsInOctal / 2;
    const secondsMinusHalf = secondsInOctal - halfOfOctal;
    const floorOfOctal = Math.floor(secondsMinusHalf);
    const floorDividedByTen = floorOfOctal / 10;
    const floorOfDivided = Math.floor(floorDividedByTen);
    const numbersBelowZero = floorDividedByTen - floorOfDivided;
    // zakres 0-7 poniżej 0,5 a zakres A-H równe i wyższe 0,5
    const secondsDividedByTen = secondsInOctal / 10;
    const floorOfSeconds = Math.floor(secondsDividedByTen);
    // return floorDividedByTen - floorOfDivided;
    const floorByTen = floorOfSeconds * 10;
    const numbersBetweenZeroAndSeven = secondsInOctal - floorByTen;
    if (numbersBetweenZeroAndSeven === 0 && numbersBelowZero < 0.5) {
      return floorOfDivided + '0';
    }
    if (numbersBetweenZeroAndSeven === 1 && numbersBelowZero < 0.5) {
      return floorOfDivided + '1';
    }
    if (numbersBetweenZeroAndSeven === 2 && numbersBelowZero < 0.5) {
      return floorOfDivided + '2';
    }
    if (numbersBetweenZeroAndSeven === 3 && numbersBelowZero < 0.5) {
      return floorOfDivided + '3';
    }
    if (numbersBetweenZeroAndSeven === 4 && numbersBelowZero < 0.5) {
      return floorOfDivided + '4';
    }
    if (numbersBetweenZeroAndSeven === 5 && numbersBelowZero < 0.5) {
      return floorOfDivided + '5';
    }
    if (numbersBetweenZeroAndSeven === 6 && numbersBelowZero < 0.5) {
      return floorOfDivided + '6';
    }
    if (numbersBetweenZeroAndSeven === 7 && numbersBelowZero < 0.5) {
      return floorOfDivided + '7';
    }
    if (numbersBetweenZeroAndSeven === 0 && numbersBelowZero >= 0.5) {
      return floorOfDivided + 'A';
    }
    if (numbersBetweenZeroAndSeven === 1 && numbersBelowZero >= 0.5) {
      return floorOfDivided + 'B';
    }
    if (numbersBetweenZeroAndSeven === 2 && numbersBelowZero >= 0.5) {
      return floorOfDivided + 'C';
    }
    if (numbersBetweenZeroAndSeven === 3 && numbersBelowZero >= 0.5) {
      return floorOfDivided + 'D';
    }
    if (numbersBetweenZeroAndSeven === 4 && numbersBelowZero >= 0.5) {
      return floorOfDivided + 'E';
    }
    if (numbersBetweenZeroAndSeven === 5 && numbersBelowZero >= 0.5) {
      return floorOfDivided + 'F';
    }
    if (numbersBetweenZeroAndSeven === 6 && numbersBelowZero >= 0.5) {
      return floorOfDivided + 'G';
    }
    if (numbersBetweenZeroAndSeven === 7 && numbersBelowZero >= 0.5) {
      return floorOfDivided + 'H';
    } else return numbersBetweenZeroAndSeven;
  }

  return (
    <div>
      <div>
        <h1>Octal timer</h1>
        <h2>{czas}</h2>
        <p>{divideTimeBySixty(czas)}</p>
        <p>octal seconds: {octalNumber(czas)}</p>
        <p>
          hexadecimal in octal (correct up to 7H):{' '}
          {hexadecimalInOctalNotation(czas)}
        </p>
        <button onClick={toogleTimer}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={restartTimer}>Restart</button>
      </div>
    </div>
  );
};
