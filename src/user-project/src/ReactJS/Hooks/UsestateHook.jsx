import React, { useRef, useState } from "react";

let nums = [1, 60, 70, -5, 32, 51];
let filterNumber = nums.filter((number) => number > 50);
console.log(filterNumber);

var a = 'static';

function f1() {
   console.log(a);
   f2();
}

function f2() {
   var a = 'dynamic';
   f1();
}

// f2();
console.dir(f1);
console.dir(f2);// CLOSURES 
console.log(f1);




let count = 0;
console.log(count++);
console.log(++count);

const UsestateHook = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    setTimeout(() => {
      console.log(userData);

      
    }, 2000);
  };

  return (
    <div>
      <h1>UsestateHook</h1>
      <input
        type="text"
        value={userData.email}
        onChange={handleChange}
        ref={emailRef}
        name="email"
      />
      <input
        type="text"
        value={userData.password}
        onChange={handleChange}
        ref={passwordRef}
        name="password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default UsestateHook;
