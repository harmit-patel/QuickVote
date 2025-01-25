import React from "react";
import OptionComponent from "./OptionComponent";

const QuestionComponent = ({
  question,
  onQuestionChange,
  onAddOption,
  onRemoveQuestion,
  onOptionChange,
  onRemoveOption,
  onAddQuestion
}) => {
  return (
    <div className="question-container">
      <div className="question-header">
        <input
          type="text"
          placeholder="Enter question"
          value={question.text}
          onChange={onQuestionChange}
          className="question-input"
        />
        <button onClick={onRemoveQuestion} className="remove-question-btn">
          Remove Question
        </button>
      </div>
      {question.options.map((option, index) => (
        <OptionComponent
          key={index}
          option={option}
          onOptionChange={(e) => onOptionChange(index, e.target.value)}
          onRemoveOption={() => onRemoveOption(index)}
        />
      ))}
      <button onClick={onAddOption} className="add-option-btn">
        Add Option
      </button>
            <button onClick={onAddQuestion} className="add-question-btn">
        Add Question
      </button>
      
    </div>
  );
};

export default QuestionComponent;
