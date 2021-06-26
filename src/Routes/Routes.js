import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Packages from "../Pages/Packages";
import Amc from "../Pages/Amc";
import Contact from "../Pages/Contact";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/packages" component={Packages} />
        <Route path="/contact" component={Contact} />
        <Route path="/amc" component={Amc} />
      </Switch>
    </Router>
  );
};

export default Routes;
