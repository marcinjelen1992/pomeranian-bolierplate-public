import './styles.css';
import { useState } from 'react';
import { AcceptIcon } from './AcceptIcon';
import { BlackTrashcan } from './BlackTrashcan';
import { PencilIcon } from './PencilIcon';
import { BlackCheckmark } from './BlackCheckmark';

export const SingleBox = ({
  title,
  createdAt,
  author,
  isDone,
  note,
  doneDate,
}) => {
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
          <div>
            <BlackCheckmark />
            <PencilIcon />
            <BlackTrashcan />
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
