import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./Action";

const Tasks = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const addNewTasks = () => {
    const task = inputRef.current.value.trim();
    if (task !== "") {
      dispatch(addTodo(task));
      inputRef.current.value = "";
    }
  };
  return (
    <div className="task-component">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add task here..."
          ref={inputRef}
          className="taskInput"
        />
        <button onClick={addNewTasks}>Add task</button>
      </div>
    </div>
  );
};

export default Tasks;
