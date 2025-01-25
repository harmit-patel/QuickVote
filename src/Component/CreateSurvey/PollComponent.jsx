import React, { useState } from "react";
import OptionComponent from "./OptionComponent";
import "./App.css";

const PollComponent = () => {
  const [title, setTitle] = useState(""); // State for the survey title
  const [question, setQuestion] = useState({ text: "", options: ["", "", "", ""] });
  const [errorMessage, setErrorMessage] = useState("");
  const [emailRestrictionEnabled, setEmailRestrictionEnabled] = useState(false);
  const [allowedEmailDomain, setAllowedEmailDomain] = useState("");
  const [endTime, setEndTime] = useState("");

  const addOption = () => {
    setQuestion({
      ...question,
      options: [...question.options, ""]
    });
  };

  const updateOption = (optionIndex, text) => {
    const updatedOptions = [...question.options];
    updatedOptions[optionIndex] = text;
    setQuestion({ ...question, options: updatedOptions });
  };

  const removeOption = (optionIndex) => {
    if (question.options.length > 2) {
      const updatedOptions = [...question.options];
      updatedOptions.splice(optionIndex, 1);
      setQuestion({ ...question, options: updatedOptions });
      setErrorMessage(""); // Clear any previous error message
    } else {
      setErrorMessage("Each question must have at least two options.");
    }
  };

  const validatePoll = () => {
    if (!question.text.trim()) {
      return "The question must have text.";
    }
    if (question.options.length < 2) {
      return "Each question must have at least two options.";
    }
    if (question.options.some((option) => !option.trim())) {
      return "No option can be empty.";
    }
    if (!endTime.trim()) {
      return "End time is required.";
    }
    return null;
  };

  const createPoll = () => {
    const validationError = validatePoll();
    if (validationError) {
      setErrorMessage(validationError);
    } else {
      setErrorMessage("");
      const pollData = {
        title,
        question: question,
        emailRestriction: emailRestrictionEnabled ? allowedEmailDomain : null,
        endTime: endTime
      };
      console.log("Poll Created:", pollData);
      alert("Poll Created! Check console for details.");
    }
  };

  return (
    <div className="survey-container">
      <h2>Create a Poll</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="question-container">
        <div className="question-header">
          <input
            type="text"
            placeholder="Enter question"
            value={question.text}
            onChange={(e) => setQuestion({ ...question, text: e.target.value })}
            className="question-input"
          />
        </div>
        {question.options.map((option, index) => (
          <OptionComponent
            key={index}
            option={option}
            onOptionChange={(e) => updateOption(index, e.target.value)}
            onRemoveOption={() => removeOption(index)}
          />
        ))}
        <button onClick={addOption} className="add-option-btn">
          Add Option
        </button>
      </div>

      <div className="survey-title-container">
        <label className="title2">Poll Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Poll title"
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
            placeholder="Enter allowed email domain (e.g., example.com)"
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
      <button onClick={createPoll} className="create-survey-btn">
        Create Poll
      </button>
    </div>
  );
};

export default PollComponent;
