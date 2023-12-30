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
      console.log("hey in reducer", action.payload);
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case "VERIFY_OTP_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
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
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
