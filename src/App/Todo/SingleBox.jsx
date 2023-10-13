import './styles.css';
import { useEffect, useState } from 'react';
import { AcceptIcon } from './AcceptIcon';
import { BlackTrashcan } from './BlackTrashcan';
import BlackTrashcanIcon from './BlackTrashcanIcon.svg';
import { PencilIcon } from './PencilIcon';
import PencilIconSvg from './PencilIconSvg.svg';
import { BlackCheckmark } from './BlackCheckmark';
import BlackCheckmarkIcon from './BlackCheckmarkIcon.svg';
import { fetchData, sendData } from './api/todoListApi';

export const SingleBox = ({
  id,
  title,
  createdAt,
  author,
  isDone,
  note,
  doneDate,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [getKickComponent, setGetKickComponent] = useState(null);

  async function handleDelete(paramId) {
    await sendData(`http://localhost:3333/api/todo/${paramId}`, [], 'DELETE')
      .then((response) => {})
      .catch((error) => {
        setErrorMessage(error);
      });
  }

  async function handleDone(paramId) {
    await sendData(
      `http://localhost:3333/api/todo/${paramId}/markAsDone`,
      [],
      'PUT'
    )
      .then((response) => setGetKickComponent(response))
      .catch((error) => {
        setErrorMessage(error);
      });
  }

  //  useEffect(() => {
  //    handleDone();
  //  }, [getKickComponent]);

  const [screenSwitch, setScreenSwitch] = useState(false);

  function handleScreenSwitch() {
    setScreenSwitch(true);
  }

  const [getTitle, setTitle] = useState('');
  const [getAuthor, setAuthor] = useState('');
  const [getNote, setNote] = useState('');

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

  // ZRÓB AUTOODŚWIEŻANIE

  function getArray(input1, input2, input3) {
    return { title: input1, note: input2, author: input3 };
  }

  async function handleModding(paramId) {
    await sendData(
      `http://localhost:3333/api/todo/${paramId}`,
      getArray(getTitle, getNote, getAuthor),
      'PUT'
    )
      .then((response) => {
        setScreenSwitch(false);
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  }

  return (
    <div>
      {!screenSwitch ? (
        <div className="todo-list">
          <div>
            <p>{title}</p>
            <p>{author}</p>
            <p>{createdAt}</p>
            <p>{note}</p>
          </div>

          <div className="todo-box-icon-column">
            <div>
              <div className="todo-box-icon-column-upper-row">
                {!isDone && (
                  <img
                    src={BlackCheckmarkIcon}
                    onClick={() => handleDone(id)}
                  />
                )}
                <img src={PencilIconSvg} onClick={handleScreenSwitch} />

                <img src={BlackTrashcanIcon} onClick={() => handleDelete(id)} />
                {errorMessage && <p>Server error, try again</p>}
              </div>
            </div>
            {isDone ? (
              <div>
                <AcceptIcon />
                <p>{doneDate}</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        <div className="todo-list-modding">
          {' '}
          <div className="todoAddItemRow">
            <p>Modyfikacja treści</p>
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
            <button onClick={() => handleModding(id)}>Zmień</button>
          </div>
          {errorMessage && <p>Server error, try again</p>}
        </div>
      )}
    </div>
  );
};
