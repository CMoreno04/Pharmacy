import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "../../../styles/flex-styles.css";
import "./form-field-styles.css";

const FormField = ({
  label,
  className,
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  errors,
  touched,
}) => {
  // Local state to toggle password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div
      className={`form-field-container fle x-container align-center flex-column ${className}`}
    >
      <label className="form-field-label" htmlFor={name}>
        {label}
      </label>

      <div className="input-wrapper">
        <input
          className={`form-field ${className}`}
          type={isPasswordVisible ? "text" : type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-label={placeholder}
        />

        {type === "password" && (
          <button
            type="button"
            className="icon-btn"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon
              className="eye-icon"
              icon={isPasswordVisible ? faEye : faEyeSlash}
            />
          </button>
        )}
      </div>

      <div className="error-msg">
        {touched?.[name] && errors?.[name] ? errors[name] : null}
      </div>
    </div>
  );
};

export default FormField;
