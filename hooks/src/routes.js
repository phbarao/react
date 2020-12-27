import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Counter from './pages/Counter';
import ToDos from './pages/ToDos';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/counter" component={Counter} />
        <Route path="/todos" component={ToDos} />
      </Switch>
    </BrowserRouter>
  );
}
