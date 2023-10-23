// import React, { useState } from "react";

// const StateHook = () => {
//   const [text, setText] = useState("");
//   const [checked, setChecked] = useState(false);
//   const [dropdown, setDropdown] = useState("");
//   const handleChange = (e) => {
//     setText(e.target.value);
//   };
//   const handleChecked = (e) => {
//     setChecked(e.target.checked);
//   };
//   const handleDropdown = (e) => {
//     setDropdown(e.target.value);
//   };
//   return (
//     <div>
//       <>
//         <input value={text} onChange={handleChange} />
//         <p>You typed: {text}</p>
//         <button onClick={() => setText("")}>Reset</button>
//         <input
//           type="checkbox"
//           name="check"
//           id="check"
//           checked={checked}
//           onChange={handleChecked}
//         />
//         <p>You {checked ? "Liked" : "Not Liked"}</p>
//         <select
//           name="team"
//           id="team"
//           value={dropdown}
//           onChange={handleDropdown}
//         >
//           <option value="Dinakaran">Dinakaran</option>
//           <option value="Vasanth">Vasanth</option>
//           <option value="Jagan">Jagan</option>
//           <option value="Danny">Danny</option>
//         </select>
//         <p>
//           {dropdown}
//           {dropdown ? "You select dropdown" : "Not Selected value"}
//         </p>
//       </>
//     </div>
//   );
// };

// export default StateHook;

import React, { useState } from "react";

const StateHook = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    role: "",
    email: "",
  });

  const [item, setItem] = useState([]);

  const [flag, setFlag] = useState(true);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const itemList = (e) => {
    e.preventDefault();
    setItem([...item, {}]);
    setItem("");
    console.log(item);
  };

  const itemInputChange = (e, item) => {
    const { name, value } = e.target;
    const updatedItems = [...item];
    updatedItems[item] = { ...updatedItems[item], [name]: value };
    setItem(updatedItems)
  };

  return (
    <div>
      <h1>Update with Object with one Single state</h1>
      <input onChange={() => setFlag(!flag)}>
        {flag ? console.log(flag) : console.log(flag)}
      </input>
      <form onClick={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={user.name}
          onChange={handleChange}
          name="name"
        />
        <br />
        <label htmlFor="Age">Age</label>
        <input
          type="number"
          value={user.age}
          onChange={handleChange}
          name="age"
        />
        <br />
        <label htmlFor="role">Role</label>
        <input
          type="text"
          value={user.role}
          onChange={handleChange}
          name="role"
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={user.email}
          onChange={handleChange}
          name="email"
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          User
        </button>
        <button onClick={() => setUser("")}>Reset</button>
      </form>
      {/* Array with Single useState */}
      <form onSubmit={itemList}>
        <input
          type="text"
          value={item}
          onChange={(e) => itemInputChange(e, item)}
        />
        <button onClick={itemList}>Item List</button>

        {/* {item.map((items) => (
          <ul key={items.id}>
            <li>{items.firstName}</li>
          </ul>
        ))} */}
      </form>
    </div>
  );
};

export default StateHook;
