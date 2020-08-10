import React from 'react';
import './navbar.scss';

/**
 * Nav Bar Static Component
 * Non - @params
 */
const NavBar = () => (
  <section className="navBar" data-testid="navBar">
    <div className="main-wrapper">
      <a className="site" href="/">Rule of Thumb.</a>
      <div className="container-actions">
        <nav role="navigation" aria-label="Main">
          <a href="/past-trials">Past Trials</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/log-in">Log In / Sign Up</a>
        </nav>
        <button className="button-icon" type="button">Search</button>
      </div>
    </div>
  </section>
);

export default NavBar;
