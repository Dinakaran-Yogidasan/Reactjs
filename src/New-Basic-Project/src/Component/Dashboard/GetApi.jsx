import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../../api/api";

const GetApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetchPosts();
    getData();
  }, []);

  const getData = async () => {
    const response = await api.get("/todos");
    setData(response.data);
    console.log(response.data);
  };

  // const fetchPosts = async () => {
  //   try {
  //     const response = await api.get("/SignIn");
  //     setData(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const addData = async () => {
  //   try {
  //     const response = await api.post("/SignIn", {
  //       id: 1,
  //       username: "Fred",
  //       password: "Flintstone",
  //     });
  //     setData(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const deletePost = async (id) => {
  //   api.delete("/SiginIn", {
  //     id: 1,
  //     username: "Fred",
  //     password: "Flintstone",
  //   });
  //   setData(
  //     data.filter((post) => {
  //       return post.id !== id;
  //     })
  //   );
  // };

  return (
    <div>
      <p>
        {data.map((sigin) => (
          <div>
            <li>{sigin.username}</li>
            <li>{sigin.password}</li>
            {/* <button onClick={addData}>ADD DATA</button> */}
            {/* <button onClick={deletePost}>DELETE DATA</button> */}
          </div>
        ))}
      </p>
    </div>
  );
};

export default GetApi;
