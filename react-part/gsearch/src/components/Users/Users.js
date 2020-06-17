import React, { Component } from 'react'
import UserItem from '../UserItem';
import GitHubApi from '../../services/GitHubApi';
import './Users.css';

export default class Users extends Component {

  state = {
    users: [
      {
        "login": "mojombo",
        "id": 1,
        "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
        "html_url": "https://github.com/mojombo"
      },

      {
        "login": "mojombo",
        "id": 2,
        "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
        "html_url": "https://github.com/mojombo"
      },
      {
        "login": "mojombo",
        "id": 3,
        "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
        "html_url": "https://github.com/mojombo"
      }
    ]
  }


  componentDidMount() {
    GitHubApi.getUsers().then(result => {
      this.setState({users: result})
    })
  }


  render() {

    const {users} = this.state;

    return (
      <div className='user-container'>
        {users.map(user => (<UserItem key={user.id} user={user}/>))}
      </div>
    )
  }
}
