import './styles.css';
import { useState, useEffect } from 'react';

export const PromiseMethods = () => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('pierwszy');
    }, 100);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('drugi');
    }, 300);
  });

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('trzeci');
    }, 500);
  });

  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log('Promise.all', values);
  });

  // Powyżej się wywali całe jak będzie reject

  Promise.allSettled([promise1, promise2, promise3]).then((results) => {
    console.log('Promise.allSettled', results);
  });

  // Ten doprecyzuje dla każdego id co jest rejected a co jest resolved

  Promise.any([promise1, promise2, promise3]).then((value) => {
    console.log('Promise.any', value);
  });

  // Zwróć pierwszy poprawnie resolved, jak z najkrótszym czasem będzie reject to wykonany będzie drugi w kolejności

  Promise.race([promise1, promise2, promise3]).then((values) => {
    console.log('Promise.race', values);
  });

  // Pierwszy promise który się zakończył, jak z najkrótszym czasem będzie reject to nie idzie dalej (dlaczego?)

  const fetchDataFast = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 1, time: 300 });
      }, 300)
    );
  const fetchDataLong = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({ id: 2, time: 700 });
      }, 700)
    );
  const fetchDataError = () =>
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error('Błąd pobierania danych'));
      }, 500)
    );

  return (
    <>
      <div className="thisCssPage">
        <div>Placeholder</div>
      </div>
    </>
  );
};
