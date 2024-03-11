import { postRequest } from "../url";
import { SIGNIN_URL } from "../../constants/authConstants";

export const signInApi = (user) => postRequest(`${SIGNIN_URL}`, user);
