import React from "react";

import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import LoginForm from "../components/LoginForm/LoginForm";
import { sendUserLoginData } from "../services/authService";

// '@testing-library/jest-dom/extend-expect' is automatically included via the setupTests.js file

// Mock the sendUserLoginData function
jest.mock("../services/authService");

// -------------------------------------------------- Tests -------------------------------------------------->

describe("LoginForm Component", () => {
  it("Renders form correctly", () => {
    render(<LoginForm />);

    // Get the form fields
    const emailInput = screen.getByLabelText("Enter email");
    const passwordInput = screen.getByLabelText("Enter password");
    const submitButton = screen.getByRole("button", { name: "Sign in" });

    // Check that the form fields are rendered correctly
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("Updates form fields on input", () => {
    render(<LoginForm />);

    // Get the form fields
    const emailInput = screen.getByLabelText("Enter email");
    const passwordInput = screen.getByLabelText("Enter password");

    // Update the form fields
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    // Check that the form fields are updated correctly
    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password");
  });

  it("Calls sendUserLoginData function when form is submitted successfully", async () => {
    render(<LoginForm />);

    // Get the form fields
    const emailInput = screen.getByLabelText("Enter email");
    const passwordInput = screen.getByLabelText("Enter password");
    const submitButton = screen.getByRole("button", { name: "Sign in" });

    // Mock the sendUserLoginData function
    sendUserLoginData.mockResolvedValueOnce({
      result: "success",
      data: {},
      message: null,
    });

    // Update the form fields
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(submitButton);

    // Check that the sendUserLoginData function is called correctly
    await waitFor(() => expect(sendUserLoginData).toHaveBeenCalledTimes(1));

    // Check that the sendUserLoginData function is called with the correct data
    expect(sendUserLoginData).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "password",
    });
  });

  it("Displays error messages when form fields are invalid", async () => {
    render(<LoginForm />);

    // Get the form fields
    const emailInput = screen.getByLabelText("Enter email");
    const passwordInput = screen.getByLabelText("Enter password");
    const submitButton = screen.getByRole("button", { name: "Sign in" });

    // Click the submit button
    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.change(passwordInput, { target: { value: "" } });
    fireEvent.click(submitButton);

    // Assert that error messages are displayed for both fields
    const emailError = await screen.findByText("Enter a valid email address.");
    const passwordError = await screen.findByText("Enter a valid password.");

    // Ensure that the error messages are visible
    expect(emailError).toBeVisible();
    expect(passwordError).toBeVisible();
    expect(passwordError).toBeVisible();
  });
});
