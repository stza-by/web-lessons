import React from 'react';
import './styles/ToDoListItem.css';


class ToDoListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.task.id,
      title: props.task.title,
      important: props.task.important,
      done: props.task.done
    }
    this.onClickImportant2 = this.onClickImportant2.bind(this);
  }


  onClickDone = () => {
    this.setState((state) => {
      return {done : !state.done}
    })
  }

  onClickImportant2() {
    // this.setState({title: 'Clicled'});

    this.setState((state) => {
      return {important : !state.important}
    })
  }

  render() {

    const {deleteItem} = this.props;

    let titleClassName = 'todo-list-item-title';

    if (this.state.done) {
      titleClassName += ' done';
    }

    if (this.state.important) {
      titleClassName += ' important'
    }

    return (
      <span className='todo-list-item'>

        <span onClick={this.onClickDone} className={titleClassName}>
          {this.state.title}
        </span>


        <span className='todo=list-item-buttons'>
          <button className='btn btn-outline-success' onClick={this.onClickImportant2}>
            <i className='fa fa-exclamation' />
          </button>

          <button className='btn btn-outline-danger' onClick={() => deleteItem(this.state.id)}>
            <i className='fa fa-trash-o' />
          </button>
        </span>
      </span>
    )
  }
}



export default ToDoListItem;