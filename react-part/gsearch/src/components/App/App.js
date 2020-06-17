import React, { Component, Fragment } from 'react'
import Navbar from '../Navbar';
import Users from '../Users';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />

        <div className='container'>

          <Users />
        </div>
      </Fragment>
    )
  }
}
