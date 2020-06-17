import React, {Component } from 'react'
import './ItemDetails.css';
import noImg from '../../resources/images/noImage.png';

export default class ItemDetails extends Component {

  state = {
    imgUrl: '' 
  }

  componentDidMount() {
    const {getPicUrl, item} = this.props;
    this.setState({imgUrl: getPicUrl(item.url)})
  }

  componentDidUpdate(prevProps) {
    if(prevProps.item.url !== this.props.item.url){
      this.setState({imgUrl: this.props.getPicUrl(this.props.item.url)})
    }
  }

  render() {
    const {imgUrl} = this.state;
    const { item, title, renderedFields } = this.props;

    if (!item) {
      return null;
    }

    return (
      <div className='planet-details card'>

        <img className="card-img-top"
          src={imgUrl}
          alt="Изображение планеты"
          onError={() => this.setState({imgUrl: noImg})}
        />

        <div className='card-body'>

          <h3>{title}</h3>


          <ul className='list-group'>
            {renderedFields.map((renderedField) => (
              <li key={renderedField.field} className='list-group-item'>
                <span>{renderedField.label}: </span>
                <span>{item[renderedField.field]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }


}
