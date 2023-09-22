import React from "react";
import PropTypes from "prop-types";

import "../../styles/flex-styles.css";
import "./features-card-styles.css";

const FeaturesCard = ({ title, children }) => (
  <section className="features-card flex-container flex-column align-center">
    <figure className="card-icon-container flex-container justify-center align-center">
      <div className="features-card-icon flex-container justify-center align-center"></div>
    </figure>
    <div className="features-card-content flex-container justify-center align-center flex-column">
      <h2 className="features-card-title">{title}</h2>
      <p className="features-card-text flex-grow-1">{children}</p>
    </div>
  </section>
);

FeaturesCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FeaturesCard;
