import './styles.css';

export const RoundImage = ({ src, size }) => {
  return (
    <div
      className="round-image"
      style={{
        backgroundImage: `url(${src})`,
        width: `${size}px`,
        height: `500px`,
      }}
    ></div>
  );
};
