import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './candidate.scss';

/**
 * Components
 * */
import Percentages from '../percentages';
import Thumb from '../thumb';

/**
 * Percentages Component
 * @param {Object} {} Component properties
 */
const Candidate = ({ item, fullVersion }) => {
  const [result, setResult] = useState('up');

  return (
    <div data-testid="candidate" className="candidate">
      <div className="candidate-image" style={{ backgroundImage: `url(${item.imgSource})` }} />
      <div className="candidate-information">
        <h3>{item.title}</h3>
        {fullVersion && (
          <p data-testid="candidate-description">{item.description}</p>
        )}
        <div className="candidate-ctas">
          <a href={item.url}>View Full Report</a>
          {fullVersion && (
            <span data-testid="candidate-category">
              {`${item.time} in ${item.category}`}
            </span>
          )}
        </div>
        <div className="candidate-result">
          <Thumb size="small" type={result} />
        </div>
      </div>
      <Percentages idName={item.id} setHighestValue={setResult} />
    </div>
  );
};

/**
 * Prop Types Definition
 */
Candidate.propTypes = {
  item: PropTypes.shape({
    imgSource: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    category: PropTypes.string,
    url: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  fullVersion: PropTypes.bool,
};

/**
 * Default value of props non required
 */
Candidate.defaultProps = {
  fullVersion: true,
};

Candidate.displayName = 'Candidate Component';

export default Candidate;
