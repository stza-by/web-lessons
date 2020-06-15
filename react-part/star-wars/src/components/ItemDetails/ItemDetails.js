import React from 'react'
import './ItemDetails.css';

export default function ItemDetails({ item, getPicUrl, renderedFields, title }) {

  if (!item) {
    return null;
  }

  return (
    <div className='planet-details card'>

      <img className="card-img-top"
        src={getPicUrl()}
        alt="Изображение планеты"
        onLoad={() => console.log('image loaded')}
        onError={() => { throw new Error('Ошибка')}}
      />

      <div className='card-body'>

        <h3>{title}</h3>


        <ul className='list-group'>
          {renderedFields.entries().map(keyVal => {
              console.log(keyVal);
            
            {/* return (
              <li className='list-group-item'>
                <span>{field}: </span>
                <span>Население: </span>
              </li>
            ) */}
          })}

        </ul>
      </div>
    </div>
  )
}
