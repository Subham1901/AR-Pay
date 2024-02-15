import { combineReducers } from "redux";
import { actionReducer, authReducer } from "./authReducer";
import { serviceReducer } from "./serviceReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  action: actionReducer,
  service: serviceReducer,
});
