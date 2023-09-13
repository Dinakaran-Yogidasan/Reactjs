import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/login";
import counterReducer from "./reducer/counter";

const storeToLoacalStorage = ({ getState }) => {
  console.log(getState());
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("redux_store", JSON.stringify(getState()));
    return result;
  };
};

const hydrateStore = () => {
  if (localStorage.getItem("redux_store") !== null) {
    return JSON.parse(localStorage.getItem("redux_store"));
  }
};

const store = configureStore({
  reducer: {
    loginReducer,
    counterReducer,
  },
  devTools: true,
  preloadedState: hydrateStore(),
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(storeToLoacalStorage),
});
store.subscribe(() => console.log("Loaded a Redux Store", store.getState()));
export default store;
