import React, { useEffect } from "react";
let renderCount = 0;

const MemoValue = ({ first }) => {
  useEffect(() => {
    renderCount++;
    console.log(renderCount, first);

    return () => {
      console.log("Clean Up");
    };
  });

  return (
    <div>
      <h1>UseMemo</h1>
      <b>Component A Render : {renderCount}</b><br/>
      <b>Component A Count : {first}</b>
    </div>
  );
};

export default MemoValue;
