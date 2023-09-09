import { useState } from 'react';
import './styles.css';

export const MathInJS = () => {
  console.log('test');

  const myNumber = 2.1875;

  let myInt = parseInt(myNumber);

  let myFloat = parseFloat(myNumber);

  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');

  function GetA(event) {
    setNumberA(event.target.value);
  }

  function GetB(event) {
    setNumberB(event.target.value);
  }

  const string1 = '{';
  const string2 = '}';

  const isANumber = (inputNumber) => inputNumber === +inputNumber;
  const itIsANumber = isANumber(numberA * numberB);
  console.log(numberA * numberB);
  console.log(itIsANumber);

  return (
    <>
      <div className="mathinjspage">
        <p>17.5/8=2.1875</p>
        <p>My number is 2.1875</p>
        <p>isInteger: {Number.isInteger(myNumber).toString()}</p>
        <p>toFixed(2): {myNumber.toFixed(2)}</p>
        <p>round: {Math.round(myNumber)}</p>
        <p>ceil: {Math.ceil(myNumber)}</p>
        <p>floor: {Math.floor(myNumber)}</p>
        <p>sqrt: {Math.sqrt(myNumber)}</p>
        <p>random: {Math.random()}</p>
        <h3>
          Mnożenie w wykonaniu minimalnym {string1}numberA * numberB{string2}
        </h3>
        <input type="text" value={numberA} onChange={GetA} />
        *
        <input type="text" value={numberB} onChange={GetB} />
        <p>
          {numberA} * {numberB} = {numberA * numberB}
        </p>
        {itIsANumber
          ? 'Wprowadzone wartości są liczbami'
          : 'Wpisano znak nie będący liczbą'}
      </div>
    </>
  );
};
