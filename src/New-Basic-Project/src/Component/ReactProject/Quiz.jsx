import React, { useState } from "react";

const questions = [
  {
    questionText: "Are you a code",
    answerOptions: [
      { answerText: "No", isCorrect: false },
      { answerText: "Yes", isCorrect: true },
      { answerText: "Neither Yes or No", isCorrect: false },
      { answerText: "Some Times", isCorrect: false },
    ],
  },
  {
    questionText: "Are you a gamer",
    answerOptions: [
      { answerText: "No", isCorrect: false },
      { answerText: "Yes", isCorrect: true },
      { answerText: "Neither Yes or No", isCorrect: false },
      { answerText: "Some Times", isCorrect: false },
    ],
  },
  {
    questionText: "Are you a Developer",
    answerOptions: [
      { answerText: "No", isCorrect: false },
      { answerText: "Yes", isCorrect: true },
      { answerText: "Neither Yes or No", isCorrect: false },
      { answerText: "Some Times", isCorrect: false },
    ],
  },
  {
    questionText: "Are you a code",
    answerOptions: [
      { answerText: "No", isCorrect: false },
      { answerText: "Yes", isCorrect: true },
      { answerText: "Neither Yes or No", isCorrect: false },
      { answerText: "Some Times", isCorrect: false },
    ],
  },
];
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleNextQuestion = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div>
      {showScore ? (
        <div>
          Your score {score} out of {questions.length}
        </div>
      ) : (
        <>
          <span>Question {currentQuestion + 1}</span>/{questions.length}
          <p>{questions[currentQuestion].questionText}</p>
          {questions[currentQuestion].answerOptions.map((answerOptions) => (
            <button onClick={() => handleNextQuestion(answerOptions.isCorrect)}>
              {answerOptions.answerText}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default Quiz;
