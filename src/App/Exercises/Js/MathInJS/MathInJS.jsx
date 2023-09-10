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

  function GetGrade(event) {
    setGrade(event.target.value);
  }

  const string1 = '{';
  const string2 = '}';

  const isANumber = (inputNumber) => inputNumber === +inputNumber;
  const itIsANumber = isANumber(numberA * numberB);
  console.log(numberA * numberB);
  console.log(itIsANumber);

  const [grade, setGrade] = useState('');
  const [stringGrade, setStringGrade] = useState('Brak wpisanej liczby');

  function changeGradeToText() {
    if (grade !== +grade) {
      setStringGrade('Wpisano znak nie będący liczbą');
    }
    if (+grade > 9 || +grade < 0) {
      setStringGrade('Wpisano liczbę poza przewidzianym zakresem');
    }
    if (+grade === 0) {
      setStringGrade('Zero');
    }
    if (+grade === 1) {
      setStringGrade('Jeden');
    }
    if (+grade === 2) {
      setStringGrade('Dwa');
    }
    if (+grade === 3) {
      setStringGrade('Trzy');
    }
    if (+grade === 4) {
      setStringGrade('Cztery');
    }
    if (+grade === 5) {
      setStringGrade('Pięć');
    }
    if (+grade === 6) {
      setStringGrade('Sześć');
    }
    if (+grade === 7) {
      setStringGrade('Siedem');
    }
    if (+grade === 8) {
      setStringGrade('Osiem');
    }
    if (+grade === 9) {
      setStringGrade('Dziewięć');
    }
  }

  const [numberC, setNumberC] = useState('');
  const [numberD, setNumberD] = useState('');

  function GetC(event) {
    setNumberC(event.target.value);
  }

  function GetD(event) {
    setNumberD(event.target.value);
  }
  const [ownMaxNumber, setOwnMaxNumber] = useState(
    'Nie wpisano żadnej wartości'
  );

  function ownMax() {
    if (numberC !== +numberC) {
      setOwnMaxNumber('Wpisano znak nie będący liczbą');
    }
    if (+numberC > +numberD) {
      setOwnMaxNumber(numberC);
    }
    if (+numberC < +numberD) {
      setOwnMaxNumber(numberD);
    }
    if (+numberC === +numberD) {
      setOwnMaxNumber(numberC);
    }
  }

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
        <h3>Konwersja liczby na tekst w zakresie 0-9:</h3>
        <input type="text" value={grade} onChange={GetGrade} />
        <button onClick={changeGradeToText}>Kliknij by uzyskać tekst</button>
        <p>{stringGrade}</p>
        <h3>
          Detekcja większej liczby spośród dwóch wpisanych (symulacja Math.max):
        </h3>
        <input type="text" value={numberC} onChange={GetC} />
        <input type="text" value={numberD} onChange={GetD} />
        <button onClick={ownMax}>Kliknij by sprawdzić</button>
        <p>{ownMaxNumber}</p>
      </div>
    </>
  );
};
