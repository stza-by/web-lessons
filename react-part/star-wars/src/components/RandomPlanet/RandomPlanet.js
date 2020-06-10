import React, { Component } from 'react'
import SwapiService from '../../services/swapi';
import Spinner from '../Spinner';
import './RandomPlanet.css';

import ErrorIndicator from '../ErrorIndicator';


/**
 * construcrtor() => render() => componentDidMount()
 * 
 * render() => componrntDidUpdate()
 * 
 * componentDidUnmount()
 */
export default class RandomPlanet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isError: false
    }
    this.interval = null;
    console.log('constructor')
  }



  componentDidMount() {

    console.log('componentDidMount');
    this.setRandomPlanet();
    this.interval = setInterval(this.setRandomPlanet, 2000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');

    if(this.interval) {
      clearInterval(this.interval);
    }
  }

  setRandomPlanet = async () => {

    try {
      const randomNumber = Math.floor(Math.random() * 20) + 3;
      const planet = await SwapiService.getPlanet(randomNumber);

      this.setState({
        id: randomNumber,
        name: planet.name,
        population: planet.population,
        diameter: planet.diameter,
        rotationPeriod: planet.rotation_period,
        isLoading: false,
        isError: false

      })
    } catch (error) {
      this.setState({ isError: true })
    }
  }


  renderPlanet = () => {
    const { id, name, population, diameter, rotationPeriod } = this.state;
    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }

  render() {

    console.log('render');
    const { isLoading, isError } = this.state;

    if (isError) return <ErrorIndicator />

    return (
      <div className='random-planet jumbotron d-flex'>
        {isLoading ? <Spinner /> : this.renderPlanet()}
      </div>
    )
  }
}
