import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import { LogIn } from "./pages/LogIn.js";
import { SignUp } from "./pages/SignUp.js";
import { Profile } from "./pages/Profile.js";

import { StarField } from "./pages/StarField.js";
import PrivateRoute from "./components/PrivateRoute.js";
import SelectZone from "./pages/SelectZone";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LogIn />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <PrivateRoute path="/starfield">
          <StarField />
        </PrivateRoute>

        <PrivateRoute exact path="/">
          <SelectZone />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
