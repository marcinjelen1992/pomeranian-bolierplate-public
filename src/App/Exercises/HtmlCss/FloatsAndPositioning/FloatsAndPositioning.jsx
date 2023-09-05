import './styles.css';
import zdjecie from '../ImageFiles/train-16194.png';

export const FloatsAndPositioning = () => {
  return (
    <div className="floats">
      <div className="elementzero">
        <img src={zdjecie} alt="zdjęcie amerykańskiej lokomotywy" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          repellat maxime, culpa iste in aspernatur magnam, id impedit
          perferendis fugit cumque! Perferendis laborum mollitia ipsam a ab,
          consequatur iste beatae consectetur, ea, quisquam tempora? Dolorum
          quis veniam nam sunt? At maxime quam aperiam a vel, hic nam obcaecati
          nemo, id natus illum tempore? Eaque, repellendus? Nobis similique modi
          natus maxime?
        </p>
        <div className="floatingfirst"></div>
        <div className="floatingsecond"></div>
        <div className="floatingthird"></div>
      </div>
    </div>
  );
};
