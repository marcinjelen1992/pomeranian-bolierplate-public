import './styles.css';
import { useState, useEffect } from 'react';

export const PromisesExercise = () => {
  const [myResult, setMyResult] = useState(null);
  const myPromise = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.round(Math.random());

        if (randomNumber) {
          resolve('Sukces');
        } else {
          reject('Porażka');
        }
      }, 2000);
    });

  useEffect(() => {
    myPromise()
      .then((value) => {
        setMyResult(value);
      })
      .catch((err) => {
        setMyResult(err);
      })
      .finally(() => {
        console.log('koniec');
      });
  }, []);

  return (
    <>
      <div className="thisCssPage">
        <div>Rezultat: {myResult}</div>
        <div>placeholder</div>
      </div>
    </>
  );
};
