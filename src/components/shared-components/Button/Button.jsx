import React from "react";
import PropTypes from "prop-types";

import "./button-styles.css";

const Button = ({ props }) => {
  return (
    <button
      className={`button ${props.className}`}
      name={props.name}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
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
