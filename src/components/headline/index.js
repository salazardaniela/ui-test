import React from 'react';
import PropTypes from 'prop-types';
import './headline.scss';

/**
 * Headline Component
 * @param {object} {
 *  title: 'Text to show as Headline'
 * }
 */
const Headline = ({ title }) => (
  <h2 data-testid="headline" className="headline">
    {title}
  </h2>
);

/**
 * Prop Types Definition
 */
Headline.propTypes = {
  title: PropTypes.string.isRequired,
};

Headline.displayName = 'Headline Component';

export default Headline;
