import React, { Component } from 'react'
import UserItem from '../UserItem';
import './Users.css';

export default class Users extends Component {

  render() {

    const {users} = this.props;

    return (
      <div className='user-container'>
        {users.map(user => (<UserItem key={user.id} user={user}/>))}
      </div>
    )
  }
}
