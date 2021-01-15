import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import One from "./pages/One";
import Two from "./pages/Two";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/one" exact component={One} />
        <Route path="/two" exact component={Two} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
