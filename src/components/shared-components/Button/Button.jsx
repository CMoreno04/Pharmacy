import React from "react";
import PropTypes from "prop-types";

import "./button-styles.css";

const Button = ({ className, name, type, text, onClick }) => {
  return (
    <button
      className={`button ${className}`}
      name={name}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: "",
  name: "",
  type: "button",
  text: "",
  onClick: () => {},
};

PropTypes.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
