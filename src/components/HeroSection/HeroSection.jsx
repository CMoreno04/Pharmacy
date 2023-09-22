import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../shared-components/Button/Button";

import "../../styles/flex-styles.css";
import "./hero-section-styles.css";

function HeroSection({ scrollToFeatures }) {
  // Create a navigate hook
  const navigate = useNavigate();

  // Create a function to handle the Sign in button
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <section className="hero-section flex-container justify-center align-center">
      <div className="hero-content flex-container flex-column">
        <h1 className="hero-title">
          Elevating Your <br /> Pharmacy Experience
        </h1>
        <div className="hero-message-container">
          <p className="hero-message">
            Simplify your healthcare journey with our prescription management
            platform. Enjoy seamless prescription submissions and fast pharmacy
            orders. Your health, simplified. Get started today.
          </p>
        </div>
        <div className="hero-btn-container flex-container justify-start align-center">
          <Button
            className="hero-btn-1 flex-container justify-center align-center"
            id="header-btn"
            name="header-btn"
            type="button"
            text="Learn more"
            onClick={scrollToFeatures}
          />
          <Button
            className="hero-btn-2 flex-container justify-center align-center"
            id="header-btn"
            name="header-btn"
            type="button"
            text="Get started!"
            onClick={handleRegister}
          />
        </div>
      </div>
      <div className="flex-container justify-center align-center">
        <img
          className="hero-img"
          src="/images/pharmacy-image.svg"
          alt="hero-img"
        />
      </div>
    </section>
  );
}

export default HeroSection;
