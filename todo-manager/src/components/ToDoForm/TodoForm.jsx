import { useState } from "react";
import { useToDo } from "../../contexts";
import "./todoForm.css";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useToDo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) {
      return;
    }
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form
      className="todo-form"
      onSubmit={add}
    >
      <input
        type="text"
        placeholder="Write Todo..."
        className="todo-input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="todo-submit-button">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
