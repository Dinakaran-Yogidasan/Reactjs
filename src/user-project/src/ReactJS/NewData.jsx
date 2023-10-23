import React, { useState } from "react";

let nextId = 1;

const NewData = () => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = () => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        name: name,
      },
    ]);
    setName("");
  };

  const handleReverse = (second) => {
    const nextList = [...todos];
    nextList.reverse();
    setTodos(nextList);
  };

  console.log(todos);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>ADD</button>
      <button onClick={handleReverse}>REVERSE</button>

      <div>
        {todos.map((todo) => (
          <ul key={todo.id}>
            <li>{todo.name}</li>
            <button
              onClick={() => setTodos(todos.filter((to) => to.id !== todo.id))}
            >
              DELETE
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default NewData;
