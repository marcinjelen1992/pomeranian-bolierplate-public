import './styles.css';
import { useState, useEffect } from 'react';

export const AnimationsJs = () => {
  const [text, setText] = useState('Front-end');
  const [isAnimated, setIsAnimated] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const toggleButton = () => {
    setIsAnimated((prev) => !prev);
  };
  useEffect(() => {
    if (opacity > 0) {
      const interval = setInterval(() => {
        setOpacity(opacity - 0.005);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [opacity]);
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
