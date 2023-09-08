import './styles.css';

export const MathInJS = () => {
  console.log('test');

  const myNumber = 2.01875;

  let myInt = parseInt(myNumber);

  let myFloat = parseFloat(myNumber);

  return (
    <>
      <div className="mathinjspage">
        <p>my number is 2.01875</p>
        <p>{Number.isInteger(myNumber).toString()}</p>
        <p>{myNumber.toFixed(3)}</p>
        <p>{Math.round(myNumber)}</p>
        <p>{Math.floor(myNumber)}</p>
        <p>{Math.sqrt(myNumber)}</p>
        <p>{Math.random()}</p>
      </div>
    </>
  );
};
