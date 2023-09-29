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
    string;
    compute;
    print;
    #secretNumberX = 6;
    #secretNumberY = 7;

    constructor(string) {
      this.string = string;
    }

    #giveMeSecretNumberX() {
      return this.#secretNumberX;
    }

    #giveMeSecretNumberY() {
      return this.#secretNumberY;
    }

    getSumOfSecretNumbers() {
      const snx = this.#giveMeSecretNumberX();
      const sny = this.#giveMeSecretNumberY();
      return snx + sny;
    }
  }

  const computer = new Computer(
    'I compute',
    'Give me numbers',
    'Print I compute'
  );

  console.log(computer.string);
  console.log(computer.getSumOfSecretNumbers());

  return (
    <>
      <div className="oopEncapsulationPage">Hello there</div>
    </>
  );
};
