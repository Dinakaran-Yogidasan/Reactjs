import React, { useId, useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodo from "./EditTodo";
uuidv4();

const TodoWraper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  //   const toggleComplete = (id) => {
  //     setTodos(
  //       todos.map((todo) =>
  //         todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //       )
  //     );
  //   };
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div>
      <h1>Get things Done</h1>
      <TodoForm addTodo={addTodo} />
      {/* {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))} */}
      {todos.map((todo, id) =>
        todo.isEditing ? (
          <EditTodo editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            editTodo={editTodo}

            // toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};

export default TodoWraper;
