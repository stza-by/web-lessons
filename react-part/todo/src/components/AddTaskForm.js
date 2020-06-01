import React from 'react';


export default class AddTaskForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  onChangeHandler = (event) => {
    this.setState({ title: event.target.value })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const id = Math.random;

    this.props.addNewTask(title, id);
  }

  render() {

    const { addNewTask } = this.props;

    return (
      <form className='form' onSubmit={this.onSubmitHandler}>
        <input
          onChange={this.onChangeHandler}
          placeholder='Имя задачи...'
          type='text'
          className='form-control mt-3' />
        <button
          type='submit'
          className='btn btn-outline-primary w-100 mt-3'>
          Добавить новый элемент
      </button>
      </form>)

  }
}

