import React from 'react';
import PropTypes from 'prop-types';
import './percentages.scss';

// Components
import Thumb from '../thumb';

const Percentages = ({ values }) => {
  const numbers = {
    downItem: Math.floor((values.down * 100) / values.total),
    upItem: Math.floor((values.up * 100) / values.total)
  };

  return (
  <div data-testid="percentages" className="percentages">
    <div
      className="percentage-item"
      style={{ width: `${numbers.downItem}%` }}
    >
      <Thumb type="down" size="medium" showPercentage value={numbers.downItem} />
    </div>
    <div
      className="percentage-item"
      style={{ width: `${numbers.upItem}%` }}
    >
      <Thumb type="up" size="medium" showPercentage value={numbers.upItem} />
    </div>
  </div>
)};

Percentages.propTypes = {
  values: PropTypes.shape({
    up: PropTypes.number,
    down: PropTypes.number,
    total: PropTypes.number
  }),
};

Percentages.defaultProps = {
  values: {
    up: 500,
    down: 500,
    total: 1000,
  }
}

Percentages.displayName = 'Percentages Component';

export default Percentages;
