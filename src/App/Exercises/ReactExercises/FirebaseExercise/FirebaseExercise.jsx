import './styles.css';
import { useState, useRef } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { app } from './Firebase';
import { FirebaseRegister } from './FirebaseRegister';

export const FirebaseExercise = () => {
  const auth = getAuth(app);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState(false);

  const [registerView, setRegisterView] = useState(false);

  const handleChangeView = () => {
    if (registerView === false) {
      setRegisterView(true);
    } else {
      setRegisterView(false);
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(email, password, 'logowanie');

    signInWithEmailAndPassword(auth, email, password)
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
    <>
      <div className="firebasePage">
        <h3>Zaloguj</h3>
        {!isLogged &&
          (registerView ? (
            <FirebaseRegister
              registerView={registerView}
              setRegisterView={setRegisterView}
            />
          ) : (
            <form onSubmit={handleSubmitLogin}>
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

              <button type="submit">Zaloguj</button>
              <button onClick={handleChangeView}>Stwórz konto</button>

              {error && <div>{error.errorMessage}</div>}
            </form>
          ))}

        {isLogged && (
          <div>Brawo, zalogowany użytkowniku o adresie email: {user.email}</div>
        )}
      </div>
    </>
  );
};
