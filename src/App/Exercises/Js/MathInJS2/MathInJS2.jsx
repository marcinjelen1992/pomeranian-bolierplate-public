import { useState } from 'react';
import './styles.css';

export const MathInJS2 = () => {
  const [numberB, setNumberB] = useState('');

  function GetB(event) {
    setNumberB(event.target.value);
  }

  function GetGrade(event) {
    setGradeText(event.target.value);
  }

  const string1 = '{';
  const string2 = '}';

  const [gradeText, setGradeText] = useState('');

  function changeGradeToText(input) {
    if (+input > 9 || +input < 0) {
      return 'Wpisano liczbę poza przewidzianym zakresem';
    }
    if (+input === 0) {
      return 'Zero';
    }
    if (+input === 1) {
      return 'Jeden';
    }
    if (+input === 2) {
      return 'Dwa';
    }
    if (+input === 3) {
      return 'Trzy';
    }
    if (+input === 4) {
      return 'Cztery';
    }
    if (+input === 5) {
      return 'Pięć';
    }
    if (+input === 6) {
      return 'Sześć';
    }
    if (+input === 7) {
      return 'Siedem';
    }
    if (+input === 8) {
      return 'Osiem';
    }
    if (+input === 9) {
      return 'Dziewięć';
    }
    if (input !== +input) {
      return 'Wpisano znak nie będący liczbą';
    }
  }

  const [numberC, setNumberC] = useState('');

  function GetC(event) {
    setNumberC(event.target.value);
  }

  function changeBckgr(input) {
    if (+input > 3 || +input < 0) {
      return 'paragraphbackgroundfunctionelse';
    }
    if (+input === 0) {
      return 'paragraphbackgroundfunctionzero';
    }
    if (+input === 1) {
      return 'paragraphbackgroundfunctionone';
    }
    if (+input === 2) {
      return 'paragraphbackgroundfunctiontwo';
    }
    if (+input === 3) {
      return 'paragraphbackgroundfunctionthree';
    }
    if (input !== +input) {
      return 'paragraphbackgroundfunctionnan';
    }
  }

  return (
    <>
      <div className="mathinjspage">
        <h3>
          Potęgowanie 2<sup>x</sup> w wykonaniu minimalnym {string1}2 ** numberB
          {string2}
        </h3>
        2 **
        <input type="text" value={numberB} onChange={GetB} />
        <p>
          2 ** {numberB} = {2 ** numberB}
        </p>
        <h3>Konwersja liczby na tekst w zakresie 0-9:</h3>
        <input type="text" value={gradeText} onChange={GetGrade} />
        <p>{changeGradeToText(gradeText)}</p>
        <h3>Zmiana koloru tła zależnie od wpisanej liczby:</h3>
        <input type="text" value={numberC} onChange={GetC} />
        <p className={changeBckgr(numberC)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          consequuntur placeat rerum similique accusantium asperiores est eum
          voluptatibus praesentium iure.
        </p>
      </div>
    </>
  );
};
