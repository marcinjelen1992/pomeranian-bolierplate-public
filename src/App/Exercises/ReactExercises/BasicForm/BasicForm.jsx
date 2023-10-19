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
            <input name="payment" type="radio" id="blik" value="blik" />
            <label for="blik" className="classForLabel">
              blik
            </label>
          </div>
          <div className="paymentDiv">
            <input name="payment" type="radio" id="paypal" value="paypal" />
            <label for="paypal" className="classForLabel">
              paypal
            </label>
          </div>
          <div className="paymentDiv">
            <input
              name="payment"
              type="radio"
              id="traditional"
              value="traditional"
            />
            <label for="traditional" className="classForLabel">
              przelew tradycyjny
            </label>
          </div>
        </div>

        <div>
          <label for="chooseAdditional">Opcje dodatkowe do zamówienia</label>
          <div className="additionalDiv">
            <input
              name="additional"
              type="checkbox"
              id="enviromentSettings"
              value="enviromentSettings"
            />
            <label for="enviromentSettings" className="classForCheckbox">
              ustawienia środowiska
            </label>
          </div>
          <div className="additionalDiv">
            <input
              name="additional"
              type="checkbox"
              id="introGit"
              value="introGit"
            />
            <label for="introGit" className="classForCheckbox">
              intro do GitHub
            </label>
          </div>
          <div className="additionalDiv">
            <input
              name="additional"
              type="checkbox"
              id="additionalMaterial"
              value="additionalMaterial"
            />
            <label for="additionalMaterial" className="classForCheckbox">
              materiały dodatkowe
            </label>
          </div>
        </div>

        <div className="rodoDiv">
          <label className="labelHeaders" for="chooseRodo">
            Dane do realizacji zamówienia{' '}
          </label>
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
        </div>

        <div>
          <label className="labelHeaders" for="chooseRegister">
            Zakładanie konta
          </label>
          <div className="registerDiv">
            <span>Chcę założyć konto razem z zamówieniem</span>
            <div>
              <input
                name="register"
                type="checkbox"
                id="createAccount"
                value="createAccount"
              />
              <label for="createAccount" className="classForCheckbox">
                zakładam konto
              </label>
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
          <div className="acceptDiv">
            <span>
              Realizując zamówienie, akceptujesz regulamin naszego sklepu
            </span>
            <div>
              <input
                name="accept1"
                type="checkbox"
                id="acceptTerms"
                value="acceptTerms"
              />
              <label for="acceptTerms" className="classForCheckbox">
                akceptuję regulamin*
              </label>
            </div>{' '}
          </div>
          <div className="acceptDiv">
            <span>
              Dołącz do naszego newslettera z promocjami dla naszych klientów
            </span>
            <div>
              <input
                name="accept2"
                type="checkbox"
                id="acceptMailingList"
                value="acceptMailingList"
              />
              <label for="acceptMailingList" className="classForCheckbox">
                zapisuję się na listę mailingową
              </label>
            </div>{' '}
          </div>
        </div>

        <button>Submit</button>
      </form>
    </>
  );
};
