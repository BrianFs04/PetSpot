import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import AllPets from "./AllPets";
import Details from "./Details";
import Contact from "./Contact";
import AllShelters from "./AllShelters";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Dashborad, Dashboard } from "./Dashboard";
import {ProtectedRoute} from "./protectedRoute";

console.warn = () => {};
class App extends Component {
  render() {
    return (
      //wrapper to not create a div
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/pets">
                <AllPets />
              </Route>
              <Route path="/shelters">
                <AllShelters />
              </Route>
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <ProtectedRoute path="/dashboard" component={Dashboard}/>
              <Route component={Details} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
