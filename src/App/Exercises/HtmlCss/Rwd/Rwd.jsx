import './styles.css';
import zdjecie from '../ImageFiles/train-16194.png';

export const Rwd = () => {
  return (
    <>
      <img src={zdjecie} className="media-queries-box" />
      <hr />
      <div>
        <div className="opacity">Jestem divem z tekstem</div>
        <div className="rgbaopacity">Jestem divem z tekstem</div>
      </div>
    </>
  );
};
