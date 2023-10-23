import React from "react";
import { ColorContext, NameContext } from "../App";

const ComponentC = () => {
  return (
    <div>
      <h3>Component C</h3>
      <NameContext.Consumer>
        {(name) => {
          return (
            <>
              <ColorContext.Consumer>
                {(color) => (
                  <div>
                    <p>color :{color}</p>
                    <div>name : {name}</div>
                  </div>
                )}
              </ColorContext.Consumer>
            </>
          );
        }}
      </NameContext.Consumer>
    </div>
  );
};

export default ComponentC;
