/* eslint-disable react/prop-types */
import React from 'react';

import Default from './images/default.jpg';

import './employee.scss';

export function Employee({
  name = 'default',
  img = Default,
  job = 'Product manager',
}) {
  return (
    <div key={name} className="employee">
      <div className="employee__imagebox">
        <img src={img} alt="employee" className="employee__img" />
      </div>
      <div className="employee__descbox">
        <h3 className="employee__name">{name}</h3>
        <p className="employee__job">{job}</p>
      </div>
    </div>
  );
}
