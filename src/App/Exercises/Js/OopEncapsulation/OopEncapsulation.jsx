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

  return (
    <>
      <div className="oopEncapsulationPage">Hello there</div>
    </>
  );
};
