import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Authentication from "../pages/Authentication";
import { renderWithProviders } from "./utils/TestWrapper";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);
describe("Authentication", () => {
  const store = mockStore({
    auth: {
      user: null,
      isAuthenticated: false,
      isOtpSent: false,
      passwordUpdated: false,
      loading: false,
      error: null,
    },
  });
  test("sets formData state on input change", () => {
    renderWithProviders(<Authentication />, store);

    const emailInput = screen.getByLabelText("Email");
    userEvent.type(emailInput, "test@example.com");

    const passwordInput = screen.getByLabelText("Password");
    userEvent.type(passwordInput, "password123");

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
  });

  test("clears form errors on input change", () => {
    renderWithProviders(<Authentication />, store);

    // trigger errors
    const emailInput = screen.getByLabelText("Email");
    userEvent.clear(emailInput);

    const passwordInput = screen.getByLabelText("Password");
    userEvent.clear(passwordInput);

    userEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Password is required")).toBeInTheDocument();

    // type input to clear errors
    userEvent.type(emailInput, "test@test.com");
    userEvent.type(passwordInput, "password123");

    expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
    expect(screen.queryByText("Password is required")).not.toBeInTheDocument();
  });

  //test submitting form
  test("calls login action on form submit", async () => {
    const dispatch = jest.fn();
    const login = jest.fn();
    renderWithProviders(<Authentication />, store);

    userEvent.type(screen.getByLabelText("Email"), "test@test.com");
    userEvent.type(screen.getByLabelText("Password"), "password123");

    await userEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(dispatch).toHaveBeenCalledWith(
      login({
        email: "test@test.com",
        password: "password123",
      })
    );
  });

  test("calls verifyOTP action when OTP submitted", () => {
    const dispatch = jest.fn();
    const verifyOTP = jest.fn();
    renderWithProviders(<Authentication />, store);

    // show OTP field
    userEvent.type(screen.getByLabelText("Email"), "test@test.com");
    userEvent.type(screen.getByLabelText("Password"), "password123");
    userEvent.click(screen.getByRole("button", { name: "Login" }));

    // submit OTP
    userEvent.type(screen.getByLabelText("Enter OTP"), "123456");
    userEvent.click(screen.getByRole("button", { name: "Verify OTP" }));

    expect(dispatch).toHaveBeenCalledWith(
      verifyOTP({ otp: "123456", email: "test@test.com" })
    );
  });
});
