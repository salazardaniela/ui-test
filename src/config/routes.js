import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Layout Pages
import Home from '../pages/Home';
import Generic from '../pages/Generic';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:name" component={Generic} />
    </Switch>
  </Router>
);

export default Routes;
