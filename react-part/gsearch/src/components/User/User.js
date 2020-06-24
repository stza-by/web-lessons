import React, { Component, Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './User.css';

export function User({ user, getUser,match }) {

  useEffect(() => {
    getUser(match.params.login);
  }, [])

  const {
    avatar_url,
    bio,
    company,
    html_url,
    location,
    login,
    name,
  } = user;

  return (

    <div >
      <div className='btn btn-light m-2'><Link to='/'>Вернуться </Link></div>

      <div className='row border border-primary'>

        <div className='col-12 col-md-6 left-side'>

          <img className='rounded-circle mb-2'
            src={avatar_url}
            style={{ width: '150px' }}
          />

          <h1>{name}</h1>

          <p>Город: {location}</p>
        </div>

        <div className='col-12 col-md-6 right-side'>
          <h3>Логин: {login} </h3>

          {bio && (
            <Fragment>
              <h4>БИО</h4>
              <p>{bio}</p>
            </Fragment>
          )}


          <ul>
            {company && <li>
              <strong>Компания:</strong> {company}
            </li>}
          </ul>

          <a className='btn btn-primary' href={html_url} target='_blank'>
            Открыть профиль на GitHub</a>
        </div>
      </div>
    </div>
  );
}
