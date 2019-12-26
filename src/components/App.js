import React from "react";
import authClient from "auth0-js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Body from "./Body"
import Callback from "./Callback"
import Test from "./test"

function App() {
  var auth0 = new authClient.WebAuth({
    domain: 'test-nik.auth0.com',
    clientID: 'sjC7MbqMIS7YDmHTntHDLsDpTPAZJEBW'
  });

  const login = () => {
    auth0.authorize({
      // audience: 'https://mystore.com/api/v2',
      scope: 'profile email',
      responseType: 'token',
      redirectUri: 'http://localhost:3002/callback'
    });
  }

  return (
    <div>
      <Body
        login={login}
      />
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Callback</Link>
            </li>
            <li>
             <Link to="/test">test</Link>
            </li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path="/">
              <Callback />
            </Route>
            <Route path="/Test">
              <Test />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
