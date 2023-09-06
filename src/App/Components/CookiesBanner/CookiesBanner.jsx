import './styles.css';
import { useState } from 'react';

import cookie from '../../Images/cookie.svg';

export const CookiesBanner = () => {
  function setCookieState() {
    localStorage.setItem('cookieState', 1);
  }

  function getCookieState() {
    return localStorage.getItem('cookieState');
  }

  const isSeen = getCookieState();

  return (
    !isSeen && (
      <div className="cookies">
        <div className="cookies-content">
          <img src={cookie} />
          <h3>Pozwól na pliki cookies</h3>
          <p>
            Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
            działanie strony i pomagają nam świadczyć usługi na najwyższym
            poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
            tych plików i przejść do strony lub dostosować użycie do swoich
            referencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
            zgody”, aby następnie wybrać te które odpowiadają Twoim
            indywidualnym preferencjom.
          </p>
        </div>
        <div>
          <button onClick={setCookieState} className="button-primary">
            W porządku
          </button>
          <button onClick={setCookieState} className="button-secondary">
            Dopasuj zgody
          </button>
        </div>
      </div>
    )
  );
};
