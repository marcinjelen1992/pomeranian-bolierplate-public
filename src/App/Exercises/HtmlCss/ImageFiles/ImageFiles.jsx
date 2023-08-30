import './styles.css';
import firstpic from './IMG_2306.JPG';
import secondpic from './train-16194.png';
import thirdpic from './kiwi.svg';

export const ImageFiles = () => {
  return (
    <>
      <div className="images">
        <img src={firstpic} alt="lokomotywa SU42" />
        <img src={secondpic} alt="amerykańska lokomotywa" />
        <img src={thirdpic} alt="ptak kiwi" />
      </div>
    </>
  );
};
