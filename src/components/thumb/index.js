import React from 'react';
import PropTypes from 'prop-types';
import './thumb.scss';

const Thumb = ({ type, size }) => (
  <div data-testid="thumb" className={`thumb ${type} ${size}`}>
    <button className="icon"></button>
  </div>
);

Thumb.propTypes = {
  type: PropTypes.oneOf(['up', 'down']).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'big']).isRequired,
};

Thumb.displayName = 'Thumb Component';

export default Thumb;
