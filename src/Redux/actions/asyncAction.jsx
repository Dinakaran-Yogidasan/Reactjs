import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const initialStateData = {
  loading: true,
  users: [],
  error: "",
};

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

const dataReducer = (state = initialStateData, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: true,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      break;
  }
};

const ftechUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    fetch
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is in array of users
        const users = response.data.map((user) => user.name);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        // error.message
        dispatch(fetchUserFailure(error.message));
      });
  };
};

export const store = createStore(dataReducer, applyMiddleware(thunk));

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Update state", store.getState())
);
store.dispatch(fetchUserRequest());
store.dispatch(fetchUserSuccess());
store.dispatch(fetchUserFailure());
unsubscribe();
unsubscribe();
