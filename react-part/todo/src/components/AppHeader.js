import React from 'react';
import './styles/AppHeader.css';

const AppHeader = () => {

  const done = 2;
  const todo = 1;

  return (
    <div className='app-header'>
      <h1> Мой список дел</h1>
      <h2>Выполнено: {done}, Осталось: {todo}</h2>
    </div>);
}

export default AppHeader;