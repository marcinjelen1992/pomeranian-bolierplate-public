import './styles.css';
import { useState, useEffect } from 'react';

export const TodoWithServer = () => {
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  function getTodos() {
    fetch('http://localhost:3333/api/todo', { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        setErrorMessage('Serwer nie działa');
      });
  }

  return (
    <>
      <div className="thisCssPage">
        <div>
          <button onClick={getTodos} type="button">
            Pobierz dane
          </button>
        </div>
        <div>
          {errorMessage && <strong>{errorMessage}</strong>}
          <ul>
            {todos?.map((todo) => {
              return <li>{todo.title}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
