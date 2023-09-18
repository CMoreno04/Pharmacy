import React from "react";
import { Link } from "react-router-dom";

import LoginForm from "../../components/LoginForm/LoginForm";

import "../../styles/flex-styles.css";
import "./login-page-styles.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <main className="main-container flex-container align-center justify-center">
        <div className="login-form-container flex-container align-center flex-column">
          <header className="login-header-container">
            <h1 className="login-h1">Sign in</h1>
          </header>

          <LoginForm />

          <ul>
            <li className="register-text">
              Don't have an account yet?{" "}
              <Link to="/register" className="link">
                Sign up!
              </Link>
            </li>

            <li className="access-help-text">
              <Link to="/login" className="link">
                Can't access your account?
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
