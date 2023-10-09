import './styles.css';
import { useState } from 'react';

export const SingleBox = ({ header, name, date, text }) => {
  return (
    <div className="todo-list">
      <div>
        <p>{header}</p>
        <p>{name}</p>
        <p>{date}</p>
        <p>{text}</p>
      </div>
      <div>Tu będzie ikona</div>
    </div>
  );
};
