import React, { useRef } from "react";
import { useState, useEffect } from "react";

const Project = ({ name }) => {
  const [counter, setCounter] = useState(0);
  const [toogle, setToogle] = useState(true);
  const [user, setUser] = useState("Dev");
  const countRef = useRef(0);

  function handleIncrement() {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  }

  useEffect(() => {
    console.log("Initial call ", counter);
    console.log("Initial user ", user);
    // setCounter((count) => count + 1);
  }, [counter, user, countRef]);

  const handleIncrease = () => {
    setCounter((count) => count + 1);
  };
  const handleDecrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  const handleToogle = () => {
    setToogle(!toogle);
  };

  const handleName = () => {
    setUser((name) => "Danny");
  };

  return (
    <>
      <b>{countRef.current}</b>
      <button onClick={handleIncrement}>countRef</button>
      <button onClick={handleToogle} disabled={!toogle}>Toogle</button>
      <h1>Counter : {counter}</h1>
      <h1>Name : {name}</h1>
      <b>{user}</b>
      <button onClick={handleName}>Name Change</button>
      {toogle ? (
        <>
          <button onClick={handleIncrease}>INCREASE</button>
          <button onClick={handleDecrease}>DECREASE</button>
          <button onClick={() => setCounter(0)}>RESET</button>
        </>
      ) : null}
    </>
  );
};
export default Project;
