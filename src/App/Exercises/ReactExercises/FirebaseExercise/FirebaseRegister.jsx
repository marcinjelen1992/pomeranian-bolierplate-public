import './styles.css';
import { useState, useRef } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { app } from './Firebase';

export const FirebaseRegister = ({ setRegisterView }) => {
  const auth = getAuth(app);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeView = () => {
    setRegisterView(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(email, password, 'logowanie');

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential, 'userCredential');
        // Signed in
        const user = userCredential.user;
        // ...
        setUser(user);
        setIsLogged(true);
      })
      .catch((error) => {
        console.log(error, 'error');
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage, 'errorCode, errorMessage');

        setError({ errorCode, errorMessage });
      });
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Hasło</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" onClick={handleChangeView}>
          Zarejestruj
        </button>

        {error && <div>{error.errorMessage}</div>}
      </form>
    </div>
  );
};
