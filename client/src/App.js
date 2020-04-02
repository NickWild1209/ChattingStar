import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import { LogIn } from "./pages/LogIn.js";
import { Home } from "./pages/Home.js";
import { PrivateRoute } from "./components/PrivateRoute.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LogIn />
          {/* <Home /> */}
        </Route>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
