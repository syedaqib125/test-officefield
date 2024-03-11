import { GET_ORDERS_SUCCESS } from "../../constants/orderConstants";
import orders from "../../data/orders.json";

export const getOrdersAction = () => async (dispatch) => {
  dispatch({
    type: GET_ORDERS_SUCCESS,
    payload: orders || [],
  });
};
