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
export const removeFromCart = (itemId: any) => {
  return async (dispatch: any) => {
    dispatch({ type: "REMOVE_FROM_CART_REQUEST" });
    try {
      await axiosInstance.post("/carts/remove", { itemId });
      dispatch({ type: "REMOVE_FROM_CART_SUCCESS", payload: itemId });
    } catch (error: any) {
      dispatch({
        type: "REMOVE_FROM_CART_FAILURE",
        payload: error.response.data,
      });
    }
  };
};

// Update cart item action
export const updateCartItem = (itemId: any, updatedItemData: any) => {
  return async (dispatch: any) => {
    dispatch({ type: "UPDATE_CART_ITEM_REQUEST" });
    try {
      const response = await axiosInstance.post("/carts/update", {
        itemId,
        updatedItemData,
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
