import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <b>{user.email}</b>
        <p>{JSON.stringify(user, null, 2)}</p>
      </div>
    )
  );
};

export default Profile;
