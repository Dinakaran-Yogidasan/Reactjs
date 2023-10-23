import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What is the task today"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit">ADD TASK</button>
      </form>
    </div>
  );
};

export default TodoForm;
