import React from 'react'
import './PlanetDetails.css';

export default function PlanetDetails() {
  return (
    <div className='planet-details card'>

      <img className="card-img-top"
        src="https://starwars-visualguide.com/assets/img/planets/2.jpg"
         alt="Изображение планеты"/>


        <div className='card-body'>

          <h3>Имя планеты</h3>

          <ul className='list-group'>
            <li className='list-group-item'>
              <span>Наседение: 123123</span>
            </li>
            <li className='list-group-item'>
              <span>Диаметр: 21</span>
            </li>
            <li className='list-group-item'>
              <span>Период вращение: 213</span>
            </li>
          </ul>
        </div>
    </div>
  )
}
