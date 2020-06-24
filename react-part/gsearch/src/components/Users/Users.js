import React, { Component, useState, useEffect } from 'react'
import UserItem from '../UserItem';
import './Users.css';

export default function Users({ users }) {

  return (
    <div className='user-container'>
      {users.map(user => (<UserItem key={user.id} user={user} />))}
    </div>
  )
}
