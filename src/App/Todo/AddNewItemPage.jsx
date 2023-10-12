import './styles.css';
import { fetchData, sendData } from './api/todoListApi';
import { useState } from 'react';

export const AddNewItemPage = () => {
  const [getTitle, setTitle] = useState('');
  const [getAuthor, setAuthor] = useState('');
  const [getNote, setNote] = useState('');
  const [emptyArray, setEmptyArray] = useState([]);

  function GetTitleInput(event) {
    setTitle(event.target.value);
  }

  function GetAuthorInput(event) {
    setAuthor(event.target.value);
  }

  function GetNoteInput(event) {
    setNote(event.target.value);
  }

  // function getArray(input1, input2, input3) {
  //  return [input1, input2, input3];
  // }

  function getArray(input1, input2, input3) {
    return { title: input1, note: input2, author: input3 };
  }

  console.log(getArray(getTitle, getNote, getAuthor));

  return (
    <>
      <div className="todoAddItemPage">
        <strong>TODO</strong>
        <div className="todoAddItemRow">
          <p>Zrób tutaj inputy</p>
        </div>
        <div className="todoAddItemRow">
          <span>Tytuł</span>
          <input type="text" value={getTitle} onChange={GetTitleInput} />
        </div>
        <div className="todoAddItemRow">
          <span>Autor</span>
          <input type="text" value={getAuthor} onChange={GetAuthorInput} />
        </div>
        <div className="todoAddItemRow">
          <span>Treść</span>
          <input type="text" value={getNote} onChange={GetNoteInput} />
        </div>
        <div className="todoAddItemButtons">
          <div></div>
          <button>Cofnij</button>
          <button
            onClick={() =>
              sendData(
                'http://localhost:3333/api/todo',
                getArray(getTitle, getNote, getAuthor)
              )
            }
          >
            Dodaj
          </button>
        </div>
      </div>
    </>
  );
};
