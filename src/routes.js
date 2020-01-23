import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import AddUser from "./component/AddUser";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/add" component={AddUser} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
