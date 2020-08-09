import React from 'react';
import PropTypes from 'prop-types';
import './headline.scss';

const Headline = ({ title }) => (
  <h2 data-testid="headline" className="headline">
    {title}
  </h2>
);

Headline.propTypes = {
  title: PropTypes.string.isRequired,
};

Headline.displayName = 'Headline Component';

export default Headline;
