import React from 'react';
import './styles/ToDoListItem.css';

class ToDoListItem extends React.Component {

  render() {

    const {deleteItem, toggleImportance, task, toggleDone } = this.props;

    let titleClassName = 'todo-list-item-title';

    if (task.done) {
      titleClassName += ' done';
    }

    if (task.important) {
      titleClassName += ' important'
    }

    return (
      <span className='todo-list-item'>

        <span onClick={() => toggleDone(task.id)} className={titleClassName}>
          {task.title}
        </span>

        <span className='todo=list-item-buttons'>
          <button className='btn btn-outline-success' onClick={() => toggleImportance(task.id)}>
            <i className='fa fa-exclamation' />
          </button>

          <button className='btn btn-outline-danger' onClick={() => deleteItem(task.id)}>
            <i className='fa fa-trash-o' />
          </button>
        </span>
      </span>
    )
  }
}



export default ToDoListItem;