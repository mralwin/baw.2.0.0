import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Namer from "./Namer";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Namer} />
      <Route path="/workout/:workoutId" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
