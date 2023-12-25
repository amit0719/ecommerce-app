const initialState = {
  categories: [],
  category: null,
  loading: false,
  error: null,
};

const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_CATEGORIES_REQUEST":
    case "FETCH_CATEGORY_REQUEST":
    case "CREATE_CATEGORY_REQUEST":
    case "UPDATE_CATEGORY_REQUEST":
    case "DELETE_CATEGORY_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_CATEGORIES_SUCCESS":
      return {
        ...state,
        loading: false,
        categories: action.payload,
        error: null,
      };
    case "FETCH_CATEGORY_SUCCESS":
      return {
        ...state,
        loading: false,
        category: action.payload,
        error: null,
      };
    case "CREATE_CATEGORY_SUCCESS":
      // Logic to add new category to state
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "UPDATE_CATEGORY_SUCCESS":
      // Logic to update category in state
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "DELETE_CATEGORY_SUCCESS":
      // Logic to remove category from state
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "FETCH_CATEGORIES_FAILURE":
    case "FETCH_CATEGORY_FAILURE":
    case "CREATE_CATEGORY_FAILURE":
    case "UPDATE_CATEGORY_FAILURE":
    case "DELETE_CATEGORY_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
