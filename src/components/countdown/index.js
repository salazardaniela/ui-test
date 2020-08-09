import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './countdown.scss';

const calcDaysLeft = (futureDate) => {
  const dateTo = futureDate && futureDate.split('-');
  const difference = +new Date(dateTo[0], dateTo[1] - 1, dateTo[2], '05') - +new Date();
  const timeLeft = {
    Days: 0,
  };

  if (difference > 0) {
    timeLeft.Days = Math.floor(difference / (1000 * 60 * 60 * 24));
  }

  return timeLeft.Days;
}

const Countdown = ({ futureDate }) => {
  const [daysLeft, setDaysLeft] = useState(0);
  
  useEffect(() => {
    setDaysLeft(calcDaysLeft(futureDate))
  }, [futureDate])

  return (
    <div data-testid="countdown" className="countdown">
      <p className="comming-txt">CLOSING IN</p>
      <div className="comming-days">
        <span className="comming-txt-bold">{daysLeft}</span> days
      </div>
    </div>
  )
};

Countdown.propTypes = {
  futureDate: PropTypes.string.isRequired,
};

Countdown.displayName = 'Countdown Component';

export default Countdown;
