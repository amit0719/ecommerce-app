import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../appState/actions/authActions";
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  console.log("hey isAuthenticated signe up", isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData) {
      dispatch(register(formData));
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
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default UserRegistration;
