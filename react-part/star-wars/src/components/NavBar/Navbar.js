import React from 'react'
import './NavBar.css';

export default function Navbar() {
  return (
    <div className='nav-bar d-flex'>

      <h3> <a href='#'>Звездные войны</a></h3>

      <ul className='d-flex'>
        <li><a href="#">Персонажи</a></li>

        <li> <a href="#">Планеты</a></li>

        <li> <a href="#">Корабли</a></li>
      </ul>
    </div>
  )
}
