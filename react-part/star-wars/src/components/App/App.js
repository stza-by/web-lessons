import React, { Component } from 'react'
import NavBar from '../NavBar';
import RandomPlanet from '../RandomPlanet';
import Row from '../Row';
import { PlanetPage, PeoplePage, StarshipPage } from '../Pages'

import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Navbar from '../NavBar/Navbar';

export default class App extends Component {

  render() {


    return (
      <div className='container'>

        <BrowserRouter>
          <NavBar />
          <RandomPlanet />
          
          <Route path='/' render={() => <h1>Добро пожаловать!!!</h1>}
            exact
          />
          
          <Route path='/people' component={PeoplePage}/>          
          <Route path='/starship' component={StarshipPage}/>
          <Route path='/planets' component={PlanetPage}/>
       
        </BrowserRouter>
      </div>
    )
  }
}
