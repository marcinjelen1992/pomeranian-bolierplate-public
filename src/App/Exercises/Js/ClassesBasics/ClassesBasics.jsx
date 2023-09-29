import './styles.css';

export const ClassesBasics = () => {
  console.log('test');

  class Animal {
    age;
    type;
    static hasHead = true;
    name;

    constructor(age, type, name) {
      this.age = age;
      this.type = type;
      this.name = name;
    }

    move() {
      console.log('tup tup tup');
    }

    static purr() {
      console.log('Mmrrrrrrrrrr');
    }
  }

  const animal = new Animal(7, 'cat', 'Milo');

  animal.move();

  Animal.purr();

  console.log(animal instanceof Animal);

  return (
    <>
      <div className="classesbasicspage">Hello there</div>
    </>
  );
};
