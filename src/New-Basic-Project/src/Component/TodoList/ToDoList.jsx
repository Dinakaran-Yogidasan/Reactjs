import React, { useContext, useEffect, useState } from "react";
import { TodosContext } from "../../App";

import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import GetApi from "../Dashboard/GetApi";
import api from "../../api/api";
import axios from "axios";

const ToDoList = () => {
  const { state, dispatch } = useContext(TodosContext);
  const [todoText, setTodoText] = useState("");
  const [editTodo, setEditTo] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState([]);
  const buttonTitle = editMode ? "EDIT" : "ADD";

  useEffect(() => {
    getData();
    dispatch({ type: "GET", payload: data });
  }, []);

  const getData = async () => {
    const response = await api.get("/todos");
    setData(response.data);
    console.log(response.data);
  };

  console.log(state);
  const handleSubit = async (e) => {
    e.preventDefault();
    if (editMode) {
      await axios.patch("http://localhost:8080/todos/" + editTodo.id, {
        text: todoText,
      });
      dispatch({ type: "EDIT", payload: { ...editTodo, text: todoText } });
      setEditTo(false);
      setEditMode(null);
    } else {
      
      dispatch({ type: "ADD", payload: todoText });
    }
    setTodoText("");
    console.log(todoText);
  };

  return (
    <div>
      <form onSubmit={handleSubit}>
        <input
          type="text"
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
        />
        <button onClick={handleSubit}>{buttonTitle}</button>
      </form>

      <table>
        {/* <thead>
          <tr>TO Do</tr>
          <tr>EDIT</tr>
          <tr>DELETE</tr>
        </thead> */}
        <tbody>
          {state.todos.map((todo) => (
            <div>
              <tr key={todo.id}>
                <td>{todo.text}</td>
                <td>
                  <button
                    onClick={() => {
                      setTodoText(todo.text);
                      setEditTo(true);
                      setEditMode(null);
                    }}
                  >
                    <td>EDIT</td>
                  </button>
                  <button
                    onClick={async () => {
                      await api.delete(
                        "http://localhost:8080/todos/" + todo.id
                      );
                      dispatch({ type: "DELETE", payload: todo });
                    }}
                  >
                    <td>DELETE</td>
                  </button>
                </td>
              </tr>
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;

/**
 * <div>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
          </li>
        ))}
      </div>
 */
