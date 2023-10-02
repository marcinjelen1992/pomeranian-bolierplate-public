import './styles.css';

export const OopInheritance = () => {
  console.log('test');

  class Animal {
    type;
    pawsCount;
    eyesColor;

    speak(voice) {
      return voice;
    }
  }

  class Cat extends Animal {
    hasThreeEyelids = true;
    canMeow = true;

    constructor(pawsCount, eyeColor) {
      super();
      this.type = 'Cat';
      this.pawsCount = pawsCount;
      this.eyesColor = eyeColor;
    }
  }

  class Dog extends Animal {
    canBark = true;

    constructor(pawsCount, eyeColor) {
      super();
      this.type = 'Dog';
      this.pawsCount = pawsCount;
      this.eyesColor = eyeColor;
    }
  }

  const dog = new Dog(3, 'brown');

  const cat = new Cat(4, 'green');

  console.log(dog.speak('hau hau'));

  console.log(cat.speak('miau miau'));

  class Person {
    introduce() {
      console.log('I am a Person');
    }
  }

  class Builder extends Person {
    introduce() {
      super.introduce();
      console.log('I am also a Builder');
    }
  }

  class Doctor extends Person {
    introduce() {
      super.introduce();
      console.log('I am also a Doctor');
    }
  }

  class Pediatrician extends Doctor {
    introduce() {
      console.log("I'm a Pediatrician");
    }
  }

  const person = new Person();
  person.introduce();

  const builder = new Builder();
  builder.introduce();

  const doctor = new Doctor();
  doctor.introduce();

  const pediatrician = new Pediatrician();
  pediatrician.introduce();

  // Patrz do docx gdyż to jest niekompletne

  return (
    <>
      <div className="oopInheritancePage">Hello there</div>
    </>
  );
};
