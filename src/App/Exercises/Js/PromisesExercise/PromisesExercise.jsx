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

  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function loadUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John Doe' });
      }, 2000);
    });
  }

  function loadUserDetails(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.round(Math.random());

        if (randomNumber) {
          resolve({ id: userId, age: 30, country: 'Poland' });
        } else {
          reject('Błąd pobierania danych');
        }
      }, 2000);
    });
  }

  function loadAllUserData() {
    setData(null);
    setErrorMessage(null);
    loadUser().then((user) => {
      loadUserDetails(user.id)
        .then((details) => {
          setData(details);
        })
        .catch((err) => {
          setErrorMessage(err);
        });
    });
  }

  return (
    <>
      <div className="thisCssPage">
        <div>Rezultat: {myResult}</div>
        <div>
          <button onClick={loadAllUserData}>Pobierz dane</button>
        </div>
        {data && (
          <div>
            <p>Id: {data.id}</p>
            <p>Age: {data.age}</p>
            <p>Country: {data.country}</p>
          </div>
        )}
        <div>{errorMessage && <div>{errorMessage}</div>}</div>
      </div>
    </>
  );
};
