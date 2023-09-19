import React from "react";
import PropTypes from "prop-types";

import "./button-styles.css";

const Button = ({ className, name, type, text }) => {
  return (
    <button className={`button ${className}`} name={name} type={type}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: "",
  name: "",
  type: "button",
  text: "",
};

PropTypes.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
