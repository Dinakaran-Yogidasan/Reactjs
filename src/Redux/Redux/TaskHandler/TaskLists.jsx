import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "./Action";

const TaskLists = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <h3>Your tasks:</h3>
      <ul className="tasks">
        {tasks.map((task) => (
          <li className="task" key={task.id}>
            {task.text}
            <button
              className="delete-btn"
              onClick={() => handleDelete(task.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskLists;
