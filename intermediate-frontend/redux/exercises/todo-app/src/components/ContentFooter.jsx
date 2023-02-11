import React from "react";

const ContentFooter = () => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>2 items left</strong>
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/">Active</a>
        </li>
        <li>
          <a href="#/">Completed</a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default ContentFooter;
