import './styles.css';
import { useEffect } from 'react';

export const TryCatchAndFinally = () => {
  // Try Catch próbuje łapać wyjątki
  // Asynchroniczny kod to jest tak, który robi coś w tle niezależnie od naszych działań
  // Strona może oczekiwać danych z serwera, jak serwer padnie to nie zostaną ściągnięte dane, na przykład arraye i kod się wykrzaczy z braku danych
  // Jeśli będzie czerwony bład serwera to kod JS przestanie być wykonywany
  // Try catch wyłapuje błąd i coś wyświetla w związku z tym
  // Throw to testowe celowe wywołanie błędu
  // ErrorBoundary.jsx to ta strona z błędem

  // Wyjątek jest obsłużony zatem pokaże w console.log error lecz nie pokaże Something went wrong
  // Jak usuniesz try catch to wtedy pokaże komunikat Something went wrong
  // Tak jest gdy chcesz widzieć komunikat Something went wrong
  //   useEffect(() => {
  //  dumb();
  //  }, []);

  // Tak jest z obsługą błędu
  //useEffect(() => {
  //try {
  //  dumb();
  //} catch (error) {
  //  console.log(error);
  //} finally {
  //  console.log('Wszystko już się zakończyło');
  //}
  //}, []);

  // Może kiedyś usuń strict mode

  function dumb() {
    const randomNumber = Math.round(Math.random());

    if (randomNumber) {
      console.log('Wszystko działa');
    } else {
      throw new Error('Niestety nie działa');
    }
  }

  useEffect(() => {
    try {
      dumb();
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Wszystko już się zakończyło');
    }
  }, []);

  return (
    <>
      <div className="tryCatchAndFinallyPage">Hello there</div>
    </>
  );
};
