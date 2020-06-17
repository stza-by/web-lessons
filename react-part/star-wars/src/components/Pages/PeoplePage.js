import React, { Component } from 'react'
import SwapiService from '../../services/swapi';
import Row from '../Row';

import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
export default class PeoplePage extends Component {

  state = {
    currentPerson: null
  }

  setPerson = (person) => {
    this.setState({ currentPerson: person })
  }

  render() {

    const { currentPerson } = this.state;

    return (
      <Row
        left={<ItemList
          setItem={this.setPerson}
          currentItem={currentPerson || {}}
          getData={SwapiService.getPeople}
          renderItem={(item) => item.name}
        />}
        right={currentPerson && <ItemDetails
          item={currentPerson}
          title={currentPerson ? currentPerson.name : ''}
          renderedFields={
            [{ field: 'eye_color', label: 'Цвет глаз' },
            { field: 'gender', label: 'Gjk' },
            { field: 'height', label: 'Рост' }]
          }
          getPicUrl={SwapiService.getPersonPictureByURL} />}
      />
    )
  }
}
