import React from 'react';
import PropTypes from 'prop-types';
import './thumb.scss';

const Thumb = ({ type, size, showPercentage, value }) => (
  <div data-testid="thumb" className={`thumb ${type} ${size}`}>
    <button className="icon"></button>
    {showPercentage && (
      <p className="thumb-percentage">{value}<span>%</span></p>
    )}
  </div>
);

Thumb.propTypes = {
  type: PropTypes.oneOf(['up', 'down']).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'big']).isRequired,
  showPercentage: PropTypes.bool,
  value: PropTypes.number,
};

Thumb.defaultProps = {
  showPercentage: false,
  value: 50
}

Thumb.displayName = 'Thumb Component';

export default Thumb;
