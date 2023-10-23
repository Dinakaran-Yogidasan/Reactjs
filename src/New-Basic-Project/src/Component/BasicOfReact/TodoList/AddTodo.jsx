import React, { useState } from "react";

const AddTodo = ({ handleAddTodo }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = () => {
    setTitle("");
    handleAddTodo(title);
    console.log(title);
  };
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        ADD
      </button>
    </div>
  );
};

export default AddTodo;
