import './styles.css';

export const Colors = () => {
  return (
    <>
      <div>
        <h2 className="colorName">Jestem pomalowany przy uzyciu "colorName"</h2>
        <h2 className="shortenHex">
          Jestem pomalowany przy uzyciu "shortenHex"
        </h2>
        <h2 className="hex">Jestem pomalowany przy uzyciu "hex"</h2>
        <h2 className="rgb">Jestem pomalowany przy uzyciu "rgb"</h2>
        <h2 className="rgba">Jestem pomalowany przy uzyciu "rgba"</h2>
        <h2 className="hsl">Jestem pomalowany przy uzyciu "hsl"</h2>
      </div>
      <hr />
      <div>
        <div className="opacity">Jestem divem z tekstem</div>
        <div className="rgbaopacity">Jestem divem z tekstem</div>
      </div>
    </>
  );
};
