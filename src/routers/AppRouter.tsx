import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { CountryScreen } from '../components/Countries/CountryScreen';
import { HomeScreen } from '../components/Home/HomeScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/country/:Id">
            <CountryScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
