import './styles.css';
import { useEffect, useState } from 'react';
import { AcceptIcon } from './AcceptIcon';
import { BlackTrashcan } from './BlackTrashcan';
import BlackTrashcanIcon from './BlackTrashcanIcon.svg';
import { PencilIcon } from './PencilIcon';
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

  return (
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
              <img src={BlackCheckmarkIcon} onClick={() => handleDone(id)} />
            )}
            <PencilIcon />

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
  );
};
