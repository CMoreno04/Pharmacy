import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";

import "../../../styles/flex-styles.css";
import "./header-styles.css";

const Header = ({ userInitials = "GH" }) => {

  // Create a navigate hook
  const navigate = useNavigate();

  // Create a function to handle the Sign in button
  const handleSignin = () => {
    navigate("/login");
  };

  return (
    <header className="header flex-container justify-between align-center flex-row">
      <div className=" header-logo-container flex-container align-center flex-grow-1 flex-shrink-1 flex-basis-0">
        <h1 className="header-logo">Logo.</h1>
      </div>
      <nav className="header-nav-container flex-container justify-center align-center flex-grow-1 flex-shrink-1 flex-basis-0">
        <ul className="header-nav-list flex-container justify-center align-center">
          <li className="header-nav-links">Home</li>
          <li className="header-nav-links">About</li>
          <li className="header-nav-links">Contacts</li>
        </ul>
      </nav>

      <div className="header-button-container flex-container justify-end align-center flex-grow-1 flex-shrink-1 flex-basis-0">
        <Button
          className="header-signin-btn flex-container justify-center align-center"
          id="header-btn"
          name="header-btn"
          type="button"
          text="Sign in"
          onClick={handleSignin}
        />
      </div>
      {/* <div className="header-profile-container flex-container justify-end align-center flex-grow-1 flex-shrink-1 flex-basis-0">
        <div className="user-profile-circle flex-container justify-center align-center">
          <div className="profile-initials">{userInitials}</div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
