import './styles.css';
import { useState } from 'react';

export const SingleQuestion = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);
  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <div className="faq-list">
        <p onClick={handleClick}>{question}</p>
        {isVisible && <p>{answer}</p>}
      </div>
    </div>
  );
};
