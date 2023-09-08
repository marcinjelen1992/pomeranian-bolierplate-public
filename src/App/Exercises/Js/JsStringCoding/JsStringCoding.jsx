import './styles.css';

export const JsStringCoding = () => {
  const singleQuote = 'siema';
  const doubleQuote = 'siema';
  const templateString = `siema {}`;
  const newString = new String(123);
  const string1 = "hello 'world'";
  const string2 = 'hello "world"';
  const string3 = "It's raining outside.";
  const concatenated = string1 + ' ' + string3;

  const stringLenght = singleQuote.length; // 5
  const substring = doubleQuote.substring(0, 3); // sie
  const replaceAllString = string1.replaceAll('e', '3'); // h3llo world
  const upperCase = string3.toUpperCase(); // IT'S RAINING OUTSIDE
  const trimString = templateString.trim(); // siema
  const indexOfString = string2.indexOf('hel'); // -1

  return (
    <div>
      <p>trimstring usuwa spacje</p>
      <p>
        indexOfString wyszukuje string wewnątrz stringa. Jeśli nie ma szukanej
        frazy to jest -1 jak jest to pokazuje co trzeba. Przykładowo 'hel'
        pokaże -1 gdyż string2 zaczyna się od uppercase. 'Hel' pokaże 0. 'el'
        pokaże 1.
      </p>
    </div>
  );
};
