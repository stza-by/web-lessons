import React from 'react';

import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import ToDoList from './ToDoList';
import AddTaskForm from './AddTaskForm';

import './styles/App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: 'Изучить JS', important: true, id: 1, done: true },
        { title: 'Изучить React', important: true, id: 2, done: false },
        { title: 'Заварить чай', important: false, id: 3, done: true },
      ]
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }


  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  deleteItem = (id) => {
    this.setState((state) => {

      const newTasks = state.tasks.filter(task => task.id !== id);

      return { tasks: newTasks }
    })
  }

  addNewTask = (title, id) => {
    this.setState((state) => {
      const newTasks = [...state.tasks];
      newTasks.push({ title, id, important: false, done: false })

      return { tasks: newTasks }
    })
  }

  render() {
    return (
      <div className='todo-app'>
        <AppHeader className='abs' />
        <SearchPanel />
        <ToDoList
          tasks={this.state.tasks}
          deleteItem={this.deleteItem} />
          <AddTaskForm addNewTask={this.addNewTask}/>
      </div>
    )
  }

}

export default App;