import { SIGNIN_SUCCESS } from "../../constants/authConstants";

const INITIAL_STATE = {
  isUser: localStorage.hasOwnProperty("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return { ...state, isUser: action.payload };
    default:
      return state;
  }
};

export default authReducer;
