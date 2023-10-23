import React, { useEffect, useRef, useState } from "react";

const Component = () => {
  const [first, setfirst] = useState(0);
  const componetRef = useRef(true);

  useEffect(() => {
    // componetRef.current = "true";
    // console.log(componetRef.current);
    return () => {
      componetRef.current = "false";
    };
  }, []);

  const fakeFetch = () => {
    setTimeout(() => {
      setfirst(first + 1);
    }, 2000);
  };
  return (
    <div>
      <h1 ref={componetRef}>Component :{first} </h1>
      <button onClick={fakeFetch}>Counter</button>
    </div>
  );
};

export default Component;
