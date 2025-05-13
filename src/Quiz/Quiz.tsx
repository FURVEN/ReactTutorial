import { useState } from "react";

export function Quiz() {
  const [score, setScore] = useState(0);
  const questions = {
    question: "리액트를 만든 회사는?",
    option: ["페이스북", "구글", "네이버", "카카오"],
    answer: "페이스북",
  };

  const handleAnswer = (answer: string) => {
    if (answer === questions.answer) {
      console.log("정답!!");
    } else {
      console.log("오답!!");
    }
  };
  return (
    <div>
      <h2>{questions.question}</h2>
      <div>
        {questions.option.map((option) => (
          <button key={option} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      <p>점수: {score}</p>
    </div>
  );
}
