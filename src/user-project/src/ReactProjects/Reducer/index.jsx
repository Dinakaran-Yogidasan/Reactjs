import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import loginReducer from "./loginREducer";

const reducers = combineReducers({
  counter: counterReducer,
  loggedIn: loginReducer,
});

export default reducers;
