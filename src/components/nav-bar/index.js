import React from 'react';
import './navbar.scss';

const NavBar = () => (
  <div className="navBar">
    <div className="main-wrapper">
      <a className="site" href="/">Rule of Thumb.</a>
      <nav role="navigation" aria-label="Main">
        <a href="/page">Past Trials</a>
        <a href="/page">How It Works</a>
        <a href="/page">Log In / Sign Up</a>
      </nav>
      <button className="button-icon">Search</button>
    </div>
  </div>
);

export default NavBar;
