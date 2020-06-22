import React, { Component } from 'react'

export class User extends Component {

  componentDidMount() {

    this.props.getUser(this.props.match.params.login);
  }


  render() {

    console.log(this.props);
    return (
      <h1>{this.props.user.name}</h1>
    );
  }
}
