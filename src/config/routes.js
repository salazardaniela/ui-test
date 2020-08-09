import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Layout Pages
import Home from '../pages/Home';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;
