import React, { useState } from "react";

const Authentication = () => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);

  const handleSendOTP = () => {
    // Logic to send OTP
    setIsOtpSent(true);
    setShowOtpField(true);
  };

  const handleResendOTP = () => {
    // Logic to resend OTP
    // Implement your resend OTP functionality here
  };

  const handleVerifyOTP = () => {
    // Logic to verify OTP
    // Implement your OTP verification logic here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username/Email</label>
          <input type="text" id="username" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" />
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
            <input type="text" id="otp" className="form-control" />
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
