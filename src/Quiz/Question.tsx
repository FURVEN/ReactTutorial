interface QuestionProps {
  question: string;
  options: string[];
  handleAnswer: (answer: string) => void;
}

export function Question({ question, options, handleAnswer }: QuestionProps) {
  return (
    <div>
      <h2>{question}</h2>
      <div className="grid">
        {options.map((option, index) => (
          <button onClick={() => handleAnswer(option)}>{option}</button>
        ))}
      </div>
    </div>
  );
}
