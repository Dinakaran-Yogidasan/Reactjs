const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action, { type, payload }) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1, ...payload };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1, ...payload };

    default:
      return state;
  }
};
export default counterReducer;
