import React from "react";
import authClient from "auth0-js";

import Body from "./Body"
import Footer from "./Home"

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
      {/* <Footer /> */}
    </div>
  );
}
export default App;
