import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  removeTodo: (id) => {},
  completeTodo: (id) => {},
});

export const useToDo = () => {
  return useContext(ToDoContext);
};
export const TodoProvider = ToDoContext.Provider;
