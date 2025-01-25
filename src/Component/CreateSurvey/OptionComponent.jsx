import React from "react";

const OptionComponent = ({ option, onOptionChange, onRemoveOption }) => {
  return (
    <div className="option-container">
      <input
        type="text"
        placeholder="Enter option"
        value={option}
        onChange={onOptionChange}
        className="option-input"
      />
      <button onClick={onRemoveOption} className="remove-option-btn">
        Remove Option
      </button>
    </div>
  );
};

export default OptionComponent;
