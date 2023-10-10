import './styles.css';
import { useState } from 'react';
import { AcceptIcon } from './AcceptIcon';

export const SingleBox = ({ header, name, date, text, acceptdate }) => {
  return (
    <div className="todo-list">
      <div>
        <p>{header}</p>
        <p>{name}</p>
        <p>{date}</p>
        <p>{text}</p>
      </div>
      <div className="todo-box-icon-column">
        <div>
          <AcceptIcon />
        </div>
        <div>
          <AcceptIcon />
          <p>{acceptdate}</p>
        </div>
      </div>
    </div>
  );
};
