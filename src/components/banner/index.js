import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './banner.scss';

/**
 * Components
 */
import Countdown from '../countdown';
import BoxOpinion from '../box-opinion';
import Percentages from '../percentages';

/**
 * Banner Component
 * @param {Object} {
 *  externalLink: string required by a component
 * }
 */
const Banner = ({ externalLink }) => {
  const [showPercentage, setShowPercentage] = useState(false);
  const [valueThumb, setValueThumb] = useState(false);
  return (
    <section data-testid="banner" className="banner">
      <div className="banner-footer">
        {showPercentage
          ? <Percentages idName="pope" showPercentage setClicked={setValueThumb} />
          : <Countdown futureDate="2020-09-01" />}
      </div>
      <BoxOpinion
        setClickedValue={valueThumb}
        setRegister={setShowPercentage}
        externalLink={externalLink}
      />
    </section>
  );
};

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
