import { SingleQuestion } from './SingleQuestion';
import './styles.css';

export const Faq = () => {
  return (
    <div className="faq-main">
      <strong>FAQ</strong>
      <h5>Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania</h5>
      <SingleQuestion question="Jak masz na imię" answer="Marcin" />
      <SingleQuestion question="Ulubiony kolor" answer="fioletowy" />
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion />
      <div>
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Deer Brewing</td>
            <td>Marcin Jeleń</td>
            <td>Poland</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
