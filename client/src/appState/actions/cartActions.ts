import axiosInstance from "../../services/axios/axiosInstance";

// Fetch cart items action
export const fetchCartItems = (params) => {
  return async (dispatch: any) => {
    dispatch({ type: "FETCH_CART_ITEMS_REQUEST" });
    try {
      const response = await axiosInstance.get("/carts", { params });
      dispatch({ type: "FETCH_CART_ITEMS_SUCCESS", payload: response.data });
    } catch (error: any) {
      dispatch({
        type: "FETCH_CART_ITEMS_FAILURE",
        payload: error.response.data,
      });
    }
  };
};

// Add item to cart action
export const addToCart = (itemData: any) => {
  return async (dispatch: any) => {
    dispatch({ type: "ADD_TO_CART_REQUEST" });
    try {
      const response = await axiosInstance.post("/carts/add", itemData);
      dispatch({ type: "ADD_TO_CART_SUCCESS", payload: response.data });
    } catch (error: any) {
      dispatch({ type: "ADD_TO_CART_FAILURE", payload: error.response.data });
    }
  };
};

// Remove item from cart action
export const removeFromCart = (userId: string, productId: string) => {
  return async (dispatch: any) => {
    dispatch({ type: "REMOVE_FROM_CART_REQUEST" });
    try {
      await axiosInstance.post("/carts/remove", { userId, productId });
      dispatch({ type: "REMOVE_FROM_CART_SUCCESS", payload: productId });
    } catch (error: any) {
      dispatch({
        type: "REMOVE_FROM_CART_FAILURE",
        payload: error.response.data,
      });
    }
  };
};

// Update cart item action
export const updateCartItem = (
  userId: string,
  productId: string,
  quantity: any
) => {
  return async (dispatch: any) => {
    dispatch({ type: "UPDATE_CART_ITEM_REQUEST" });
    try {
      const response = await axiosInstance.post("/carts/update", {
        userId,
        productId,
        quantity,
      });
      dispatch({ type: "UPDATE_CART_ITEM_SUCCESS", payload: response.data });
    } catch (error: any) {
      dispatch({
        type: "UPDATE_CART_ITEM_FAILURE",
        payload: error.response.data,
      });
    }
  };
};
