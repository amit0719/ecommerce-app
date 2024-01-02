import { jwtDecode } from "jwt-decode";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
    case "LOGIN_REQUEST":
    case "VERIFY_OTP_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "REGISTER_SUCCESS":
      // case "LOGIN_SUCCESS":
      const { userId: registerUserId } = jwtDecode(action.payload.token) as any;
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        userId: registerUserId,
        error: null,
      };
    case "VERIFY_OTP_SUCCESS":
      console.log("hey action", action);
      const { userId: loggedInUserId } = jwtDecode(action.payload.token) as any;
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        userId: loggedInUserId,
        error: null,
        // Additional logic for OTP verification
      };
    case "REGISTER_FAILURE":
    case "LOGIN_FAILURE":
    case "VERIFY_OTP_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        userId: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
