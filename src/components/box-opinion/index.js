import React, { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import './box-opinion.scss';

/**
 * Components
 */
import Thumb from '../thumb';

/**
 * BoxOpinion
 * @param {Object} {
 *  externalLink: link to external website
 * }
 */
const BoxOpinion = ({ externalLink }) => {
  const [vote, setVote] = useState();

  return (
    <section data-testid="box-opinion" className="box-opinion">
      {isEmpty(vote) ? (
        <div>
          <div className="box-opinion-info">
            <h2>
              <span>What’s your opinion on</span>
              Pope Francis?
            </h2>
            <p className="box-opinion-txt">He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
            {externalLink && (<a href={externalLink}>More Information</a>)}
            <h3 className="box-opinion-veredict">What’s Your Verdict?</h3>
          </div>
          <Thumb type="up" size="big" setNewValue={(value) => setVote(value)} />
          <Thumb type="down" size="big" setNewValue={(value) => setVote(value)} />
        </div>
      ) : (
        <div>
          <div className="box-opinion-info">
            <h3 className="active-vote">
              Active Trial
              <span> Pope Francis</span>
            </h3>
            <div className="your-vote">
              <Thumb type={vote} size="big" />
              <p>
                Your vote
                <br />
                has been counted!
              </p>
            </div>
            <p className="box-opinion-txt">
              Feeling like you’re not done yet?
              Go ahead and share your thoughts,
              or tell us what do you think should be Pope Francis’ Karmic Consequence
            </p>
            <button className="write-btn" type="button">
              Write a Comment
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

/**
 * Prop Types Definition
 */
BoxOpinion.propTypes = {
  externalLink: PropTypes.string,
};

/**
 * default value definition
 */
BoxOpinion.defaultProps = {
  externalLink: 'http://wikipedia.com',
};

BoxOpinion.displayName = 'BoxOpinion Component';

export default BoxOpinion;
