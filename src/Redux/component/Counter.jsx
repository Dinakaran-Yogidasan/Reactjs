import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const user = useSelector((state)=>state.user)
  return (
    <div>
      <h1>Counter</h1>
    </div>
  );
};

export default Counter;
