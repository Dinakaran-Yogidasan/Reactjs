import React, { useState } from "react";

const EditTodo = ({ editTodo, task }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Update task"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTodo;
