import './styles.css';
import { useState, useEffect } from 'react';

export const AsyncAwait = () => {
  // Async poniżej
  function myPromiseFunc() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: 'John Doe' });
      }, 2000);
    });
  }

  //Mówi, że masz tu poczekać na dane

  async function myAsyncFunction() {
    const data = await myPromiseFunc();
    console.log(data);
  }

  myAsyncFunction();

  async function myAsyncFunc() {
    const data = await myPromiseFunc();
    console.log(data);
  }

  const myAsyncArrowFunc = async () => {
    const data = await myPromiseFunc();
    console.log(data);
  };

  myPromiseFunc().then((data) => {
    console.log(data);
  });

  try {
    myAsyncFunc();
    myAsyncArrowFunc();
  } catch (err) {
    console.log(err);
  }

  const [text, setText] = useState('');

  async function myAsyncFunc2() {
    const data = await myPromiseFunc();
    setText(data);
  }

  useEffect(() => {
    myAsyncFunc2();
  }, []);

  return (
    <>
      <div className="thisCssPage">
        <div>Hello async</div>
      </div>
    </>
  );
};
