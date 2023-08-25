/* eslint-disable react/prop-types */
import React from 'react';

import Rio from './images/Kio_Rio.jpg';

import './car.scss';

export function Car({
  carImage = Rio,
  carTitle = 'Kia',
  carPrice = '35€',
  carModel = 'Rio',
  carControl = 'Manual',
  carStars = '★',
}) {
  return (
    <li className="car">
      <img className="car__image" alt="car" src={carImage} />
      <div className="car__info">
        <div className="car__datastar">
          <p className="car__title">{`${carTitle} ${carModel}`} </p>
          <p className="car__stars">{carStars}</p>
        </div>

        <div className="car__description">
          <p className="car__control">{carControl}</p>
        </div>

        <div className="car__dataprice">
          <p className="car__price">{carPrice}</p>
          <p className="car__pricesubs">Per day</p>
        </div>

        <button
          onClick={() => {
            console.log('click');
          }}
          type="button"
          name="Book"
          className="car__button"
          value="Book me"
          aria-label="Book">
          Book me
        </button>
      </div>
    </li>
  );
}
