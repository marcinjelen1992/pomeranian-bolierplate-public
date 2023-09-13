// KindaCode.com
import './styles.css';
import { useState, useEffect } from 'react';

export const JSNumbersTraining = () => {
  function canDrive(age, hasDriverLicense, hasCar) {
    if (age < 18) {
      return 'You are too young to drive.';
    }

    if (!hasDriverLicense) {
      return "You can't drive without a driver's license.";
    }

    return hasCar ? 'You can drive your car!' : 'You can drive a rental car.';
  }

  function hasEnough(hasEnough) {
    return hasEnough;
  }

  console.log(canDrive(18, true, true));
  console.log(hasEnough(true));

  // Word count below

  // the text entered by the user
  const [text, setText] = useState('');

  // word count
  const [wordCount, setWordCount] = useState(0);

  // character count
  const [charCount, setCharCount] = useState(0);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // array of words
    const words = text.split(' ');

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);

    // update char count (including whitespaces)
    setCharCount(text.length);
  }, [text]);

  const [lessThanTen, setLessThanTen] = useState('');
  const [moreThanTen, setMoreThanTen] = useState('');

  function getWords(input) {
    const justwords = input.split(' ');
    return justwords;
  }
  console.log(getWords(text));
  // getWords tworzy array

  function CharCountCheck() {
    if (charCount >= 10) {
      setLessThanTen(false);
      setMoreThanTen(true);
    } else {
      setLessThanTen(true);
      setMoreThanTen(false);
    }
  }

  // To nie działa, czy brakuje && strong?

  return (
    <div>
      JS Numbers Training
      <h2>KindaCode.com</h2>
      <div>
        <textarea
          value={text}
          onChange={changeHandler}
          placeholder="What is on your mind?"
        ></textarea>

        <div>
          <p className="word-count">Word Count: {wordCount}</p>
          <p className="char-count">
            Character Count (Including Whitespaces): {charCount}
          </p>
          <p>
            Is this string shorter than 10 characters?{' '}
            <button onClick={CharCountCheck}>Click to find out</button>
            <br />
            {moreThanTen && (
              <strong>String length is equal or greater than 10</strong>
            )}
            {lessThanTen && <strong>String length is less than 10</strong>}
          </p>
        </div>
      </div>
    </div>
  );
};
