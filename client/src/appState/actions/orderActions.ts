import axiosInstance from "../../services/axios/axiosInstance";

export const fetchAllOrders = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_ALL_ORDERS_REQUEST" });

    try {
      const response = await axiosInstance.get("/orders");
      dispatch({ type: "FETCH_ALL_ORDERS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ALL_ORDERS_FAILURE", payload: error.message });
    }
  };
};

export const fetchOrderById = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_ORDER_BY_ID_REQUEST" });

    try {
      const response = await axiosInstance.get(`/orders/${orderId}`);
      dispatch({ type: "FETCH_ORDER_BY_ID_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_ORDER_BY_ID_FAILURE", payload: error.message });
    }
  };
};

export const cancelOrder = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: "CANCEL_ORDER_REQUEST" });

    try {
      const response = await axiosInstance.put(`/orders/${orderId}/cancel`);
      dispatch({ type: "CANCEL_ORDER_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "CANCEL_ORDER_FAILURE", payload: error.message });
    }
  };
};

export const createOrder = (orderData) => {
  return async (dispatch) => {
    dispatch({ type: "CREATE_ORDER_REQUEST" });

    try {
      const response = await axiosInstance.post("/orders", orderData);
      dispatch({ type: "CREATE_ORDER_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "CREATE_ORDER_FAILURE", payload: error.message });
    }
  };
};

export const updateOrderStatus = (orderId, newStatus) => {
  return async (dispatch) => {
    dispatch({ type: "UPDATE_ORDER_STATUS_REQUEST" });

    try {
      const response = await axiosInstance.put(`/orders/${orderId}`, {
        status: newStatus,
      });
      dispatch({ type: "UPDATE_ORDER_STATUS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "UPDATE_ORDER_STATUS_FAILURE", payload: error.message });
    }
  };
};

export const processPayment = (paymentData) => {
  return async (dispatch) => {
    dispatch({ type: "PROCESS_PAYMENT_REQUEST" });

    try {
      const response = await axiosInstance.post("/orders/payment", paymentData);
      dispatch({ type: "PROCESS_PAYMENT_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "PROCESS_PAYMENT_FAILURE", payload: error.message });
    }
  };
};
