import React, { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "../../../styles/flex-styles.css";
import "./field-styles.css";

const Field = ({ props }) => {
  // Local state to toggle password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div
      className={`field-container flex-container flex-column ${props.className}`}
    >
      <label className="field-label" htmlFor={props.name}>
        {props.label}
      </label>

      <div className="input-wrapper">
        <input
          className={`field ${props.className}`}
          type={isPasswordVisible ? "text" : props.type}
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          aria-label={props.placeholder}
        />

        {props.type === "password" && (
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
        {props.touched?.[props.name] && props.errors?.[props.name]
          ? props.errors[props.name]
          : null}
      </div>
    </div>
  );
};

Field.defaultProps = {
  className: "",
  label: "",
  type: "text",
  id: "",
  name: "",
  value: "",
  onChange: () => {},
  placeholder: "",
  touched: {},
  errors: {},
};

PropTypes.PropTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  touched: PropTypes.object,
  errors: PropTypes.object,
};

export default Field;
