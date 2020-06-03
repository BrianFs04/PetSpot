import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";

export const Jumbotron = () => (
  <div>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Hi!</h1>
        <p>Change a lifes Pet with a click</p>
      </Container>
    </Jumbo>
  </div>
);
