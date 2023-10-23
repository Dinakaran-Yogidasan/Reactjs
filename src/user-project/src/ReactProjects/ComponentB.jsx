import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { ColorContext, NameContext } from "../App";

const ComponentB = () => {
  const userName = useContext(NameContext);
  const colorData = useContext(ColorContext);
  console.log(userName);
  return (
    <div>
      <h2>
        Component B {userName} Color : {colorData}
      </h2>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
