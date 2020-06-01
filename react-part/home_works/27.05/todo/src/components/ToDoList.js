import React from "react";
import TodoListItem from './ToDoListItem';
import "./styles/ToDoList.css";

const ToDoList = ({ tasks }) => {
  const elements = tasks.map((task) => {
    const style = task.important ? { color: "red" } : {};
    return (
      <li className="list-group-item todo-list-item" key={task.id} style={style}>
        <TodoListItem task={task} />
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default ToDoList;
