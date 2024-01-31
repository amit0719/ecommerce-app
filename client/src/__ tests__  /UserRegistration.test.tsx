import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import UserRegistration from "../pages/UserRegistration";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import thunk from "redux-thunk";
import * as authActions from "../appState/actions/authActions";

const middlewares = () => thunk;
const mockStore = configureStore(middlewares);

describe("UserRegistration", () => {
  let store;
  let mockRegister;

  beforeEach(() => {
    store = mockStore({
      auth: {
        isAuthenticated: false,
        loading: false,
        error: null,
      },
    });

    mockRegister = jest.spyOn(authActions, "register");
    mockRegister.mockReturnValue(Promise.resolve()); // Mocking an asynchronous action
  });

  jest.mock("../appState/actions/authActions", () => ({
    register: mockRegister,
  }));

  test("renders form fields", () => {
    render(
      <Provider store={store}>
        <Router>
          <UserRegistration />
        </Router>
      </Provider>
    );

    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm password")).toBeInTheDocument();
  });

  test("updates form data on input change", () => {
    render(
      <Provider store={store}>
        <Router>
          <UserRegistration />
        </Router>
      </Provider>
    );

    const usernameInput = screen.getByLabelText("Username");
    userEvent.type(usernameInput, "testUser");
    expect(usernameInput).toHaveValue("testUser");

    const emailInput = screen.getByLabelText("Email address");
    userEvent.type(emailInput, "test@example.com");
    expect(emailInput).toHaveValue("test@example.com");
  });

  test("dispatches register action on form submit", () => {
    render(
      <Provider store={store}>
        <Router>
          <UserRegistration />
        </Router>
      </Provider>
    );

    const usernameInput = screen.getByLabelText("Username");
    userEvent.type(usernameInput, "testUser");

    const emailInput = screen.getByLabelText("Email address");
    userEvent.type(emailInput, "test@example.com");

    const passwordInput = screen.getByLabelText("Password");
    userEvent.type(passwordInput, "password123");

    const confirmPasswordInput = screen.getByLabelText("Confirm password");
    userEvent.type(confirmPasswordInput, "password123");

    userEvent.click(screen.getByRole("button", { name: "Sign Up" }));

    expect(mockRegister).toHaveBeenCalledWith({
      type: "register",
      payload: {
        username: "testUser",
        email: "test@example.com",
        password: "password123",
      },
    });
  });
});
