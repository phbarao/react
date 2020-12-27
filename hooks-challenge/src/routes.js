import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Counter from './pages/Counter';
import ChangeName from './pages/ChangeName';
import Receipt from './pages/Receipt';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/counter" component={Counter} />
        <Route path="/changename" component={ChangeName} />
        <Route path="/receipt" component={Receipt} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
