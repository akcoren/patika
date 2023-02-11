import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, destroyTodo, selectFilteredTodos } from "../redux/todos/todosSlice";

let filtered = [];

const TodoList = () => {
  const dispatch = useDispatch();
  const filteredItems = useSelector(selectFilteredTodos);

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(destroyTodo(id));
    }
  };

  return (
    <ul className="todo-list">
      {filteredItems.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : undefined}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => dispatch(toggleTodo({ id: item.id }))}
              checked={item.completed}
            />
            <label>{item.title}</label>
            <button className="destroy" onClick={() => handleDestroy(item.id)}></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
