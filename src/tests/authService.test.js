import { sendUserLoginData } from "../services/authService";

// -------------------------------------------------- //

// Mock the fetch function
global.fetch = jest.fn();

// Mock login form data
const loginFormData = {
  username: "test@example.com",
  password: "test123",
};

// Mock the response from the server
const responseData = {
  message: "",
  jwt: "0123456789",
  id: 12345,
  username: "test@example.com",
  email: "test@example.com",
  roles: ["user"],
};

// Mock the try catch error message
const tryCatchErrorMessage = "Some Error Message";

// -------------------------------------------------- Tests -------------------------------------------------->

describe("sendUserLoginData API function", () => {
  // Clear all instances and calls
  beforeEach(() => {
    fetch.mockClear();
  });

  it("Should send the login form data to the server", async () => {
    // Mock the fetch function to return a successful response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ result: "success" }),
    });

    // Call the sendUserLoginData function with the login form data and await the response
    await sendUserLoginData(loginFormData);

    // Check that fetch was called with the correct arguments
    expect(fetch).toHaveBeenCalledWith(process.env.REACT_APP_LOGIN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginFormData),
    });
  });

  it("Should return success when response is ok", async () => {
    // Mock the fetch function to return a successful response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => responseData,
    });

    // Call the sendUserLoginData function with the login form data, await the response and store it in a variable
    const response = await sendUserLoginData(loginFormData);

    // Check that the return value is correct
    expect(response).toEqual({
      result: "success",
      data: responseData,
      message: null,
    });
  });

  it("Should return the error message if the response is not ok", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    });

    // Call the sendUserLoginData function with the login form data, await the response and store it in a variable
    const response = await sendUserLoginData(loginFormData);

    // Check that the return value is correct
    expect(response).toEqual({
      result: "error",
      data: null,
      message: responseData.message || "An error occurred while signing in",
    });
  });

  it("Should return the error message if an error occurs", async () => {
    // Mock the fetch function to throw an error
    fetch.mockRejectedValueOnce(new Error(tryCatchErrorMessage));

    // Call the sendUserLoginData function with the login form data, await the response and store it in a variable
    const response = await sendUserLoginData(loginFormData);

    // Check that the return value is correct
    expect(response).toEqual({
      result: "error",
      data: null,
      message: `An unexpected error occurred: ${tryCatchErrorMessage}`,
    });
  });
});
