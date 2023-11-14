import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <main>
        <h1>Dashboard</h1>
        <div>
          <div>
            <div>
              1<PersonalCardIcon />
            </div>
            <div>
              4<PersonalCardIcon />
            </div>
          </div>
          <div>
            <div>2</div>
            <div>
              5<PersonalCardIcon />
            </div>
          </div>
          <div>
            <div>
              3<PersonalCardIcon />
            </div>
          </div>
        </div>
        <p>
          Strona główna kursanta (o sobie, zdjęcie, opis narzędzi
          wykorzystywanych na kursie oraz umejętności zdobytych na kursie)
        </p>
      </main>
      <div>123</div>
    </div>
  );
};
