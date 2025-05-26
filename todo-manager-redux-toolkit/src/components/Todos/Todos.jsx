import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateToDo, toggleComplete } from "../../features/todo/todoSlice";

function Todos() {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    // Don't allow editing of completed todos
    if (todo.completed) return;
    
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!editText.trim()) return;
    
    dispatch(updateToDo({ id: editingId, text: editText }));
    setEditingId(null);
    setEditText("");
  };

  const handleToggle = (id) => {
    // If we're editing and the user completes the todo, exit edit mode
    if (editingId === id) {
      setEditingId(null);
    }
    dispatch(toggleComplete(id));
  };

  return (
    <div className="todos-container">
      <h2 className="todos-heading">Todos</h2>
      <ul className="todos-list">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              {editingId === todo.id ? (
                <form onSubmit={handleUpdate} className="edit-form">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="edit-input"
                    autoFocus
                  />
                  <button type="submit" className="update-button">Update</button>
                  <button 
                    type="button" 
                    className="cancel-button"
                    onClick={() => setEditingId(null)}
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <div className="todo-content">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggle(todo.id)}
                      className="todo-checkbox"
                    />
                    <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                      {todo.text}
                    </span>
                  </div>
                  <div className="todo-actions">
                    {!todo.completed && (
                      <button
                        className="edit-button"
                        onClick={() => handleEdit(todo)}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      className="delete-button"
                      onClick={() => dispatch(removeTodo(todo.id))}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))
        ) : (
          <li className="no-todos">No todos yet. Add some!</li>
        )}
      </ul>
    </div>
  );
}

export default Todos;