import React from 'react';
import PropTypes from 'prop-types';
import './box-opinion.scss';

// Components
import Thumb from '../thumb';

const BoxOpinion = ({ externalLink }) => (
  <section data-testid="box-opinion" className="box-opinion">
    <div className="box-opinion-info">
      <h2>
        <span>What’s your opinion on</span>
        Pope Francis?
      </h2>
      <p className="box-opinion-txt">He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
      <a href={externalLink}>More Information</a>
      <h3 className="box-opinion-veredict">What’s Your Verdict?</h3>
    </div>
    <Thumb type="up" size="big" />
    <Thumb type="down" size="big" />
  </section>
);

BoxOpinion.propTypes = {
  externalLink: PropTypes.string,
};

BoxOpinion.defaultProps = {
  externalLink: 'http://wikipedia.com',
};

BoxOpinion.displayName = 'BoxOpinion Component';

export default BoxOpinion;
