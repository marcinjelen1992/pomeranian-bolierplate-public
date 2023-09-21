import { useState, useEffect } from 'react';

// setInterval
// Jest używana do cyklicznego wykonywania pewnych operacji w określonych odstępach czasu
// setTimeout
// Jest używana do wykonania pewnej operacji po określonym przez nas czasie
export const TimerForGame = () => {
  const [showText, setShowText] = useState(false);
  const [intervalTimeoutId, setIntervalTimeoutId] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleClick = () => {
    setShowText(true);
    setIntervalTimeoutId(
      setInterval(() => {
        setShowText((prev) => !prev);
      }, 2000)
    );
  };
  const handleClickClear = () => {
    clearInterval(intervalTimeoutId);
  };

  const handleClickClearTimeout = () => {
    clearTimeout(timeoutId);
  };

  const handleClickSetTimeout = () => {
    setTimeoutId(
      setTimeout(() => {
        alert('Po 4 sekundach wyświetl na stronie');
      }, 4000)
    );
  };

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

  return (
    <div>
      <div>
        {/* setInterval */}
        <button onClick={handleClick}>Wyświetl napis</button>
        <button onClick={handleClickClear}>ClearInterval</button>

        {/* setTimeout */}
        <button onClick={handleClickSetTimeout}>setTimeout button</button>
        <button onClick={handleClickClearTimeout}>ClearTimeout</button>
      </div>
      {showText && <div>Hej, jestem napisem</div>}
      <div>
        Jeśli chcesz uniknąć pojawienia się alertu to po naciśnięciu setTimeout
        button masz 4 sekundy na anulowanie tego przez ClearTimeout
      </div>
      <div>
        <h1>Timer</h1>
        <h2>{`${czas} sec`}</h2>
        <button onClick={toogleTimer}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={restartTimer}>Restart</button>
      </div>
    </div>
  );
};
