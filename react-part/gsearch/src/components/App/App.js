import React, { Component, Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar';
import Users from '../Users';
import Spinner from '../Spinner';
import Search from '../Search';
import User from '../User';
import NotFoundPage from '../NotFoundPage';
import GitHubApi from '../../services/GitHubApi';

import { ALERT_LEVELS } from '../../utils/constants';

export default function App() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [alert, setAlert] = useState({ message:'', level: undefined });


  const getUserData = (login) => {
    setIsLoading(true);
    GitHubApi.getUserData(login).then(result => {
      setUser(result);
      setIsLoading(false);
    })
  }

  const onSearchClickHandler = (e) => {
    if (search.length) {
      setIsLoading(true);
      GitHubApi.searchUsers(search).then(result => {
        setUsers(result);
        setIsLoading(false);
      })
    } else {
      setAlert({ message: 'Поле ввода не заполнено', level: ALERT_LEVELS.danger  })
    }
  }

  const onSearchChangeHandler = (value) => {
    setSearch(value)
  }

  const onClearHandler = () => {
    setSearch('');
    setUsers([]);
  }

  return (
    <Fragment>
      <Router>
        <Navbar />

        <div className='container'>

          {console.log(alert)}
          {alert.message &&
            (<div className={`alert alert-${alert.level} mt-3`}>
              {alert.message}
              <i className="fas fa-times-circle float-right pt-1"
                onClick={() => setAlert( { message: '', level: undefined } )}></i>
            </div>)
          }

          <Switch>

            <Route exact path='/' render={() => (
              <Fragment>
                <Search onSearchChangeHandler={onSearchChangeHandler}
                  onSearchClickHandler={onSearchClickHandler}
                  onClearHandler={onClearHandler}
                  search={search}
                  isClear={users.length ? false : true} />

                {isLoading ? <Spinner /> : <Users users={users} />}
              </Fragment>
            )} />

            <Route exact path='/user/:login' render={(props) => (
              <User {...props}
                user={user}
                isLoading={isLoading}
                getUser={getUserData} />
            )} />

            <Route component={NotFoundPage} />

          </Switch>
        </div>
      </Router>
    </Fragment>
  )
}

