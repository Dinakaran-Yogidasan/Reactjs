import React, { useContext } from "react";
import { CounterContext } from "../../App";
import { Button, ButtonGroup, Typography } from "@mui/material";

const ComponentA = () => {
  const counterContext = useContext(CounterContext);
  console.log(counterContext);
  const { counter, dispatch } = counterContext;
  return (
    <div>
      <h1>Component A</h1>
      <Typography>New Counter{counter}</Typography>
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

    </div>
  );
};

export default ComponentA;
