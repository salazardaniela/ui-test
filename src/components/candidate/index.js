import React from 'react';
import PropTypes from 'prop-types';
import './candidate.scss';

// Components
import Percentages from '../percentages';
import Thumb from '../thumb';

const Candidate = ({ item }) => (
  <div data-testid="candidate" className="candidate">
    <div className="candidate-image" style={{ backgroundImage: `url(${item.imgSource})` }} />
    <div className="candidate-information">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="candidate-ctas">
        <a href={item.url}>View Full Report</a>
        <span>
          {item.time}
          {' '}
          in
          {' '}
          {item.category}
        </span>
      </div>
      <div className="candidate-result">
        <Thumb size="small" type="down" />
      </div>
    </div>
    <Percentages />
  </div>
);

Candidate.propTypes = {
  item: PropTypes.shape({
    imgSource: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    time: PropTypes.string,
    category: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

Candidate.displayName = 'Candidate Component';

export default Candidate;
