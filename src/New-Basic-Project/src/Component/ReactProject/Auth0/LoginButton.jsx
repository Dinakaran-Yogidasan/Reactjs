import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <div>
        <button onClick={() => loginWithRedirect()}>LOGIN</button>
      </div>
    )
  );
};

export default LoginButton;
