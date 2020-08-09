import React from 'react';
import './submit.scss';

const Submit = () => (
  <div data-testid="submit" className="submit">
    <h4>Is there anyone else you would want us to add?</h4>
    <button type="button">Submit a Name</button>
  </div>
);

Submit.displayName = 'Submit Component';

export default Submit;
