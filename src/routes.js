import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import AddUser from "./component/AddUser";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/add" component={Home} />
      <Route exact path="/adduser" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
