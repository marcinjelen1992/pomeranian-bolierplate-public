import './styles.css';

const DATA = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes'];

const OBJECT_DATA = [
  { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },
  { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },
  { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },
  { id: 4, make: 'Tesla', model: 'Model S', year: 2022, owner: 'Sarah' },
];

export const ArrayRendering = () => {
  return (
    <>
      <ul>
        {DATA.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <ul>
        {OBJECT_DATA.map((item) => {
          return (
            <li
              key={item.id}
              id={item.id}
            >{`${item.make} ${item.model} produced in ${item.year}`}</li>
          );
        })}
      </ul>
    </>
  );
};