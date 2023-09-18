import React, { useState } from 'react';

import check from './images/check.svg';

import './footer.scss';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__contents">
          <ul className="footer__first">
            <li className="footer__title">CAR Rental</li>

            <li className="footer__desc">
              Discover a vast selection of vehicles to suit all your driving
              requirements. At <span>Rent My Ride</span>, we offer an extensive
              range of options to cater to your every need.
            </li>

            <li className="footer__data">
              <a href="tel:123456789">+373(699)-37-646</a>
            </li>

            <li className="footer__data">
              <a
                href="mailto: 
				slavachernogorov@gmail.com">
                {' '}
                slavachernogorov@gmail.com
              </a>
            </li>
          </ul>

          <ul className="footer__second">
            <li>Company</li>
            <li>
              <a href="#home">Chisinau</a>
            </li>
            <li>
              <a href="#home">Careers</a>
            </li>
            <li>
              <a href="#home">Blog</a>
            </li>
            <li>
              <a href="#home">How we work</a>
            </li>
          </ul>

          <ul className="footer__second">
            <li>Working Hours</li>
            <li>Mon - Fri: 8:00AM - 10:00PM</li>
            <li>Sat: 10:00AM - 9:00PM</li>
            <li>Sun: Closed</li>
          </ul>

          <ul className="footer__second">
            <li>Subscription</li>
            <li>
              <p>Subscribe your Email address for latest news & updates.</p>
            </li>
            <li>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button className="footer__button" type="submit">
                  Submit
                </button>
              </form>
            </li>
            {subscribed && (
              <li className="subscription">
                <p>You are subscribed!</p>
                <img src={check} alt="success icon" />
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
