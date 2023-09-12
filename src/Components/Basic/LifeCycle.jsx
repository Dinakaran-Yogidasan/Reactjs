import { useEffect, useState } from "react";

const LifeCycle = () => {
  const [counter, setCounter] = useState(0);

  {
    /* USEEFFECT */
    /* Mounting- Execute any set of statement only when component is mounted */
  }

  useEffect(() => {
    /* Statement will be executed only on mounting Stage */
    const interval = setInterval(() => {
      console.log("Mounting", counter);
      setCounter(counter + 1);
    }, 1000);
    console.log("Update", counter);
    return () => {
      console.log("UnMounting", counter);
      clearInterval(interval);
    };
  }, [counter]);

  const handleIncrease = () => {
    setCounter((preCount) => preCount + 1);
    console.log("Before increment", counter);
    // setCounter(count + 1);
    console.log("After increment", counter);
  };

  const handleDecrease = () => {
    if (counter !== 0) {
      setCounter((preCount) => preCount - 1);
    }
  };

  const handleClear = () => {
    setCounter(0);
  };

  return (
    <div>
      <h2 className="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-600 border-blue-600 hover:text-blue hover:border-blue mt-4 lg:mt-0">
        {counter}
      </h2>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleIncrease}
        >
          INCREASE
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDecrease}
        >
          DECREASE
        </button>
        <button
          onClick={handleClear}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default LifeCycle;
