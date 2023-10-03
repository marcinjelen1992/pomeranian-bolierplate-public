import './styles.css';
import { useState, useEffect } from 'react';

export const JsonLearning = () => {
  // Notacja JS:
  // const myObject = { a: 1;
  // b: 2;
  //c: null
  // d: false
  // x: "string"}

  // Notacja JSON (różnica w cudzysłowiach)
  // { "a": 1;
  // "b": 2;
  // "c": null
  // "d": false
  // "x": "string"}

  const testObj = `{
    "test": "asd",
    "isVisible": false
  }`;
  console.log(JSON.parse(testObj));

  const stringifyObj = {
    a: '1',
    b: '2',
  };

  console.log(JSON.stringify(stringifyObj));

  const extendedObj = {
    items: [
      {
        id: 1,
        name: 'szklanka',
      },
      {
        id: 2,
        name: 'monitor',
      },
      {
        id: 3,
        name: 'telefon',
      },
    ],
  };

  console.log(JSON.stringify(extendedObj));
  // używaj tego powyżej gdyż console.log(extendedObj.toString) da wynik object Object

  return (
    <>
      <div className="thisCssPage">
        <div></div>
        <div>placeholder</div>
      </div>
    </>
  );
};
