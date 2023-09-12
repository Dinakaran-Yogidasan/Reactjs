import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/login";
import counterReducer from "./reducer/counter";

const store = configureStore({
  reducer: {
    loginReducer,
    counterReducer,
  },
  devTools: true,
});
store.subscribe(() => console.log("Loaded a Redux Store", store.getState()));
export default store;
