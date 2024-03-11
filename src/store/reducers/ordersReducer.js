import { GET_ORDERS_SUCCESS } from "../../constants/orderConstants";

const INITIAL_STATE = {
  data: [],
};

const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ORDERS_SUCCESS:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default ordersReducer;
