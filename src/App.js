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
import { Login } from "./views/auth/login";
import { Signup } from "./views/auth/signup";
import Ask from "./ask_form";

//route management for app components
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
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/askform" component={Ask} />
              <Route path="/pet" component={Details} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

// Renders the above class inside the div which has the id root in index.html
render(<App />, document.getElementById("root"));
