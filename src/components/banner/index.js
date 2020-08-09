import React from 'react';
import './banner.scss';

// Components
import Countdown from '../countdown';
import BoxOpinion from '../box-opinion';

const Banner = () => (
  <section data-testid="banner" className="banner">
    <Countdown futureDate="2020-09-01" />
    <BoxOpinion />
  </section>
);

Banner.displayName = 'Banner Component';

export default Banner;
