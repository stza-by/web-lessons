import React from 'react';
import ToDoListItem from './ToDoListItem';
import './styles/ToDoList.css';

const ToDoList = ({ deleteItem, tasks, toggleImportance, toggleDone }) => {

  const elements = tasks.map((task) => {
    return (
      <li className='list-group-item' key={task.id}>
        <ToDoListItem
          task={task}
          deleteItem={deleteItem}
          toggleImportance={toggleImportance}
          toggleDone={toggleDone} />
      </li>)
  })

  return (
    <ul className='list-group todo-list'>
      {elements}
    </ul>
  )
}

export default ToDoList;