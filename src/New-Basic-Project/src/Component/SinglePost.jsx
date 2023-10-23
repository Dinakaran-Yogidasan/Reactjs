import React, { useContext } from "react";
import { LoginContext } from "../App";

const SinglePost = ({children}) => {
  const login = useContext(LoginContext);
  console.log(login);
  return (
    <div>
        <h1>SinglePost</h1>
        {login}
        {children}
    </div>
  );
};

export default SinglePost;
