import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Packages from "../Pages/Packages";
import Amc from "../Pages/Amc";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile/Profile";
import MyOrders from "../Pages/Profile/MyOrders";
import OrderDetails from "../Pages/Profile/OrderDetails";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/packages" exact component={Packages} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/amc" exact component={Amc} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/profile/orders" exact component={MyOrders} />
        <PrivateRoute
          path="/profile/orders/:id"
          exact
          component={OrderDetails}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
