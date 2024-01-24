import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import UserRegistration from "../pages/UserRegistration";

// describe("UserRegistration", () => {
//   test("renders form fields", () => {
//     render(<UserRegistration />);

//     expect(screen.getByLabelText("Username")).toBeInTheDocument();
//     expect(screen.getByLabelText("Email address")).toBeInTheDocument();
//     expect(screen.getByLabelText("Password")).toBeInTheDocument();
//     expect(screen.getByLabelText("Confirm password")).toBeInTheDocument();
//   });

//   test("updates form data on input change", () => {
//     render(<UserRegistration />);

//     const usernameInput = screen.getByLabelText("Username");
//     userEvent.type(usernameInput, "testUser");
//     expect(usernameInput).toHaveValue("testUser");

//     const emailInput = screen.getByLabelText("Email address");
//     userEvent.type(emailInput, "test@example.com");
//     expect(emailInput).toHaveValue("test@example.com");
//   });

//   test("dispatches register action on form submit", () => {
//     const dispatch = jest.fn();
//     render(<UserRegistration dispatch={dispatch} />);

//     const usernameInput = screen.getByLabelText("Username");
//     userEvent.type(usernameInput, "testUser");

//     const emailInput = screen.getByLabelText("Email address");
//     userEvent.type(emailInput, "test@example.com");

//     const passwordInput = screen.getByLabelText("Password");
//     userEvent.type(passwordInput, "password123");

//     const confirmPasswordInput = screen.getByLabelText("Confirm password");
//     userEvent.type(confirmPasswordInput, "password123");

//     userEvent.click(screen.getByRole("button", { name: "Sign Up" }));

//     expect(dispatch).toHaveBeenCalledWith({
//       type: "register",
//       payload: {
//         username: "testUser",
//         email: "test@example.com",
//         password: "password123",
//       },
//     });
//   });

//   test("displays validation errors", () => {
//     render(<UserRegistration />);

//     const submitBtn = screen.getByRole("button", { name: "Sign Up" });
//     userEvent.click(submitBtn);

//     expect(screen.getByText("Username is required")).toBeInTheDocument();
//     expect(screen.getByText("Email is required")).toBeInTheDocument();
//     expect(screen.getByText("Password is required")).toBeInTheDocument();
//     expect(
//       screen.getByText("Confirm password is required")
//     ).toBeInTheDocument();
//   });
// });
