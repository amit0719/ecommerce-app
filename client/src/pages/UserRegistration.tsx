import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../appState/actions/authActions";
import { useNavigate } from "react-router-dom";
import useSignUpFormValidation from "../hooks/useSignUpFormValidation";

const UserRegistration = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const { validateForm, errors, resetErrors } = useSignUpFormValidation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const {
    isAuthenticated,
    error: apiError,
    loading,
  } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm(formData);

    if (isValid) {
      dispatch(register(formData));
      resetErrors();
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
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
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm password
          </label>
          <input
            type="confirmPassword"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        {!loading && apiError && (
          <div className="mb3">
            <span className="text-danger">{apiError.message}</span>
          </div>
        )}
        <div className="mb-3">
          <span className="text-danger">{errors.username}</span>
        </div>
        <div className="mb-3">
          <span className="text-danger">{errors.email}</span>
        </div>
        <div className="mb-3">
          <span className="text-danger">{errors.password}</span>
        </div>
        <div className="mb-3">
          <span className="text-danger">{errors.confirmPassword}</span>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default UserRegistration;
