import React, { useState } from "react";
import "../Design/PollCreationPage.css";

const PollCreationPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentOptions, setCurrentOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState("");

  const addOption = () => {
    if (currentOption.trim() !== "") {
      setCurrentOptions([...currentOptions, currentOption]);
      setCurrentOption("");
    } else {
      alert("Option cannot be empty.");
    }
  };

  const addQuestion = () => {
    if (currentQuestion.trim() !== "" && currentOptions.length >= 2) {
      const newQuestion = {
        question: currentQuestion,
        options: currentOptions,
      };
      setQuestions([...questions, newQuestion]);
      setCurrentQuestion("");
      setCurrentOptions([]);
    } else {
      alert("Please add a question and at least two options.");
    }
  };

  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const handleSavePoll = () => {
    if (questions.length > 0) {
      // Create the object to send to the backend
      const pollObject = {
        title: "New Poll", // You can replace this with a dynamic title
        questions: questions.map((q, index) => ({
          id: index + 1,
          question: q.question,
          options: q.options,
        })),
      };

      // Log the object to the console
      console.log("Poll Object to send to backend:", pollObject);

      alert("Poll has been created successfully!");
      setQuestions([]); // Reset the form
    } else {
      alert("Please add at least one question.");
    }
  };

  return (
    <div className="poll-creation-container">
      <h2 className="poll-title">Poll Creation Page</h2>

      {/* Current Question Input */}
      <div className="form-group">
        <label htmlFor="question">Enter Question:</label>
        <input
          type="text"
          id="question"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
          placeholder="Type your question here..."
        />
      </div>

      {/* Add Options */}
      <div className="form-group">
        <label htmlFor="option">Add Option:</label>
        <div className="add-option-container">
          <input
            type="text"
            id="option"
            value={currentOption}
            onChange={(e) => setCurrentOption(e.target.value)}
            placeholder="Type an option here..."
          />
          <button onClick={addOption} className="add-option-button">
            Add Option
          </button>
        </div>
      </div>

      {/* Current Options Display */}
      {currentOptions.length > 0 && (
        <div className="options-list">
          <h4>Options:</h4>
          <ul>
            {currentOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Add Question */}
      <button onClick={addQuestion} className="add-question-button">
        Add Question
      </button>

      {/* Questions Preview */}
      {questions.length > 0 && (
        <div className="questions-preview">
          <h3>Questions Preview:</h3>
          {questions.map((question, index) => (
            <div key={index} className="question-preview">
              <h4>
                {index + 1}. {question.question}
              </h4>
              <ul>
                {question.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
              <button
                className="remove-question-button"
                onClick={() => removeQuestion(index)}
              >
                Remove Question
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Save Poll */}
      <button onClick={handleSavePoll} className="save-poll-button">
        Save Poll
      </button>
    </div>
  );
};

export default PollCreationPage;
