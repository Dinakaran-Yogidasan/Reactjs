import React, { useState } from "react";

const ArrayMethods = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
  ]);
  let nextId = 0;

  const handleSubmit = () => {
    setList([...list, { id: nextId++, name: name }]);
    setName("");
  };

  return (
    <div>
      <h1>Array methods</h1>
      {name}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <div>
        {list.map((item) => (
          <div key={item.id}>
            <li>{item.name}</li>
            <button
              onClick={() => {
                setList(list.filter((a) => a.id !== list.id));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrayMethods;
