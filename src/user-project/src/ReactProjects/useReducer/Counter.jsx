import { Button, ButtonGroup, Typography } from "@mui/material";
import React, { useReducer, useState } from "react";
const initialState = {
  newCounter: 10,
  counter: 20,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "incrememnt":
      return {
        ...state,
        newCounter: state.newCounter + 1,
      };
    case "decrememnt":
      return {
        ...state,
        newCounter: state.newCounter - 1,
      };
    case "incrememntValue":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "decrememntValue":
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const Counter = () => {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  //   const handleIncrease = () => {
  //     setCount((count) => count + 1);
  //   };
  //   const handleDecrease = () => {
  //     setCount((count) => count - 1);
  //   };
  return (
    <>
      {/* <Typography>{count}</Typography> */}
      {/* <Typography>{state}</Typography> */}
      <Typography>New Counter{state.newCounter}</Typography>
      <Typography> Counter{state.counter}</Typography>
      {/* <ButtonGroup>
        <Button variant="contained" color="success" onClick={handleIncrease}>
          ADD
        </Button>
        <Button variant="contained" color="error" onClick={handleDecrease}>
          DELETE
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setCount(0)}
        >
          RESET
        </Button>
      </ButtonGroup> */}
      <ButtonGroup>
        <Button
          variant="contained"
          color="success"
          onClick={() => dispatch({ type: "incrememnt" })}
        >
          ADD
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch({ type: "decrememnt" })}
        >
          DELETE
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch({ type: "reset" })}
        >
          RESET
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button
          variant="contained"
          color="success"
          onClick={() => dispatch({ type: "incrememntValue", payload: 70 })}
        >
          ADD
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch({ type: "decrememntValue", payload: 70 })}
        >
          DELETE
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch({ type: "reset" })}
        >
          RESET
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Counter;
