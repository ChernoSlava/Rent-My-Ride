import React from 'react';

import aboutFoto from './images/about_main.jpg';

import './styles/description.scss';

export function Description() {
  return (
    <div className="description">
      <h2 className="description__title">About our company</h2>
      <div className="description__container">
        <img className="description__image" src={aboutFoto} alt="about foto" />
        <div className="description__data">
          <h2 className="description__subtitle">
            At Rent My Ride, we are passionate about providing{' '}
            <span>unparalleled</span> car rental services.
          </h2>
          <p className="description__text">
            With years of experience in the industry, we understand the needs of
            our customers and aim to exceed their expectations. Our commitment
            to quality, safety, and convenience sets us apart as a trusted
            partner for all your car rental needs.
          </p>
        </div>
      </div>
    </div>
  );
}
