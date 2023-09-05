import './styles.css';
import logoPomeranian from './pomeranian-logo.png';
import zdjecie from './zdjecie.png';
import thirdpic from './kiwi.svg';
import gt26c from './train-16194.png';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export const ImageFiles = () => {
  return (
    <>
      <div>
        <RoundImage src={logoPomeranian} size={500} />

        <RoundImage src={zdjecie} size={500} />
      </div>
      <div className="images">
        <img src={zdjecie} alt="zdjęcie nurka pod wodą" />
        <img
          src={gt26c}
          alt="zdjęcie lokomotywy Genesee and Wyoming Australia EMD GT26C"
        />
        <img src={thirdpic} alt="ptak kiwi" />
      </div>
    </>
  );
};
