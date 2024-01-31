import axiosInstance from "../../services/axios/axiosInstance";

// Fetch all products action
export const fetchAllProducts = () => {
  return async (dispatch: any) => {
    dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
    try {
      const response = await axiosInstance.get("/products");
      dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
    } catch (error: any) {
      dispatch({
        type: "FETCH_PRODUCTS_FAILURE",
        payload: error.response.data,
      });
    }
  };
};

// Fetch single product by ID action
export const fetchProductById = (productId: string) => {
  return async (dispatch: any) => {
    dispatch({ type: "FETCH_PRODUCT_REQUEST" });
    try {
      const response = await axiosInstance.get(`/products/${productId}`);
      console.log("hey response");
      dispatch({ type: "FETCH_PRODUCT_SUCCESS", payload: response.data });
    } catch (error: any) {
      dispatch({ type: "FETCH_PRODUCT_FAILURE", payload: error.response.data });
    }
  };
};

// Create new product action
// export const createProduct = (productData) => {
//   return async (dispatch) => {
//     dispatch({ type: "CREATE_PRODUCT_REQUEST" });
//     try {
//       const response = await axiosInstance.post("/products", productData);
//       dispatch({ type: "CREATE_PRODUCT_SUCCESS", payload: response.data });
//     } catch (error) {
//       dispatch({
//         type: "CREATE_PRODUCT_FAILURE",
//         payload: error.response.data,
//       });
//     }
//   };
// };

// Update existing product action
// export const updateProduct = (productId, updatedProductData) => {
//   return async (dispatch) => {
//     dispatch({ type: "UPDATE_PRODUCT_REQUEST" });
//     try {
//       const response = await axiosInstance.put(
//         `/products/${productId}`,
//         updatedProductData
//       );
//       dispatch({ type: "UPDATE_PRODUCT_SUCCESS", payload: response.data });
//     } catch (error) {
//       dispatch({
//         type: "UPDATE_PRODUCT_FAILURE",
//         payload: error.response.data,
//       });
//     }
//   };
// };

// Delete product action
// export const deleteProduct = (productId) => {
//   return async (dispatch) => {
//     dispatch({ type: "DELETE_PRODUCT_REQUEST" });
//     try {
//       await axiosInstance.delete(`/products/${productId}`);
//       dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: productId });
//     } catch (error) {
//       dispatch({
//         type: "DELETE_PRODUCT_FAILURE",
//         payload: error.response.data,
//       });
//     }
//   };
// };
