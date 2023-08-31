import React from 'react';
import { Link } from 'react-router-dom';

import './bunner.scss';
// eslint-disable-next-line react/prop-types
export function Bunner({ page = '', home = false }) {
  return (
    <section className="bunner">
      <div className="bunner__overlay" />
      <div className="container">
        {!home ? (
          <div className="bunner__text">
            <h3 className="bunner__title">{page}</h3>
            <p className="bunner__link">
              <Link to="/">Home</Link> / {page}
            </p>
          </div>
        ) : (
          <div className="bunner__home">
            <h3>
              You will find here <span>what you dreamed</span> about
            </h3>
          </div>
        )}
      </div>
    </section>
  );
}
