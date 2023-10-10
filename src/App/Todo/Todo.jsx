import { SingleBox } from './SingleBox';
import './styles.css';
import { useState, useEffect } from 'react';

export const Todo = () => {
  const data = [
    {
      id: 0,
      title: 'Kupić spray na kleszcze',
      createdAt: '10.04.2024, 11:30',
      author: 'Marcin',
      isDone: false,
      note: 'Pamiętać, żeby sprawdzić skład i termin ważności preparatu. Zadzwonić do weta, żeby się upewnić, czy mają na stanie.',
      doneDate: '20.04.2024, 18:06',
    },
    {
      id: 1,
      title: 'Zamówić catering',
      createdAt: '20.04.2024, 18:03',
      author: 'Marcin',
      isDone: true,
      note: 'Dla mnie wege, dla Pauliny ryba + wege. Zrobić zamówienie, zapłacić.',
      doneDate: '20.04.2024, 18:06',
    },
    {
      id: 2,
      title: 'Szczepienie kitku',
      createdAt: '15.04.2024, 15:30',
      author: 'Marcin',
      isDone: true,
      note: 'Sprawdzić w książeczce zdrowia, kiedy Nala była ostatni raz szczepiona i umówić się z naszym weterynarzem.',
      doneDate: '20.04.2024, 18:06',
    },
  ];
  // [
  //  {
  //    "id": 0,
  //    "title": "string",
  //    "createdAt": "2023-10-10T15:46:51.732Z",
  //    "author": "string",
  //    "isDone": true,
  //    "note": "string",
  //    "doneDate": "2023-10-10T15:46:51.732Z"
  //  }
  // ]

  function testFunct() {
    console.log('przycisk działa');
  }
  return (
    <>
      <div className="todoCssPage">
        <strong>TODO</strong>
        <div className="todoCssPageSecondLine">
          <p>Tutaj znajdziesz listę swoich zadań</p>
          <button onClick={testFunct}>+</button>
        </div>
        {data.map((obj) => {
          return (
            <SingleBox
              title={obj.title}
              createdAt={obj.createdAt}
              author={obj.author}
              isDone={obj.isDone}
              note={obj.note}
              doneDate={obj.doneDate}
            />
          );
        })}
        <div>
          <button>Dodaj</button>
        </div>
      </div>
    </>
  );
};
