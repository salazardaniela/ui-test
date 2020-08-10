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
const Percentages = ({
  setHighestValue, idName, showPercentage, size, setClicked,
}) => {
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

  const widthUpDynamic = showPercentage ? `${numbers.upItem}%` : '50%';
  const widthDownDynamic = showPercentage ? `${numbers.downItem}%` : '50%';

  /**
   * Comonent Template
   */
  return (
    <div data-testid="percentages" className="percentages">
      <div className="percentage-item" style={{ width: `${widthUpDynamic}` }}>
        <Thumb
          type="up"
          size={size}
          showPercentage={showPercentage}
          value={values[idName] && numbers.upItem}
          setNewValue={() => {
            const newValue = { ...values };
            newValue[idName].up += 1;
            newValue[idName].total += 1;

            setValues(newValue);
            setResults({ itemResults: newValue });
            setClicked('up');
          }}
        />
      </div>
      <div className="percentage-item" style={{ width: `${widthDownDynamic}` }}>
        <Thumb
          type="down"
          size={size}
          showPercentage={showPercentage}
          value={values[idName] && numbers.downItem}
          setNewValue={() => {
            const newValue = { ...values };
            newValue[idName].down += 1;
            newValue[idName].total += 1;

            setValues(newValue);
            setResults({ itemResults: newValue });
            setClicked('down');
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
  showPercentage: PropTypes.bool,
  size: PropTypes.string,
  setClicked: PropTypes.func,
};

/**
 * Default value of props non required
 */
Percentages.defaultProps = {
  setHighestValue: () => {},
  setClicked: () => {},
  showPercentage: true,
  size: 'medium',
};

Percentages.displayName = 'Percentages Component';

export default Percentages;
