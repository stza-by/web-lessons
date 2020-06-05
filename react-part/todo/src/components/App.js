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
      ],
      searchField: ''
    }
  }

  toggleImportance = id => {

    this.setState((state) => {
      const newTasks = state.tasks.map((task) => {
        if (task.id === id) {
          task.important = !task.important;
        }

        return task;
      })

      return { tasks: newTasks };
    })
  }

  toggleDone = id => {

    this.setState((state) => {
      const newTasks = state.tasks.map((task) => {
        if (task.id === id) {
          task.done = !task.done;
        }

        return task;
      })

      return { tasks: newTasks };
    })
  }

  changeSearchField = searchText => {
    this.setState({ searchField: searchText })
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

    const { searchField, tasks } = this.state;

    const filteredTasks = tasks.filter(task => {
      return task.title.includes(searchField) ? true : false
    })

    const completedTasks = tasks.reduce((accum, currentTasks) => {
      return currentTasks.done ? accum + 1 : accum;
    }, 0);

    return (
      <div className='todo-app'>
        <AppHeader done={completedTasks} todo={tasks.length - completedTasks} />
        <SearchPanel changeSearchField={this.changeSearchField} />
        <ToDoList
          tasks={filteredTasks}
          deleteItem={this.deleteItem}
          toggleImportance={this.toggleImportance}
          toggleDone={this.toggleDone}
        />
        <AddTaskForm addNewTask={this.addNewTask} />
      </div>
    )
  }

}

export default App;