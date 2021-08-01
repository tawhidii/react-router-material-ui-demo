import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CountryDetails from "./components/ContryDetails/CountryDetails";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/country/:countryName">
              <CountryDetails/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

         
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
