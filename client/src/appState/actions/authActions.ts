import axiosInstance from "../../services/axios/axiosInstance";

// Register user action
export const register = (userData: any) => {
  return async (dispatch: any) => {
    dispatch({ type: "REGISTER_REQUEST" });
    try {
      const response = await axiosInstance.post("/auth/register", userData);
      dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
    } catch (error: any) {
      dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
    }
  };
};

// Login action
export const login = (userData: any) => {
  return async (dispatch: any) => {
    dispatch({ type: "LOGIN_REQUEST" });
    try {
      const response = await axiosInstance.post("/auth/login", userData);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    } catch (error: any) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };
};

// Verify OTP action
export const verifyOTP = (otpData: any) => {
  return async (dispatch: any) => {
    dispatch({ type: "VERIFY_OTP_REQUEST" });
    try {
      const response = await axiosInstance.post("/auth/verifyOTP", otpData);
      dispatch({ type: "VERIFY_OTP_SUCCESS", payload: response.data });
    } catch (error: any) {
      dispatch({ type: "VERIFY_OTP_FAILURE", payload: error.response.data });
    }
  };
};

// Logout action
export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
