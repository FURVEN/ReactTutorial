import { useState } from "react";
import { Question } from "./Question";

export function Quiz() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = [
    {
      question: "리액트를 만든 곳은은?",
      options: ["메타", "구글", "넥슨", "애플"],
      answer: "메타",
    },
    {
      question: "타입스크립트는 어떤 언어의 슈퍼셋인가?",
      options: ["자바스크립트", "파이썬", "루비", "코틀린"],
      answer: "자바스크립트",
    },
  ];

  const handleAnswer = (answer: string) => {
    if (answer === question[currentQuestion].answer) {
      setScore(score + 1);
      console.log("정답" + score);
    } else {
      console.log("오답!!");
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  return (
    <main className="container">
      {currentQuestion < question.length ? (
        <Question
          question={question[currentQuestion].question}
          options={question[currentQuestion].options}
          handleAnswer={handleAnswer}
        ></Question>
      ) : (
        <>
          <h2>
            당신은 {question.length}개 중 {score}개를 맞혔습니다.
          </h2>
          <button
            onClick={() => {
              setScore(0);
              setCurrentQuestion(0);
            }}
          >
            퀴즈 다시하기
          </button>
        </>
      )}
    </main>
  );
}
