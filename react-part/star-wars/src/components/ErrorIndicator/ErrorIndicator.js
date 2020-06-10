import React from 'react'
import './ErrorIndicator.css';

export default function ErrorIndicator() {
  return (
    <div className='error-indicator'>
      <span className='head'>Упс...</span>
      <span className='body'>Что-то пошло не так. Обратитесь к разработчикам :(</span>
    </div>
  )
}
