import './styles.css';
import { useState, useRef } from 'react';
import redDotRadio from './redDotRadio.svg';
import { Checkboxes } from './Checkboxes';

export const BasicForm = () => {
  const orderList = [
    {
      value: 'enviromentSettings',
      label: 'ustawienia środowiska',
      isCheck: true,
    },
    {
      value: 'introGit',
      label: 'intro do GitHub',
      isCheck: false,
    },
    {
      value: 'additionalMaterial',
      label: 'materiały dodatkowe',
      isCheck: false,
    },
  ];

  const accountList = [
    {
      value: 'createAccount',
      label: 'zakładam konto',
      isCheck: false,
    },
  ];

  const termsList = [
    {
      value: 'acceptTerms',
      label: 'akceptuję regulamin*',
      isCheck: false,
    },
  ];

  const mailingList = [
    {
      value: 'acceptMailingList',
      label: 'zapisuję się na listę mailingową',
      isCheck: false,
    },
  ];

  const [formData, setFormData] = useState({
    chooseProduct: '',
    choosePayment: { blik: false, paypal: false, traditional: false },
    additionalOptions: {
      enviromentSettings: false,
      introGit: false,
      additionalMaterial: false,
    },
    personName: '',
    nickName: '',
    sendAdress: '',
    mailAdress: '',
    phoneNumber: '',
    additionalNotes: '',
    createAccount: false,
    acceptTerms: false,
    acceptMailingList: false,
  });
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

          <Checkboxes list={orderList} onChange={() => {}} />
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
            <Checkboxes list={accountList} onChange={() => {}} />
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
            <Checkboxes list={termsList} onChange={() => {}} />
          </div>
          <div className="acceptDiv">
            <span>
              Dołącz do naszego newslettera z promocjami dla naszych klientów
            </span>
            <Checkboxes list={mailingList} onChange={() => {}} />
          </div>
        </div>

        <button>Składam zamówienie</button>
      </form>
    </>
  );
};
