// Sposoby importu
// import * as math from './math'; to zaimportuje wszystkie wyexportowane funkcje z pliku math.js -> import waży więcej ok 4kb
//console.log(math.multiply(2, 4));
// import { add } from './math'; to zaimportuje tylko konkretne funkcje z pliku math.js -> import waży mniej ok 1kb
import './styles.css';
import * as math from './math.js';
import { useState } from 'react';

export const JsFunctionsBasics = () => {
  // 1 Declaration - Named functions
  function add(a, b) {
    return a + b;
  }
  console.log(add(2, 4));

  // const add2 = (a, b) => {
  //  return a + b;
  // };

  // 2 Expression - Anonymous functions
  const square = function (x) {
    return x * x;
  };
  const double = (x) => x * 2;

  console.log(square(3));
  console.log(double(11));

  console.log(math.multiply(6, 7));

  // Return types
  const firstPerson = { name: 'John', age: 24 };
  const secondPerson = { name: 'Jan', age: 34 };
  const createPerson = (name, age) => ({ name: name, age: age });
  console.log(createPerson(firstPerson.name, firstPerson.age));

  const createPersonList = (person1, person2) => [person1, person2];
  console.log(createPersonList(firstPerson, secondPerson));

  const functionTest = (age) => {
    return console.log('Moj wiek to ' + age);
  };
  functionTest(15);
  // Outer functions and innter function
  // currying

  function outerFunction(x) {
    console.log(x, 'x');
    function innerFunction(y) {
      console.log(y, 'y');
      return x + y;
    }
    return innerFunction;
  }

  const dodaj5 = outerFunction(5);
  console.log(dodaj5(12));

  // rekurancja
  function silnia(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * silnia(n - 1);
    }
  }

  console.log(silnia(4));

  // Function Arguments
  // Default Arguments (Domyślne Parametry):
  function greet(name, surname, prefix = 'Pani') {
    console.log(prefix + ' ' + name + ' ' + surname);
  }
  greet('Anna', 'Kowalska');
  // Możesz użyć operatora rozproszenia (...) w parametrach funkcji do obsługi zmiennej liczby argumentów.

  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

  // Wartość vs referencja

  // Wartość
  // Wartości Przechodzą przez Wartość (Pass by Value): Typy proste, takie jak liczby, stringi, booleans, przekazywane są jako kopie swoich wartości.
  // Zmiana wartości wewnątrz funkcji nie wpływa na zmienną z zewnątrz.

  function updateNumber(num) {
    num = num * 2;
    return num;
  }
  let x = 5;
  let resultValue = updateNumber(x);
  console.log(resultValue, x);
  // Referencja
  // Referencje Przechodzą przez Referencję(Pass by Reference):
  // Typy referencyjne, takie jak obiekty i tablice, przekazywane są jako referencje do swoich danych w pamięci.
  // Funkcje operują na tych samych danych w pamięci, więc zmiany wewnątrz funkcji wpływają na zmienną z zewnątrz.
  function updateArray(arr) {
    arr.push(4);
    return arr;
  }
  let arr = [1, 2, 3];
  let updatedArray = updateArray(arr);
  console.log(updatedArray, arr);

  let x1 = 5;
  let y1 = 5;
  console.log(x1 === y1); // true bo porównujemy wartości

  let x2 = [1, 2, 3];
  let y2 = [1, 2, 3];

  console.log(x2 === y2); // false bo porównujemy referencje

  // Hoisting
  // Hoisting to zachowanie w JavaScript, w którym deklaracje zmiennych i funkcji są przenoszone na górę swojego zakresu, zanim kod zostanie wykonany. Oznacza to, że możemy używać zmiennych i funkcji przed ich faktyczną deklaracją w kodzie.
  // Komilator JS i hoisting:
  // Przed wykonaniem kodu JavaScript przechodzi przez proces kompilacji, podczas którego zbierane są deklaracje zmiennych i funkcji. Zmienne są zainicjalizowane na wartość undefined, a funkcje zostają przeniesione na górę zakresu.

  hello();

  function hello() {
    console.log('Hello');
  }

  // console.log(x3);
  // const x3 = 5;

  // Block scope

  const c = 5;
  function addTwoNumber(a) {
    return a + c;
  }
  console.log('addTwoNumber', addTwoNumber(5));

  // LET vs CONST vs VAR
  // LET I CONST - ZMIENNE KTÓRE SĄ DOSTĘPNE W BLOKU KODU W KTÓRYM ZOSTAŁY ZDEFINIOWANE
  // VAR - ZMIENNE KTÓRE SĄ DOSTĘPNE W FUNKCJI W KTÓREJ ZOSTAŁY ZDEFINIOWANE

  // LET - ZMIENIALNY
  // CONST - NIEZMIENIALNY (TABLICE I OBIEKTY SĄ ZMIENIALNE)

  // Dlaczego używamy let i const, a nie var?
  // var nie posiada zasięgu blokowego, co może prowadzić do nieoczekiwanych rezultatów w kodzie. W przypadku let i const, zmienne są widoczne tylko wewnątrz bloku, co poprawia czytelność i bezpieczeństwo kodu.

  function sort(...numbers) {
    return numbers.sort((value1, value2) => value2 - value1);
  }
  console.log('sort', sort(1, 11, 13, 4, 5, 6, 7, 8));

  // funkcja sortowanie tablicy z zapodaniem wyniku jako nowy array, bez modyfikacji oryginalnego

  const originalArr = [1, 3, 2];
  // const sortImmune = (arr) => [...arr].sort((a, b) => a - b);
  const sortImmune = (arr) => arr.slice().sort((a, b) => a - b);

  const sortedArr = sortImmune(originalArr);
  console.log({
    originalArr, // [1, 3, 2]
    sortedArr, // [1, 2, 3]
  });

  function countOccurence(target) {
    if (typeof target !== 'number') {
      return () => 'Złe wejście';
    }
    return (...numbers) => {
      let count = 0;
      for (const num of numbers) {
        if (typeof num === 'number' && num === target) {
          count++;
        }
      }
      return count;
    };
  }

  console.log('ZliczWystapienia', countOccurence(1)(1, 1, 2, 3, 5, 7, 8, 1));

  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [operatorA, setOperatorA] = useState('');
  const [resultA, setResultA] = useState('');

  function GetA(event) {
    setNumberA(event.target.value);
  }

  function GetB(event) {
    setNumberB(event.target.value);
  }

  function GetOperatorA(event) {
    setOperatorA(event.target.value);
  }

  function Calculate() {
    if (operatorA === '+') {
      setResultA(numberA + numberB);
    } else if (operatorA === '-') {
      setResultA(numberA - numberB);
    } else if (operatorA === '*') {
      setResultA(numberA * numberB);
    } else if (operatorA === '/') {
      setResultA(numberA / numberB);
    }
  }
  function calculateWithChar(operator) {
    return (num1, num2) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'złe wejscie';
      }
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num1 / num2;
        default:
          return 'zły znak';
      }
    };
  }
  console.log('calculateWithChar', calculateWithChar('+')(6, 7));
  console.log('calculateWithChar', calculateWithChar('*')(6, 7));
  return (
    <>
      <div>JS functions basics</div>
      <p>
        Operacja matematyczne z wyborem operatora (+(nie działa poprawnie), -,
        *, /){' '}
      </p>
      <input
        type="text"
        value={numberA}
        onChange={GetA}
        placeholder="Pierwsza liczba"
      />
      <input
        type="text"
        value={operatorA}
        onChange={GetOperatorA}
        placeholder="Operator"
      />
      <input
        type="text"
        value={numberB}
        onChange={GetB}
        placeholder="Druga liczba"
      />
      <button onClick={Calculate}>Oblicz</button>

      <p>
        <strong>
          {numberA}
          {operatorA}
          {numberB} = {resultA}
        </strong>
      </p>
    </>
  );
};
