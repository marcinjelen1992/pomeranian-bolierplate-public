import { SingleBox } from './SingleBox';
import './styles.css';
import { useState, useEffect } from 'react';

export const Todo = () => {
  return (
    <>
      <div className="todoCssPage">
        <strong>TODO</strong>
        <p>Tutaj znajdziesz listę swoich zadań</p>
        <SingleBox
          header="Szczepienie kitku"
          name="Marcin"
          date="15.04.2024, 15:30"
          text="Sprawdzić w książeczce zdrowia, kiedy Nala była ostatni raz szczepiona i umówić się z naszym weterynarzem."
        />
      </div>
    </>
  );
};
