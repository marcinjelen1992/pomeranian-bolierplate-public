import './styles.css';

export const JsArrayMethodsExercise = () => {
  // Number()
  // Boolean()
  // String()

  const myArrayA = [1, 2, 3, 4, 5];
  const myArrayB = [3, 5, 7, 9];
  const myArrayC = [1, 2, 3, 4, 5, 6];

  function sameNumbers(array1, array2) {
    const commonElements = array1.filter((item) => array2.includes(item));
    return commonElements;
  }

  // dla myArrayA i myArrayB ma być 35 i jest 35

  function averageNumbers(array) {
    const sum = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const average = sum / array.length;
    return average;
  }

  // ma być 3.5 i jest 3.5

  const create2dArray = (x, y) => {
    const resultArray = [];
    for (let i = 0; i < x; i++) {
      const row = [];
      for (let j = 0; j < y; j++) {
        row.push(0);
      }
      resultArray.push(row);
    }
    return resultArray;
  };

  console.log('create2dArray', create2dArray(3, 5));
  // create2dArray(1,1) => [[0]]
  // create2dArray(1,2) => [[0,0]]
  // create2dArray(2,2) => [[0,0],[0,0]]

  return (
    <div className="js-array-methods-exercises-page">
      <h3>Hello there</h3>
      <p>{sameNumbers(myArrayA, myArrayB)}</p>
      <p>{averageNumbers(myArrayC)}</p>
      <p>{create2dArray(2, 2)}</p>
    </div>
  );
};
