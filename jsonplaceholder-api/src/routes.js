import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Users from './pages/Users';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/users" component={Users} />
    </Switch>
  );
}

export default Routes;
