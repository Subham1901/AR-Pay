import { jwtDecode } from "jwt-decode";
import { USER_LOGIN, USER_LOGOUT, USER_SIGNUP } from "./actions";
import { useDecodeToken } from "../utils/util";

export const authReducer = (
  state = {
    userAuth: {},
  },
  action
) => {
  const token = useDecodeToken(action?.payload?.user?.accessToken);
  switch (action.type) {
    case USER_SIGNUP:
      localStorage.setItem(
        "token",
        JSON.stringify({
          accessToken: action?.payload?.user?.accessToken,
          expiresIn: token?.exp,
        })
      );
      return { ...state, userAuth: action.payload };
    case USER_LOGIN:
      localStorage.setItem(
        "token",
        JSON.stringify({
          accessToken: action?.payload?.user?.accessToken,
          expiresIn: token?.exp,
        })
      );
      return { ...state, userAuth: action.payload };
    case USER_LOGOUT:
      localStorage.removeItem("token");
      return { ...state, userAuth: null };

    case "AUTH_STATE_CHANGE":
      return { ...state, userAuth: action.payload };
    default:
      return state;
  }
};

export const actionReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case "LOAD_TRUE":
      return { ...state, loading: true };
      break;
    case "LOAD_FALSE":
      return { ...state, loading: false };
      break;
    default:
      return { ...state };
      break;
  }
};
