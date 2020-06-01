import React from 'react';

import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import ToDoList from './ToDoList';

import './styles/App.css';

// React Component
const App = () => {

  const tasks = [
    {title: 'Изучить JS', important: true, id: 1},
    {title: 'Изучить React', important: true, id: 2},
    {title: 'Заварить чай', important: false, id: 3},
  ]


  return (
    <div className='todo-app'>
      <AppHeader className='abs' />
      <SearchPanel />
      <ToDoList tasks={tasks} />
    </div>
  )
}

export default App;