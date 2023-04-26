import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './images/logo.png';

import './header.scss';

export function Header() {
  // const [nav, setNav] = useState(false);

  // const openNav = () => {
  //   setNav(!nav);
  // };

  return (
    <nav className="header">
      {/* <div className={`header__mobile ${nav ? 'header__mobile_opened' : ''}`}>
        <div className="mobile-navbar__close">
          <img className="" src="" alt="close" onClick={openNav} />
        </div>
        <ul className="mobile mobile__links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/models">
              Models
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/testimonials">
              Testimonials
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/team">
              Our Team
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div> */}
      <div className="header__desktop">
        <div className="navbar__img">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="logo-img" />
          </Link>
        </div>
        <ul className="navbar__links">
          <li>
            <Link className="home-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="about-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="models-link" to="/cars">
              Vehicle Models
            </Link>
          </li>
          <li>
            <Link className="testi-link" to="/review">
              Testimonials
            </Link>
          </li>
          <li>
            <Link className="team-link" to="/team">
              Our Team
            </Link>
          </li>
          <li>
            <Link className="contact-link" to="/contacts">
              Contact
            </Link>
          </li>
        </ul>
        <div className="navbar__buttons">
          <Link className="navbar__buttons__sign-in" to="/">
            Sign In
          </Link>
          <Link className="navbar__buttons__register" to="/">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
