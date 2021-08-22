import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { CountryScreen } from "../components/Countries/CountryScreen";
import { HomeScreen } from "../components/Home/HomeScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route path='/country/' component={CountryScreen} />
        </Switch>
      </div>

      <Redirect to='/' />
    </Router>
  );
};
