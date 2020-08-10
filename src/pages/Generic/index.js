import React from 'react';
import ProppTypes from 'prop-types';
import './generic.scss';

// Components
import NavBar from '../../components/nav-bar';
import Headline from '../../components/headline';
import Footer from '../../components/footer';

const Generic = ({ match }) => (
  <div data-testid="generic-page">
    <NavBar />
    <div className="main-wrapper">
      <Headline title={`Not Found, Page Name: ${match.params.name}`} />
      <Footer />
    </div>
  </div>
);

/**
 * Prop Types Definition
 */
Generic.propTypes = {
  match: ProppTypes.shape({
    params: ProppTypes.shape({
      name: ProppTypes.string,
    }),
  }).isRequired,
};

Generic.displayName = 'Generic Page';

export default Generic;
