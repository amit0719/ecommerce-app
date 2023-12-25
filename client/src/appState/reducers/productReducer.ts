const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
    case "FETCH_PRODUCT_REQUEST":
    case "CREATE_PRODUCT_REQUEST":
    case "UPDATE_PRODUCT_REQUEST":
    case "DELETE_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };
    case "FETCH_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: null,
      };
    case "CREATE_PRODUCT_SUCCESS":
      // Logic to add new product to state
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "UPDATE_PRODUCT_SUCCESS":
      // Logic to update product in state
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "DELETE_PRODUCT_SUCCESS":
      // Logic to remove product from state
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "FETCH_PRODUCTS_FAILURE":
    case "FETCH_PRODUCT_FAILURE":
    case "CREATE_PRODUCT_FAILURE":
    case "UPDATE_PRODUCT_FAILURE":
    case "DELETE_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
