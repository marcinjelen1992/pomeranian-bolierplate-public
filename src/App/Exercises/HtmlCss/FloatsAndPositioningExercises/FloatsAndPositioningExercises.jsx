import './styles.css';
import zdjecie from '../ImageFiles/train-16194.png';

export const FloatsAndPositioningExercises = () => {
  return (
    <div className="floatexec">
      <div className="floatingdivone">
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
          voluptates.
        </div>
        <div className="floatingdivonesubone">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
          voluptatibus.
        </div>
      </div>
      <div className="floatingdivtwo">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
          asperiores a vero perspiciatis, quod ducimus delectus, laudantium
          facere dicta fuga et maxime, vel non doloremque cum sequi. Esse,
          exercitationem sapiente.
        </div>
        <div className="floatingdivtwosubone">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
          voluptatibus.
        </div>
      </div>
      <div className="floatingdivthree">
        <img src={zdjecie} alt="zdjęcie amerykańskiej lokomotywy" />
        <div></div>
        <div className="floatingdivthreesubone">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          doloremque quibusdam, esse quos repudiandae temporibus architecto
          itaque asperiores rerum necessitatibus ea beatae unde consequuntur
          libero id iste doloribus ullam quam.
        </div>
      </div>
      <div className="floatingdivfour">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
          asperiores a vero perspiciatis, quod ducimus delectus, laudantium
          facere dicta fuga et maxime, vel non doloremque cum sequi. Esse,
          exercitationem sapiente.
        </div>
        <div className="floatingdivfoursubone">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
          voluptatibus.
        </div>
      </div>
    </div>
  );
};
