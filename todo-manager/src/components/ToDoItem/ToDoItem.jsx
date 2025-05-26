import { useState } from "react";
import { useToDo } from "../../contexts";
import "./todoItem.css";

function TodoItem({ todo }) {
  const { updateTodo, removeTodo, completeTodo } = useToDo();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const editTodo = () => {
    if (!todoMsg) {
      return;
    }
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };
  const toggleCompleted = () => {
    completeTodo(todo.id);
  };
  const deleteTodo = (id) => {
    removeTodo(id);
  };
  return (
    <div
      className={`todo-item ${
        todo.completed ? "todo-item-completed" : "todo-item-incomplete"
      }`}
    >
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`todo-text-input ${
          isTodoEditable
            ? "todo-text-input-editable"
            : "todo-text-input-readonly"
        } ${todo.completed ? "todo-text-completed" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="todo-button"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button className="todo-button" onClick={() => deleteTodo(todo.id)}>
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
