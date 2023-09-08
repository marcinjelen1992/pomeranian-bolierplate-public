import './styles.css';

export const JsStringCoding = () => {
  const singleQuote = 'siema';
  const doubleQuote = 'siema';
  const templateString = `siema {}`;
  const newString = new String(123);
  const string1 = "hello 'world'";
  const string2 = 'Hello "world"';
  const string3 = "It's raining outside.";
  const concatenated = string1 + ' ' + string3;

  const stringLenght = singleQuote.length; // 5
  const substring = doubleQuote.substring(0, 3); // sie
  const replaceAllString = string1.replaceAll('e', '3'); // h3llo world
  const upperCase = string3.toUpperCase(); // IT'S RAINING OUTSIDE
  const trimString = templateString.trim(); // siema
  const indexOfString = string2.indexOf('hel'); // -1

  return (
    <div className="js-string-coding-page">
      <h3>Podstawowe consty:</h3>
      <p>
        const singleQuote: <strong>{singleQuote}</strong>
      </p>
      <p>
        const doubleQuote: <strong>{doubleQuote}</strong>
      </p>
      <p>
        const templateString: <strong>{templateString}</strong>
      </p>
      <p>
        const newString (zapisane jako const newString = new String(123);):{' '}
        <strong>{newString}</strong>
      </p>
      <p>
        const string1: <strong>{string1}</strong>
      </p>
      <p>
        const string2: <strong>{string2}</strong>
      </p>
      <p>
        const string3: <strong>{string3}</strong>
      </p>
      <p>
        const concatenated (zapisane jako const concatenated = string1 + ' ' +
        string3;): <strong>{concatenated}</strong>
      </p>
      <h3>Consty z operacjami:</h3>
      <p>
        const stringLenght: <strong>{stringLenght}</strong>
      </p>
      <p>
        const substring (zapisane jako const substring =
        doubleQuote.substring(0, 3);): <strong>{substring}</strong>
      </p>
      <p>
        const replaceAllString (zapisane jako const replaceAllString =
        string1.replaceAll('e', '3');): <strong>{replaceAllString}</strong>
      </p>
      <p>
        const upperCase: <strong>{upperCase}</strong>
      </p>
      <p>
        const trimString usuwa zbędne spacje: <strong>{trimString}</strong>
      </p>
      <p>
        const indexOfString (const indexOfString = string2.indexOf('hel');):{' '}
        <strong>{indexOfString}</strong>
      </p>
      <p>
        indexOfString wyszukuje string wewnątrz stringa. Jeśli nie ma szukanej
        frazy to jest -1, zaś jak szukana fraza jest obecna to pokazuje
        konkretne wartości. Przykładowo 'hel' pokaże -1 gdyż string2 zaczyna się
        od uppercase. 'Hel' pokaże 0. 'el' pokaże 1. 'lo' pokaże 3.
      </p>
    </div>
  );
};
