import React from 'react';
import { Link } from 'react-router-dom';

import './firstScreen.scss';

export function FirstScreen() {
  return (
    <div className="first">
      <div className="first__imgbox">
        <div className="first__box">
          <h1>Rent Your Car</h1>
          <Link type="button" className="first__firstBtn" to="/cars">
            Push it
          </Link>
        </div>
      </div>
    </div>
  );
}
