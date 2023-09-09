import './styles.css';

export const JSNumbers = () => {
  console.log('test');

  const myNumber = 123.56;

  let myInt = parseInt(myNumber);

  let myFloat = parseFloat(myNumber);

  return (
    <>
      <div className="jsnumberpage">
        <p>Integer: {myInt}</p>
        <p>Float: {myFloat}</p>
        <br />
        <h3>Operatory podstawowe</h3>
        <p>+ (int): {myInt + myInt}</p>
        <p>- (int): {myInt - myInt}</p>
        <p>* (int): {myInt * myInt}</p>
        <p>/ (int): {myInt / myInt}</p>
        <p>% (int): {myInt % myInt}</p>
        <p>** (int): {myInt ** myInt}</p>
        <p>+ (float): {myFloat + myFloat}</p>
        <p>- (float): {myFloat - myFloat}</p>
        <p>* (float): {myFloat * myFloat}</p>
        <p>/ (float): {myFloat / myFloat}</p>
        <p>% (float): {myFloat % myFloat}</p>
        <p>** (float): {myFloat ** myFloat}</p>
        <h3>Operatory złożone</h3>
        <p>+= (int): {`${(myInt += 2)}`}</p>
        <p>-= (int): {`${(myInt -= 1)}`}</p>
        <p>++i (int): {`${++myInt}`}</p>
        <p>--i (int): {`${--myInt}`}</p>
        <p>+= (float): {`${(myFloat += 6)}`}</p>
        <p>-= (float): {`${(myFloat -= 2)}`}</p>
        <p>++i (float): {`${++myFloat}`}</p>
        <p>--i (float): {`${--myFloat}`}</p>
        <h3>Operatory porównawcze (w odniesieniu do liczby 3)</h3>
        <p>(int): {`<: ${myInt < 3}`}</p>
        <p>(int): {`<=: ${myInt <= 3}`}</p>
        <p>(int): {`>: ${myInt > 3}`}</p>
        <p>(int): {`>=: ${myInt >= 3}`}</p>
        <p>(int): {`=== ${myInt === 3}`}</p>
      </div>
    </>
  );
};
