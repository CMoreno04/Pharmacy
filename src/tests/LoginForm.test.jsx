import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import LoginForm from "../components/LoginForm/LoginForm";
// import { sendUserLoginData } from "../services/authService";

// '@testing-library/jest-dom/extend-expect' is automatically included via the setupTests.js file

// -------------------------------------------------- Tests -------------------------------------------------->

test("renders the login form correctly", () => {
  render(<LoginForm />);

  // Check that the email field is rendered
  const emailInput = screen.getByLabelText("Enter email");
  expect(emailInput).toBeInTheDocument();

  // Check that the password field is rendered
  const passwordInput = screen.getByLabelText("Enter password");
  expect(passwordInput).toBeInTheDocument();

  // Check that the submit button is rendered correctly
  const submitButton = screen.getByRole("button", { name: "Sign in" });
  expect(submitButton).toBeInTheDocument();
});

test('updates form fields on input', () => {
    render(<LoginForm />);

    // Check that the email field value is updated correctly
    const emailInput = screen.getByLabelText("Enter email");
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');

    // Check that the password field value is updated correctly
    const passwordInput = screen.getByLabelText("Enter password");
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    expect(passwordInput.value).toBe('password');
});
