import React from "react";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div>
      <p>{task.task}</p>
      <button onClick={() => editTodo(task.id)}>EDIT</button>
      <button onClick={() => deleteTodo(task.id)}>DELETE</button>
    </div>
  );
};

export default Todo;
