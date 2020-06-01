import React from 'react';
import ToDoListItem from './ToDoListItem';
import './styles/ToDoList.css';

const ToDoList = ({ tasks, deleteItem }) => {

  const elements = tasks.map((task) => {
    return (<li className='list-group-item' key={task.id}>
      <ToDoListItem task={task} deleteItem={deleteItem}/>
    </li>)
  })

  return (
    <ul className='list-group todo-list'>
      {elements}
    </ul>
  )
}

export default ToDoList;