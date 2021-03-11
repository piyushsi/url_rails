import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Report from "../components/Report";

export default (
  <Router>
    <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} />}
        />
        <Route
          exact
          path="/report"
          render={(props) => <Report {...props} />}
        />
    </Switch>
  </Router>
);