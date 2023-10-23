import React from "react";

const Count = ({ count, handleClick }) => {
  
    return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Count;
