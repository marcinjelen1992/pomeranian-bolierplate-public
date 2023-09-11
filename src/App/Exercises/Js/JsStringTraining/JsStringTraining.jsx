import './styles.css';

export const JsStringTraining = () => {
  function ucFirst(input) {
    const firstLetter = input.charAt(0);
    const rest = input.slice(1);
    return firstLetter.toUpperCase() + rest;
  }

  function truncate(input, endIndex) {
    return input.substring(0, endIndex);
  }

  // truncate ('Hello world, hello people, hello you','20)

  function isPalindrom(input) {
    const lowerInput = input.toLowerCase();
    const inputLength = input.length;
    const centerIndex = Math.round(inputLength / 2) - 1;
    for (let i = 0; i < centerIndex; i++) {
      for (let j = inputLength - 1; i > centerIndex; i--) {
        if (lowerInput[i] !== lowerInput[j]) {
          return;
        }
        return 'jest palindromem';
      }
    }
  }

  // Nie używaj funkcji powyżej gdyż dodanie .toString() wywala błąd

  function isAnotherPalindrom(input) {
    const lowerInput = input.toLowerCase();
    const reversed = lowerInput.split('').reverse().join('');
    return lowerInput === reversed;
  }

  return (
    <div className="js-string-training-page">
      <h3>{ucFirst('john')}</h3>
      <p>{truncate('Hello world, hello people, hello you', '20')}</p>
      <p>{truncate('Hello world, hello people, hello you', '3')}</p>
      <p>{isPalindrom('atcgcta')}</p>
      <p>ATCGCTA</p>
      <p>
        {isAnotherPalindrom('ATCGCTA')
          ? 'Jest to palindrom'
          : 'Nie jest to palindrom'}
      </p>
      <p>CGCGAAT</p>
      <p>{isAnotherPalindrom('CGCGAAT').toString()}</p>
    </div>
  );
};
