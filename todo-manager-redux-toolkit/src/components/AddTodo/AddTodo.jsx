import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="add-todo-container">
      <form onSubmit={addTodoHandler} className="add-todo-form">
        <input
          type="text"
          placeholder="Enter a todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="add-todo-input"
        />
        <button type="submit" className="add-todo-button">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;