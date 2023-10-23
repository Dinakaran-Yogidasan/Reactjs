import { useState } from "react";

const CounterApp = () => {
  const [count, setCounter] = useState(0);
  const [color, setColor] = useState("black");

  const handleIncrease = () => {
    setCounter((preCount) => preCount + 1);
  };

  const handleDecrease = () => {
    if (count !== 0) {
      setCounter((preCount) => preCount - 1);
    }
  };

  const handleClear = () => {
    setCounter(0);
  };

  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };


  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleClear}>Clear</button>
      <div
        style={{
          backgroundColor: color,
          height: "150px",
          width: "150px",
          margin: "50px",
        }}
      >
        Color
      </div>
      <label htmlFor="color">Change Color</label>
      <input
        type="color"
        name="color"
        id="color"
        onChange={handleChangeColor}
      />
      <br />
      <div>
        <br />
        <label htmlFor="input-email-label" className="sr-only">
          Todo
        </label>
        <input
          type="text"
          id="input-email-label"
          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          placeholder="Create TodoList"
        />
        <button>Todo</button>
        
      </div>
    </>
  );
};

export default CounterApp;
