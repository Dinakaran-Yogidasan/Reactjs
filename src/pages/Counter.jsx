import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counterReducer = useSelector((state) => state.counterReducer);
  const handleIncrease = () => {
    dispatch({ type: "increase_count" });
  };
  const handleDecrease = () => {
    dispatch({ type: "decrease_count" });
  };
  return (
    <div>
      {counterReducer.counter}
      <button
        type="submit"
        onClick={handleIncrease}
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      >
        Increase
      </button>
      <button
        type="submit"
        onClick={handleDecrease}
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;
