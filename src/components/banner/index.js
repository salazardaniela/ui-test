import React from 'react';
import PropTypes from 'prop-types';
import './banner.scss';

/**
 * Components
 */
import Countdown from '../countdown';
import BoxOpinion from '../box-opinion';

/**
 * Banner Component
 * @param {Object} {
 *  externalLink: string required by a component
 * }
 */
const Banner = ({ externalLink }) => (
  <section data-testid="banner" className="banner">
    <Countdown futureDate="2020-09-01" />
    <BoxOpinion externalLink={externalLink} />
  </section>
);

/**
 * Props definition
 */
Banner.propTypes = {
  externalLink: PropTypes.string,
};

/**
 * Default values to non required props
 */
Banner.defaultProps = {
  externalLink: '',
};

Banner.displayName = 'Banner Component';

export default Banner;
