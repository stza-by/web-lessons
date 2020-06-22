import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';
import Users from '../Users';
import Spinner from '../Spinner';
import Search from '../Search';
import User from '../User';
import GitHubApi from '../../services/GitHubApi';

import { ALERT_LEVELS } from '../../utils/constants';

export default class App extends Component {

  state = {
    users: [],
    user: {},
    isLoading: false,
    search: '',
    alert: {
      message: '',
      level: undefined
    }
  }

  getUser = (login) => {
    this.setState({ isLoading: true });
    GitHubApi.getUserData(login).then(result => {
      this.setState({ user: result, isLoading: false })
    })
  }

  onSearchClickHandler = (e) => {
    const { search } = this.state;

    if (search.length) {
      this.setState({ isLoading: true })
      GitHubApi.searchUsers(search).then(result => {
        this.setState({ users: result, isLoading: false })
      })
    } else {
      this.setState({ alert: { message: 'Поле ввода не заполнено', level: ALERT_LEVELS.danger } });
    }
  }

  onSearchChangeHandler = (value) => {
    this.setState({ search: value })
  }

  onClearHandler = () => {
    this.setState({ search: '', users: [] })
  }

  render() {

    const { isLoading, users, user, search, alert: { message, level } } = this.state;
    return (
      <Fragment>
        <Router>
          <Navbar />

          <div className='container'>

            {message &&
              (<div className={`alert alert-${level} mt-3`}>
                {message}
                <i className="fas fa-times-circle float-right pt-1"
                  onClick={() => this.setState({ alert: { message: '', level: undefined } })}></i>
              </div>)
            }

            <Switch>

              <Route exact path='/' render={() => (
                <Fragment>
                  <Search onSearchChangeHandler={this.onSearchChangeHandler}
                    onSearchClickHandler={this.onSearchClickHandler}
                    onClearHandler={this.onClearHandler}
                    search={search}
                    isClear={users.length ? false : true} />

                  {isLoading ? <Spinner /> : <Users users={users} />}
                </Fragment>
              )} />

              <Route exact path='/user/:login' render={(props) => (
                <User {...props}
                  user={user}
                  isLoading={isLoading}
                  getUser={this.getUser} />
              )} />

            </Switch>
          </div>
        </Router>
      </Fragment>
    )
  }
}
