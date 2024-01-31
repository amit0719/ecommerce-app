import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, verifyOTP } from "../appState/actions/authActions";
import { useNavigate } from "react-router-dom";
import { fetchCartItems } from "../appState/actions/cartActions";

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
  const { isAuthenticated, userId } = useSelector((state: any) => state.auth);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const dispatchRequiredActions = async () => {
    await dispatch(fetchCartItems({ userId }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatchRequiredActions();
      navigateTo("/");
    }
  }, [isAuthenticated]);

  const handleSendOTP = () => {
    let formErrors = {
      email: "",
      password: "",
    };

    let hasError = false;

    if (formData.email.trim() === "") {
      formErrors.email = "Email is required";
      hasError = true;
    }

    if (formData.password.trim() === "") {
      formErrors.password = "Password is required";
      hasError = true;
    }

    if (hasError) {
      setErrors(formErrors);
    } else {
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

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form>
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
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </div>
        {!showOtpField ? (
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSendOTP}
          >
            Login
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
        <div className="mt-3">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <div className="justify-content-center mt-3">
          <span>Don't have an account?</span>
          <span className="gap-1">
            <a href="/signup">Sign Up</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Authentication;
