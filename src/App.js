import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">PetSpot</Link>
        </header>
        <Router></Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
