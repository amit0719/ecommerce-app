import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, updatePassword } from "../appState/actions/authActions";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigateTo = useNavigate();
  const dispatch: any = useDispatch();
  const [, setIsOtpSent] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [otp, setOtp] = useState(null);
  const { isOtpSent, passwordUpdated } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (passwordUpdated) {
      navigateTo("/login");
    }
  }, [passwordUpdated]);

  const [errors, setErrors] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSendOTP = () => {
    let formErrors = {
      email: "",
      newPassword: "",
      confirmPassword: "",
    };

    let hasError = false;

    if (formData.email.trim() === "") {
      formErrors.email = "Email is required";
      hasError = true;
    }

    if (formData.newPassword.trim() === "") {
      formErrors.newPassword = "New Password is required";
      hasError = true;
    }

    if (formData.confirmPassword.trim() === "") {
      formErrors.confirmPassword = "Confirm Password is required";
      hasError = true;
    }

    if (formData.confirmPassword.trim() !== formData.newPassword.trim()) {
      formErrors.confirmPassword = "Passwords do not match";
      hasError = true;
    }

    if (hasError) {
      setErrors(formErrors);
    } else {
      dispatch(resetPassword(formData));
      setIsOtpSent(true);
      setShowOtpField(true);
    }
  };

  const handleResendOTP = () => {
    dispatch(resetPassword(formData));
  };

  const handleVerifyOTP = () => {
    if (otp) {
      dispatch(
        updatePassword({
          otp,
          email: formData.email,
          password: formData.newPassword,
        })
      );
      // setIsOtpSent(false);
      // setShowOtpField(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <div className="container mt-5">
      <h2>Forget Password</h2>
      <form className="login-form">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            required
          />
          {errors.newPassword && (
            <p className="text-danger">{errors.newPassword}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          {errors.confirmPassword && (
            <p className="text-danger">{errors.confirmPassword}</p>
          )}
        </div>
        {!showOtpField ? (
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSendOTP}
          >
            Reset
          </button>
        ) : (
          <div className="mb-3">
            <label htmlFor="otp" className="form-label">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="form-control"
            />
            {isOtpSent && (
              <p className="text-success mt-3">{"OTP sent to your email"}</p>
            )}
            <div className="justify-content-center mt-3">
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleVerifyOTP}
              >
                Verify OTP
              </button>
              <button
                className="btn btn-link"
                type="button"
                onClick={handleResendOTP}
              >
                Resend OTP
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ForgetPassword;
