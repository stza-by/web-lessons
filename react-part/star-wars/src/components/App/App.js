import React, { Component } from 'react'
import NavBar from '../NavBar';
import RandomPlanet from '../RandomPlanet';

import ItemList from '../ItemList';
import PlanetDetails from '../PlanetDetails';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <NavBar />
        <RandomPlanet />

        <div className='row'>

          <div className='col-12 col-md-6'>
            <ItemList/>
          </div>

          <div className='col-12 col-md-6'>
            <PlanetDetails/>
          </div>
        </div>
      </div>
    )
  }
}
