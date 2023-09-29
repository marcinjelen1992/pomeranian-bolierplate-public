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
    occupation;
    speak(voice) {
      return 'I am a person' + voice;
    }
  }

  class Doctor extends Person {
    constructor(occupation) {
      super();
      this.occupation = occupation;
    }
  }

  const doctor = new Doctor('doctor');
  console.log(doctor.speak('I am a doctor'));

  class Builder extends Person {
    constructor(occupation) {
      super();
      this.occupation = occupation;
    }
  }

  const builder = new Builder('builder');
  console.log(builder.speak('I am a builder'));

  // Patrz do docx gdyż to jest niekompletne

  return (
    <>
      <div className="oopInheritancePage">Hello there</div>
    </>
  );
};
