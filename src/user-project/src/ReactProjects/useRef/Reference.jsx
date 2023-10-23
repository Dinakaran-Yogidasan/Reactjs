import React, { useRef, useState } from "react";
import Component from "./Component";

const Reference = () => {
  const inputRef = useRef();
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Focus on input field</h1>
      <input type="text" name="email" id="email" ref={inputRef} /> <br />
      <input type="text" /> <br />
      <input type="text" /> <br />
      <button type="button" onClick={() => inputRef.current.focus()}>
        Focus
      </button>
      <button onClick={()=>setShow(!show)}>Toogle show</button>
      <h1>Unmount Component</h1>
      {show && <Component />}
      <br />
    </div>
  );
};

export default Reference;
