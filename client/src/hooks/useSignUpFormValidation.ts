import { useState } from "react";

interface ValidationErrors {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const useSignUpFormValidation = () => {
  const [errors, setErrors] = useState<ValidationErrors>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const resetErrors = () => {
    setErrors({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const validateForm = (formData: any) => {
    let isValid = true;

    // Validate email
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Valid email is required",
      }));
      isValid = false;
    }

    // Validate password
    if (formData.password.trim().length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters",
      }));
      isValid = false;
    }

    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match",
      }));
      isValid = false;
    }

    return isValid;
  };

  return { validateForm, errors, resetErrors };
};

export default useSignUpFormValidation;
