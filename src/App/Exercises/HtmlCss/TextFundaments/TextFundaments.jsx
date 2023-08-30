import './styles.css';

export const TextFundaments = () => {
  return (
    <>
      <div>
        <h2 className="fundamentsHeader">Podstawowe</h2>
        <p className="color">Kolor tekstu</p>
        <p className="size">Wielkość tekstu</p>
        <p className="style">Styl tekstu</p>
        <p className="weight">Grubość tekstu</p>
      </div>
      <hr />
      <div>
        <h2>Dekoracje</h2>
        <p className="transform">Transformacja</p>
        <p className="decoration">Dekorowanie</p>
        <p className="shadow">Cień</p>
      </div>
      <hr />
      <div>
        <h2>Odległości</h2>
        <p className="height">Wysokość linii</p>
        <p className="spacing">Odstęp między literami</p>
        <p className="wordspacing">Odstęp między słowami</p>
      </div>
      <hr />
      <div>
        <h2>Umiejscowianie</h2>
        <p className="align">Pozycja tekstu</p>
        <p>
          Indeks <span className="super">górny</span>
        </p>
        <p>
          E=mc<span className="super">2</span>
        </p>
        <p>
          Indeks <span className="sub">dolny</span>
        </p>
        <p>
          C<span className="sub">2</span>H<span className="sub">5</span>OH
        </p>
      </div>
      <hr />
      <div>
        <h2>Listy</h2>
        <ol className="list-ol">
          <li>Pierwszy</li>
          <li>Drugi</li>
          <li>Trzeci</li>
        </ol>
      </div>
    </>
  );
};