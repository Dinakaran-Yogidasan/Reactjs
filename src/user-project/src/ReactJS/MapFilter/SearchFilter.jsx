import { Card, CardContent, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useState, useEffect } from "react";

const SearchFilter = ({ name }) => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    useName: "",
    age: "",
    hobby: "",
    date: "",
  });
  const [toogle, setToogle] = useState(true);
  const nameRef = useRef("");
  const ageRef = useRef("");
  const submit = () => {
    console.log(nameRef.current.value);
    ageRef.current.focus();
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    console.log(users);
  }, []);

  const mapDate = () => {
    // let mapArray = users.map((user) => user.id * 2);
    // let filterArray = mapArray.filter((user) => user >= 10);
    // console.log(mapArray);
    // console.log(filterArray);

    const filterData = users.filter((user) => {
      return user.id <= 5;

      //   user.name.toLowerCase().includes(search.toLowerCase());
    });
    console.log(filterData);
    setUsers(filterData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData();

    console.log(data);
  };

  const handleToogle = () => {
    setToogle(!toogle);
  };

  return (
    <div>
      <button onClick={submit}>USEREF</button>
      <h1>MAP AND FILTER {name}</h1>
      <input
        value={data.useName}
        onChange={handleChange}
        placeholder="UserName"
        name="useName"
        ref={nameRef}
      />
      <input
        value={data.age}
        onChange={handleChange}
        placeholder="Age"
        name="age"
        ref={ageRef}
      />
      <input
        value={data.hobby}
        onChange={handleChange}
        placeholder="Hobbies"
        name="hobby"
      />
      <input
        type="date"
        value={data.date}
        onChange={handleChange}
        placeholder="DOB"
        name="date"
      />
      <button onClick={handleSubmit}>GET USER DATA</button>
      <button onClick={mapDate}>ID</button>
      <button onClick={handleToogle}>Toogle</button>
      {toogle
        ? users.map((user) => (
            <Card
              sx={{ maxWidth: 600, color: "green", border: "ActiveBorder" }}
            >
              <CardContent>
                <Typography variant="h7" gutterBottom>
                  NAME: {user.name}
                </Typography>
                <Typography variant="h7" gutterBottom>
                  USERNAME: {user.username}
                </Typography>
              </CardContent>
            </Card>
          ))
        : null}
    </div>
  );
};
export default SearchFilter;
