import React from 'react';
import PropTypes from 'prop-types';
import './thumb.scss';

/**
 * Percentages Component
 * @param {Object} {} Component properties
 * type : 'up' || 'down'
 * size : 'small' || 'medium' || 'big'
 * showPercentage : true || false
 * value: 'percentage number'
 */
const Thumb = ({
  type, size, showPercentage, value,
}) => (
  <button data-testid="thumb" className={`thumb ${type} ${size}`} type="button">
    <span className="icon-thumb" />
    {showPercentage && (
      <p className="thumb-percentage">
        {value}
        <span>%</span>
      </p>
    )}
  </button>
);

/**
 * Prop Types Definition
 */
Thumb.propTypes = {
  type: PropTypes.oneOf(['up', 'down']).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'big']).isRequired,
  showPercentage: PropTypes.bool,
  value: PropTypes.number,
};

/**
 * Default value of props non required
 */
Thumb.defaultProps = {
  showPercentage: false,
  value: 50,
};

Thumb.displayName = 'Thumb Component';

export default Thumb;
