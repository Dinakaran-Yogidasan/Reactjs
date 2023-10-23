import React, { useEffect, useState } from "react";
import api from "../../api/api";

const UserDetails = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = async (id) => {
    try {
      const response = await api.get(`/users/${id}`);
      setUserId(response.data.products);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>User With user Id</h1>
      {
        userId
      }
    </div>
  );
};

export default UserDetails;
