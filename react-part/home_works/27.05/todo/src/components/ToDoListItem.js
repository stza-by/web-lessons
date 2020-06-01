import React from "react";
import "./styles/TodoListItem.css";

const ToDoListItem = ({ task }) => {
  return (
    <span className="todo-task">
      <span>{task.title}</span>

      <span>
        <button className="btn btn-outline-success">
          <i className="fa fa-exclamation" />
        </button>

        <button className="btn btn-outline-danger">
          <i className="fa fa-trash-o" />
        </button>

      </span>
    </span>
  );
};

export default ToDoListItem;