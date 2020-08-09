import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './percentages.scss';

/**
 * Components
 * */
import Thumb from '../thumb';

/**
 * Percentages Component
 * @param {Object} {} Component properties
 */
const Percentages = ({ values, setResult }) => {
  /**
   * Calculate Persentages
   * Math.floor({ Number of Votes } * 100 / { Total Votes})
   */
  const numbers = {
    downItem: Math.floor((values.down * 100) / values.total),
    upItem: Math.floor((values.up * 100) / values.total),
  };

  /**
   * Set the Main result
   * 'up' if percentage in up votes is highest
   */
  useEffect(() => {
    const result = values.up > values.down;
    setResult(result ? 'up' : 'down');
  }, [values, setResult]);

  /**
   * Comonent Template
   */
  return (
    <div data-testid="percentages" className="percentages">
      <div
        className="percentage-item"
        style={{ width: `${numbers.upItem}%` }}
      >
        <Thumb type="up" size="medium" showPercentage value={numbers.upItem} />
      </div>
      <div
        className="percentage-item"
        style={{ width: `${numbers.downItem}%` }}
      >
        <Thumb type="down" size="medium" showPercentage value={numbers.downItem} />
      </div>
    </div>
  );
};

/**
 * Prop Types Definition
 */
Percentages.propTypes = {
  values: PropTypes.shape({
    up: PropTypes.number,
    down: PropTypes.number,
    total: PropTypes.number,
  }).isRequired,
  setResult: PropTypes.func,
};

/**
 * Default value of props non required
 */
Percentages.defaultProps = {
  setResult: () => {},
};

Percentages.displayName = 'Percentages Component';

export default Percentages;
