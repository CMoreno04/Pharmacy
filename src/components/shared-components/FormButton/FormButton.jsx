import React from "react";

import "./form-button-styles.css";

const FormButton = ({ className, id, name, type, text }) => {
  return (
    <button
      className={`form-btn ${className}`}
      id={id}
      name={name}
      type={type}
    >
      {text}
    </button>
  );
};

export default FormButton;
