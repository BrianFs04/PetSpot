import React, { Component } from "react";
import { render } from "react-dom";
//ort { Router, Link } from "@reach/router";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      //wrapper to not create a div
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route component={NoMatch} />
                </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
