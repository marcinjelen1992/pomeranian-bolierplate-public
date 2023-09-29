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

  return (
    <>
      <div className="oopInheritancePage">Hello there</div>
    </>
  );
};
