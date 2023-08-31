import React from 'react';
import { Link } from 'react-router-dom';

import { Bunner } from '../../components/Bunner/Bunner';

// import cabrio from './images/cabriolet.jpg';
import './home.scss';

<Link to="/">Home</Link>;
export function Home() {
  return (
    <>
      <Bunner home />

      <section className="main">
        <div className="main__first">
          <div className="main__imgbox">
            <div className="main__box">
              <h1>Rent Your Car</h1>
              <Link type="button" className="main__firstBtn" to="/cars">
                Push it
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
