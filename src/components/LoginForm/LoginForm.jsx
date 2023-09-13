import React from "react";
import { useFormik } from "formik";

import * as Yup from "yup";

import FormField from "../shared-components/FormField/FormField";
import FormButton from "../shared-components/FormButton/FormButton";

import "../../styles/flex-styles.css";
import "./login-form-styles.css";

// -------------------------------------------------- Variables and Constants -------------------------------------------------->

// Default login form state data
const defaultLoginData = {
  email: "",
  password: "",
};

// Validation schema for formik
const loginValidationSchema = Yup.object({
  email: Yup.string().required("Enter a valid email address."),
  password: Yup.string().required("Enter a valid password."),
});

// ---------------------------------------------------- LoginForm Component ---------------------------------------------------->

const LoginForm = () => {
  
  // Formik hook, for handling form state, validation and submission.
  const formik = useFormik({
    initialValues: defaultLoginData,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  // -------------------------------------------------- Form Handlers -------------------------------------------------->

  // Function for handling form submission
  const handleFormSubmit = async (values) => {

    // Simple console log to show the form data (This is to be removed when the form is connected to the backend)
    console.log(values);

    // Reset form after submission (This is to be removed when the form is connected to the backend)
    formik.resetForm();
  };

  // --------------------------------------------------      JSX      -------------------------------------------------->
  return (
    <form
      className="login-form flex-container align-center flex-column"
      onSubmit={formik.handleSubmit}
    >
      <FormField
        label="Email"
        className=""
        type="email"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="Enter email"
        aria-label="Enter email"
        errors={formik.errors}
        touched={formik.touched}
      />

      <FormField
        label="Password"
        className=""
        type="password"
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder="Enter password"
        aria-label="Enter password"
        errors={formik.errors}
        touched={formik.touched}
      />

      <FormButton
        className=""
        type="submit"
        id="loginBtn"
        name="loginBtn"
        text="Sign in"
      />
    </form>
  );
};

export default LoginForm;
