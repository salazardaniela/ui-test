import React, { useState } from 'react';
import './info-box.scss';

const InfoBox = () => {
  const [showBox, setShowBox] = useState(true);

  return (
    <div>
      {showBox && (
        <div data-testid="info-box" className="info-box">
          <h3 className="info-title">
            Speak out. Be heard.
            <span>Be counted</span>
          </h3>
          <p className="info-txt">
            Rule of Thumb is a crowd sourced court of,
            public opinion where anyone and everyone can speak out and speak freely.
            It’s easy: You share your opinion, we analyze and put the data in a public report.
          </p>
          <button
            data-testid="button"
            className="info-box-close"
            onClick={() => setShowBox(false)}
            type="button"
          >
            close
          </button>
        </div>
      )}
    </div>
  );
};

InfoBox.displayName = 'InfoBox Component';

export default InfoBox;
