import { SIGNIN_SUCCESS } from "../../constants/authConstants";
import * as api from "../../config/api/authApis";
import { setInStorage } from "../../utils/storage";

export const signIn = (body, onSuccess, onFailure) => async (dispatch) => {
  try {
    let { data } = await api.signInApi(body);
    let user = JSON.stringify(data);

    setInStorage("user", user);
    setInStorage("token", data.token);
    dispatch({ type: SIGNIN_SUCCESS, payload: data });
    onSuccess();
  } catch (error) {
    onFailure(error.response?.data?.message);
  }
};
