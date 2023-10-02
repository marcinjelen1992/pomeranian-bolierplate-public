import './styles.css';

export const OopEncapsulation = () => {
  console.log('test');

  class Human {
    firstName;
    lastName;
    #secretNumber = 8;
    #hash = 90;

    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    #giveMeSecretNumber() {
      return this.#secretNumber;
    }

    getHashedSecretNumber() {
      const sn = this.#giveMeSecretNumber();
      return sn * this.#hash;
    }

    checkIfGivenNumberIsSn(num) {
      return this.getHashedSecretNumber() / num === this.#hash;
    }
  }

  const marcin = new Human('Marcin', 'Jeleń');

  console.log(marcin.getHashedSecretNumber());
  console.log(marcin.checkIfGivenNumberIsSn(8));

  class Computer {
    #faveWord = 'I compute!';

    #add(x, y) {
      return x + y;
    }

    compute(num1, num2, multiplier) {
      const sum = this.#add(num1, num2);
      return sum * multiplier;
    }

    iCompute() {
      console.log(this.#faveWord);
    }
  }

  const myComputer = new Computer();

  const result = myComputer.compute(2, 39, 8);
  console.log(`Wynik: ${result}`);

  myComputer.iCompute();

  return (
    <>
      <div className="oopEncapsulationPage">Hello there</div>
    </>
  );
};
