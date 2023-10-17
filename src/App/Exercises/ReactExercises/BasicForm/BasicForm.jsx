import './styles.css';
import { useState, useRef } from 'react';
import redDotRadio from './redDotRadio.svg';

export const BasicForm = () => {
  // domyślnie button w form submituje
  // można to potwierdzić przez <button type="submit">Submit</button>
  // jak button ma być buttonem bez submitowanie to daj <button type="button">Submit</button>

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Dziękuję za kliknięcie');
  }
  // event.preventDefault() blokuje przeładowanie strony przy submitowaniu
  return (
    <>
      <form className="basicFormPage" onSubmit={handleSubmit}>
        <h1>Zamówienie produktu</h1>
        <div>
          <label for="chooseProduct">Wybierz produkt*</label>
          <select id="chooseProduct">
            <option>kurs front-end</option>
            <option>kurs back-end</option>
          </select>
        </div>
        <div>
          <label for="choosePayment">Wybierz płatność*</label>
          <div className="paymentDiv">
            <input name="payment" type="radio" />
            <p>blik</p>
          </div>
          <div className="paymentDiv">
            <input name="payment" type="radio" />
            <p>paypal</p>
          </div>
          <div className="paymentDiv">
            <input name="payment" type="radio" />
            <p>przelew tradycyjny</p>
          </div>
        </div>

        <div>
          <label for="chooseAdditional">Opcje dodatkowe do zamówienia</label>
          <div className="additionalDiv">
            <input name="additional" type="checkbox" />
            <p>ustawienia środowiska</p>
          </div>
          <div className="additionalDiv">
            <input name="additional" type="checkbox" />
            <p>intro do GitHub</p>
          </div>
          <div className="additionalDiv">
            <input name="additional" type="checkbox" />
            <p>materiały dodatkowe</p>
          </div>
        </div>

        <h2>Dane do realizacji zamówienia</h2>
        <label for="personName">Imię i nazwisko*</label>
        <input
          id="personName"
          type="text"
          placeholder="wpisz swoje imie i nazwisko"
        />

        <label for="nickName">Pseudonim*</label>
        <input id="nickName" type="text" placeholder="wpisz swój pseudonim" />

        <label for="sendAdress">Adres do wysyłki*</label>
        <input
          id="sendAdress"
          type="text"
          placeholder="adres na który wysłać zamówienie"
        />

        <label for="mailAdress">Adres e-mail*</label>
        <input
          id="mailAdress"
          type="text"
          placeholder="jan.kowalski@gmail.com"
        />

        <label for="phoneNumber">Numer kontaktowy*</label>
        <input id="phoneNumber" type="text" placeholder="+48 888 888 888" />

        <label for="additionalNotes">Dodatkowe uwagi do zamówienia</label>
        <input
          id="additionalNotes"
          type="text"
          placeholder="Jeśli masz jakieś uwagi, wpisz je tutaj"
        />

        <div>
          <label className="labelHeaders" for="chooseRegister">
            Zakładanie konta
          </label>
          <div>
            <span>
              Realizując zamówienie, akceptujesz regulamin naszego sklepu
            </span>
            <div className="registerDiv">
              <input name="register" type="checkbox" />
              <p>zakładam konto</p>
            </div>{' '}
          </div>
        </div>

        <div>
          <p>Moje hasło</p>
          <input type="password" />

          <p>Powtórz hasło</p>
          <input type="password" />
        </div>

        <div>
          <label className="labelHeaders" for="chooseAccept">
            Zgody i newsletter
          </label>
          <div>
            <span>
              Realizując zamówienie, akceptujesz regulamin naszego sklepu
            </span>
            <div className="acceptDiv">
              <input name="accept" type="checkbox" />
              <p>akceptuję regulamin*</p>
            </div>{' '}
          </div>
        </div>

        <button>Submit</button>
      </form>
    </>
  );
};
