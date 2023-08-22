import React from 'react';
import { Link } from 'react-router-dom';

import './bunner.scss';
// eslint-disable-next-line react/prop-types
export function Bunner({ page = '' }) {
  return (
    <section className="bunner">
      <div className="bunner__overlay" />
      <div className="container">
        <div className="bunner__text">
          <h3 className="bunner__title">{page}</h3>
          <p className="bunner__link">
            <Link to="/">Home</Link> / {page}
          </p>
        </div>
      </div>
    </section>
  );
}
