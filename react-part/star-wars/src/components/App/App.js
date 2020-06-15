import React, { Component } from 'react'
import NavBar from '../NavBar';
import RandomPlanet from '../RandomPlanet';
import Row from '../Row';

import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/swapi';

import './App.css';
import Navbar from '../NavBar/Navbar';

export default class App extends Component {

  state = {
    currentPlanet: null
  }

  setPlanet = (planet) => {
    this.setState({ currentPlanet: planet })
  }

  render() {

    const { currentPlanet } = this.state;

    return (
      <div className='container'>
        <NavBar>
        
        </NavBar>
        <RandomPlanet />

        <Row
          left={<ItemList
            setItem={this.setPlanet}
            currentItem={currentPlanet || {}}
            getData={SwapiService.getPlanets}
            renderItem={(item) => item.name}
          />}
          right={<ItemDetails 
                item={currentPlanet}
                title={currentPlanet ? currentPlanet.name : ''}
                renderedFields={{climate: 'Климат', population: 'Население'}}
                getPicUrl={() =>SwapiService.getPlanetPictureByURL(currentPlanet.url)} />}
        />
        <Row
          left={<ItemList
            setItem={(item) => console.log('Person', item)}
            currentItem={{}}
            getData={SwapiService.getPeople}
            renderItem={(item) => item.name}
          />}
          right='Пусто'
        />
        <Row
          left={<ItemList
            setItem={(item => console.log('Starship', item))}
            currentItem={{}}
            getData={SwapiService.getStarships}
            renderItem={(item) => item.name}
          />}
          right='ПУсто'
        />

      </div>
    )
  }
}
