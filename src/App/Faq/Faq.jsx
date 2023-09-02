import { SingleQuestion } from './SingleQuestion';
import './styles.css';

export const Faq = () => {
  return (
    <div className="faq-main">
      <strong>FAQ</strong>
      <p>Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania</p>
      <SingleQuestion
        question="Jak masz na imię? (kliknij żeby rozwinąć)"
        answer="Marcin"
      />
      <SingleQuestion question="Ulubiony kolor" answer="fioletowy" />
      <SingleQuestion question="Ulubiona potrawa" answer="kurczak kung-pao" />
      <SingleQuestion
        question="Czy jestem polem opartym na propsie?"
        answer="Tak, jestem oparty na propsie"
      />
      <SingleQuestion
        question="Czy mam Loremx25 jako odpowiedź?"
        answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore debitis cum harum molestiae quam, quae dignissimos, ea dolores quos fugit corrupti consequuntur fuga beatae?"
      />
      <SingleQuestion
        question="Czy mam Loremx25 jako odpowiedź?"
        answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore debitis cum harum molestiae quam, quae dignissimos, ea dolores quos fugit corrupti consequuntur fuga beatae?"
      />
      <SingleQuestion
        question="Czy mam Loremx25 jako odpowiedź?"
        answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore debitis cum harum molestiae quam, quae dignissimos, ea dolores quos fugit corrupti consequuntur fuga beatae?"
      />
      <SingleQuestion
        question="Czy mam Loremx25 jako odpowiedź?"
        answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore debitis cum harum molestiae quam, quae dignissimos, ea dolores quos fugit corrupti consequuntur fuga beatae?"
      />
      <SingleQuestion
        question="Czy mam Loremx25 jako odpowiedź?"
        answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore debitis cum harum molestiae quam, quae dignissimos, ea dolores quos fugit corrupti consequuntur fuga beatae?"
      />
      <SingleQuestion
        question="Czy mam Loremx25 jako odpowiedź?"
        answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore debitis cum harum molestiae quam, quae dignissimos, ea dolores quos fugit corrupti consequuntur fuga beatae?"
      />
    </div>
  );
};
