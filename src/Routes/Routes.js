import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </Router>
  );
};

export default Routes;
