import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Filme from '../pages/Filme'

const Routes = () => {
  
  return (
    <Router>
      <Switch>
        <Route path="/filme/:id" component={Filme} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
