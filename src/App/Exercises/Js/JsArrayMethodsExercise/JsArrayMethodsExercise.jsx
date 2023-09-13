import { useState } from 'react';
import './styles.css';

export const JsArrayMethodsExercise = () => {
  // Number()
  // Boolean()
  // String()

  const myArrayA = [1, 2, 3, 4, 5];
  const myArrayB = [3, 5, 7, 9];
  const myArrayC = [1, 2, 3, 4, 5, 6];
  const myArrayD = [1, 3, 4, 5, 6, 7, 9];
  const myArrayE = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const myArrayF = [1, 2, 3, 4, 5, 6, 15, 21, 33];
  const myArrayG = [1, 2, 3, 4, 5, 9];

  function sameNumbers(array1, array2) {
    const commonElements = array1.filter((item) => array2.includes(item));
    return commonElements;
  }

  // dla myArrayA i myArrayB ma być 35 i jest 35

  function averageNumbers(array) {
    const sum = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const average = sum / array.length;
    return average;
  }

  // ma być 3.5 i jest 3.5

  const create2dArray = (x, y) => {
    const resultArray = [];
    for (let i = 0; i < x; i++) {
      const row = [];
      for (let j = 0; j < y; j++) {
        row.push(0);
      }
      resultArray.push(row);
    }
    return resultArray;
  };

  console.log('create2dArray', create2dArray(3, 5));
  // create2dArray(1,1) => [[0]]
  // create2dArray(1,2) => [[0,0]]
  // create2dArray(2,2) => [[0,0],[0,0]]

  function reverseArray(array) {
    const mappedValue = array.map((value) => value);
    const reversed = mappedValue.reverse();
    return reversed;
  }

  function alternativeReverseArray(array) {
    const newArray = array.reverse((value) => value);
    return newArray;
  }

  console.log(reverseArray(myArrayA));
  console.log(typeof reverseArray(myArrayA));
  console.log(reverseArray(myArrayB));
  console.log(reverseArray(myArrayC));
  console.log(alternativeReverseArray(myArrayC));

  const object = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Adam', age: 24 },
    { id: 3, name: 'Emily', age: 30 },
  ];

  function getNames(obj) {
    return obj.map(({ name }) => name);
  }
  console.log(getNames(object));

  function sumOfAge(obj) {
    return obj.reduce(
      (accumulator, currentValue) => accumulator + currentValue.age,
      0
    );
  }
  console.log(sumOfAge(object));

  const [anagramValueA, setAnagramValueA] = useState('');
  const [anagramValueB, setAnagramValueB] = useState('');

  function GetAnagramA(event) {
    setAnagramValueA(event.target.value);
  }

  function GetAnagramB(event) {
    setAnagramValueB(event.target.value);
  }

  function isAnagram(firstWord, secondWord) {
    const firstWordArray = firstWord.split('').sort();
    const secondWordArray = secondWord.split('').sort();

    return firstWordArray.toString() === secondWordArray.toString()
      ? true
      : false;
  }

  function commonLetters(str1, str2) {
    const letters1 = new Set(str1);
    const arrayLetters2 = Array.from(new Set(str2));
    return Array.from(letters1).filter((letter) =>
      arrayLetters2.includes(letter)
    );
  }
  console.log('commonLetters', commonLetters('Hello', 'World'));

  const [stringA, setStringA] = useState('');
  const [stringB, setStringB] = useState('');
  const [stringC, setStringC] = useState('');

  function GetStringA(event) {
    setStringA(event.target.value);
  }

  function GetStringB(event) {
    setStringB(event.target.value);
  }

  function GetStringC(event) {
    setStringC(event.target.value);
  }

  function toCamelCase(str) {
    const words = str.split(/[ \-_]/);
    const camelCaseWords = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    });
    return camelCaseWords.join('');
  }
  console.log(toCamelCase('Hello world'));

  function isEven(array1) {
    const commonElements = array1.filter((item) => item % 2 === 0);
    return commonElements;
  }

  console.log(isEven(myArrayE));

  function isOdd(array1) {
    const commonElements = array1.filter((item) => item % 2 !== 0);
    return commonElements;
  }

  console.log(isOdd(myArrayD));

  function doubleCharacter(array) {
    const mappedValue = array.map((value) => value);
    const doubled = mappedValue.concat(mappedValue);
    const doubleSorted = doubled.sort();
    return doubleSorted;
  }

  console.log(doubleCharacter(myArrayE));
  console.log(doubleCharacter(myArrayF));

  function getArrayCount(input) {
    const justArrayWords = input.split(' ');
    const numberMap = justArrayWords.map((w) => w.length);
    return numberMap;
  }

  console.log(getArrayCount('Welcome to Frontend'));

  function isEvenSum(array1) {
    const commonElements = array1.filter((item) => item % 2 === 0);
    const sum = commonElements.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const averageEven = sum;
    return averageEven;
  }

  console.log(isEvenSum(myArrayG));

  return (
    <div className="js-array-methods-exercises-page">
      <h3>Hello there</h3>
      <p>{sameNumbers(myArrayA, myArrayB)}</p>
      <p>{averageNumbers(myArrayC)}</p>
      <p>{create2dArray(2, 2)}</p>
      <p>{reverseArray(myArrayA)}</p>
      <ul>
        {object.map((item) => {
          return (
            <li key={item.id} id={item.id}>{`${item.name} ${item.age}`}</li>
          );
        })}
      </ul>
      <p>{getNames(object)}</p>
      <p>{sumOfAge(object)}</p>
      <h3>Sprawdź czy dwa wpisane słowa są anagramami</h3>
      <p>
        <input type="text" value={anagramValueA} onChange={GetAnagramA} />
        <input type="text" value={anagramValueB} onChange={GetAnagramB} />
        {isAnagram(anagramValueA, anagramValueB)
          ? 'Jest to anagram'
          : 'Nie jest to anagram'}
      </p>
      <h3>Wspólne znaki dla dwóch wyrazów</h3>
      <p>
        <input type="text" value={stringA} onChange={GetStringA} />
        <input type="text" value={stringB} onChange={GetStringB} />
        {commonLetters(stringA, stringB)}
      </p>
      <h3>Konwersja do camelCase</h3>
      <p>
        <input type="text" value={stringC} onChange={GetStringC} />
        {toCamelCase(stringC)}
      </p>
    </div>
  );
};
