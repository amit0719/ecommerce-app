const initialState = {
  orders: [],
  orderId: null,
  loading: false,
  error: null,
  payment: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_ORDERS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_ALL_ORDERS_SUCCESS":
      return { ...state, loading: false, orders: action.payload };
    case "FETCH_ALL_ORDERS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "FETCH_ORDER_BY_ID_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_ORDER_BY_ID_SUCCESS":
      return { ...state, loading: false, orderId: action.payload };
    case "FETCH_ORDER_BY_ID_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "CANCEL_ORDER_REQUEST":
      return { ...state, loading: true, error: null };
    case "CANCEL_ORDER_SUCCESS":
      // Handle successful cancel order action
      return state;
    case "CANCEL_ORDER_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "CREATE_ORDER_REQUEST":
      return { ...state, loading: true, error: null };
    case "CREATE_ORDER_SUCCESS":
      return { ...state, loading: false, orderId: action.payload };
    case "CREATE_ORDER_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "UPDATE_ORDER_STATUS_REQUEST":
      return { ...state, loading: true, error: null };
    case "UPDATE_ORDER_STATUS_SUCCESS":
      // Handle successful update order status action
      return state;
    case "UPDATE_ORDER_STATUS_FAILURE":
      return { ...state, loading: false, error: action.payload };

    case "PROCESS_PAYMENT_REQUEST":
      return { ...state, loading: true, error: null };
    case "PROCESS_PAYMENT_SUCCESS":
      return { ...state, loading: false, payment: action.payload };
    case "PROCESS_PAYMENT_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default orderReducer;
