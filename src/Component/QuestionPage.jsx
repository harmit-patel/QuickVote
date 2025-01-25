import React, { useState } from 'react';
import questionsData from '../Json/questions.json'; 
import '../Design/QuestionPage.css'; 

const QuestionPage = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({}); 

  const currentQuestion = questionsData.questions[currentQuestionIndex];

  const selectedOption = responses[currentQuestion.id] || "";

  const handleOptionChange = (event) => {
    const updatedResponses = {
      ...responses,
      [currentQuestion.id]: event.target.value 
    };
    setResponses(updatedResponses);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      console.log("Survey completed. All responses:", responses);
      alert("Survey completed!");
    } else {
      alert("Please select an option before submitting.");
    }
  };

  const handleNext = () => {
    if (selectedOption) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Please select an option before proceeding.");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  function Survey_Poll() {
    const length = questionsData.questions.length;
    return length === 1 ? "Poll" : "Survey";
  }

  return (
    <div className="survey-container">
      <h2 className="survey-title">{Survey_Poll()}</h2>
      <div className="question-box">
        <h2 className="question-number">Question {currentQuestionIndex + 1}:</h2>
        <h2 className="question-text">{currentQuestion.question}</h2> 
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="option">
            <label>
              <input
                type="radio"
                name={`option-${currentQuestion.id}`}
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </div>
          
          ))}
        </div>
        <div className="navigation-buttons">
          {currentQuestionIndex > 0 && (
            <button className="prev-button" onClick={handlePrevious}>
              Previous
            </button>
          )}
          {currentQuestionIndex < questionsData.questions.length - 1 && (
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          )}
          {currentQuestionIndex === questionsData.questions.length - 1 && (
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default QuestionPage;
