// // // import { combineReducers, createStore } from "redux";

import { legacy_createStore as createStore } from "redux";
import taskReducer from "./Redux/TaskHandler/taskReducer";
// // // const BUY_CAKE = "BUY_CAKE";
// // // const BUY_ICE = "BUY_ICE";

// // // const buyCake = () => {
// // //   return {
// // //     type: BUY_CAKE,
// // //   };
// // // };

// // // const buyIce = () => {
// // //   return {
// // //     type: BUY_ICE,
// // //   };
// // // };

// // // // const initialState = {
// // // //   numOfCake: 10,
// // // //   numberOfIce: 20,
// // // // };

// // // const initialStateOfCake = {
// // //   numOfCake: 10,
// // // };

// // // const cakeReducer = (state = initialStateOfCake, action) => {
// // //   switch (action.type) {
// // //     case "BUY_CAKE":
// // //       return { ...state, numOfCake: state.numOfCake + 100 };
// // //     default:
// // //       return state;
// // //   }
// // // };
// // // const initialStateOfIce = {
// // //   numberOfIce: 20,
// // // };

// // // const iceReducer = (state = initialStateOfIce, action) => {
// // //   switch (action.type) {
// // //     case "BUY_ICE":
// // //       return { ...state, numberOfIce: state.numberOfIce + 100 };
// // //     default:
// // //       return state;
// // //   }
// // // };

// // // // (previousState,action)=>newState.
// // // // const rootReducer = (state = initialState, action) => {
// // // //   switch (action.type) {
// // // //     case "BUY_CAKE":
// // // //       return { ...state, numOfCake: state.numOfCake + 100 };
// // // //     case "BUY_ICE":
// // // //       return { ...state, numberOfIce: state.numberOfIce + 10 };
// // // //     default:
// // // //       return state;
// // // //   }
// // // // };

// // // const rootReducer = combineReducers({
// // //   cake: cakeReducer,
// // //   ice: iceReducer,
// // //   // data: dataReducer,
// // // });

// // // export const store = createStore(rootReducer);
// // // console.log("Initial State", store.getState());
// // // const unsubscribe = store.subscribe(() =>
// // //   console.log("Update state", store.getState())
// // // );
// // // store.dispatch(buyCake());
// // // store.dispatch(buyIce());
// // // unsubscribe();
// // // unsubscribe();

// // // /**
// // //  * const ADD_CART="ADD_CART"
// // //  * function addCart (){
// // //  * return {
// // //  * type:ADD_CART,
// // //  * price:"Price of the Product"}
// // //  * }
// // //  *
// // //  */

// // import { applyMiddleware, createStore } from "redux";
// // import thunkMiddleware from "redux-thunk";
// // import axios from "axios";

// // const initialStateData = {
// //   loading: false,
// //   users: [],
// //   error: "",
// // };

// // const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
// // const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
// // const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// // const fetchUserRequest = () => {
// //   return {
// //     type: FETCH_USERS_REQUEST,
// //   };
// // };

// // const fetchUserSuccess = (users) => {
// //   return {
// //     type: FETCH_USERS_SUCCESS,
// //     payload: users,
// //   };
// // };

// // const fetchUserFailure = (error) => {
// //   return {
// //     type: FETCH_USERS_FAILURE,
// //     payload: error,
// //   };
// // };

// // const fetchUsers = () => {
// //   return function (dispatch) {
// //     dispatch(fetchUserRequest());
// //     axios
// //       .get("https://jsonplaceholder.typicode.com/users")
// //       .then((response) => {
// //         // response.data is in array of users
// //         const users = response.data.map((user) => user.username);
// //         dispatch(fetchUserSuccess(users));
// //       })
// //       .catch((error) => {
// //         // error.message
// //         dispatch(fetchUserFailure(error.message));
// //       });
// //   };
// // };
// // const dataReducer = (state = initialStateData, action) => {
// //   console.log(action.type);
// //   switch (action.type) {
// //     case FETCH_USERS_REQUEST:
// //       return {
// //         ...state,
// //         loading: true,
// //       };
// //     case FETCH_USERS_SUCCESS:
// //       return {
// //         loading: false,
// //         users: action.payload,
// //         error: "",
// //       };
// //     case FETCH_USERS_FAILURE:
// //       return {
// //         loading: false,
// //         users: [],
// //         error: action.payload,
// //       };

// //     default:
// //       return state;
// //   }
// // };

// // export const store = createStore(dataReducer, applyMiddleware(thunkMiddleware));

// // console.log("Initial State", store.getState());
// // // store.dispatch(fetehUsers());
// // store.subscribe(() => {
// //   console.log(store.getState());
// // });
// // store.dispatch(fetchUsers());

// // // const initialState = {
// // //   loading: false,
// // //   users: [],
// // //   error: "",
// // // };

// // // const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
// // // const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
// // // const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// // // const fetchUsersRequest = () => {
// // //   return {
// // //     type: FETCH_USERS_REQUEST,
// // //   };
// // // };

// // // const fetchUsersSuccess = (users) => {
// // //   return {
// // //     type: FETCH_USERS_SUCCESS,
// // //     payload: users,
// // //   };
// // // };

// // // const fetchUsersFailure = (error) => {
// // //   return {
// // //     type: FETCH_USERS_FAILURE,
// // //     payload: error,
// // //   };
// // // };

// // // const fetchUsers = () => {
// // //   return function (dispatch) {
// // //     dispatch(fetchUsersRequest());
// // //     axios
// // //       .get("https://jsonplaceholder.typicode.com/users")
// // //       .then((response) => {
// // //         // response.data is the users
// // //         const users = response.data.map((user) => user.id);
// // //         dispatch(fetchUsersSuccess(users));
// // //       })
// // //       .catch((error) => {
// // //         // error.message is the error message
// // //         dispatch(fetchUsersFailure(error.message));
// // //       });
// // //   };
// // // };

// // // const reducer = (state = initialState, action) => {
// // //   console.log(action.type);
// // //   switch (action.type) {
// // //     case FETCH_USERS_REQUEST:
// // //       return {
// // //         ...state,
// // //         loading: true,
// // //       };
// // //     case FETCH_USERS_SUCCESS:
// // //       return {
// // //         loading: false,
// // //         users: action.payload,
// // //         error: "",
// // //       };
// // //     case FETCH_USERS_FAILURE:
// // //       return {
// // //         loading: false,
// // //         users: [],
// // //         error: action.payload,
// // //       };
// // //     default:
// // //       return state;
// // //   }
// // // };

// // // const store = createStore(reducer, applyMiddleware(thunkMiddleware));
// // // store.subscribe(() => {
// // //   console.log(store.getState());
// // // });
// // // store.dispatch(fetchUsers());

// import { createStore } from "redux";
// import rootReducer from "./Redux/Reducers";

// // const initialState = {
// //   counter: 0,
// // };

// // const INC = "INC";
// // // const DEC = "DEC";
// // const counterReducer = (state = { counter: 0 }, action) => {
// //   switch (action.type) {
// //     case "INC":
// //       return {
// //         ...state,
// //         counter: state.counter +1,
// //       };

// //     case "DEC":
// //       return {
// //         ...state,
// //         counter: state.counter - 1,
// //       };

// //     default:
// //       return state;
// //   }
// // };
// // const store = createStore(counterReducer);
// // export default store;

// import { configureStore, createSlice } from "@reduxjs/toolkit";
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { counter: 0 },
//   reducers: {
//     incrememt(state, action) {
//         state.counter ++;
//     },
//     decrememt(state = { counter: 0 }, action) {
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     },
//   },
// });
// export const action = counterSlice.actions;

// const store = configureStore({
//   reducer: counterSlice.reducer,
// });
// export default store;


const store = createStore(taskReducer);
export default store;
