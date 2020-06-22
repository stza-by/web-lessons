import React from 'react'
import './UserItem.css';
import { Link } from 'react-router-dom';

export const UserItem = ({user }) => {
  const {login, avatar_url, html_url } = user;
  return (
    <div class="card mb-3">
      <h3 class="card-header">{login}</h3>

      <img className='card-img-top' src={avatar_url} alt="Аватар" />
      <div class="card-body">
        <Link to={`/user/${login}`} class="card-link">
          Профиль
        </Link>
      </div>
    </div>
  )
}
