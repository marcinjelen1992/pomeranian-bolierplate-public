import './styles.css';
import { useState, useEffect } from 'react';

export const AnimationsJs = () => {
  const [text, setText] = useState('Front-end');
  const [isAnimated, setIsAnimated] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const toggleButton = () => {
    setIsAnimated((prev) => !prev);
  };

  // oryginalna wersja

  // useEffect(() => {
  //  if (opacity > 0) {
  //    const interval = setInterval(() => {
  //      setOpacity(opacity - 0.005);
  //    }, 50);
  //    return () => clearInterval(interval);
  //  }
  //}, [opacity]);

  // nowa wersja działająca
  // useEffect(() => {
  //  let interval;
  //  if (opacity > 0) {
  //    interval = setInterval(() => {
  //      setOpacity(opacity - 0.005);
  //    }, 50);
  //  } else {
  //    clearInterval(interval);
  //  }
  //  return () => {
  //    clearInterval(interval);
  //  };
  //}, [opacity]);

  // koncept, fading zaczyna się po naciśnięciu przycisku ON, a naciśnięcie OFF zatrzymuje, ale jak się nie zatrzyma przed 0 to opacity idzie w ujemne
  useEffect(() => {
    let interval;
    if (isAnimated > 0) {
      interval = setInterval(() => {
        setOpacity((prev) => prev - 0.005);
      }, 50);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isAnimated]);

  // TODO: podłącz przycisk by włączał i wyłączał
  return (
    <>
      <div>
        <p>{text}</p>
        <button onClick={toggleButton}>{isAnimated ? 'OFF' : 'ON'}</button>
      </div>
      <div className="animated-box" style={{ opacity: opacity }}></div>
    </>
  );
};
