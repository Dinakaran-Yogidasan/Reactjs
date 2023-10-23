import React, { useEffect, useState } from "react";

const EffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Initial Rendering", count);
    return () => {
      console.log("Clean Up", count);
    };
  }, [count]);

  return (
    <div>
      <h1>EffectHook</h1>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount((pre) => pre + 1)}>INCREASE</button>
      <button onClick={() => setCount((pre) => pre - 1)}>DECREASE</button>
    </div>
  );
};

export default EffectHook;
