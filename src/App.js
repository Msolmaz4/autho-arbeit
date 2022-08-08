import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

import "./App.css";
import LoginButton from "./Login";
import LogoutButton from "./logout";

function App() {
  const {isAuthenticated , user} =useAuth0()

  console.log(user)
  return (
    <div className="App">
      {isAuthenticated ? (
       <LogoutButton/>
      ) : (
         <LoginButton/>
      )}

      {
        isAuthenticated && 
        <div>
          <img src={user.picture} alt=''/>
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        </div>
      }
    </div>
  );
}

export default App;
