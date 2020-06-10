import React, { Component } from 'react'
import SwapiService from '../../services/swapi';
import Spinner from '../Spinner';
import './ItemList.css';

export default class ItemList extends Component {

  state = {
    isLoading: true,
    planets: []
  }

  async componentDidMount() {
    const planets = await SwapiService.getPlanets();
    this.setState({ planets, isLoading: false });
  }

  renderListItems = (planetsArray) => {

    const { setPlanet } = this.props;

    return planetsArray.map((planet, index) => (
      <li onClick={() => setPlanet({ ...planet, id: ++index })}
        key={planet.name} className='list-group-item'>
        {planet.name}
      </li>)
    )
  }

  render() {
    const { isLoading, planets } = this.state;

    return (
      <ul className='list-group item-list' >
        {isLoading ? <Spinner /> : this.renderListItems(planets)}
      </ul>
    )
  }
}
