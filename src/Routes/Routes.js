import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Homepage from "../Pages/Homepage";
import Packages from "../Pages/Packages";
import Amc from "../Pages/Amc";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import ServicesDetails from "../Pages/Services/ServicesDetails";
import Profile from "../Pages/Profile/Profile";
import Bookings from "../Pages/Profile/Bookings";
import BookingDetails from "../Pages/Profile/BookingDetails";
import PartnerWithUs from "../Pages/PartnerWithUs";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/services/:id" exact component={ServicesDetails} />
        <Route path="/packages" exact component={Packages} />
        <Route path="/partner-with-us" exact component={PartnerWithUs} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/amc" exact component={Amc} />

        <PrivateRoute path="/profile" exact component={Profile} />
        <PrivateRoute path="/profile/bookings" exact component={Bookings} />
        <PrivateRoute
          path="/profile/booking/:id"
          exact
          component={BookingDetails}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
