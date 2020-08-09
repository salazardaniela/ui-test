import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './percentages.scss';

/**
 * Components
 * */
import Thumb from '../thumb';

/**
 * Utils
 */
import { setResults, getResults } from '../../config/helpers';

/**
 * Percentages Component
 * @param {Object} {} Component properties
 */
const Percentages = ({ setHighestValue, idName }) => {
  const [values, setValues] = useState(getResults({ idName }));

  /**
   * Set the Main result
   * 'up' if percentage in up votes is highest
   */
  useEffect(() => {
    if (values[idName]) {
      const result = values[idName].up > values[idName].down;
      setHighestValue(result ? 'up' : 'down');
    }
  }, [values, setHighestValue, idName]);

  /**
   * Calculate Persentages
   * Math.floor({ Number of Votes } * 100 / { Total Votes})
   */
  const numbers = {
    downItem: Math.ceil((values[idName].down * 100) / values[idName].total),
    upItem: Math.floor((values[idName].up * 100) / values[idName].total),
  };

  /**
   * Comonent Template
   */
  return (
    <div data-testid="percentages" className="percentages">
      <div className="percentage-item" style={{ width: `${numbers.upItem}%` }}>
        <Thumb
          type="up"
          size="medium"
          showPercentage
          value={values[idName] && numbers.upItem}
          setNewValue={() => {
            const newValue = { ...values };
            newValue[idName].up += 1;
            newValue[idName].total += 1;

            setValues(newValue);
            setResults({ itemResults: newValue });
          }}
        />
      </div>
      <div className="percentage-item" style={{ width: `${numbers.downItem}%` }}>
        <Thumb
          type="down"
          size="medium"
          showPercentage
          value={values[idName] && numbers.downItem}
          setNewValue={() => {
            const newValue = { ...values };
            newValue[idName].down += 1;
            newValue[idName].total += 1;

            setValues(newValue);
            setResults({ itemResults: newValue });
          }}
        />
      </div>
    </div>
  );
};

/**
 * Prop Types Definition
 */
Percentages.propTypes = {
  setHighestValue: PropTypes.func,
  idName: PropTypes.string.isRequired,
};

/**
 * Default value of props non required
 */
Percentages.defaultProps = {
  setHighestValue: () => {},
};

Percentages.displayName = 'Percentages Component';

export default Percentages;
