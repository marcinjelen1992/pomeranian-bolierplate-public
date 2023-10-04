import './styles.css';
import { useState, useEffect } from 'react';

export const PromisesExercise = () => {
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

  myPromise()
    .then((value) => {
      console.log(value);
      return value;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log('koniec');
    });

  return (
    <>
      <div className="thisCssPage">
        <div></div>
        <div>placeholder</div>
      </div>
    </>
  );
};
