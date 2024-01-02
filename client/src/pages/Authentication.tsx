import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, verifyOTP } from "../appState/actions/authActions";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigateTo = useNavigate();
  const dispatch: any = useDispatch();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState(null);

  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated]);

  console.log("hey isAuthenticated signe up", isAuthenticated);

  const handleSendOTP = () => {
    // Logic to send OTP
    if (formData) {
      dispatch(login(formData));
      setIsOtpSent(true);
      setShowOtpField(true);
    }
  };

  const handleResendOTP = () => {
    dispatch(login(formData));
  };

  const handleVerifyOTP = () => {
    if (otp) {
      dispatch(verifyOTP({ otp, email: formData.email }));
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
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {!showOtpField ? (
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSendOTP}
          >
            Send OTP
          </button>
        ) : (
          <div className="form-group">
            <label htmlFor="otp">Enter OTP</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="form-control"
            />
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
        )}
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <div className="sign-up-link">
          <p>Don't have an account?</p>
          <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Authentication;
