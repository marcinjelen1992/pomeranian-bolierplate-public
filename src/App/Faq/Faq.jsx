import { SingleQuestion } from './SingleQuestion';
import './styles.css';

export const Faq = () => {
  return (
    <div className="faq-main">
      <strong>FAQ</strong>
      <p>Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania</p>
      <SingleQuestion question="Jak masz na imię?" answer="Marcin" />
      <SingleQuestion question="Ulubiony kolor" answer="fioletowy" />
      <SingleQuestion question="Ulubiona potrawa" answer="kurczak kung-pao" />
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion />
      <SingleQuestion
        question="Czy jestem polem opartym na propsie?"
        answer="Tak, jestem oparty na propsie"
      />
    </div>
  );
};
