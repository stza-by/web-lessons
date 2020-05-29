import React from 'react';
import './styles/ToDoList.css'

const ToDoList = ({ tasks }) => {

  const elements = tasks.map((task) => {
    const style = task.important ? { 'color': 'red' } : {}
    return (<li className='list-group-item todo-list-item'
      key={task.id}
      style={style}>

      <span>{task.title}</span>

    
      <span>
      <button className='btn btn-outline-success'>
        <i className='fa fa-exclamation' />
      </button>

      <button className='btn btn-outline-danger'>
        <i className='fa fa-trash-o' />
      </button>
    </span>
    </li>)
  })

  return (
    <ul className='list-group todo-list'>
      {elements}
    </ul>
  )
}

export default ToDoList;