import React, { Component } from 'react'
import NavBar from '../NavBar';
import RandomPlanet from '../RandomPlanet';

import ItemList from '../ItemList';
import PlanetDetails from '../PlanetDetails';
import ErrorIndicator from '../ErrorIndicator';

import './App.css';

export default class App extends Component {

  state = {
    isError: false,
    currentPlanet: null
  }


  setPlanet = (planet) => {
    this.setState({currentPlanet: planet})
  }

  componentDidCatch(error) {
    console.log('componentDidCatch ', error);
    this.setState({ isError: true })
  }


  render() {


    if (this.state.isError) {
      return <ErrorIndicator />
    }

    return (
      <div className='container'>
        <NavBar />
         <RandomPlanet />

        <div className='row'>

          <div className='col-12 col-md-6'>
            <ItemList setPlanet={this.setPlanet} />
          </div>

          <div className='col-12 col-md-6'>
            <PlanetDetails planet={this.state.currentPlanet}/>
          </div>
        </div>
      </div>
    )
  }
}
