import './styles.css';

export const OopComposition = () => {
  // Tworzymy samochód w podejściu kompozycyjnym!
  // klasa Engine
  // start() => "engine is turned on"
  // stop() => "engine is turned off"
  // klasa Klaxon
  // beep() => "BEEEP!"
  // klasa SteeringWheel
  // turn(direction: string) => "Skręcamy w lewo/prawo"
  // klasa GPS
  // navigate() => wyprintuje nam losowo: "turn right", "turn left", "drive straight"
  // stwórz klasę Car, która posiada metody: start, stop, beep, turn, navigate
  // w klasie Car powywołuj metody poszczególnych części auta

  class Engine {
    start() {
      return 'engine is turned on';
    }

    stop() {
      return 'engine is turned off';
    }
  }

  class Klaxon {
    beep() {
      return 'BEEEP!';
    }
  }

  class SteeringWheel {
    turn(direction) {
      return `Skręcamy w ${direction}`;
    }
  }

  class GPS {
    navigate() {
      const directions = ['turn right', 'turn left', 'drive straight'];
      const randomDirection =
        directions[Math.floor(Math.random() * directions.length)];
      return randomDirection;
    }
  }

  class Car {
    constructor() {
      this.engine = new Engine();
      this.klaxon = new Klaxon();
      this.steeringWheel = new SteeringWheel();
      this.gps = new GPS();
    }

    start() {
      return this.engine.start();
    }

    stop() {
      return this.engine.stop();
    }

    beep() {
      return this.klaxon.beep();
    }

    turn(direction) {
      return this.steeringWheel.turn(direction);
    }

    navigate() {
      return this.gps.navigate();
    }
  }

  const myCar = new Car();
  console.log(myCar.start());
  console.log(myCar.stop());
  console.log(myCar.beep());
  console.log(myCar.turn('left'));
  console.log(myCar.navigate());

  return (
    <>
      <div className="oopInheritancePage">Hello there</div>
    </>
  );
};
