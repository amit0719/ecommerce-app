import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Authentication from "../pages/Authentication";

// describe("Authentication", () => {
//   test("sets formData state on input change", () => {
//     render(<Authentication />);

//     const emailInput = screen.getByLabelText("Email");
//     userEvent.type(emailInput, "test@example.com");

//     const passwordInput = screen.getByLabelText("Password");
//     userEvent.type(passwordInput, "password123");

//     expect(emailInput).toHaveValue("test@example.com");
//     expect(passwordInput).toHaveValue("password123");
//   });

//   test("clears form errors on input change", () => {
//     // render with error
//     const { rerender } = render(<Authentication />);

//     // trigger errors
//     const emailInput = screen.getByLabelText("Email");
//     userEvent.clear(emailInput);

//     const passwordInput = screen.getByLabelText("Password");
//     userEvent.clear(passwordInput);

//     expect(screen.getByText("Email is required")).toBeInTheDocument();
//     expect(screen.getByText("Password is required")).toBeInTheDocument();

//     // type input to clear errors
//     userEvent.type(emailInput, "test@test.com");
//     userEvent.type(passwordInput, "password123");

//     expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
//     expect(screen.queryByText("Password is required")).not.toBeInTheDocument();
//   });

//   // test submitting form
//   test("calls login action on form submit", () => {
//     const dispatch = jest.fn();
//     render(<Authentication dispatch={dispatch} />);

//     userEvent.type(screen.getByLabelText("Email"), "test@test.com");
//     userEvent.type(screen.getByLabelText("Password"), "password123");

//     userEvent.click(screen.getByRole("button", { name: "Login" }));

//     expect(dispatch).toHaveBeenCalledWith(
//       login({
//         email: "test@test.com",
//         password: "password123",
//       })
//     );
//   });

//   // test verifying OTP
//   test("calls verifyOTP action when OTP submitted", () => {
//     const dispatch = jest.fn();
//     render(<Authentication dispatch={dispatch} />);

//     // show OTP field
//     userEvent.type(screen.getByLabelText("Email"), "test@test.com");
//     userEvent.type(screen.getByLabelText("Password"), "password123");
//     userEvent.click(screen.getByRole("button", { name: "Login" }));

//     // submit OTP
//     userEvent.type(screen.getByLabelText("Enter OTP"), "123456");
//     userEvent.click(screen.getByRole("button", { name: "Verify OTP" }));

//     expect(dispatch).toHaveBeenCalledWith(
//       verifyOTP({ otp: "123456", email: "test@test.com" })
//     );
//   });

//   // test navigation
//   test("navigates to / on auth success", () => {
//     const navigate = jest.fn();
//     render(<Authentication navigate={navigate} isAuthenticated />);

//     expect(navigate).toHaveBeenCalledWith("/");
//   });
// });
