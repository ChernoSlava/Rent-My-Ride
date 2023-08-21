import React from 'react';

import SelectCar from './images/icon1.png';
import Contact from './images/icon2.png';
import Drive from './images/icon3.png';

import './styles/planTrip.scss';

export function PlanTrip() {
  return (
    <section className="plan">
      <div className="plan__container">
        <div className="plan__data">
          <h3 className="plan__title">Plan your trip now</h3>
          <h2 className="plan__subtitle">Quick & easy car rental</h2>
        </div>

        <div className="boxes">
          <div className="boxes__box box">
            <img className="box__image" src={SelectCar} alt="icon_img" />
            <h3 className="box__title">Select Car</h3>
            <p className="box__subtitle">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>

          <div className="boxes__box box">
            <img className="box__image" src={Contact} alt="icon_img" />
            <h3 className="box__title">Contact Operator</h3>
            <p className="box__subtitle">
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>

          <div className="boxes__box box">
            <img className="box__image" src={Drive} alt="icon_img" />
            <h3 className="box__title">Let is Drive</h3>
            <p className="box__subtitle">
              Whether you are hitting the open road, we have got you covered
              with our wide range of cars
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
