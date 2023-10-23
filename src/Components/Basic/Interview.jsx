import { current } from "@reduxjs/toolkit";
import { useEffect, useState, useRef } from "react";

const Interview = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
    console.log(inputRef);
  };
  useEffect(() => {
    console.log(count);
    // setTimeout(() => {
    //   setCount((preCount) => preCount + 1);
    // }, 1000);
  }, [count]);

  const handleIncrease = () => {
    setCount((preCount) => preCount + 1);
  };
  const handleDecrease = () => {
    if (count !== 0) {
      setCount((preCount) => preCount - 1);
    }
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <div>Counter {count}</div>
      <button onClick={handleIncrease}>ADD</button>
      <button onClick={handleDecrease}>SUB</button>
      <button onClick={handleReset}>Reset</button>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
};

export default Interview;
