import './styles.css';

export const SingleQuestion = ({ question, answer }) => {
  return (
    <div className="single-question">
      <div className="faq-list">
        <strong>{question}</strong>
        <p>{answer}</p>
      </div>
    </div>
  );
};
