import './styles.css';

export const JsStringConversion = () => {
  // Number()
  // Boolean()
  // String()

  const numberA = '1920px';
  const numberB = '1080px';
  const substringA = numberA.substring(0, 4);
  const substringB = numberB.substring(0, 4);

  const isPixelCount = (inputNumber) => +inputNumber;
  const itIsPixelCount = isPixelCount(substringA * substringB);
  console.log(substringA);
  console.log(substringB);
  console.log(itIsPixelCount);
  console.log(typeof itIsPixelCount);

  function calcResolution(x, y) {
    const clearedX = x.replace('px', '');
    const clearedY = y.replace('px', '');
    return (Number(clearedX) * Number(clearedY)).toString();
  }

  function isEmpty(x) {
    return !!x;
  }

  return (
    <div className="js-string-conversion-page">
      <h3>Hello there</h3>
      <p>calcResolution: {calcResolution('1080px', '1920px')}</p>
      <p>isEmpty: {isEmpty(NaN).toString()}</p>
    </div>
  );
};
