import './styles.css';

export const JsArrayBasics = () => {
  // Number()
  // Boolean()
  // String()

  const myArray = [1, 2, 3];

  const myMatrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ];

  // myArray[0] -> 1
  // myArray[1] -> 2
  // myArray[2] -> 3

  // myMatrix[0][1] -> 2
  // myMatrix[2][1] -> 2

  // myArray.pop() -> [1, 2] (ściąga element z końca tablicy - ostatni który został do niej wrzucony)
  // myArray.shift() -> [2, 3] (ściąga element z początku tablicy)
  // const [pierwszy, ...reszta] = [1,2,3] -> pierwszy: 1, reszta: [2,3] (bierze wartość z tablicy i od razu przypisuje do zmiennych)
  // myArray.push(4) -> [1,2,3,4] (dodaje element na koniec tablicy)
  // [...myArray, 4, 5, 6] -> [1,2,3,4,5,6] (tworzy nową tablicę z innej tablicy i dodaje elementy na jej koniec)

  // myArray.splice(1, 1) -> [1,3] (usuwa liczbe elementów zaczynając od podanego indeksu)
  // myArray.slice(1, 2) -> [2] (zwraca nową tablicę z wycinanego fragmentu zgodnie z parametrami)
  // myArray.concat(myArray2)  /  [...myArray, ...myArray2] (dokleja do tablicy myArray zawartość tablicy myArray2 i zwraca ją jako nową tablicę)

  return (
    <div className="js-string-conversion-page">
      <h3>Hello there</h3>
    </div>
  );
};
