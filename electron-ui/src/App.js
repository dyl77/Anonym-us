import Login from "./Pages/LoginPage";
import Register from "./Pages/RegisterPage"
import Landing from "./Pages/LandingPage"

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  // return <Login />;
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/landing">
            <Landing />
          </Route>
          {/* Keep base route (/) at the bottom... Since routes render the first one that matches */}
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default App;