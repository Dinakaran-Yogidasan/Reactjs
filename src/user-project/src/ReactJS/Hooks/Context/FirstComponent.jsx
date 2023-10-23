import React, { useContext } from "react";
import { UserData } from "./GlobalContext";

const FirstComponent = () => {
  const {name} = useContext(UserData);

  return (
    <div>
      <h1>Name : {name}</h1>
    </div>
  );
};

export default FirstComponent;
