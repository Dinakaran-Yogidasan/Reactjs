import { useState } from "react";

const Home = () => {
  const [show, setShow] = useState(true);
  const [textValue, setTextValue] = useState("Dinakaran");

  const handleClick = () => {
    setShow(!show);
  };

  /* 
Rendering Area --> Only Once While refresh
Re-Render--> Takes the updated values of variable in JS
*/

  return (
    <div>
      {/* Conditional Rendering */}
      {show && <h1>Hacker</h1>}
      {show ? <h1>Header Is Visible </h1> : <h1>Header is Not Visible </h1>}
      <button
        type="button"
        onClick={handleClick}
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      >
        {show ? "Show" : "Hide"} Header
      </button>
      <p>{textValue}</p>
      <button onClick={() => setTextValue("Danny")}>Change Name</button>
    </div>
  );
};

export default Home;
