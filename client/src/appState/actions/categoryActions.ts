import axiosInstance from "../../services/axios/axiosInstance";

// Fetch all categories action
export const fetchAllCategories = () => {
  return async (dispatch: any) => {
    dispatch({ type: "FETCH_CATEGORIES_REQUEST" });
    try {
      const response = await axiosInstance.get("/api/categories");
      dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: response.data });
    } catch (error: any) {
      dispatch({
        type: "FETCH_CATEGORIES_FAILURE",
        payload: error.response.data,
      });
    }
  };
};

// Fetch single category by ID action
export const fetchCategoryById = (categoryId: string) => {
  return async (dispatch: any) => {
    dispatch({ type: "FETCH_CATEGORY_REQUEST" });
    try {
      const response = await axiosInstance.get(`/api/categories/${categoryId}`);
      dispatch({ type: "FETCH_CATEGORY_SUCCESS", payload: response.data });
    } catch (error: any) {
      dispatch({
        type: "FETCH_CATEGORY_FAILURE",
        payload: error.response.data,
      });
    }
  };
};

// Create new category action
// export const createCategory = (categoryData) => {
//   return async (dispatch) => {
//     dispatch({ type: "CREATE_CATEGORY_REQUEST" });
//     try {
//       const response = await axiosInstance.post("/api/categories/create", categoryData);
//       dispatch({ type: "CREATE_CATEGORY_SUCCESS", payload: response.data });
//     } catch (error) {
//       dispatch({
//         type: "CREATE_CATEGORY_FAILURE",
//         payload: error.response.data,
//       });
//     }
//   };
// };

// Update existing category action
// export const updateCategory = (categoryId, updatedCategoryData) => {
//   return async (dispatch) => {
//     dispatch({ type: "UPDATE_CATEGORY_REQUEST" });
//     try {
//       const response = await axiosInstance.put(
//         `/api/categories/${categoryId}/update`,
//         updatedCategoryData
//       );
//       dispatch({ type: "UPDATE_CATEGORY_SUCCESS", payload: response.data });
//     } catch (error) {
//       dispatch({
//         type: "UPDATE_CATEGORY_FAILURE",
//         payload: error.response.data,
//       });
//     }
//   };
// };

// Delete category action
// export const deleteCategory = (categoryId) => {
//   return async (dispatch) => {
//     dispatch({ type: "DELETE_CATEGORY_REQUEST" });
//     try {
//       await axiosInstance.delete(`/api/categories/${categoryId}/delete`);
//       dispatch({ type: "DELETE_CATEGORY_SUCCESS", payload: categoryId });
//     } catch (error) {
//       dispatch({
//         type: "DELETE_CATEGORY_FAILURE",
//         payload: error.response.data,
//       });
//     }
//   };
// };
