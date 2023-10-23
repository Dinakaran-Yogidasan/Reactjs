import React, { useContext } from "react";
import { UserData } from "./GlobalContext";

const SecondComponent = () => {
  const { setName } = useContext(UserData);

  return (
    <div>
      <button onClick={() => setName("Developer")}>Change Name</button>
    </div>
  );
};

export default SecondComponent;
