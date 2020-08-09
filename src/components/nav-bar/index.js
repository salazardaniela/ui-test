import React from 'react';
import './navbar.scss';

const NavBar = () => (
  <section className="navBar" data-testid="navBar">
    <div className="main-wrapper">
      <a className="site" href="/">Rule of Thumb.</a>
      <div className="container-actions">
        <nav role="navigation" aria-label="Main">
          <a href="/page">Past Trials</a>
          <a href="/page">How It Works</a>
          <a href="/page">Log In / Sign Up</a>
        </nav>
        <button className="button-icon" type="button">Search</button>
      </div>
    </div>
  </section>
);

export default NavBar;
