import React, { useState } from "react";
import QuestionComponent from "./QuestionComponent";
import "./App.css";

const SurveyComponent = () => {
  const [title, setTitle] = useState(""); // State for the survey title
  const [questions, setQuestions] = useState([
    { text: "", options: ["", ""] } // Default question with two empty options
  ]);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailRestrictionEnabled, setEmailRestrictionEnabled] = useState(false);
  const [allowedEmailDomain, setAllowedEmailDomain] = useState("");
  const [endTime, setEndTime] = useState(""); // State for end time

  const addQuestion = () => {
    setQuestions([...questions, { text: "", options: ["", ""] }]);
  };

  const updateQuestion = (index, text) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].text = text;
    setQuestions(updatedQuestions);
  };

  const removeQuestion = (index) => {
    if (questions.length > 1) {
      const updatedQuestions = [...questions];
      updatedQuestions.splice(index, 1);
      setQuestions(updatedQuestions);
      setErrorMessage(""); // Clear any previous error message
    } else {
      setErrorMessage("At least one question must be present.");
    }
  };

  const addOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push("");
    setQuestions(updatedQuestions);
  };

  const updateOption = (questionIndex, optionIndex, text) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = text;
    setQuestions(updatedQuestions);
  };

  const removeOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    if (updatedQuestions[questionIndex].options.length > 2) {
      updatedQuestions[questionIndex].options.splice(optionIndex, 1);
      setQuestions(updatedQuestions);
      setErrorMessage(""); // Clear any previous error message
    } else {
      setErrorMessage("Each question must have at least two options.");
    }
  };

  const validateSurvey = () => {
    if (!title.trim()) {
      return "Survey title is required.";
    }
    for (const question of questions) {
      if (!question.text.trim()) {
        return "All questions must have text.";
      }
      if (question.options.length < 2) {
        return "Each question must have at least two options.";
      }
      if (question.options.some((option) => !option.trim())) {
        return "No option can be empty.";
      }
    }
    if (!endTime.trim()) {
      return "End time is required.";
    }
    return null;
  };

  const createSurvey = () => {
    const validationError = validateSurvey();
    if (validationError) {
      setErrorMessage(validationError);
    } else {
      setErrorMessage("");
      const surveyData = {
        title, // Include title in survey data
        questions,
        emailRestriction: emailRestrictionEnabled ? allowedEmailDomain : null,
        endTime // Include end time in survey data
      };
      console.log("Survey Created:", surveyData);
      alert("Survey Created! Check console for details.");
    }
  };

  return (
    <div className="survey-container">
      <h2>Create a Survey</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      
      

      {questions.map((question, index) => (
        <QuestionComponent
          key={index}
          question={question}
          onQuestionChange={(e) => updateQuestion(index, e.target.value)}
          onAddOption={() => addOption(index)}
          onRemoveQuestion={() => removeQuestion(index)}
          onOptionChange={(optionIndex, text) => updateOption(index, optionIndex, text)}
          onRemoveOption={(optionIndex) => removeOption(index, optionIndex)}
          onAddQuestion={() => addQuestion()}
        />
      ))}

<div className="survey-title-container">
        <label className="title2">Survey Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter survey title"
          className="survey-title-input"
        />
      </div>
      
      <div className="email-restriction-container">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={emailRestrictionEnabled}
            onChange={() => setEmailRestrictionEnabled(!emailRestrictionEnabled)}
          />
          <span className="slider"></span>
        </label>
        <span className="title">Enable Email Restriction</span>
        {emailRestrictionEnabled && (
          <input
            type="text"
            placeholder="Enter allowed email domain (e.g., 22ituos***.ddu.ac.in)"
            value={allowedEmailDomain}
            onChange={(e) => setAllowedEmailDomain(e.target.value)}
            className="email-domain-input"
          />
        )}
      </div>
      <div className="end-time-container">
        <label className="title2">End Time:</label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="end-time-input"
        />
      </div>
      <button onClick={createSurvey} className="create-survey-btn">
        Create Survey
      </button>
    </div>
  );
};

export default SurveyComponent;
