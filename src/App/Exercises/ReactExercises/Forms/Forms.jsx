import './styles.css';
import { useState, useRef } from 'react';

export const Forms = () => {
  // domyślnie button w form submituje
  // można to potwierdzić przez <button type="submit">Submit</button>
  // jak button ma być buttonem bez submitowanie to daj <button type="button">Submit</button>

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Dziękuję za kliknięcie');
  }
  // event.preventDefault() blokuje przeładowanie strony przy submitowaniu
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="tekstowy">Kliknij ten label by sfokusować input</label>
        <input id="tekstowy" type="text" />

        <select>
          <option>1</option>
          <option>2</option>
        </select>

        <textarea />

        <input type="checkbox" />

        <input name="test" type="radio" />
        <input name="test" type="radio" />
        <input name="test" type="radio" />

        <input type="password" />
        <button>Submit</button>
      </form>
    </>
  );
};
