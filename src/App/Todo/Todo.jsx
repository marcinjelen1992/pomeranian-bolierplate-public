import { SingleBox } from './SingleBox';
import './styles.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Todo = () => {
  // import { fetchData } from './api/todoListApi'
  // Trzy consty
  // getTodoDATA [getTodosData, setTodosData] = useState([]); <- Dobrą praktyką przy constach do pobierania danych jest nazywanie get
  // getIsLoading [getIsLoadingList, setIsLoadingList] = useState(true); <- Is mówi o booleanie
  // getError [getError, setError] = useState('');

  // const fetchTodoData = async () => {
  // setIsLoading(true); <- to uruchamia kręciołek podczas ładowania danych
  // try {
  // const responseData = await fetchData("http://localhost:3333/api/todo");
  // setTodosData(responseData);
  // setIsLoading(false)
  // } catch (error) {
  //  setError(error);
  // setIsLoading(false);
  // }
  // }

  // useEffect(() => {
  // fetchTodoData();
  // }, []);

  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  function getTodos() {
    fetch('http://localhost:3333/api/todo', { method: 'GET' })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        setErrorMessage('Serwer nie działa');
      });
  }

  useEffect(() => {
    getTodos();
  }, []);
  // Komunikat błędu pojawia się, ale nie znika, zrób timeout lub co tam uważasz według preferencji

  // const data = [
  //  {
  //    id: 0,
  //    title: 'Kupić spray na kleszcze',
  //   createdAt: '10.04.2024, 11:30',
  //    author: 'Marcin',
  //    isDone: false,
  //   note: 'Pamiętać, żeby sprawdzić skład i termin ważności preparatu. Zadzwonić do weta, żeby się upewnić, czy mają na stanie.',
  //    doneDate: '20.04.2024, 18:06',
  //  },
  //  {
  //    id: 1,
  //    title: 'Zamówić catering',
  //    createdAt: '20.04.2024, 18:03',
  //    author: 'Marcin',
  //    isDone: true,
  //    note: 'Dla mnie wege, dla Pauliny ryba + wege. Zrobić zamówienie, zapłacić.',
  //    doneDate: '20.04.2024, 18:06',
  //  },
  //  {
  //    id: 2,
  //    title: 'Szczepienie kitku',
  //    createdAt: '15.04.2024, 15:30',
  //    author: 'Marcin',
  //    isDone: true,
  //    note: 'Sprawdzić w książeczce zdrowia, kiedy Nala była ostatni raz szczepiona i umówić się z naszym weterynarzem.',
  //    doneDate: '20.04.2024, 18:06',
  //  },
  // ];

  function testFunct() {
    console.log('przycisk działa');
  }

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Todo/AddNewItemPage`;
    navigate(path);
  };

  return (
    <>
      <div className="todoCssPage">
        <strong>TODO</strong>
        <div className="todoCssPageSecondLine">
          <p>Tutaj znajdziesz listę swoich zadań</p>
          <button onClick={testFunct}>+</button>
        </div>

        {errorMessage && <strong>{errorMessage}</strong>}
        {todos?.map((obj) => {
          return (
            <SingleBox
              title={obj.title}
              createdAt={obj.createdAt}
              author={obj.author}
              isDone={obj.isDone}
              note={obj.note}
              doneDate={obj.doneDate}
            />
          );
        })}

        <div>
          <div></div>
          <button onClick={routeChange}>Dodaj</button>
        </div>
      </div>
    </>
  );
};
