import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Login from './screens/Login'
  import Admin from './screens/Admin'
  import Cashier from './screens/Cashier'
  

  export default function MainRouter(Props) {
    return (
      <Router>
          <Switch>
            <Route path={"/"} exact>
              <Login/>
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/cashier">
              <Cashier />
            </Route>
          </Switch>
      </Router>
    );
  }