import './styles.css';
import { useState, useEffect } from 'react';

export const TryCatchExercise = () => {
  const [numbersOnly, setNumbersOnly] = useState(null);

  function validate(event) {
    const value = event.target.value;
    //setNumbersOnly(event.target.value);

    if (isNaN(+value)) {
      throw new Error('Niestety wpisano tekst');
    }
  }

  function handleChange(event) {
    setNumbersOnly(null);
    try {
      validate(event);
    } catch (error) {
      setNumbersOnly(error.message);
    }
  }

  //useEffect(() => {
  //  try {
  //   validate();
  //  } catch (error) {
  //    console.log(error);
  //  } finally {
  //   console.log('Wszystko już się zakończyło');
  // }
  // }, []);

  // Jak się konwertowało dane tworzone przez useEffect do stringa?

  return (
    <>
      <div className="tryCatchExercisePage">
        <div>
          <input type="text" onChange={handleChange} />
        </div>
        <div>{numbersOnly}</div>
      </div>
    </>
  );
};
