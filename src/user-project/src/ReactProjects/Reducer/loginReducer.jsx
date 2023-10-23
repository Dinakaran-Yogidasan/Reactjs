const initialState = {
  loggedIn: false,
};

const loginReducer = (state = initialState, action, { type, payload }) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, loggedIn: !state.loggedIn, ...payload };
    
    default:
      return state;
  }
};
export default loginReducer;
