import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounting State");
    setCount(count + 1);
  }, []);

  const incrementCounter = () => {
    // setCount((preCount) => preCount + 1);
    setCount(count + 1);
  };
  const decrementCounter = () => {
    setCount(count - 1);
  };
  const resetCounter = () => {
    setCount(0);
  };
  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={incrementCounter}>Add</button>
      <button onClick={decrementCounter}>Remove</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
}

export default Counter;
