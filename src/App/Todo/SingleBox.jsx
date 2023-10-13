import './styles.css';
import { useState } from 'react';
import { AcceptIcon } from './AcceptIcon';
import { BlackTrashcan } from './BlackTrashcan';
import { PencilIcon } from './PencilIcon';
import { BlackCheckmark } from './BlackCheckmark';
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
            <BlackCheckmark />
            <PencilIcon />
            <BlackTrashcan onClick={() => handleDelete(id)} />
            <img src={BlackTrashcan} onClick={() => handleDelete(id)} />
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
