import React, { useState } from "react";

const Forms = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleChangeFirstName = (e) => {
    setUser({ ...user, firstName: e.target.value });
  };
  const handleChangeLastName = (e) => {
    setUser({ ...user, lastName: e.target.value });
  };
  const handleChangeEmailName = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (user.firstName && user.lastName && user.email) {
      setValid(true);
    }
    // setUser({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    // });

    setUser((user) => ({ ...user, firstName: "", lastName: "", email: "" }));

    console.log(user);
    setSubmitted(true);
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        {submitted && valid ? <b>Thanks For Submit</b> : null}
        <input
          type="text"
          placeholder="FirstName"
          value={user.firstName}
          onChange={handleChangeFirstName}
        />
        {submitted && !user.firstName ? (
          <span>Please enter firstName</span>
        ) : null}
        <br />
        <input
          type="text"
          placeholder="LastName"
          value={user.lastName}
          onChange={handleChangeLastName}
        />
        {submitted && !user.lastName ? (
          <span>Please enter lastName</span>
        ) : null}

        <br />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChangeEmailName}
        />
        {submitted && !user.email ? <span>Please enter email</span> : null}

        <br />
        <button onClick={handleSumbit}>Register</button>
        <p>
          <li>{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.email}</li>
        </p>
      </form>
    </div>
  );
};

export default Forms;
