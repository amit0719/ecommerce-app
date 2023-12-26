import axiosInstance from "../../services/axios/axiosInstance";

// Fetch all users action
export const fetchAllUsers = () => {
  return async (dispatch: any) => {
    dispatch({ type: "FETCH_USERS_REQUEST" });
    try {
      const response = await axiosInstance.get("/api/users");
      dispatch({ type: "FETCH_USERS_SUCCESS", payload: response.data });
    } catch (error: any) {
      dispatch({ type: "FETCH_USERS_FAILURE", payload: error.response.data });
    }
  };
};

// Update user information action
// export const updateUser = (userId, updatedUserData) => {
//   return async (dispatch) => {
//     dispatch({ type: "UPDATE_USER_REQUEST" });
//     try {
//       const response = await axiosInstance.put(`/api/users/${userId}`, updatedUserData);
//       dispatch({ type: "UPDATE_USER_SUCCESS", payload: response.data });
//     } catch (error) {
//       dispatch({ type: "UPDATE_USER_FAILURE", payload: error.response.data });
//     }
//   };
// };

// Delete user action
// export const deleteUser = (userId) => {
//   return async (dispatch) => {
//     dispatch({ type: "DELETE_USER_REQUEST" });
//     try {
//       await axiosInstance.delete(`/api/users/${userId}`);
//       dispatch({ type: "DELETE_USER_SUCCESS", payload: userId });
//     } catch (error) {
//       dispatch({ type: "DELETE_USER_FAILURE", payload: error.response.data });
//     }
//   };
// };
