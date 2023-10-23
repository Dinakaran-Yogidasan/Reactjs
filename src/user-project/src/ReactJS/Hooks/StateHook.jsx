import React, { useEffect, useState } from "react";
import { useRef } from "react";

const StateHook = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [count, setCount] = useState(0);
  const [countValue, setCountValue] = useState();

  const inputRef = useRef("");

  useEffect(() => {
    console.log("First Render");
    return () => {
      console.log("Clean Up Function");
    };
  }, [count]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((preState) => ({
      ...preState,
      [name]: value,
    }));
    console.log(inputRef.current.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(inputRef.current.valueOf);
  };
  return (
    <>
      <h1>Use State Hook</h1>

      <input
        type="number"
        name="data"
        id="count"
        onChange={(e) => setCountValue(parseInt(e.target.value))}
        ref={inputRef}
      />
      <button>ADD By {countValue}</button>
      <button onClick={() => setCount((preCount) => preCount + countValue)}>
        +
      </button>
      <h1>{count}</h1>
      <h1>{countValue}</h1>
      <button onClick={() => setCount((preCount) => preCount - countValue)}>
        -
      </button>
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>LOGIN</button>
      <li>Email{user.email}</li>
      <li>Password{user.password}</li>
      <li>firstName{user.firstName}</li>
      <li>lastName{user.lastName}</li>
    </>
  );
};
export default StateHook;
