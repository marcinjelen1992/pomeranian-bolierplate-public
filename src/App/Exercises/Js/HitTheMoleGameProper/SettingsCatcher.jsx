import './styles.css';
import { useState } from 'react';

export const SettingsCatcher = ({ input1, input2 }) => {
  const getInput1 = input1;
  const getInput2 = input2;

  console.log(getInput1);

  function getTheStartData(input1, input2) {
    const inputOneBooleanMap = input1.map(
      ({ isHighlightedTime }) => isHighlightedTime
    );
    const inputTwoBooleanMap = input2.map(
      ({ isHighlightedMole }) => isHighlightedMole
    );
    const concatenatedMap = inputOneBooleanMap.concat(inputTwoBooleanMap);
    if (concatenatedMap[0] === true && concatenatedMap[3] === true) {
      return 'Zaznaczono 1 minutę i 1 kreta';
    }
    if (concatenatedMap[0] === true && concatenatedMap[4] === true) {
      return 'Zaznaczono 1 minutę i 2 krety';
    }
    if (concatenatedMap[0] === true && concatenatedMap[5] === true) {
      return 'Zaznaczono 1 minutę i 3 krety';
    }
    if (concatenatedMap[1] === true && concatenatedMap[3] === true) {
      return 'Zaznaczono 2 minuty i 1 kreta';
    }
    if (concatenatedMap[1] === true && concatenatedMap[4] === true) {
      return 'Zaznaczono 2 minuty i 2 krety';
    }
    if (concatenatedMap[1] === true && concatenatedMap[5] === true) {
      return 'Zaznaczono 2 minuty i 3 krety';
    }
    if (concatenatedMap[2] === true && concatenatedMap[3] === true) {
      return 'Zaznaczono 3 minuty i 1 kreta';
    }
    if (concatenatedMap[2] === true && concatenatedMap[4] === true) {
      return 'Zaznaczono 3 minuty i 2 krety';
    }
    if (concatenatedMap[2] === true && concatenatedMap[5] === true) {
      return 'Zaznaczono 3 minuty i 3 krety';
    } else {
      return 'Nie zaznaczono obu opcji';
    }
  }

  console.log(
    'Komunikat z arraya Booleanów:',
    getTheStartData(getInput1, getInput2)
  );
  // TODO: Zmień klasy button_nr2 na button, a button_nr1 na highlightedButton a moleGame i inne camelem, plus miej konsekwentne nazwy
  // className={isHighlightedTime ? 'button_nr2' : 'button_nr1'} zmień żeby zrobić funkcję przełączającą i w klamrowych odwołać się do funkcji
  // jak masz {itemsTime.map(({ time, isHighlightedTime }) => ( to zrób analogiczną zmianę dla mole
  // zawartość tego co jest tutaj przenieś do innego komponentu

  return (
    <div>
      <p>{getTheStartData(getInput1, getInput2)}</p>
    </div>
  );
};
