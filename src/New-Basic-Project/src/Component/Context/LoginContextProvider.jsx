import React, { createContext, useContext, useRef } from "react";
export const LoginContext = createContext(0);

const LoginContextProvider = ({ children }) => {
//   const [userDetails] = useRef("Dinakaran");
const login = useContext(LoginContext);

  return (
    <LoginContext.Provider value={login}>
      <h1>LoginContextProvider</h1>
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
