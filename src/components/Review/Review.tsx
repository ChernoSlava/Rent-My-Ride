/* eslint-disable react/prop-types */
import React from 'react';

import Alex from './images/Alex.jpg';

import './review.scss';

export function Review({ name = 'Alex', image = Alex, text = 'text' }) {
  return (
    <li className="review">
      <div className="review__content">
        <img src={image} alt="avatar" className="review__image" />
        <h3 className="review__name">{name}</h3>
      </div>
      <p className="review__text">{text}</p>
    </li>
  );
}
