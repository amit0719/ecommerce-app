const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
    case "UPDATE_USER_REQUEST":
    case "DELETE_USER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };
    case "UPDATE_USER_SUCCESS":
      // Logic to update user information in state
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "DELETE_USER_SUCCESS":
      // Logic to remove user from state
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "FETCH_USERS_FAILURE":
    case "UPDATE_USER_FAILURE":
    case "DELETE_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
