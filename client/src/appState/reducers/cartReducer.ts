const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_CART_ITEMS_REQUEST":
    case "ADD_TO_CART_REQUEST":
    case "REMOVE_FROM_CART_REQUEST":
    case "UPDATE_CART_ITEM_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_CART_ITEMS_SUCCESS":
      return {
        ...state,
        loading: false,
        cartItems: action.payload,
        error: null,
      };
    case "ADD_TO_CART_SUCCESS":
      // Logic to add item to cart
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "REMOVE_FROM_CART_SUCCESS":
      // Logic to remove item from cart
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "UPDATE_CART_ITEM_SUCCESS":
      // Logic to update cart item
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "FETCH_CART_ITEMS_FAILURE":
    case "ADD_TO_CART_FAILURE":
    case "REMOVE_FROM_CART_FAILURE":
    case "UPDATE_CART_ITEM_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
