import React, { Component } from 'react'
import SwapiService from '../../services/swapi';
import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  state = {
    name: '',
    population: '',
    diameter: '',
    rotationPeriod: '',
    id: ''
  }

  componentDidMount() {
    this.setRandomPlanet();

    setInterval(this.setRandomPlanet, 2000);
  }


  setRandomPlanet = async () => {
    const randomNumber = Math.floor(Math.random() * 20) + 3;
    const planet = await SwapiService.getPlanet(randomNumber);

    this.setState({
      id: randomNumber,
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period
    })
  }

  render() {
    const { id, name, population, diameter, rotationPeriod } = this.state;

    return (
      <div className='random-planet jumbotron d-flex'>
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt='Картинка планеты'
        />

        <div className='body'>
          <h4>{name}</h4>
          <ul className='list-group'>
            <li className='list-group-item'>
              <span>Наседение: {population}</span>
            </li>
            <li className='list-group-item'>
              <span>Диаметр: {diameter}</span>
            </li>
            <li className='list-group-item'>
              <span>Период вращение: {rotationPeriod}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
