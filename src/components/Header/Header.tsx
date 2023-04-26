import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Burger from './images/burger-menu.svg';
import Close from './images/CloseIcon.svg';
import Logo from './images/logo.png';

import './header.scss';

export function Header() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="header">
      <div className={`header__mobile ${nav ? 'header__mobile_opened' : ''}`}>
        <div
          onClick={openNav}
          onKeyDown={openNav}
          className="header__mobile_close"
          role="button"
          tabIndex={0}>
          <img src={Close} alt="close" />
        </div>
        <ul className="header__mobile-links">
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
            <Link onClick={openNav} to="/cars">
              Models
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/review">
              Testimonials
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/team">
              Our Team
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/contacts">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__desktop">
        <div className="navbar__img">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="logo-img" />
          </Link>
        </div>
        <ul className="header__links">
          <li>
            <Link className="header-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/cars">
              Vehicle Models
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/review">
              Testimonials
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/team">
              Our Team
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/contacts">
              Contact
            </Link>
          </li>
        </ul>
        <div className="header__buttons">
          <Link className="header__buttons_sign-in" to="/">
            Sign In
          </Link>
          <Link className="header__buttons_register" to="/">
            Register
          </Link>
        </div>
        <div
          className="header__burger"
          onClick={openNav}
          onKeyDown={openNav}
          tabIndex={0}
          role="button">
          <img src={Burger} alt="open" />
        </div>
      </div>
    </nav>
  );
}
