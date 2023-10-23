import axios from "axios";
import React, { useEffect, useState } from "react";

const RestApi = () => {
  const [getPost, setGetPost] = useState([]);
  const [post, setPost] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setGetPost(response.data.users);
      })
      .then(console.log(getPost));
  }, []);

  const PostData = () => {
    axios
      .post("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        firstName: post.firstName,
        lastName: post.lastName,
        age: post.age,
        /* other user data */
      })
      .then((response) => {
        setPost(response.data);
      })
      .then(console.log(post));
  };
  const UpdateData = (id) => {
    axios
      .put(`https://dummyjson.com/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        firstName: post.firstName,
        lastName: post.lastName,
        age: post.age,
        /* other user data */
      })
      .then((response) => {
        setPost(response.data);
      })
      .then(console.log(post));
  };
  const DeleteData = (id) => {
    axios
      .delete(`https://dummyjson.com/users/${id}`, {
        method: "DELETE",
      })
      .then((response) => {
        setPost(response.data);
      })
      .then(console.log(post));
  };
  const SearchData = (id) => {
    axios
      .get(`https://dummyjson.com/users/search?q=${post.firstName}`, {
        method: "DELETE",
      })
      .then((response) => {
        setPost(response.data);
      })
      .then(console.log(post));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((post) => ({
      ...post,
      [name]: value,
    }));
  };

  return (
    <>
      {/* POST , GET, PUT OR PATCH, DELETE */}

      <h1>API REQUEST</h1>
      <input
        type="text"
        onChange={handleChange}
        name="firstName"
        placeholder="Search"
        value={post.firstName}
      />
      <button type="button" onClick={SearchData}>
        SEARCH
      </button>
      <input
        type="text"
        onChange={handleChange}
        name="firstName"
        placeholder="FirstName"
        value={post.firstName}
      />
      <input
        type="text"
        onChange={handleChange}
        name="lastName"
        placeholder="LastName"
        value={post.lastName}
      />
      <input
        type="text"
        onChange={handleChange}
        name="age"
        placeholder="age"
        value={post.age}
      />
      <button onClick={PostData}>POST DATA</button>
      {getPost.map((post) => (
        <div key={post.id}>
          <h5>{post.id}</h5>
          <h5>{post.firstName}</h5>
          <button onClick={() => UpdateData(post.id)}>UPDATE DATA</button>
          <button onClick={() => DeleteData(post.id)}>DELETE DATA</button>
        </div>
      ))}
    </>
  );
};
export default RestApi;
