import React from "react";

//COMPONENTS
import { LandingPage } from "./components/LandingPage";
import { Library } from "./components/Library";
import Login from "./components/Login";

//REACT_ROUTER_DOM
import { Switch, Route } from "react-router-dom";

//STYLES
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/library">
          <Library />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
