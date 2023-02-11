import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeActiveFilter, clearCompleted, selectTodos } from "../redux/todos/todosSlice";

const ContentFooter = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectTodos);
  const itemsLeft = items.filter((item) => !item.completed).length;

  const activeFilter = useSelector((state) => state.todos.activeFilter);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {itemsLeft} item{itemsLeft > 1 && "s"} left
        </strong>
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={activeFilter === "all" ? "selected" : undefined}
            onClick={() => dispatch(changeActiveFilter("all"))}>
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "active" ? "selected" : undefined}
            onClick={() => dispatch(changeActiveFilter("active"))}>
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "completed" ? "selected" : undefined}
            onClick={() => dispatch(changeActiveFilter("completed"))}>
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={() => dispatch(clearCompleted())}>
        Clear completed
      </button>
    </footer>
  );
};

export default ContentFooter;
