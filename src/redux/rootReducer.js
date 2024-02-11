import { combineReducers } from "redux";
import { actionReducer, authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  action: actionReducer,
});
