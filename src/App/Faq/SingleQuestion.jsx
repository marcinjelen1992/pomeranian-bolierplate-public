import './styles.css';

export const SingleQuestion = ({ question, answer }) => {
  return (
    <div>
      <div className="faq-list">
        <p>{question}</p>
        <p>{answer}</p>
      </div>
    </div>
  );
};
