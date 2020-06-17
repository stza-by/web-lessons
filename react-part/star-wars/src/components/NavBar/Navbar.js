import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';


export default function Navbar(props) {



  return (
    <div className='nav-bar d-flex'>

      <h3>
        <Link to='/'>Звездные войны</Link>
      </h3>

      <ul className='d-flex'>
        <li>
          <Link to='/people'>Персонажи</Link>
        </li>

        <li>
          <Link to='/planets'>Планеты</Link>
        </li>

        <li>
          <Link to='/starship'>Корабли</Link>
        </li>
      </ul>
    </div>
  )
}
